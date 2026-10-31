# Bishal Gurung — Portfolio

A responsive, buildless portfolio with native JavaScript, CSS and HTML. No dependency installation or compilation is needed. The deployed website is served from `dist/`.

## Local preview

Run `node serve.mjs`, then open http://localhost:4173. The server binds only to loopback. To deploy with another static host, use `dist` as the output directory with no build command.

## Content

Content is grounded in the original Bishal_Gurung_CV.pdf attachment, recovered from the referenced conversation. The CV is included as a downloadable asset. LinkedIn returned an automated-access error; the previous portfolio URL and the portfolio listed in the CV were inaccessible during research. No claims were imported from inaccessible pages.

Project visuals are original HTML/CSS/vector illustrations, explicitly labelled as illustrations. Case studies distinguish verified contributions from design interpretation, concept status and unavailable outcomes. Enterprise visuals use illustrative data and no private client identities. Career date overlaps are preserved from the CV.

Project stories are maintained in `dist/app.js`. Main sections are in `dist/index.html`, with responsive styles in `dist/styles.css`. Motion respects `prefers-reduced-motion`. Google Fonts is optional; local system fonts provide a fallback.

## Hosting

Sites identity is retained in `.openai/hosting.json`. New Sites are private by default; changing the audience is a separate action. The same `dist` folder can be deployed publicly on Vercel, Netlify or another static host.
