**My Portfolio**

Static HTML and CSS. Open `index.html` locally or publish the repository root (same layout as the old Vite `public/` output: assets next to the HTML files).

**Layout**

- `css/` — tokens, base styles, layout, and per-component stylesheets (`css/main.css` imports everything).
- `snippets/` — copy-paste HTML fragments when you add pages (head, theme toggle, footer).
- `index.html`, `projects.html`, `experience.html`, `about.html`, `gallery.html`, and `404.html` — site pages.
- Root-level assets: `Hanish.pdf`, `thinker.png`, `favicon.ico`, `cursors/`, `CNAME`.

**Theme**

Dark mode uses a checkbox and `html:has(#theme-dark:checked)` (no JavaScript). The setting does not carry between separate HTML files; inner pages include a corner toggle so each page can switch independently.
