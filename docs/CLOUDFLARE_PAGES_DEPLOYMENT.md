# Cloudflare Pages deployment

This portfolio is a static Next.js export. It does not require a Node.js server, Cloudflare credentials in the repository, or a custom domain.

## Connect the repository

1. Push the completed application to the `main` branch of `akhileshkancharla/akhileshkancharla`.
2. In Cloudflare, open **Workers & Pages**, choose **Create application**, select **Pages**, then **Import an existing Git repository**.
3. Authorize GitHub access if needed and select the existing `akhileshkancharla/akhileshkancharla` repository. Do not create a second repository.
4. Use the **Next.js (Static HTML Export)** framework preset.

## Build settings

| Setting | Value |
| --- | --- |
| Production branch | `main` |
| Build command | `npm run build` |
| Build output directory | `out` |
| Root directory | repository root |

Add one production environment variable after Cloudflare assigns the final URL:

```text
NEXT_PUBLIC_SITE_URL=https://<project-name>.pages.dev
```

Rebuild after setting it so canonical URLs, the sitemap, robots.txt, and structured data use the final origin.

## Verify the first deployment

Open `/`, `/projects/`, one project case study, `/research/`, `/about/`, `/resume/`, `/sitemap.xml`, and `/robots.txt`. Confirm that an unknown path returns the exported 404 page.

Every push to `main` will create a new production deployment. Pull requests can use Cloudflare preview deployments.
