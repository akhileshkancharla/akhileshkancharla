import type { ReactNode } from "react";

export function SectionHeading({ index, title, action }: { index: string; title: string; action?: ReactNode }) {
  return <div className="section-heading"><div><span>{index}</span><h2>{title}</h2></div>{action}</div>;
}
