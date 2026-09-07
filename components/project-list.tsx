import Link from "next/link";
import { ExternalLink } from "@/components/external-link";
import { StatusBadge } from "@/components/status-badge";
import type { Project } from "@/types/content";

export function ProjectList({ items }: { items: Project[] }) {
  return <div className="project-list">{items.map((project, index) => (
    <article className="project-row" key={project.slug}>
      <div className="project-number">{String(index + 1).padStart(2, "0")}</div>
      <div className="project-copy">
        <div className="project-title-line"><h3><Link href={`/projects/${project.slug}`}>{project.name}</Link></h3><StatusBadge status={project.status} /></div>
        <p>{project.summary}</p>
        <ul className="tag-list" aria-label={`${project.name} technologies`}>{project.technologies.map((technology) => <li key={technology}>{technology}</li>)}</ul>
      </div>
      <div className="project-actions"><Link className="text-link" href={`/projects/${project.slug}`}>Case study <span aria-hidden="true">→</span></Link>{project.repository ? <ExternalLink className="quiet-link" href={project.repository}>Repository</ExternalLink> : null}</div>
    </article>
  ))}</div>;
}
