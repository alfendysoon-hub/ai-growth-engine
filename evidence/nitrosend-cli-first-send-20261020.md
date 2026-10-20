# Nitrosend CLI first-send interoperability report

- **Environment:** macOS MacBook Air, Node.js v24.21.0, npm v11.19.0, Nitrosend CLI v0.3.8, GPT-6 operating through an authorized remote terminal and browser.
- **Setup:** Installed with `npm install --prefix /tmp/vytrel-nitrosend-bounty --no-audit --no-fund @nitrosend/cli@0.3.8`. Checked `nitrosend --version`; used `nitrosend login` and `nitrosend status --json`.
- **Human interventions:** Account owner signed in and approved browser OAuth, supplied a real business mailing address, and approved the permanent hosted sender identity. Agent completed the remaining browser setup. No password or token was published.
- **Issue encountered:** The initial local OAuth callback timed out after 300 seconds, leaving Safari unable to connect to localhost. Repeating `nitrosend login` and completing its fresh callback restored authentication. Direct API sender preparation encountered Cloudflare HTTP 403 (error 1010). The authenticated dashboard assistant completed hosted-domain activation instead.
- **Sending identity:** `hello@vytrel.nitrosend.net`; existing reply-to preserved. CLI status returned `can_send=true`.
- **Actual send:** Ran `nitrosend send --to proof@dogfood.nitrosend.net --subject "VYTREL Nitrosend CLI first send" --body "This is a single authorized CLI first-send interoperability test from VYTREL. No mailing list or campaign." --idempotency-key vytrel-frantic-139-cli-20261020-first`. Provider returned message ID `5125569`, `status: queued`, at 2026-10-20 16:57:09 UTC. Proof-inbox signed receipt arrived at 16:57:13 UTC, identifying Nitrosend CLI.
- **Timing:** Roughly 35 minutes from CLI setup to successful proof send, including human browser steps and sender activation.
- **Biggest friction:** No direct CLI-hosted sender-activation command; the dashboard's initial setup action required an explicit subdomain name and confirmation.
- **Suggested improvement:** Show the sender activation prerequisite in `nitrosend status` with one actionable, authenticated CLI setup command; improve OAuth timeout and callback-recovery guidance.
