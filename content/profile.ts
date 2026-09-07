export const profile = {
  name: "Akhilesh Kancharla",
  positioning: "Machine Learning · Applied AI · Systems",
  introduction:
    "I work across machine learning, computer vision, data pipelines, and the engineering systems that make experimental work reliable and useful.",
  about:
    "I am a computer science and data science student focused on building dependable ML systems—from model development and evaluation to the data and application layers around them. I am especially interested in image restoration, reliable AI, structured data extraction, and sensor-driven systems.",
  email: "akhileshkancharla5@gmail.com",
  location: "Hyderabad, India",
  availability:
    "Open to ML internships, research collaborations, and technically ambitious project work.",
  social: {
    github: "https://github.com/akhileshkancharla",
    linkedin: "https://www.linkedin.com/in/akhileshkancharla/",
    email: "mailto:akhileshkancharla5@gmail.com",
  },
} as const;

export const siteConfig = {
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://akhileshkancharla.pages.dev",
  title: "Akhilesh Kancharla — Machine Learning, Applied AI & Systems",
  description:
    "Portfolio of Akhilesh Kancharla: machine learning, computer vision, data systems, research, and engineering case studies.",
} as const;
