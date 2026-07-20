export interface Service {
  id: string;
  number: string;
  title: string;
  category: string;
  description: string;
  image: string;
  tags: string[];
}

export const services: Service[] = [
  {
    id: "fullstack-dev",
    number: "01",
    title: "Full-Stack Application Development",
    category: "APPLICATION ARCHITECTURE",
    description: "Building resilient, high-performance web applications from ground zero to production using Next.js, React, Node.js, and TypeScript.",
    image: "/images/Services/How Modern Web Applications Are Built_ Understanding Key Development Roles.jpg",
    tags: ["Next.js", "React", "TypeScript", "Node.js"],
  },
  {
    id: "api-microservices",
    number: "02",
    title: "API Architecture & Real-Time Microservices",
    category: "SYSTEM INTEGRATION",
    description: "Designing type-safe REST APIs and low-latency WebSocket communication layers with Node.js, Express, Flask, and Go.",
    image: "/images/Services/https___appdevelopmentcompanies_co_mobile-apps_why-custom-api-development-services-are-the-backbone-.jpg",
    tags: ["REST API", "WebSocket", "Express", "Go"],
  },
  {
    id: "multitenant-saas",
    number: "03",
    title: "Multi-Tenant SaaS Engineering",
    category: "SAAS PLATFORMS",
    description: "Structuring modular multi-tenant database schemas, subscription management, role-based access control (RBAC), and tenant isolation.",
    image: "/images/Services/Attributes of STEM Education - Technical Education Post.jpg",
    tags: ["Multi-Tenant", "PostgreSQL", "Prisma", "SaaS"],
  },
  {
    id: "cloud-devops",
    number: "04",
    title: "Cloud Infrastructure & DevOps Pipeline",
    category: "INFRASTRUCTURE",
    description: "Configuring Docker containerization, CI/CD deployment pipelines, PostgreSQL database optimization, and Vercel/AWS hosting.",
    image: "/images/Services/Explorez la Puissance du Cloud.jpg",
    tags: ["Docker", "CI/CD", "PostgreSQL", "Vercel / AWS"],
  },
  {
    id: "security-crypto",
    number: "05",
    title: "Security & End-to-End Cryptography",
    category: "CYBERSECURITY & ENCRYPTION",
    description: "Implementing client-side encryption protocols (AES-256-GCM, Web Crypto API), authenticated key exchange, and security audits.",
    image: "/images/Services/Importancia de la protecci n de datos digitales.jpg",
    tags: ["AES-256", "Web Crypto API", "Security", "Python"],
  },
];

export default services;
