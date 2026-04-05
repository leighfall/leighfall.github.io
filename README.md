# leighfall.github.io

My personal portfolio site, built with Vue 3 and hosted on GitHub Pages at [www.autumnhenderson.com](https://www.autumnhenderson.com).

## Tech Stack

- **Vue 3** + **TypeScript** — component framework
- **Vite** — build tool
- **Vue Router** — client-side routing
- **Less** — styles
- **Marked** — markdown rendering for case studies
- **Storybook** — component development

## Getting Started

```sh
npm install
npm run dev
```

## Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start dev server |
| `npm run build` | Type-check and build for production |
| `npm run preview` | Preview the production build |
| `npm run test:unit` | Run unit tests with Vitest |
| `npm run lint` | Lint and auto-fix |
| `npm run format` | Format with Prettier |
| `npm run storybook` | Launch Storybook |

## Deployment

The `build` script outputs to `/docs`, which GitHub Pages serves from the `main` branch. The CNAME file is written automatically during build.
