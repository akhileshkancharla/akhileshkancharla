import type { Metadata } from "next";
import { PageIntro } from "@/components/page-intro";
import { ProjectList } from "@/components/project-list";
import { projects } from "@/content/projects";

export const metadata: Metadata = {
  title: "Projects",
  description: "Engineering case studies across machine learning, computer vision, navigation, and data systems.",
  alternates: { canonical: "/projects/" },
  openGraph: { title: "Projects — Akhilesh Kancharla", description: "Engineering case studies across machine learning, computer vision, navigation, and data systems.", url: "/projects/", images: [] },
  twitter: { card: "summary", title: "Projects — Akhilesh Kancharla", description: "Engineering case studies across machine learning, computer vision, navigation, and data systems.", images: [] },
};

export default function ProjectsPage() {
  return <main id="main" className="shell page"><PageIntro eyebrow="Work / Case studies" title="Selected engineering work" description="Projects are documented as systems: the problem, constraints, implementation choices, evidence, and limits—not just the final interface." /><ProjectList items={projects} /></main>;
}
