import type { Metadata } from "next";
import Script from "next/script";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { profile, siteConfig } from "@/content/profile";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: { default: siteConfig.title, template: "%s — Akhilesh Kancharla" },
  description: siteConfig.description,
  alternates: { canonical: "/" },
  openGraph: { type: "website", title: siteConfig.title, description: siteConfig.description, url: "/", siteName: profile.name },
  twitter: { card: "summary", title: siteConfig.title, description: siteConfig.description },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Script id="theme-init" strategy="beforeInteractive">{`try{const t=localStorage.getItem('theme');document.documentElement.dataset.theme=t||(matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light')}catch(e){}`}</Script>
        <Header />{children}<Footer />
      </body>
    </html>
  );
}
