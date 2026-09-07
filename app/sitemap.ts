import type { MetadataRoute } from "next";
import { projects } from "@/content/projects";
import { siteConfig } from "@/content/profile";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/projects/", "/research/", "/about/", "/resume/"];
  return [
    ...routes.map((route, index) => ({ url: `${siteConfig.url}${route}`, changeFrequency: "monthly" as const, priority: index === 0 ? 1 : 0.8 })),
    ...projects.map((project) => ({ url: `${siteConfig.url}/projects/${project.slug}/`, changeFrequency: "monthly" as const, priority: 0.7 })),
  ];
}
