import ContactForm from "@/components/common/ContactForm";
import personal from "@/data/personal";

export default function ContactSection() {
  return (
    <section className="mb-40 grid grid-cols-12 gap-gutter pt-12 border-t border-outline-variant" id="contact">
      <div className="col-span-12 md:col-span-5">
        <h2 className="font-serif text-headline-lg text-on-background mb-4">Start a Connection</h2>
        <p className="font-mono text-body-md text-on-surface-variant mb-12">
          Available for consulting, full-time engineering roles, or architectural deep-dives.
        </p>
        <div className="space-y-6">
          <a
            className="block font-mono text-label-sm text-on-background hover:text-primary transition-colors flex items-center gap-4"
            href={`mailto:${personal.email}`}
          >
            <span className="material-symbols-outlined text-primary">mail</span> {personal.email}
          </a>
          <a
            className="block font-mono text-label-sm text-on-background hover:text-primary transition-colors flex items-center gap-4"
            href={personal.linkedin}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="material-symbols-outlined text-primary">link</span> LinkedIn Profile
          </a>
          <a
            className="block font-mono text-label-sm text-on-background hover:text-primary transition-colors flex items-center gap-4"
            href={personal.github}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="material-symbols-outlined text-primary">terminal</span> GitHub Profile
          </a>
          {personal.x && (
            <a
              className="block font-mono text-label-sm text-on-background hover:text-primary transition-colors flex items-center gap-4"
              href={personal.x}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="material-symbols-outlined text-primary">share</span> Twitter / X
            </a>
          )}
        </div>
      </div>
      <div className="col-span-12 md:col-span-7 bg-[#20201e] p-8 md:p-12">
        <ContactForm />
      </div>
    </section>
  );
}
