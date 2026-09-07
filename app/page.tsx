import Link from "next/link";
import { ProjectList } from "@/components/project-list";
import { ResearchEntry } from "@/components/research-entry";
import { SectionHeading } from "@/components/section-heading";
import { Timeline } from "@/components/timeline";
import { education } from "@/content/experience";
import { profile, siteConfig } from "@/content/profile";
import { research } from "@/content/research";
import { activeProjects, featuredProjects } from "@/lib/content/projects";

const personSchema = {
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  url: siteConfig.url,
  mainEntity: {
    "@type": "Person",
    name: profile.name,
    url: siteConfig.url,
    email: profile.email,
    sameAs: [profile.social.github, profile.social.linkedin],
    knowsAbout: ["Machine Learning", "Computer Vision", "Data Systems", "Applied AI"],
  },
};

export default function Home() {
  return (
    <main id="main">
      <section className="hero shell" aria-labelledby="hero-title">
        <div className="hero-kicker"><span>Portfolio / 2026</span><span>{profile.location}</span></div>
        <div className="hero-grid">
          <h1 id="hero-title">{profile.name}</h1>
          <div className="hero-copy"><p className="positioning">{profile.positioning}</p><p>{profile.introduction}</p><div className="hero-links"><Link className="button-link" href="/projects">View selected work <span aria-hidden="true">→</span></Link><Link className="text-link" href="/resume">Résumé</Link><a className="text-link" href={profile.social.email}>Email</a></div></div>
        </div>
        <div className="focus-line" aria-label="Current focus"><span>Current focus</span><p>Reliable vision systems · data quality · navigation under signal loss</p></div>
      </section>

      <section className="section shell" aria-labelledby="selected-work-title"><SectionHeading index="01" title="Selected work" action={<Link className="text-link" href="/projects">All projects →</Link>} /><div id="selected-work-title"><ProjectList items={featuredProjects} /></div></section>

      {activeProjects.length ? <section className="section shell compact-section" aria-labelledby="current-work-title"><SectionHeading index="02" title="Now" /><div className="now-strip" id="current-work-title"><span className="pulse-dot" aria-hidden="true" /><div><h3>{activeProjects[0].name}</h3><p>{activeProjects[0].thesis}</p></div><Link className="text-link" href={`/projects/${activeProjects[0].slug}`}>Read update →</Link></div></section> : null}

      <section className="section shell" aria-labelledby="research-title"><SectionHeading index="03" title="Research" action={<Link className="text-link" href="/research">Research notes →</Link>} /><div id="research-title" className="single-column-offset">{research.map((item) => <ResearchEntry item={item} key={item.slug} />)}</div></section>

      <section className="section shell" aria-labelledby="education-title"><SectionHeading index="04" title="Education" /><div id="education-title"><Timeline items={education} /></div></section>

      <section className="closing shell"><p className="eyebrow">A useful next conversation</p><h2>Working on a difficult ML or data problem?</h2><p>{profile.availability}</p><a className="button-link" href={profile.social.email}>Start a conversation <span aria-hidden="true">→</span></a></section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema).replace(/</g, "\\u003c") }} />
    </main>
  );
}
