import type { ReactNode } from "react";

export function PageIntro({ eyebrow, title, description, aside }: { eyebrow: string; title: string; description: string; aside?: ReactNode }) {
  return (
    <header className="page-intro">
      <p className="eyebrow">{eyebrow}</p>
      <div className="page-intro-grid"><h1>{title}</h1><div><p>{description}</p>{aside}</div></div>
    </header>
  );
}
