export interface Project {
  id: string;
  name: string;
  description: string;
  technologies: string[];
  image: string;
  liveDemo?: string;
  github?: string;
}

export const projects: Project[] = [
  {
    id: "gathrio",
    name: "Gathrio",
    description: "An event booking, ticketing & management platform designed for high-concurrency performance and intuitive administration.",
    technologies: ["Next.js", "Express", "PostgreSQL", "Prisma"],
    image: "/images/projects/gathrio.png",
    github: "https://github.com/GATHRIO/Gathrio",
  },
  {
    id: "nexrate",
    name: "NexRate",
    description: "A fintech/crypto product with AI-powered features providing real-time insights and exchange rate aggregations.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Node.js", "AI Integration"],
    image: "/images/projects/nexrate.png",
    liveDemo: "https://nexrate.app",
    github: "https://github.com/Leogabson/nexrate",
  },
  {
    id: "lautech-studyhub",
    name: "Lautech-StudyHub",
    description: "A real-time collaboration tool and academic resource sharing platform for university students.",
    technologies: ["React", "Firebase", "Tailwind CSS", "JavaScript"],
    image: "/images/projects/lautech-studyhub.png",
    liveDemo: "https://lautech-studyhub.vercel.app",
    github: "https://github.com/Leogabson/Lautech-StudyHub",
  },
  {
    id: "simple-rest-api",
    name: "Simple-Rest-API",
    description: "A robust Node.js/Express REST API with full CRUD operations on tasks, structured routes, and request validation.",
    technologies: ["Node.js", "Express", "REST API", "JavaScript"],
    image: "",
    github: "https://github.com/Leogabson/Simple-Rest-API",
  },
  {
    id: "solvigil",
    name: "SolVigil",
    description: "SolVigil is a unified platform designed specifically for West African (and particularly Nigerian) households and businesses. It solves the critical fragmentation in off-grid power and surveillance setups by combining Solar Inverter System Monitoring and CCTV Camera Health Tracking into a single, cohesive, AI-powered dashboard.",
    technologies: ["Next.js 15", "TypeScript", "Zustand", "Prisma", "PostgreSQL", "Tailwind CSS v4", "Recharts", "Lucide React"],
    image: "",
    github: "https://github.com/Leogabson/solvigil",
  },
];

export default projects;
