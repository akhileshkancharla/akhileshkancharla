import { StatusBadge } from "@/components/status-badge";
import type { Project } from "@/types/content";

export function ProjectMetadata({ project }: { project: Project }) {
  return (
    <dl className="project-meta">
      <div><dt>Status</dt><dd><StatusBadge status={project.status} /></dd></div>
      <div><dt>Domain</dt><dd>{project.categories.join(" · ")}</dd></div>
      <div><dt>Stack</dt><dd>{project.technologies.join(" · ")}</dd></div>
      <div><dt>Role</dt><dd>{project.role.join(" · ")}</dd></div>
    </dl>
  );
}
