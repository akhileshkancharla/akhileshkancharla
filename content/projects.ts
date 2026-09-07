import type { Project } from "@/types/content";

export const projects: Project[] = [
  {
    slug: "semirestore",
    name: "SemiRestore",
    eyebrow: "SEM image restoration",
    featured: true,
    status: "complete",
    summary:
      "An AI-assisted system for restoring degraded, single-channel semiconductor scanning electron microscope images.",
    thesis:
      "Restoration is only useful when model output is paired with explicit provenance, diagnostics, and honest limits.",
    categories: ["Computer Vision", "Image Restoration", "Applied ML"],
    technologies: ["Python", "PyTorch", "FastAPI"],
    role: ["Model development", "Restoration pipeline", "Inference", "Validation"],
    repository: "https://github.com/akhileshkancharla/SemiRestore",
    sections: [
      {
        title: "Overview",
        paragraphs: [
          "SemiRestore combines a statistics-conditioned NAF-SR restoration pipeline with a FastAPI service and an operational dashboard. It is designed around a narrow scientific imaging task rather than general photo enhancement.",
        ],
      },
      {
        title: "Problem",
        paragraphs: [
          "Degraded SEM imagery can obscure fine structural detail. A restoration workflow must improve interpretability without presenting generated detail as measured ground truth.",
        ],
      },
      {
        title: "Why it matters",
        paragraphs: [
          "Scientific-image restoration carries a higher burden of traceability than aesthetic enhancement. Diagnostics, model readiness, and input suitability need to remain visible alongside the output.",
        ],
      },
      {
        title: "Architecture / Approach",
        bullets: [
          "Checksum-gated model loading prevents silent fallback to an unverified checkpoint.",
          "A statistics-conditioned NAF-SR pipeline owns preprocessing, inference, and response provenance.",
          "The API remains live but reports unavailable readiness when the verified model artifact is absent.",
          "Uploads and restored images are processed in memory and are not permanently stored by the platform.",
        ],
      },
      {
        title: "My contribution",
        bullets: [
          "PyTorch model development and restoration-pipeline work.",
          "Inference, diagnostics, and validation workflows.",
          "Controlled evaluation using PSNR and SSIM without presenting scores as proof of correctness.",
        ],
      },
      {
        title: "Limitations",
        paragraphs: [
          "Restored images are estimates, not ground truth. Diagnostics and suitability recommendations are advisory measurements and heuristics, not probabilities or proof of restoration correctness.",
        ],
      },
      {
        title: "What I learned",
        paragraphs: [
          "Model quality and production reliability are inseparable: artifact verification, typed interfaces, bounded input handling, and transparent failure modes are part of the ML system itself.",
        ],
      },
    ],
  },
  {
    slug: "vantage",
    name: "Vantage",
    eyebrow: "Recruitment operations & data pipelines",
    featured: true,
    status: "in-progress",
    summary:
      "A placement-management system that turns irregular academic records into auditable eligibility and recruitment workflows.",
    thesis:
      "High-stakes institutional workflows benefit from deterministic, reviewable data transformation rather than opaque extraction alone.",
    categories: ["Data Systems", "Backend Engineering", "Experimentation"],
    technologies: ["Python", "Flask", "PostgreSQL"],
    role: ["Data pipeline", "Data model", "REST APIs", "Experimental evaluation"],
    repository: "https://github.com/akhileshkancharla/Vantage",
    sections: [
      {
        title: "Overview",
        paragraphs: [
          "Vantage consolidates academic-record ingestion, eligibility verification, drive management, and placement tracking into an auditable platform for engineering institutions.",
        ],
      },
      {
        title: "Problem",
        paragraphs: [
          "Placement teams often coordinate irregular spreadsheets, duplicated records, and manual eligibility checks. Small parsing errors can propagate into decisions that affect students and recruiters.",
        ],
      },
      {
        title: "Data / Inputs",
        bullets: [
          "CSV and Excel T-Sheet exports are supported by the implemented parser.",
          "Incoming columns are mapped to a canonical schema, with conflicts staged for review.",
          "Duplicate content is detected using a file hash before ingestion.",
        ],
      },
      {
        title: "Architecture / Approach",
        bullets: [
          "Flask application with PostgreSQL, SQLAlchemy, and Alembic.",
          "Three-stage parse, normalize, and ingest pipeline.",
          "Conflict states preserve questionable records for explicit admin resolution.",
          "Eligibility rules return both a decision and human-readable rejection reasons.",
        ],
      },
      {
        title: "My contribution",
        bullets: [
          "Student-record processing pipeline and normalized PostgreSQL model.",
          "REST APIs and role-aware operational workflows.",
          "Comparison of deterministic parsing with LLM-based extraction on clean and noisy inputs.",
        ],
      },
      {
        title: "Limitations",
        bullets: [
          "PDF parsing remains planned rather than implemented.",
          "The migration set and automated test coverage require further production-readiness work.",
        ],
      },
    ],
  },
  {
    slug: "intelligent-dead-reckoning",
    name: "Intelligent Dead Reckoning",
    eyebrow: "SIH26168 · navigation under GNSS outage",
    featured: true,
    status: "active",
    summary:
      "An applied navigation project exploring smartphone sensor data when GNSS positioning becomes unavailable.",
    thesis:
      "Useful dead reckoning starts with disciplined sensor acquisition and validation before model complexity is introduced.",
    categories: ["Sensor Fusion", "Navigation", "Applied Research"],
    technologies: ["Android", "GNSS/INS", "Machine Learning"],
    role: ["Sensor acquisition", "Feasibility study", "System architecture"],
    sections: [
      {
        title: "Overview",
        paragraphs: [
          "This work investigates a smartphone-based navigation path through temporary GNSS outages using inertial and positioning signals available on Android devices.",
        ],
      },
      {
        title: "Current focus",
        bullets: [
          "Android sensor and GNSS acquisition.",
          "Data feasibility and signal-quality checks.",
          "System architecture and navigation-core validation.",
        ],
      },
      {
        title: "Constraints",
        paragraphs: [
          "Consumer-device sensors drift, device placement varies, and useful ground truth is difficult to collect. Sensor-fusion and learned navigation components are still under development.",
        ],
      },
      {
        title: "Next validation step",
        paragraphs: [
          "Establish a repeatable acquisition and reference protocol before comparing fusion strategies or learned corrections.",
        ],
      },
    ],
  },
];
