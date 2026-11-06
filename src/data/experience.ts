export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  period: string;
  location: string;
  type: string;
  badge: string;
  description: string;
  highlights: string[];
  technologies: string[];
}

export const experiences: ExperienceItem[] = [
  {
    id: "dove-tv",
    role: "Broadcast Engineering & Media Production IT",
    company: "Dove TV",
    period: "Industrial Training / SIWES",
    location: "Nigeria",
    type: "On-site / Infrastructure",
    badge: "MISSION CRITICAL IT",
    description:
      "Supported practical IT and broadcast-technology workflows, gaining deep hands-on exposure to equipment connectivity, network routing, and systematic hardware diagnosis.",
    highlights: [
      "Diagnosed and maintained networking infrastructure including IP/MAC addressing, switches, routers, and signal-routing workflows.",
      "Assisted with CCTV surveillance systems, security camera connectivity, and network-attached broadcast links.",
      "Transferred physical inventory logs into structured Google Sheets workflows, maintaining equipment custody records.",
      "Followed strict operational procedures for video/audio converters, SDI/HDMI distribution, monitors, and fibre optic links.",
      "Documented technical processes with step-by-step clarity to ensure reproducible troubleshooting across shifts.",
    ],
    technologies: [
      "Networking",
      "IP/MAC Routing",
      "Routers & Switches",
      "CCTV Systems",
      "Fibre Links",
      "Signal Distribution",
      "Process Documentation",
    ],
  },
  {
    id: "nexrate",
    role: "Founder & Lead Software Engineer",
    company: "NexRate",
    period: "2024 — Present",
    location: "Lagos, Nigeria",
    type: "Product & Engineering",
    badge: "FOUNDER & FULL-STACK",
    description:
      "Spearheaded the architecture and full-stack development of an exchange rate aggregation and fintech platform serving users with real-time currency analytics.",
    highlights: [
      "Engineered real-time rate comparison engine with sub-100ms response times and zero-downtime client caching.",
      "Integrated AI-assisted market summaries and automated exchange rate aggregation pipelines.",
      "Built responsive, mobile-first dashboards with Next.js, TypeScript, and Tailwind CSS.",
      "Designed secure database schemas and robust API contracts for high-frequency pricing updates.",
    ],
    technologies: [
      "Next.js",
      "TypeScript",
      "Node.js",
      "Tailwind CSS",
      "PostgreSQL",
      "AI Integration",
      "REST APIs",
    ],
  },
  {
    id: "open-source",
    role: "Open-Source Builder & Systems Architect",
    company: "Independent Projects",
    period: "2023 — Present",
    location: "Remote / Hybrid",
    type: "Engineering & Open Source",
    badge: "SYSTEMS & APPLIED AI",
    description:
      "Designed and deployed specialized developer utilities, cryptographic prototypes, and multi-tenant web applications addressing real-world user needs.",
    highlights: [
      "Built DevCodeSnap, a local-first Chrome extension using IndexedDB (Dexie.js) for instantaneous snippet capture and management.",
      "Developed Matrix Encryption, a zero-knowledge chat room featuring client-side AES-256-GCM encryption with Web Crypto API.",
      "Architected Clestay, a multi-tenant SaaS property management engine, and Courseflock, a university collaboration hub.",
      "Maintained disciplined testing, reproducible Git workflows, and comprehensive documentation for every repository.",
    ],
    technologies: [
      "React",
      "Chrome Extension (MV3)",
      "Dexie.js",
      "Go",
      "Python / Flask",
      "Web Crypto API",
      "Docker",
    ],
  },
];

export default experiences;

