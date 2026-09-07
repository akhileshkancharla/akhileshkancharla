import type { Metadata } from "next";
import { ExternalLink } from "@/components/external-link";
import { PageIntro } from "@/components/page-intro";
import { Timeline } from "@/components/timeline";
import { education, experience } from "@/content/experience";
import { leadership } from "@/content/leadership";
import { profile } from "@/content/profile";

export const metadata: Metadata = {
  title: "About",
  description: "About Akhilesh Kancharla—interests, approach, and education across machine learning, data science, and engineering systems.",
  alternates: { canonical: "/about/" },
  openGraph: { title: "About — Akhilesh Kancharla", description: "Interests, approach, and education across machine learning, data science, and engineering systems.", url: "/about/", images: [] },
  twitter: { card: "summary", title: "About — Akhilesh Kancharla", description: "Interests, approach, and education across machine learning, data science, and engineering systems.", images: [] },
};

export default function AboutPage() {
  return (
    <main id="main" className="shell page">
      <PageIntro eyebrow="About / Profile" title="Building the system around the model" description={profile.about} aside={<p className="location-line">Based in {profile.location}</p>} />
      <section className="about-grid"><div><p className="eyebrow">How I work</p><h2>Evidence over theater.</h2></div><div className="principles"><p><strong>Start with the failure mode.</strong> Define what can go wrong before choosing the model or architecture.</p><p><strong>Make uncertainty visible.</strong> Diagnostics, provenance, and explicit limits make technical work more trustworthy.</p><p><strong>Build reproducible paths.</strong> Experiments become useful when another person can run, inspect, and challenge them.</p></div></section>
      {experience.length ? <section className="subpage-section"><h2>Experience</h2><Timeline items={experience} /></section> : null}
      <section className="subpage-section"><h2>Education</h2><Timeline items={education} /></section>
      {leadership.length ? <section className="subpage-section"><h2>Leadership & activities</h2></section> : null}
      <section className="contact-band"><p>{profile.availability}</p><div><ExternalLink href={profile.social.linkedin}>LinkedIn</ExternalLink><ExternalLink href={profile.social.github}>GitHub</ExternalLink><a href={profile.social.email}>Email</a></div></section>
    </main>
  );
}
