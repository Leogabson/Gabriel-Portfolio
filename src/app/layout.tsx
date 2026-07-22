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
    "Full-stack engineer building products from concept to scale — architecture, backend systems, and user-centric design.",
  keywords: [
    "Gabriel Ehuwa",
    "Leo Gabson",
    "Software Engineer",
    "Fullstack Developer",
    "React Developer",
    "Next.js",
    "Node.js",
    "Go Developer",
    "Lagos Nigeria",
    "NexRate",
    "SolVigil",
    "Gathrio",
    "Top Website developers in Nigeria",
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
    title: "Gabriel Ehuwa | Software Engineer",
    description:
      "Full-stack engineer building products from concept to scale — architecture, backend systems, and user-centric design.",
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
    title: "Gabriel Ehuwa | Software Engineer",
    description:
      "Full-stack engineer building products from concept to scale — architecture, backend systems, and user-centric design.",
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
    "Full-stack engineer building products from concept to scale — architecture, backend systems, and user-centric design.",
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
    "PostgreSQL",
    "Fullstack Development",
    "Software Architecture",
  ],
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
