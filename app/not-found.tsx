import Link from "next/link";

export default function NotFound() {
  return <main id="main" className="shell not-found"><p className="eyebrow">404 / Not found</p><h1>This path does not exist.</h1><p>The project may have moved, or the address may be incomplete.</p><Link className="button-link" href="/projects">Return to projects <span aria-hidden="true">→</span></Link></main>;
}
