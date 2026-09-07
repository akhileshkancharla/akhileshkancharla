export type ProjectStatus = "active" | "complete" | "in-progress";

export type LinkItem = { label: string; href: string };

export type CaseStudySection = {
  title: string;
  paragraphs?: string[];
  bullets?: string[];
};

export type Project = {
  slug: string;
  name: string;
  eyebrow: string;
  featured: boolean;
  status: ProjectStatus;
  summary: string;
  thesis: string;
  categories: string[];
  technologies: string[];
  role: string[];
  repository?: string;
  links?: LinkItem[];
  sections: CaseStudySection[];
  relatedProjectSlugs?: string[];
};

export type ResearchItem = {
  slug: string;
  title: string;
  topic: string;
  status: string;
  summary: string;
  collaborators?: string[];
  link?: string;
};

export type TimelineItem = {
  organization: string;
  role: string;
  period: string;
  description: string;
  highlights?: string[];
};

export type LeadershipItem = {
  organization: string;
  role: string;
  period?: string;
  description: string;
};
