export interface SkillCategory {
  id: string;
  category: string;
  tag: string;
  description: string;
  icon: string;
  items: string[];
  status?: string;
}

export const skills: SkillCategory[] = [
  {
    id: "frontend",
    category: "Frontend Architecture",
    tag: "USER INTERFACE",
    description: "Responsive, accessible web interfaces engineered for sub-second render speeds and fluid user motion.",
    icon: "Layout",
    status: "PRODUCTION READY",
    items: [
      "React",
      "Next.js (App Router)",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "Zustand",
      "HTML5 / CSS3",
      "Vite",
    ],
  },
  {
    id: "backend",
    category: "Backend & Systems",
    tag: "ARCHITECTURE",
    description: "High-throughput APIs, asynchronous messaging engines, and microservice backend systems.",
    icon: "Server",
    status: "PRODUCTION READY",
    items: [
      "Node.js",
      "Express",
      "Go (Golang)",
      "Python / Flask",
      "Rust (Async)",
      "REST APIs",
      "WebSockets",
      "Flask-SocketIO",
    ],
  },
  {
    id: "database",
    category: "Database & Storage",
    tag: "PERSISTENCE",
    description: "ACID-compliant relational schemas, document stores, and local-first browser IndexedDB clients.",
    icon: "Database",
    status: "PRODUCTION READY",
    items: [
      "PostgreSQL",
      "MongoDB",
      "SQLite",
      "Prisma ORM",
      "Dexie.js (IndexedDB)",
      "Firebase",
      "Schema Design",
      "Data Modeling",
    ],
  },
  {
    id: "security",
    category: "Security & Networking",
    tag: "DEFENSE IN DEPTH",
    description: "End-to-end client encryption, authenticated access controls, and network traffic routing.",
    icon: "ShieldCheck",
    status: "ACTIVE STACK",
    items: [
      "AES-256-GCM",
      "Web Crypto API",
      "JWT & Bearer Auth",
      "IP/MAC Routing",
      "Routers & Switches",
      "OSI Network Model",
      "CCTV Diagnostic",
      "Input Validation",
    ],
  },
  {
    id: "devops",
    category: "DevOps & Environment",
    tag: "INFRASTRUCTURE",
    description: "Containerized environments, automated Git deployments, and cross-platform desktop reliability.",
    icon: "Terminal",
    status: "ACTIVE STACK",
    items: [
      "Docker",
      "AWS / GCP",
      "Vercel Deployment",
      "Git / GitHub Actions",
      "Linux / Bash",
      "Windows 11 Pro",
      "CI/CD Pipelines",
      "Process Runbooks",
    ],
  },
  {
    id: "ai-innovation",
    category: "AI & Emerging Tools",
    tag: "APPLIED AI",
    description: "Integrating LLM intelligence, local-first browser extension tools, and automated evaluation workflows.",
    icon: "Sparkles",
    status: "ACTIVE EXPLORATION",
    items: [
      "AI Integrations",
      "LLM APIs",
      "Chrome Extensions (MV3)",
      "Model Evaluation",
      "Prompt Workflows",
      "Local-First Software",
      "Multi-Agent Patterns",
      "Desktop Automation",
    ],
  },
];

export default skills;
