# Copilot instructions for Wisey Pockets Website

This repo is a small static single-page site. Keep guidance tightly focused on the specific patterns used here.

Overview
- Project type: static HTML/CSS/JS single-page site (no build tooling).
- Key files: `index.html`, `script.js`, `styles.css`, and the `images/` folder.

Big picture
- UI-only site: all behaviour is in `script.js` (UI helpers and small interactions). There is no backend in this repo.
- The site uses a CSS theming approach driven by a `data-theme` attribute on `<html>` and CSS variables in `styles.css`.
- Security: `index.html` embeds a Content-Security-Policy meta tag that restricts external resources (see the `meta http-equiv="Content-Security-Policy"` block). Any change that requires external scripts or styles must update this CSP.

Where to look for common changes
- Theme logic & persistence: `script.js` — functions `loadTheme()` and `toggleTheme()` control `data-theme` and `localStorage`.
- Navigation/menu: `toggleMenu()` in `script.js` toggles `.nav-links.open` and updates `aria-expanded` on the menu button.
- Contact integrations: `openWhatsApp()` (change the phone number), `openEmail()` (change `mailto:`), and `openCall()` in `index.html`/`script.js` are the integration points.
- Images: all site images are in `images/` and referenced from `index.html` (e.g., `images/groceries.jpeg`).

Developer workflows (how to run/test locally)
- No build step. Open `index.html` directly in a browser for basic testing.
- For a local dev server (recommended for correct relative routing and CSP):

  - Python (cross-platform):

    ```bash
    cd "c:/Users/keamo/OneDrive/Desktop/Wisey Pockets Website 1"
    python -m http.server 8000
    ```

  - Or use VS Code Live Server extension — open the folder and click "Go Live".

Project-specific conventions
- Theme: use the `data-theme` attribute on the root element and CSS variables in `styles.css` (see `[data-theme="light"]` and `[data-theme="dark"]`). Prefer variables over inline colours.
- Buttons: use the `.cta` class and `.secondary` or `.full` modifiers for consistent sizing and colours.
- Responsive nav: the mobile menu is controlled by adding/removing the `.open` class on `.nav-links` (CSS hides/shows it in media queries).
- Accessibility: interactive elements include ARIA attributes (`aria-controls`, `aria-expanded`) and visible focus styles; preserve these when refactoring.

Integration notes & gotchas
- CSP in `index.html` blocks external `script-src` and `style-src`; adding third-party scripts will require updating that meta tag.
- External images are allowed only from `https://images.unsplash.com` per the CSP image-src; adding other image CDNs requires updating CSP.
- WhatsApp URL is a placeholder in `script.js` (`https://wa.me/27XXXXXXXXX`) — update before publishing.

Examples (quick edits)
- Change the WhatsApp number: edit `openWhatsApp()` in `script.js` to use the desired `wa.me` number.
- Add a new product card: copy an existing `.card` block in `index.html` and place a new image in `images/`.

When uncertain, prefer minimal changes and manual verification in browser: this repo has no automated tests or build pipeline.

If you make any change that modifies resource origins (scripts, styles, images, or external APIs), update the CSP meta tag in `index.html` accordingly and re-check the site in a browser.

If anything here is unclear or you want more detail (examples, tests, or a CI workflow), tell me which sections to expand.
