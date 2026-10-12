import { requestWorkbenchAI, persistWorkbenchResult, workbenchError } from '@/lib/WorkbenchAIRuntime';
import { NextRequest, NextResponse } from 'next/server';
import { aiTools, getAITool } from '@/lib/aiTools';
import { appendAuditEntry } from '@/lib/auditStore';
import { requireSession } from '@/lib/requestAuth';
import { getPostgresPool } from '@/lib/postgres';

async function callConfiguredAI(system: string, prompt: string, signal: AbortSignal) { return requestWorkbenchAI(system, prompt, signal); }

export async function GET(request: NextRequest) {
  const session = await requireSession(request);
  if (session instanceof NextResponse) return session;

  const saved = await getPostgresPool().query<{
    id: string;
    tool_id: string;
    prompt: string;
    content: string;
    provider: string;
    model: string;
    created_at: Date;
  }>(
    `SELECT id::text, tool_id, prompt, content, provider, model, created_at
     FROM runtime_ai_results
     WHERE user_identifier = $1
     ORDER BY created_at DESC
     LIMIT 12`,
    [session.email],
  );

  return NextResponse.json({
    tools: aiTools,
    results: saved.rows.map((row) => ({
      tool: getAITool(row.tool_id),
      input: row.prompt,
      response: row.content,
      provider: row.provider,
      model: row.model,
      persistedId: row.id,
      createdAt: row.created_at.toISOString(),
    })),
  });
}

export async function POST(request: NextRequest) {
  const session = await requireSession(request);
  if (session instanceof NextResponse) return session;

  const body = await request.json().catch(() => null) as { toolId?: string; input?: string } | null;
  const tool = getAITool(body?.toolId || 'suite-assistant');
  const input = body?.input?.trim() || tool.defaultPrompt;
  const system = 'You are ' + tool.title + '. Stay inside this suite workflow. Return concise operational guidance with risks, next actions, and audit notes.';

  try {
    const aiResponse = await callConfiguredAI(system, input, request.signal);
    const stored = await persistWorkbenchResult(request.signal, getPostgresPool(), client => client.query<{ id: string }>(`INSERT INTO runtime_ai_results(user_identifier, tool_id, prompt, content, provider, model)
       VALUES($1, $2, $3, $4, 'openrouter', $5) RETURNING id::text`, [session.email, tool.id, input, aiResponse.content, aiResponse.model]));
    request.signal.throwIfAborted();
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
  } catch (error) { const failure = workbenchError(error, request.signal); return NextResponse.json({error: failure.error}, {status: failure.status}); }
}
