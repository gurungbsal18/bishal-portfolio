# Bishal Gurung — Next.js Portfolio

Responsive personal portfolio built with **Next.js 16 App Router, React 19 and TypeScript**. The original dark editorial design, four project stories, career timeline, skills and résumé are preserved as reusable React components.

## Requirements

- Node.js 20.9 or later (Node.js 24 recommended)
- npm

## Develop

```sh
npm ci
npm run dev
```

Open http://localhost:3000. Next.js provides Fast Refresh during development.

## Check and build

```sh
npm run check
npm run build
npm start
```

The production build statically renders the portfolio and exports it to `out/`. `npm start` serves that production output at http://localhost:4173; run the build first. No backend service, credentials or database is required.

## Project structure

```text
app/
  layout.tsx              Page metadata, document layout and global styles
  page.tsx                Server-rendered portfolio sections
  globals.css             Responsive theme and reduced-motion support
  icon.svg                App Router favicon
components/
  Header.tsx              Accessible mobile navigation
  SelectedWork.tsx        Project cards and native modal dialog
  ProjectArtwork.tsx      Reusable React interface illustrations
  CopyEmail.tsx           Clipboard interaction and feedback
data/projects.ts          Typed project content and contributions
public/assets/            Approved public CV and visual assets
scripts/serve-export.mjs   Local production export server
next.config.ts            Next.js static export configuration
```

The main page is a Server Component. Client Components handle navigation, project exploration and copying the email address. Project stories use React rendering and state, with native modal focus management, Escape dismissal, focus restoration and scroll locking. Illustrations use unique SVG IDs for card and dialog instances.

## Deploy

**Vercel:** import this repository, select the **Next.js** framework preset, keep the root directory at the repository root, and use `npm run build`. Remove any old override that points to `dist/`; this project exports to `out/`.

**Other static hosts:** run `npm ci && npm run build`, then publish `out/`.

Hosted preview: https://bishal-gurung-ux-engineer.bsal18.chatgpt.site/ (private by default). If using a different domain, update `metadataBase` in `app/layout.tsx` for social metadata URLs.

## Content and résumé

Professional content is grounded in Bishal's supplied CV. No performance metrics, testimonials or business outcomes were invented. Career date overlaps are preserved. LinkedIn and the previous portfolio were inaccessible during the original research.

The CV is included at `public/assets/Bishal_Gurung_CV.pdf` with Bishal's approval for public publication. Résumé links use `/assets/Bishal_Gurung_CV.pdf`.

Project visuals are original React/CSS/vector illustrations, explicitly labelled as illustrations rather than screenshots of shipped products. Enterprise data is illustrative. Google Fonts is optional; system font fallbacks are included.
