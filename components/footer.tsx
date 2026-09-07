import { ExternalLink } from "@/components/external-link";
import { profile } from "@/content/profile";

export function Footer() {
  return (
    <footer className="site-footer"><div className="shell footer-grid">
      <p>{profile.name} <span>© {new Date().getFullYear()}</span></p>
      <div className="footer-links"><ExternalLink href={profile.social.github}>GitHub</ExternalLink><ExternalLink href={profile.social.linkedin}>LinkedIn</ExternalLink><a href={profile.social.email}>Contact</a></div>
    </div></footer>
  );
}
