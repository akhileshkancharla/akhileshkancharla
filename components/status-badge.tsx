import type { ProjectStatus } from "@/types/content";

const labels: Record<ProjectStatus, string> = { active: "Active", complete: "Built", "in-progress": "In progress" };
export function StatusBadge({ status }: { status: ProjectStatus }) { return <span className={`status status-${status}`}>{labels[status]}</span>; }
