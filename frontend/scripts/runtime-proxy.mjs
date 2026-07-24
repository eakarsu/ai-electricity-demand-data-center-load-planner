import http from 'node:http';

const targetPort = Number(process.env.RUNTIME_TARGET_PORT);
const proxyPort = Number(process.env.RUNTIME_PROXY_PORT);
if (!Number.isInteger(targetPort) || !Number.isInteger(proxyPort) || targetPort === proxyPort) {
  throw new Error('Distinct RUNTIME_TARGET_PORT and RUNTIME_PROXY_PORT values are required');
}

const server = http.createServer((request, response) => {
  const headers = { ...request.headers, host: `127.0.0.1:${targetPort}` };
  const upstream = http.request({ hostname: '127.0.0.1', port: targetPort, path: request.url, method: request.method, headers }, (upstreamResponse) => {
    response.writeHead(upstreamResponse.statusCode || 502, upstreamResponse.headers);
    upstreamResponse.pipe(response);
  });
  upstream.on('error', () => {
    if (!response.headersSent) response.writeHead(502, { 'content-type': 'application/json' });
    response.end(JSON.stringify({ error: 'application server unavailable' }));
  });
  request.pipe(upstream);
});

server.listen(proxyPort, '127.0.0.1', () => console.log(`UI proxy listening on ${proxyPort} -> ${targetPort}`));
for (const signal of ['SIGINT', 'SIGTERM']) process.on(signal, () => server.close(() => process.exit(0)));
