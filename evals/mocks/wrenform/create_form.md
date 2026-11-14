---
expect:
  name: string
---
Created form "{{input.name}}" (k7Q2xw9Pz4mB). Its endpoint is https://wrenform.com/f/k7Q2xw9Pz4mB.

{
  "form": {
    "id": "k7Q2xw9Pz4mB",
    "name": "{{input.name}}",
    "status": "active",
    "endpoint": "https://wrenform.com/f/k7Q2xw9Pz4mB",
    "lastSubmissionAt": null,
    "inboxThisPeriod": 0,
    "createdVia": "mcp",
    "notifyByEmail": true,
    "allowedOrigins": [],
    "successUrl": null,
    "subjectTemplate": null,
    "spamSensitivity": "normal",
    "turnstileSiteKey": null,
    "turnstileSecretKeySet": false,
    "retentionDays": 90,
    "recipients": [
      {
        "email": "e2e@example.com",
        "status": "verified",
        "active": true
      }
    ],
    "createdAt": "2026-11-14T12:00:00.000Z"
  },
  "snippet": {{file:fixtures/snippet-{input.framework}.json}},
  "next_steps": [
    "Insert the snippet into the site, then call send_test_submission and get_form_status with form_id k7Q2xw9Pz4mB.",
    "Set allowed_origins with update_form to the site's origin (e.g. https://example.com) before going live."
  ]
}
