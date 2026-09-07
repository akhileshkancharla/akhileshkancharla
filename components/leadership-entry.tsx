import type { LeadershipItem } from "@/types/content";

export function LeadershipEntry({ item }: { item: LeadershipItem }) {
  return <article className="leadership-entry"><div><h3>{item.organization}</h3><p>{item.role}</p></div>{item.period ? <time>{item.period}</time> : null}<p>{item.description}</p></article>;
}
