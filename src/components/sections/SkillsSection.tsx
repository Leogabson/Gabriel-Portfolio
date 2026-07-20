import skills from "@/data/skills";

export default function SkillsSection() {
  return (
    <section className="mb-40" id="skills">
      <div className="technical-line mb-12"></div>
      <h2 className="font-serif text-headline-lg text-on-background mb-12">Stack &amp; Expertise</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
        {skills.map((category) => (
          <div key={category.category} className="border-l border-primary pl-6">
            <h3 className="font-mono text-label-sm text-primary uppercase mb-6 tracking-widest">
              {category.category}
            </h3>
            <ul className="space-y-4 font-mono text-body-md text-on-surface-variant">
              {category.items.map((skill) => (
                <li key={skill} className="flex items-center gap-2">
                  <span className="text-primary text-xs">&gt;</span> {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
