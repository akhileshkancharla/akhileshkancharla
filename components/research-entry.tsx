import type { ResearchItem } from "@/types/content";

export function ResearchEntry({ item }: { item: ResearchItem }) {
  return <article className="research-entry"><div className="research-meta"><span>{item.topic}</span><span>{item.status}</span></div><h3>{item.title}</h3><p>{item.summary}</p>{item.collaborators?.length ? <p className="small-copy">With {item.collaborators.join(", ")}</p> : null}</article>;
}
