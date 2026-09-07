import { projects } from "@/content/projects";

const slugPattern = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;

export function validateProjects(): void {
  const slugs = new Set<string>();

  for (const project of projects) {
    if (!slugPattern.test(project.slug)) throw new Error(`Invalid project slug: ${project.slug}`);
    if (slugs.has(project.slug)) throw new Error(`Duplicate project slug: ${project.slug}`);
    slugs.add(project.slug);
    if (!project.name || !project.summary || project.sections.length === 0) {
      throw new Error(`Incomplete project content: ${project.slug}`);
    }
  }

  for (const project of projects) {
    for (const related of project.relatedProjectSlugs ?? []) {
      if (!slugs.has(related)) {
        throw new Error(`Broken project relationship: ${project.slug} -> ${related}`);
      }
    }
  }
}

validateProjects();

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}

export const featuredProjects = projects.filter((project) => project.featured);
export const activeProjects = projects.filter((project) => project.status === "active");
