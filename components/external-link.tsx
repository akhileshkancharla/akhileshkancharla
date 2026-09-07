import type { AnchorHTMLAttributes, ReactNode } from "react";

type ExternalLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & { children: ReactNode; arrow?: boolean };

export function ExternalLink({ children, arrow = true, ...props }: ExternalLinkProps) {
  return <a target="_blank" rel="noreferrer" {...props}>{children}{arrow ? <span aria-hidden="true"> ↗</span> : null}</a>;
}
