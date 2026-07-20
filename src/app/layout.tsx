import type { Metadata, Viewport } from "next";
import "./globals.css";
import { ThemeProvider } from "@/context/ThemeContext";
import { PortfolioProvider } from "@/context/PortfolioContext";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

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
  description:
    "Engineering full-stack products from concept to scale, bridging the gap between technical architecture and user-centric design.",
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
      "Engineering full-stack products from concept to scale, bridging the gap between technical architecture and user-centric design.",
    url: "https://leogabson.vercel.app",
    siteName: "Gabriel Ehuwa Portfolio",
    images: [
      {
        url: "https://leogabson.vercel.app/images/headshot.png",
        width: 1200,
        height: 1200,
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
      "Engineering full-stack products from concept to scale, bridging the gap between technical architecture and user-centric design.",
    images: ["https://leogabson.vercel.app/images/headshot.png"],
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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark scroll-smooth" suppressHydrationWarning>
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
