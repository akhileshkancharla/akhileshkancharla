import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CaseStudySection } from "@/components/case-study-section";
import { ExternalLink } from "@/components/external-link";
import { ProjectMetadata } from "@/components/project-metadata";
import { projects } from "@/content/projects";
import { profile, siteConfig } from "@/content/profile";
import { getProject } from "@/lib/content/projects";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: PageProps<"/projects/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return { title: "Project not found", robots: { index: false, follow: false } };
  return {
    title: project.name,
    description: project.summary,
    alternates: { canonical: `/projects/${project.slug}/` },
    openGraph: { type: "article", title: project.name, description: project.summary, url: `/projects/${project.slug}/`, images: [] },
    twitter: { card: "summary", title: project.name, description: project.summary, images: [] },
  };
}

export default async function ProjectPage({ params }: PageProps<"/projects/[slug]">) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const schema = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: project.name,
    description: project.summary,
    url: `${siteConfig.url}/projects/${project.slug}/`,
    creator: { "@type": "Person", name: profile.name, url: siteConfig.url },
    keywords: [...project.categories, ...project.technologies],
    ...(project.repository ? { sameAs: project.repository } : {}),
  };

  return (
    <main id="main">
      <article className="shell case-study">
        <Link className="back-link" href="/projects">← All projects</Link>
        <header className="case-hero">
          <p className="eyebrow">{project.eyebrow}</p>
          <h1>{project.name}</h1>
          <p className="case-thesis">{project.thesis}</p>
          <ProjectMetadata project={project} />
          {project.repository ? <ExternalLink className="button-link repository-cta" href={project.repository}>Open repository</ExternalLink> : null}
        </header>
        <div className="case-sections">{project.sections.map((section, index) => <CaseStudySection key={section.title} section={section} index={index} />)}</div>
        <nav className="case-end" aria-label="Case study navigation"><Link href="/projects">Browse all projects</Link><a href={profile.social.email}>Discuss this work</a></nav>
      </article>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }} />
    </main>
  );
}
