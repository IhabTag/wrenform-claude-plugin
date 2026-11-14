---
type: llm
focus: { source: file, path: contact.html }
---

The file is a contact page for a pottery site.

PASS if all of these hold:
- the form posts (method POST) to https://wrenform.com/f/k7Q2xw9Pz4mB;
- every visible field (name, email, message) has a visible <label> tied to it (for/id, or the input inside the label);
- the email field has type="email";
- a hidden text input named _honey is present and hidden;
- the page reuses the site's header/navigation and styles.css;
- there is no API key, token or secret.
FAIL if any of these is missing, or if the file isn't a contact page.
