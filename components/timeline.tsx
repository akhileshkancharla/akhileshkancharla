import type { TimelineItem } from "@/types/content";

export function Timeline({ items }: { items: TimelineItem[] }) {
  return <div className="timeline">{items.map((item) => <article key={`${item.organization}-${item.role}`}><div><h3>{item.organization}</h3><p>{item.role}</p></div><time>{item.period}</time><p>{item.description}</p></article>)}</div>;
}
