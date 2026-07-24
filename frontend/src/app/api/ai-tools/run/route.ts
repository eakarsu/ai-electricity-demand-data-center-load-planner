import { NextRequest, NextResponse } from 'next/server';
import { aiTools, getAITool } from '@/lib/aiTools';
import { appendAuditEntry } from '@/lib/auditStore';
import { requireSession } from '@/lib/requestAuth';
import { getPostgresPool } from '@/lib/postgres';

async function callConfiguredAI(system: string, prompt: string) {
  const apiKey = process.env.OPENROUTER_API_KEY;
  const baseUrl = process.env.OPENROUTER_BASE_URL;
  const model = process.env.OPENROUTER_MODEL;
  if (!apiKey || !model || baseUrl !== 'https://openrouter.ai/api/v1') throw new Error('OpenRouter is not configured');
  const response = await fetch(baseUrl + '/chat/completions', {
    method: 'POST',
    headers: {
      Authorization: 'Bearer ' + apiKey,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      model,
      messages: [
        { role: 'system', content: system },
        { role: 'user', content: prompt },
      ],
      temperature: 0.2,
    }),
  });

  if (!response.ok) {
    throw new Error('AI provider returned ' + response.status);
  }

  const payload = await response.json();
  const content = String(payload?.choices?.[0]?.message?.content || '').trim();
  if (!content) throw new Error('AI provider returned empty content');
  return { content, model };
}

export async function GET(request: NextRequest) {
  const session = await requireSession(request);
  if (session instanceof NextResponse) return session;
  return NextResponse.json({ tools: aiTools });
}

export async function POST(request: NextRequest) {
  const session = await requireSession(request);
  if (session instanceof NextResponse) return session;

  const body = await request.json().catch(() => null) as { toolId?: string; input?: string } | null;
  const tool = getAITool(body?.toolId || 'suite-assistant');
  const input = body?.input?.trim() || tool.defaultPrompt;
  const system = 'You are ' + tool.title + '. Stay inside this suite workflow. Return concise operational guidance with risks, next actions, and audit notes.';

  try {
    const aiResponse = await callConfiguredAI(system, input);
    const stored = await getPostgresPool().query<{ id: string }>(
      `INSERT INTO runtime_ai_results(user_identifier, tool_id, prompt, content, provider, model)
       VALUES($1, $2, $3, $4, 'openrouter', $5) RETURNING id::text`,
      [session.email, tool.id, input, aiResponse.content, aiResponse.model],
    );
    await appendAuditEntry('AI Tools', ((session.firstName + ' ' + session.lastName).trim() || session.email) + ' ran ' + tool.title);
    return NextResponse.json({
      tool,
      input,
      response: aiResponse.content,
      provider: 'openrouter',
      model: aiResponse.model,
      persistedId: stored.rows[0].id,
      createdAt: new Date().toISOString(),
    });
  } catch (error) {
    console.error('OpenRouter request failed', error);
    return NextResponse.json({ error: 'AI provider request failed' }, { status: 502 });
  }
}
