import type { Metadata } from "next";
import Link from "next/link";
import { PageIntro } from "@/components/page-intro";
import { Timeline } from "@/components/timeline";
import { education } from "@/content/experience";
import { profile } from "@/content/profile";
import { featuredProjects } from "@/lib/content/projects";

export const metadata: Metadata = {
  title: "Résumé",
  description: "A concise web résumé for Akhilesh Kancharla, focused on machine learning, computer vision, and data systems.",
  alternates: { canonical: "/resume/" },
  openGraph: { title: "Résumé — Akhilesh Kancharla", description: "A concise web résumé focused on machine learning, computer vision, and data systems.", url: "/resume/", images: [] },
  twitter: { card: "summary", title: "Résumé — Akhilesh Kancharla", description: "A concise web résumé focused on machine learning, computer vision, and data systems.", images: [] },
};

export default function ResumePage() {
  return (
    <main id="main" className="shell page resume-page">
      <PageIntro eyebrow="Résumé / Web edition" title={profile.name} description={profile.introduction} aside={<div className="resume-actions"><a className="button-link" href={profile.social.email}>Request PDF résumé</a><Link className="text-link" href="/projects">View full case studies</Link></div>} />
      <section className="resume-section"><h2>Focus</h2><ul className="resume-list"><li>Machine learning and computer vision</li><li>Data pipelines and backend systems</li><li>Reliable AI and experimental evaluation</li><li>Sensor-driven navigation systems</li></ul></section>
      <section className="resume-section"><h2>Selected work</h2><div className="resume-projects">{featuredProjects.map((project) => <article key={project.slug}><h3><Link href={`/projects/${project.slug}`}>{project.name}</Link></h3><p>{project.summary}</p><span>{project.role.join(" · ")}</span></article>)}</div></section>
      <section className="resume-section"><h2>Education</h2><Timeline items={education} /></section>
      <section className="resume-section"><h2>Technical toolkit</h2><p className="toolkit">Python · PyTorch · FastAPI · Flask · PostgreSQL · SQL · Android · Git · Linux</p></section>
    </main>
  );
}
