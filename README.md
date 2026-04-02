# Portfolio SPA - React + TypeScript

Modern single-page portfolio rebuilt from a legacy HTML/CSS/JavaScript project.

## Stack

- React 19
- TypeScript (strict mode)
- Vite 8
- CSS Modules

## Why CSS Modules

CSS Modules were chosen to keep styling:

- Scoped by default (no global class collisions)
- Easy to scale in medium-size projects without runtime overhead
- Compatible with plain CSS and design tokens
- Lightweight compared to CSS-in-JS for this use case

## Project Structure

```text
src/
  app/
    App.tsx
    App.module.css
    global.css
  components/
    layout/
      Navigation.tsx
      Navigation.module.css
      Section.tsx
      Section.module.css
    sections/
      HeroSection.tsx
      HeroSection.module.css
      ProjectsSection.tsx
      ProjectsSection.module.css
      SkillsSection.tsx
      SkillsSection.module.css
      ContactSection.tsx
      ContactSection.module.css
    ui/
      ProjectCard.tsx
      ProjectCard.module.css
      SkillBadge.tsx
      SkillBadge.module.css
      ContactCard.tsx
      ContactCard.module.css
  data/
    portfolioData.ts
  hooks/
    useActiveSection.ts
  types/
    portfolio.ts
  main.tsx
```

## Architecture Notes

- SPA without router: all sections are rendered in a single page.
- Internal smooth scroll: navigation uses anchor targets and `scrollIntoView`.
- Reusable components: cards, badges, and section wrapper are isolated.
- Typed data layer: content is centralized in `portfolioData.ts` with strict interfaces.
- Performance basics:
    - `React.lazy` + `Suspense` for secondary sections.
    - `memo` on frequently repeated UI elements.
    - `IntersectionObserver` for active navigation state.

## Commands

```bash
npm install
npm run dev
npm run build
npm run lint
```
