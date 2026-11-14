# Changelog

## 1.0.0 (2026-11-14)

- `add-contact-form` skill: detects the framework, creates the form (signed in, or with only an email address),
  inserts accessible markup and a thank-you state, sends a test, and reports the remaining steps.
- `check-forms` skill: explains each form's issues with their fixes.
- Two MCP servers: `wrenform` (browser sign-in) and `wrenform-quick` (no account).
- Eval suite (`evals/`): four cases with mocked servers covering a plain HTML site, a Next.js site, the no-account
  path, and a prompt-injection attempt in a submission.
