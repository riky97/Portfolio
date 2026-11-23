# Portfolio — Riccardo Ingrasciotta

Single-page React portfolio in English and Italian, dark and light. Vite 8, React 19, TypeScript 6, Tailwind 4 + shadcn/ui, anime.js 4, Vitest. Talk to Riccardo in Italian.

## Done means

`npm test && npm run build && npm run lint` all green (`build` runs `tsc -b`). UI changes get a look in a real browser (`npm run dev`) before you report them, in both languages and both themes.

## Content and languages

English is the default language; Italian is the second. Each piece of copy is written once per language:

- Interface strings (labels, headings, buttons) live in `src/i18n/en.ts`; `it.ts` is typed as the same shape, so a missing or extra key fails the build. Components read them with `useLocale().messages`.
- Content that belongs to a record (CV entries, projects) sits next to its data as `{ en, it }`: type `Localized<T>`, and `both(value)` for what is identical in both languages (names, technologies). `content.test.ts` fails on an empty or untranslated Italian text.
- New project: add an entry to `src/data/projects.ts` with `description: { en, it }`, and put the image in `public/projects/`, referenced as `/projects/<file>`. `projects.test.ts` fails on a missing image.
- The language choice is stored under `locale`; `LocaleProvider` keeps `<html lang>` and the meta description in step.
- `public/cv.pdf` is the CV download target, one English file for both languages.
- Italian copy runs longer than English: check header and card layouts in both.

## Design

Signature: a telemetry / instrument-panel look, a nod to the ESA Grafana monitoring work. Deep navy ink, teal *signal* for data and links, amber *action* reserved for calls to action.

- Colors, fonts, spacing and radii come from `src/styles/tokens.css`; components reference them as `var(--…)`. Change a color there only.
- Dark is the default theme. In `tokens.css`, `:root` holds the light palette and `.dark` overrides every color; give a new color token a value in both blocks. Token names are roles, not values: `ink` is the page background in either theme.
- Amber is too pale to be text on a light page: links use `--color-action-text`, while `--color-action` stays the button fill.
- Text holds WCAG AA (4.5:1) in both themes. Check a new pairing with a contrast calculation, not by eye.
- Our own components: one colocated CSS file each, class names prefixed by the component (`timeline__entry`). Tailwind owns generic class names such as `container`, so ours carry a prefix too (`site-container`).

## Theme

- `<html class="dark">` is dark; no class is light. `useTheme` toggles it, stores the choice under `theme`, and every toggle on the page stays in step (the header and the mobile menu each render one).
- The inline script in `index.html` applies the stored theme and language before the first paint. Keep it ahead of the stylesheets.
- Tap targets are 44px on touch screens, which is why the language and theme controls move into the mobile menu: the header row has no room for them next to the name. The menu button appears at 900px, the width the Italian desktop row needs.

## shadcn/ui

- Style `radix-vega`, alias `@/` → `src/`, components in `src/components/ui/`. They are ours to edit: `button.tsx` is tuned to the site (amber default, teal-ring outline, small lift on hover).
- Add components with `npx shadcn@latest add <name>` or through the `shadcn` MCP server (`.mcp.json`; Claude Code asks for approval once).
- The theme variables in `src/index.css` point at `tokens.css`, which stays the one source of color for both themes. `dark:` variants follow the `dark` class.
- Cascade: `global.css` is imported into Tailwind's `base` layer, so utility classes beat our element rules; our component CSS files are unlayered and beat utilities. Style shadcn components with utilities.
- `cn` comes from the `cn` package (shadcn's replacement for clsx + tailwind-merge), re-exported by `@/lib/utils`.

## Motion

- anime.js v4: `import { animate, stagger } from "animejs"`. The v3 `anime()` call does not exist. The package ships its own types; `@types/animejs` is the stale v3 set.
- Scroll reveals go through `useScrollReveal`, one hook for every section.
- JS animation honours `prefers-reduced-motion` and leaves content visible: the global CSS rule cannot reach anime.js inline styles.

## TypeScript

`erasableSyntaxOnly` (no enums, no parameter properties) and `verbatimModuleSyntax` (`import type` for types) are on.

## Tests

Colocated `*.test.ts(x)` with explicit `vitest` imports (globals are off). `src/test/setup.ts` stubs `matchMedia` and `IntersectionObserver` for jsdom, and resets `localStorage`, `<html lang>` and the `dark` class after each test. Components render without a provider and fall back to English.

## Git

- Work on `develop`; `master` is production. Update it with a fast-forward merge from `develop` and never force-push it.
- `feature/copilot-v` holds the previous CSS-modules version as a backup. It shares no history with `develop`, so leave it untouched.
