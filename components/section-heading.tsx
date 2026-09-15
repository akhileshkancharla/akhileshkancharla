import type { ReactNode } from "react";

export function SectionHeading({ index, title, action, id }: { index: string; title: string; action?: ReactNode; id?: string }) {
  return <div className="section-heading"><div><span>{index}</span><h2 id={id}>{title}</h2></div>{action}</div>;
}
