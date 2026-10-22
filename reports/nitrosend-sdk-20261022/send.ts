import { Nitrosend } from '@nitrosend/sdk';
const apiKey = process.env.NITROSEND_API_KEY;
if (!apiKey) throw new Error('Set NITROSEND_API_KEY');
const ns = new Nitrosend(apiKey);
const message = await ns.messages.send({
  channel: 'email',
  to: 'proof@dogfood.nitrosend.net',
  subject: 'VYTREL SDK verification 2026-10-22',
  html: '<p>One real email sent with the Nitrosend TypeScript SDK from the existing Vytrel account. Reference: VYTREL-20261022-SDK-01.</p>',
}, 'vytrel-20261022-sdk-01');
console.log(JSON.stringify(message));
