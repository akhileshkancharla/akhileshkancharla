# Portfolio architecture

The site uses the Next.js App Router with TypeScript and Tailwind CSS. `output: "export"` emits a static site to `out/`, keeping the deployment compatible with Cloudflare Pages and free of runtime infrastructure.

## Content

Verified profile, education, research, leadership, and project information lives in `content/`. Shared TypeScript types live in `types/content.ts`. Project case studies are records with optional section content; absent paragraphs, lists, links, and repository fields are not rendered.

`lib/content/projects.ts` validates slugs and relationships at application build time. `scripts/content-validator.mjs` performs the same integrity checks independently for CI and tests.

## Rendering

Routes and most components are React Server Components. The theme switch is the only Client Component. Project pages are generated at build time with `generateStaticParams`, and unknown project slugs resolve to the shared 404 page.

## Extension points

A future `/writing` route can reuse the editorial page intro, metadata conventions, tags, and content-folder pattern. No publication, social, synchronization, analytics, or external-content automation is included in this phase.
