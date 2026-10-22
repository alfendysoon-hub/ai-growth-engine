# Nitrosend SDK send — 2026-10-22

- Environment: macOS, Node.js 24.21.0, npm 11.19.0; @nitrosend/sdk 0.11.7, TypeScript 7.0.2, @types/node 26.6.5.
- Install: `npm install --save-exact --ignore-scripts @nitrosend/sdk@0.11.7 typescript@7.0.2 @types/node@26.6.5`, in an ES-module package. The adjacent package.json and tsconfig.json reproduce the configuration.
- Compile: `./node_modules/.bin/tsc --strict --noEmit` passed. Published send.ts is the exact 11-line executed script. Run command, with the private credential loaded into the environment before importing the script:

```sh
node --input-type=module <<'JS'
import fs from 'node:fs';
process.env.NITROSEND_API_KEY=fs.readFileSync('/tmp/vytrel-sdk-20261022/key.private','utf8').trim();
try {await import('./send.ts')} catch(e){console.log(JSON.stringify({error:e.name,message:e.message,status:e.status}));process.exitCode=1}
JS
```

- Timeline: installed SDK directory created at 15:47:57.863Z; message 5169062 queued at 16:01:34.789Z; authenticated message lookup returned sent_at 16:01:37Z. Nitrosend's sdk.send receipt occurred at 16:01:37.921Z: approximately 13.67 minutes from installation to send.
- Slowest step: locating/confirming an API key in the existing account and completing owner approval. Sender setup already existed; no second account was created.
- Defect/doc gap: none found in this run. Tried exact-version installation, strict compilation, real SDK send, and authenticated message-status lookup. Checked the SDK README and https://docs.nitrosend.com/integrations/rest-api; the string idempotency argument and queue-versus-delivery distinction agree.
- Suggested change: add an optional SDK quickstart command that prints queued message ID and then polls its delivery status, reducing manual lookup after messages.send returns.
- Receipt: https://runx.ai/r/6f2d83dc5c63a356e914e9ece213c1704d2bed4af8e724f2917549c856a4b38e
