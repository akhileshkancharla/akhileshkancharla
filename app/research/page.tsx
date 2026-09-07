import type { Metadata } from "next";
import { PageIntro } from "@/components/page-intro";
import { ResearchEntry } from "@/components/research-entry";
import { research } from "@/content/research";

export const metadata: Metadata = {
  title: "Research",
  description: "Research and experimentation in reliable AI, structured extraction, and applied machine learning.",
  alternates: { canonical: "/research/" },
  openGraph: { title: "Research — Akhilesh Kancharla", description: "Research and experimentation in reliable AI, structured extraction, and applied machine learning.", url: "/research/", images: [] },
  twitter: { card: "summary", title: "Research — Akhilesh Kancharla", description: "Research and experimentation in reliable AI, structured extraction, and applied machine learning.", images: [] },
};

export default function ResearchPage() {
  return <main id="main" className="shell page"><PageIntro eyebrow="Research / Experiments" title="Questions before claims" description="I am interested in experiments that expose where a system works, where it fails, and what those boundaries cost in practice." /><div className="research-index">{research.map((item) => <ResearchEntry item={item} key={item.slug} />)}</div><aside className="research-note"><p className="eyebrow">Research standard</p><p>Status labels reflect the current record. Publication links, collaborators, and results are included only when verified source material is available.</p></aside></main>;
}
