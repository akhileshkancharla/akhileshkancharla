import type { ResearchItem } from "@/types/content";

export const research: ResearchItem[] = [
  {
    slug: "deterministic-pipelines-vs-llms",
    title: "Deterministic pipelines vs. large language models",
    topic: "Reliable structured data extraction",
    status: "Conditional acceptance",
    summary:
      "An experimental comparison of deterministic parsing and LLM-based extraction across clean and noisy inputs, with emphasis on extraction quality, latency, cost, and failure behavior. The work grew from the Vantage student-record ingestion pipeline.",
  },
];
