import type { Metadata, Viewport } from "next";
import "./globals.css";
import { ThemeProvider } from "@/context/ThemeContext";
import { PortfolioProvider } from "@/context/PortfolioContext";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { personal } from "@/data/personal";

export const viewport: Viewport = {
  themeColor: "#131312",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: {
    default: "Gabriel Ehuwa | Software Engineer",
    template: "%s | Gabriel Ehuwa",
  },
  alternates: {
    canonical: personal.siteUrl,
  },
  description:
    "Gabriel Ehuwa is a full-stack software engineer based in Lagos, Nigeria — available for hire for remote and on-site roles. Specializes in React, Next.js, Node.js, Go, and scalable backend systems.",
  keywords: [
    // — Brand & Identity
    "Gabriel Ehuwa",
    "Leo Gabson",
    "leogabson",
    // — Role titles (what recruiters search)
    "Software Engineer",
    "Fullstack Developer",
    "Full Stack Engineer",
    "Backend Engineer",
    "Frontend Developer",
    "Web Developer",
    "React Developer",
    "Next.js Developer",
    "Node.js Developer",
    "Go Developer",
    "TypeScript Developer",
    "API Developer",
    "SaaS Developer",
    "Fintech Developer",
    // — Hire intent (recruiter-specific)
    "software engineer available for hire",
    "freelance web developer Nigeria",
    "hire software engineer Nigeria",
    "remote software engineer Nigeria",
    "full stack developer for hire",
    "web developer for hire Lagos",
    // — Location signals
    "Lagos Nigeria",
    "Software Engineer Lagos",
    "Web Developer Lagos Nigeria",
    "Nigeria Software Developer",
    "West Africa Software Engineer",
    // — Projects
    "NexRate",
    "SolVigil",
    "Gathrio",
    "Clestay",
  ],
  authors: [{ name: "Gabriel Ehuwa" }],
  creator: "Gabriel Ehuwa",
  publisher: "Gabriel Ehuwa",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Gabriel Ehuwa | Software Engineer — Available for Hire",
    description:
      "Gabriel Ehuwa is a full-stack software engineer based in Lagos, Nigeria — available for hire for remote and on-site roles. Specializes in React, Next.js, Node.js, Go, and scalable backend systems.",
    url: personal.siteUrl,
    siteName: "Gabriel Ehuwa Portfolio",
    images: [
      {
        url: `${personal.siteUrl}/images/og-image.png`,
        width: 1200,
        height: 630,
        alt: "Gabriel Ehuwa | Software Engineer",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Gabriel Ehuwa | Software Engineer — Available for Hire",
    description:
      "Gabriel Ehuwa is a full-stack software engineer based in Lagos, Nigeria — available for hire for remote and on-site roles. Specializes in React, Next.js, Node.js, Go, and scalable backend systems.",
    images: [`${personal.siteUrl}/images/og-image.png`],
    creator: personal.xHandle,
    site: personal.xHandle,
  },
  icons: {
    icon: "/images/Whisk_a3888015c99f4aca7074dadb5c7c8d4edr.svg",
    shortcut: "/images/Whisk_a3888015c99f4aca7074dadb5c7c8d4edr.svg",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: personal.name,
  url: personal.siteUrl,
  jobTitle: personal.title,
  description:
    "Gabriel Ehuwa is a full-stack software engineer based in Lagos, Nigeria — available for hire for remote and on-site roles. Specializes in React, Next.js, Node.js, Go, and scalable backend systems.",
  image: `${personal.siteUrl}/images/og-image.png`,
  email: `mailto:${personal.email}`,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Lagos",
    addressCountry: "NG",
  },
  worksFor: {
    "@type": "Organization",
    name: "NexRate",
    url: "https://nexrate.app",
  },
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "Ladoke Akintola University of Technology",
  },
  sameAs: [
    personal.github,
    personal.linkedin,
    personal.x,
  ],
  knowsAbout: [
    "React",
    "Next.js",
    "Node.js",
    "Go",
    "TypeScript",
    "JavaScript",
    "PostgreSQL",
    "Prisma ORM",
    "REST API Design",
    "Microservices",
    "SaaS Development",
    "Fintech Engineering",
    "Full Stack Development",
    "Software Architecture",
    "Cloud Deployment",
    "System Design",
    "Database Engineering",
    "Web Performance Optimization",
  ],
  hasOccupation: {
    "@type": "Occupation",
    name: "Software Engineer",
    occupationLocation: {
      "@type": "City",
      name: "Lagos",
    },
    description:
      "Full-stack software engineer specializing in React, Next.js, Node.js, Go, and scalable backend systems. Available for remote and on-site roles.",
    skills:
      "React, Next.js, Node.js, Go, TypeScript, PostgreSQL, REST APIs, SaaS, Fintech",
    estimatedSalary: {
      "@type": "MonetaryAmountDistribution",
      name: "base",
      currency: "USD",
      duration: "P1Y",
      percentile10: 30000,
      percentile90: 80000,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark scroll-smooth" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-mono text-body-md antialiased min-h-screen flex flex-col bg-background text-[#e5e2de] selection:bg-primary-container selection:text-on-primary-container">
        <ThemeProvider>
          <PortfolioProvider>
            <Navbar />
            <main className="flex-grow">{children}</main>
            <Footer />
          </PortfolioProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
