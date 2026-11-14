---
type: llm
focus:
  source: file
  path: app/contact/contact-form.tsx
---

This should be a React client component for a contact form.

PASS if all of these hold: it starts with "use client"; the form posts to https://wrenform.com/f/k7Q2xw9Pz4mB with fetch; success and error messages are shown inline inside an element with role="status" or aria-live; every visible field has a label tied to it; a hidden input named _honey is present. FAIL if any is missing.
