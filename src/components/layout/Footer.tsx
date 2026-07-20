import personal from "@/data/personal";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full max-w-[1200px] mx-auto px-6 md:px-margin-page py-12 flex flex-col md:flex-row justify-between items-center gap-gutter border-t border-outline-variant">
      <div className="font-mono text-label-sm uppercase tracking-widest text-on-surface-variant text-center md:text-left">
        © {currentYear} {personal.name.toUpperCase()}{" // ENGINEER & FOUNDER"}
      </div>
      <nav className="flex flex-wrap justify-center gap-8 mt-4 md:mt-0">
        <a
          href={personal.github}
          target="_blank"
          rel="noopener noreferrer"
          className="font-mono text-label-sm text-on-surface-variant hover:text-primary underline decoration-primary transition-all opacity-80 hover:opacity-100"
        >
          GitHub
        </a>
        <a
          href={personal.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="font-mono text-label-sm text-on-surface-variant hover:text-primary underline decoration-primary transition-all opacity-80 hover:opacity-100"
        >
          LinkedIn
        </a>
        <a
          href={`mailto:${personal.email}`}
          className="font-mono text-label-sm text-on-surface-variant hover:text-primary underline decoration-primary transition-all opacity-80 hover:opacity-100"
        >
          Email
        </a>
        <a
          href={personal.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="font-mono text-label-sm text-on-surface-variant hover:text-primary underline decoration-primary transition-all opacity-80 hover:opacity-100"
        >
          WhatsApp
        </a>
      </nav>
    </footer>
  );
}
