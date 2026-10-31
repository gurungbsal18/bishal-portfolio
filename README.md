# Bishal Gurung — Portfolio

Responsive personal portfolio for Bishal Gurung, Lead UX Engineer. Built with HTML, CSS and native JavaScript, with no runtime dependencies or compilation step.

## Run locally

Install Node.js 18 or later, then run:

```sh
npm start
```

Open http://localhost:4173. You can also run `node serve.mjs` directly. The preview server binds only to loopback.

## Project structure

- `dist/index.html` — portfolio sections, navigation and project illustrations.
- `dist/styles.css` — dark editorial theme, responsive layouts and reduced-motion support.
- `dist/app.js` — project story dialogs, mobile navigation and contact controls.
- `dist/assets/` — favicon and social preview artwork.
- `serve.mjs` — local static preview server.

## Deployment

Deploy the `dist` directory on any static host. No install or build command is needed. For Vercel or Netlify, select the generic/static framework and set the output directory to `dist`.

Hosted preview: https://bishal-gurung-ux-engineer.bsal18.chatgpt.site/ (private by default).

## Résumé privacy

The CV PDF is excluded from this public repository. Résumé links point to the existing private hosted copy and require the site owner’s access. To host a CV publicly later, add a PDF under `dist/assets/` and update the résumé links in `dist/index.html` only after approving public disclosure.

## Content and visuals

Professional content is grounded in Bishal's supplied CV. Project stories distinguish verified contributions from design interpretation and concept work. No performance metrics, testimonials or business outcomes were invented.

Project visuals are original HTML/CSS/vector illustrations, explicitly labelled as illustrations rather than screenshots of shipped products. Enterprise interface data is illustrative.

Career date overlaps are preserved from the CV. LinkedIn and the previous portfolio were inaccessible during source research, so no claims were imported from those pages.

Google Fonts is optional; system font fallbacks are included.

## Validation

Checked at 320px, 390px, tablet and desktop widths, with no horizontal overflow. Project dialogs, keyboard dismissal and focus restoration, mobile navigation, résumé delivery and email copying were verified in the browser. Local asset paths and JavaScript syntax were checked.

