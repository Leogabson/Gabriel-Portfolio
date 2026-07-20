import personal from "@/data/personal";

export default function HeroSection() {
  return (
    <section id="hero" className="mt-32 mb-32 max-w-[1200px] mx-auto px-6 md:px-margin-page">
      <div className="grid grid-cols-12 gap-gutter">
        <div className="col-span-12 md:col-span-10">
          <h1 className="font-serif text-headline-xl mb-4 text-on-background">
            {personal.name}
          </h1>
          <p className="font-mono text-label-sm text-primary uppercase tracking-[0.2em] mb-8">
            {personal.title} &amp; Founder
          </p>
          <div className="technical-line mb-8"></div>
          <p className="font-mono text-body-lg max-w-2xl leading-relaxed text-on-surface-variant">
            Engineering full-stack products from concept to scale, bridging the gap between technical architecture and user-centric design.
          </p>
        </div>
      </div>
    </section>
  );
}
