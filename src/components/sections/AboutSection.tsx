export default function AboutSection() {
  return (
    <section className="mb-40 grid grid-cols-12 gap-gutter border-t border-outline-variant pt-24" id="about">
      <div className="col-span-12 md:col-span-4">
        <h2 className="font-serif text-headline-lg text-on-background">About</h2>
        <div className="mt-4 font-mono text-label-sm text-primary uppercase tracking-widest">The Architect</div>
      </div>
      <div className="col-span-12 md:col-span-8">
        <p className="font-mono text-body-lg text-on-surface-variant leading-relaxed mb-8">
          Based in Lagos, Gabriel is a Computer Engineering student and founder of NexRate. He specializes in building scalable systems that solve real-world problems.
        </p>
        <p className="font-mono text-body-lg text-on-surface-variant leading-relaxed mb-12">
          My approach is rooted in the belief that engineering is as much about narrative as it is about syntax. I build products that speak to their users while maintaining a rigid, high-performance back-end infrastructure.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h4 className="font-mono text-label-sm text-on-background mb-4 border-b border-outline-variant pb-2 uppercase tracking-wider">LOCATION</h4>
            <p className="font-mono text-body-md text-on-surface-variant">Lagos, Nigeria // GMT+1</p>
          </div>
          <div>
            <h4 className="font-mono text-label-sm text-on-background mb-4 border-b border-outline-variant pb-2 uppercase tracking-wider">EDUCATION</h4>
            <p className="font-mono text-body-md text-on-surface-variant">Computer Engineering Undergrad</p>
          </div>
        </div>
      </div>
    </section>
  );
}
