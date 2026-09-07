import Link from "next/link";
import { ExternalLink } from "@/components/external-link";
import { ThemeToggle } from "@/components/theme-toggle";
import { profile } from "@/content/profile";

export function Header() {
  return (
    <header className="site-header">
      <a className="skip-link" href="#main">Skip to content</a>
      <div className="shell nav-shell">
        <Link className="wordmark" href="/" aria-label={`${profile.name}, home`}><span>AK</span><i aria-hidden="true" /></Link>
        <nav aria-label="Primary navigation">
          <Link href="/projects">Work</Link><Link href="/research">Research</Link><Link href="/about">About</Link><Link href="/resume">Résumé</Link><ExternalLink href={profile.social.github}>GitHub</ExternalLink>
        </nav>
        <ThemeToggle />
      </div>
    </header>
  );
}
