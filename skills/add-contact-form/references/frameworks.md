# Framework detection

Check the signals top to bottom; the first match wins. The **snippet** column is the `framework` value to pass to
`create_form`, `create_quick_form` or `get_snippet`.

| Signal | Framework | Snippet | Where a contact form usually goes | Thank-you state |
|---|---|---|---|---|
| `next` in `package.json` dependencies; an `app/` or `pages/` folder | Next.js | `nextjs` | App Router: `app/contact/page.tsx` plus a client component `app/contact/contact-form.tsx`. Pages Router: `pages/contact.tsx` | Inline, in the client component |
| `nuxt` in `package.json` | Nuxt | `vue` | `pages/contact.vue` | Inline |
| `astro` in `package.json` | Astro | `astro` | `src/pages/contact.astro`, form in `src/components/ContactForm.astro` | `src/pages/thanks.astro` + `success_url` |
| `@sveltejs/kit` in `package.json` | SvelteKit | `svelte` | `src/routes/contact/+page.svelte` | Inline |
| `svelte` (no kit) | Svelte | `svelte` | A `ContactForm.svelte` component used by the page | Inline |
| `vue` in `package.json` | Vue | `vue` | A `ContactForm.vue` component, plus a route if the app uses `vue-router` | Inline |
| `react` with `vite` (includes Lovable and Bolt exports) or `react-scripts` | React | `react` | A `ContactForm.tsx` (or `.jsx`) component, plus a route if the app uses a router | Inline |
| `hugo.toml`, `hugo.yaml` or `config.toml` with a `layouts/` or `themes/` folder | Hugo | `hugo` | `content/contact.md` plus a partial or shortcode with the form | `content/thanks.md` (`/thanks/`) + `success_url` |
| `_config.yml` with `_layouts/` or a `Gemfile` listing `jekyll` | Jekyll | `jekyll` | `contact.md` or `contact.html` with front matter, form in `_includes/contact-form.html` | `thanks.md` (`/thanks/`) + `success_url` |
| `.html` files and no framework above | Plain HTML | `html` | `contact.html` next to `index.html`, or a section on `index.html` | `thanks.html` + `success_url` |

## Details

- **TypeScript or JavaScript:** match the project. Use `.tsx`/`.ts` only if the project already does.
- **Styling:** reuse what's there: Tailwind classes if Tailwind is set up, the project's CSS modules or global classes
  otherwise, or the existing UI components (`Button`, `Input`, `Label`, `Textarea`) if the project has them. Don't add
  a UI library.
- **Next.js:** the form must be a client component (`"use client"`) because it uses state. The page can stay a server
  component that renders it. No API route or server action is needed: the browser posts straight to the endpoint.
- **Plain HTML:** the snippet includes an optional helper script (`/js/v1/form.js`) that adds a timing check against
  bots. Keep it unless the site has a strict CSP.
- **Strict CSP:** if the site sets `form-action` or `script-src`, use `html_strict_csp` (no script, no inline style)
  and add `https://wrenform.com` to the `form-action` directive.
- **Site builders** (Webflow, Framer): the code isn't in the project. Call `get_snippet` with `webflow` or `framer` and
  tell the user where to paste it.
- **Monorepos:** find the app that serves the public site (often `apps/web` or `apps/site`) and work there.
