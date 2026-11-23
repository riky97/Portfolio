# Portfolio — Riccardo Ingrasciotta

Single-page React portfolio. Vite 8, React 19, TypeScript 6, Tailwind 4 + shadcn/ui, anime.js 4, Vitest. Site copy is English; talk to Riccardo in Italian.

## Done means

`npm test && npm run build && npm run lint` all green (`build` runs `tsc -b`). UI changes get a look in a real browser (`npm run dev`) before you report them.

## Content

- Copy and data live in `src/data/` (`cv.ts`, `projects.ts`); components render from there.
- New project: add an entry to `projects.ts` and put the image in `public/projects/`, referenced as `/projects/<file>`. `projects.test.ts` fails on a missing image.
- `public/cv.pdf` is the CV download target.

## Design

Signature: a telemetry / instrument-panel look, a nod to the ESA Grafana monitoring work. Deep navy ink, teal *signal* for data and links, amber *action* reserved for calls to action.

- Colors, fonts, spacing and radii come from `src/styles/tokens.css`; components reference them as `var(--…)`. Change a color there only.
- Our own components: one colocated CSS file each, class names prefixed by the component (`timeline__entry`). Tailwind owns generic class names such as `container`, so ours carry a prefix too (`site-container`).
- Text on dark holds WCAG AA (4.5:1); `--color-text-muted` was raised for this.

## shadcn/ui

- Style `radix-vega`, alias `@/` → `src/`, components in `src/components/ui/`. They are ours to edit: `button.tsx` is tuned to the site (amber default, teal-ring outline, small lift on hover).
- Add components with `npx shadcn@latest add <name>` or through the `shadcn` MCP server (`.mcp.json`; Claude Code asks for approval once).
- The theme variables in `src/index.css` point at `tokens.css`, which stays the one source of color. The site is dark-only: `<html class="dark">` switches on `dark:` variants, and `:root` holds the single palette.
- Cascade: `global.css` is imported into Tailwind's `base` layer, so utility classes beat our element rules; our component CSS files are unlayered and beat utilities. Style shadcn components with utilities.
- `cn` comes from the `cn` package (shadcn's replacement for clsx + tailwind-merge), re-exported by `@/lib/utils`.

## Motion

- anime.js v4: `import { animate, stagger } from "animejs"`. The v3 `anime()` call does not exist. The package ships its own types; `@types/animejs` is the stale v3 set.
- Scroll reveals go through `useScrollReveal`, one hook for every section.
- JS animation honours `prefers-reduced-motion` and leaves content visible: the global CSS rule cannot reach anime.js inline styles.

## TypeScript

`erasableSyntaxOnly` (no enums, no parameter properties) and `verbatimModuleSyntax` (`import type` for types) are on.

## Tests

Colocated `*.test.ts(x)` with explicit `vitest` imports (globals are off). `src/test/setup.ts` stubs `matchMedia` and `IntersectionObserver` for jsdom.

## Git

- Work on `develop`; `master` is production. Update it with a fast-forward merge from `develop` and never force-push it.
- `feature/copilot-v` holds the previous CSS-modules version as a backup. It shares no history with `develop`, so leave it untouched.
