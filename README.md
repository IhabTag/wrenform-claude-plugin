# Wrenform for Claude Code

Add a working contact form to any website in one command. Ask Claude Code for a contact form and the plugin:

1. detects your framework (plain HTML, Next.js, Astro, React, Vue, Svelte, Hugo, Jekyll and more);
2. creates the form on [Wrenform](https://wrenform.com), a form backend that emails you each submission and filters
   spam;
3. adds accessible markup in your site's own style, with a thank-you state;
4. sends a test message;
5. tells you what's left: confirm the email, then deploy.

There's no mail provider to set up, no server code, and no API key in your site's code.

## Install

In Claude Code:

```text
/plugin marketplace add IhabTag/wrenform-claude-plugin
/plugin install wrenform@wrenform
```

From a shell:

```sh
claude plugin marketplace add IhabTag/wrenform-claude-plugin
claude plugin install wrenform@wrenform
```

## Use

```text
/wrenform:add-contact-form
/wrenform:add-contact-form contact page
```

Or just ask: "add a contact form to this site". Claude asks at most a question or two: where the form goes, and
which address should get the messages.

To check your forms later, for example when emails don't arrive:

```text
/wrenform:check-forms
```

## Sign in, or no account at all

The plugin adds two MCP servers:

| Server | Sign-in | What it's for |
|---|---|---|
| `wrenform` | Your Wrenform account, in the browser | Creating and managing forms, test messages, checking health, reading submissions |
| `wrenform-quick` | None | Creating a form with only an email address |

- **With an account (recommended, free):** the first time, run `/mcp`, choose **wrenform**, then **Authenticate**.
  Sign in with your email, and approve what Claude Code may do. You can disconnect it any time in your
  Wrenform account settings.
- **Without an account:** the plugin creates the form with just your email address. Wrenform emails that address
  once. Nothing is forwarded until you click **Confirm** in that email; messages sent before then are held and
  delivered once you confirm. If nobody confirms within 7 days, the form and its held messages are deleted.

## What it changes in your project

Only what the form needs: the form component or markup, its page (with a navigation link if the page is new), a
thank-you page for sites without JavaScript, and a Content Security Policy entry if your site has one. It doesn't add
dependencies, and it never commits, pushes or deploys.

## What the plugin sends, and where

The plugin has no code of its own: two skills (instructions for Claude) and two remote MCP servers, both at
`https://wrenform.com`. It sends nothing anywhere else.

- **To create a form:** the form's name, the email address that should receive messages, your site's address if
  known, and the framework name.
- **To manage forms:** the settings you ask Claude to change, and requests to read your forms, their health and
  their recent messages.
- **Sign-in** happens in your browser on wrenform.com. Claude Code stores the resulting token; the plugin never sees
  your password.

The plugin itself stores nothing. Wrenform keeps your forms and messages as its privacy policy describes.

## Privacy and safety

- Your site's code only ever holds the form's public endpoint URL, never a key or secret.
- Form messages are typed by your visitors. The plugin treats them as data and never follows instructions found
  inside them.
- Wrenform's [privacy policy](https://wrenform.com/legal/privacy) and [terms](https://wrenform.com/legal/terms) apply.

## Help

Docs: [wrenform.com/docs](https://wrenform.com/docs). Questions: hello [at] wrenform.com.

## License

MIT
