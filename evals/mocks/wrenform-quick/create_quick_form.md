---
expect:
  email: string
---
Created a form (k7Q2xw9Pz4mB). Its endpoint is https://wrenform.com/f/k7Q2xw9Pz4mB. It needs the recipient to confirm by email.

{
  "id": "k7Q2xw9Pz4mB",
  "endpoint": "https://wrenform.com/f/k7Q2xw9Pz4mB",
  "status": "pending_confirmation",
  "existing": false,
  "expires_at": "2026-11-21T12:00:00.000Z",
  "snippet": {{file:fixtures/snippet-{input.framework}.json}},
  "next_steps": [
    "Tell the user to check {{input.email}} for an email from Wrenform and click Confirm. Nothing is forwarded until then, and the form is deleted if nobody confirms within 7 days.",
    "Insert the snippet into the site. Messages sent before confirmation are held and delivered once confirmed.",
    "Call check_quick_form with form_id k7Q2xw9Pz4mB to see whether it's confirmed. To see submissions or change settings, the user signs in at https://wrenform.com/sign-in with that address."
  ]
}
