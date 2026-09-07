import type { CaseStudySection as CaseStudySectionType } from "@/types/content";

export function CaseStudySection({ section, index }: { section: CaseStudySectionType; index: number }) {
  if (!section.paragraphs?.length && !section.bullets?.length) return null;
  return (
    <section className="case-section" aria-labelledby={`case-section-${index}`}>
      <div className="case-section-label"><span>{String(index + 1).padStart(2, "0")}</span><h2 id={`case-section-${index}`}>{section.title}</h2></div>
      <div className="case-section-body">
        {section.paragraphs?.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
        {section.bullets?.length ? <ul>{section.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}</ul> : null}
      </div>
    </section>
  );
}
