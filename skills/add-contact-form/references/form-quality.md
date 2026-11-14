# Form quality rules

Every form this plugin adds must meet these rules. Check them before reporting.

## Accessibility

- Every field has a visible `<label>`, tied to its input (`for`/`id`, or the input inside the label). Placeholders
  are not labels.
- Inputs use the right type and hints: `type="email"` with `autocomplete="email"`, `autocomplete="name"` on the name
  field, `required` on required fields.
- Focus is visible on every field and the button. Don't remove outlines without a replacement.
- Text and borders have enough contrast against the background (WCAG AA: 4.5:1 for text).
- The submit button is a real `<button type="submit">` with a clear label ("Send", "Send message").
- JavaScript forms announce progress, success and errors in a live region:
  `<p role="status" aria-live="polite">…</p>`. Disable the button while sending.
- On error, keep what the visitor typed, and say what to do: "Something went wrong. Please try again, or email us."

## Spam protection

- Keep the hidden `_honey` field from the snippet exactly as it is: same name, still hidden, `tabindex="-1"`,
  `autocomplete="off"`. Bots fill it; people don't.
- Don't add a CAPTCHA unless the user asks for one.

## Fields

- Default fields: `name`, `email`, `message`. Add others only if the user asks.
- Field names become the labels in the notification email, so use plain words (`company`, not `fld_3`).
- Use `email` as the field name for the visitor's address: it becomes the reply-to of the notification.

## Security and privacy

- No API key, token or secret in the code. The form's endpoint URL is public and safe to commit.
- Don't collect passwords, payment card numbers or government ID numbers through the form.
- If the site has a privacy policy page, mention to the user that it should say the form's messages are processed by
  Wrenform.

## Scope of the change

- No new dependencies.
- Change only what the form needs: the form, its page or section, a navigation link if you added a page, the thanks
  page if needed, and a CSP `form-action` entry if needed.
