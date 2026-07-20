"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence, LayoutGroup } from "framer-motion";
import projects from "@/data/projects";
import {
  cardStaggerContainer,
  fadeUp,
  hoverTransition,
  scrollRevealTransition,
  useMotionSafe,
  viewportOnce,
  viewportRepeat,
} from "@/lib/motion";

type FilterCategory = "All" | "Full-stack" | "Frontend" | "Backend";

const FILTERS: FilterCategory[] = ["All", "Full-stack", "Frontend", "Backend"];

const MAJOR_IDS = ["gathrio", "nexrate", "clestay", "matrix-encryption"];

function filterProjects(filter: FilterCategory) {
  return projects.filter((project) => {
    if (filter === "All") return true;
    if (filter === "Full-stack") {
      return (
        project.category?.includes("FULL-STACK") ||
        project.technologies.some((t) =>
          ["PostgreSQL", "Prisma", "Go", "Zustand", "Express", "JAVA", "TYPESCRIPT", "MULTI-TENANT", "SAAS", "FLASK", "SOCKET.IO", "SQLALCHEMY", "PYTHON"].includes(t.toUpperCase()),
        )
      );
    }
    if (filter === "Frontend") return project.id === "lautech-studyhub";
    if (filter === "Backend") {
      return (
        project.id === "simple-rest-api" ||
        project.category?.includes("SECURITY") ||
        project.technologies.some((t) =>
          ["FLASK", "PYTHON", "JAVA", "EXPRESS"].includes(t.toUpperCase()),
        )
      );
    }
    return true;
  });
}

export default function ProjectsSection() {
  const [filter, setFilter] = useState<FilterCategory>("All");
  const tabsRef = useRef<HTMLDivElement>(null);
  const { reducedMotion } = useMotionSafe();

  const filteredProjects = filterProjects(filter);
  const majorProjects = filteredProjects.filter((p) => MAJOR_IDS.includes(p.id));
  const secondaryProjects = filteredProjects.filter((p) => !MAJOR_IDS.includes(p.id));

  const cardTransition = reducedMotion
    ? { duration: 0 }
    : scrollRevealTransition;

  const gridTransition = reducedMotion
    ? { duration: 0 }
    : { duration: 0.25, ease: [0.25, 0.1, 0.25, 1] as const };

  return (
    <section className="mb-40 pt-20" id="projects">
      <div className="max-w-[1200px] mx-auto px-6 md:px-margin-page">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div>
            <h2 className="font-serif text-headline-lg text-on-background mb-4">
              Selected Works
            </h2>
            <div className="flex flex-wrap gap-4 items-center">
              <span className="font-mono text-label-sm text-primary uppercase">
                Filter //
              </span>
              <LayoutGroup id="project-filters">
                <div ref={tabsRef} className="relative flex gap-4">
                  {FILTERS.map((category) => (
                    <button
                      key={category}
                      onClick={() => setFilter(category)}
                      className={`relative font-mono text-label-sm pb-1 transition-colors duration-300 ${
                        filter === category
                          ? "text-primary"
                          : "text-on-surface-variant hover:text-primary"
                      }`}
                    >
                      {category}
                      {filter === category && (
                        <motion.span
                          layoutId="filter-underline"
                          className="absolute left-0 right-0 -bottom-px h-px bg-primary"
                          transition={
                            reducedMotion
                              ? { duration: 0 }
                              : { duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }
                          }
                        />
                      )}
                    </button>
                  ))}
                </div>
              </LayoutGroup>
            </div>
          </div>
          <div className="hidden md:block font-mono text-label-sm text-on-surface-variant opacity-40">
            SCROLL TO EXPLORE ↓
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={filter}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={reducedMotion ? undefined : { opacity: 0 }}
            transition={gridTransition}
          >
            <motion.div
              className="space-y-32 mb-32"
              variants={cardStaggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
            >
              {majorProjects.map((project, index) => {
                const isEven = index % 2 === 0;
                const projectNum = projects.findIndex(p => p.id === project.id) + 1;
                return (
                  <motion.div
                    key={project.id}
                    variants={fadeUp}
                    transition={cardTransition}
                    className="grid grid-cols-12 gap-gutter group items-center"
                  >
                    <motion.div
                      className={`col-span-12 md:col-span-7 ${isEven ? "order-1" : "order-1 md:order-2"}`}
                      whileHover={
                        reducedMotion ? undefined : { scale: 1.02 }
                      }
                      transition={hoverTransition}
                    >
                      <div className="browser-frame overflow-hidden bg-[#20201e] aspect-[16/10] relative">
                        <Image
                          src={project.image}
                          alt={`${project.name} Dashboard Mockup`}
                          fill
                          sizes="(max-width: 768px) 100vw, 700px"
                          className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-300 ease-out"
                        />
                      </div>
                    </motion.div>

                    <div
                      className={`col-span-12 md:col-span-5 flex flex-col justify-center ${isEven ? "order-2 pl-0 md:pl-8" : "order-2 md:order-1 pr-0 md:pr-8"}`}
                    >
                      <div className="font-mono text-label-sm text-on-surface-variant mb-4 uppercase tracking-widest">
                        {`0${projectNum} // ${project.category || "FULL-STACK"}`}
                      </div>
                      <h3 className="font-serif text-headline-md text-on-background mb-4">
                        {project.name}
                      </h3>
                      <p className="font-mono text-body-md text-on-surface-variant mb-8 leading-relaxed">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-2 mb-8">
                        {project.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 border border-outline-variant font-mono text-[10px] text-on-surface-variant uppercase group-hover:border-primary/40 transition-colors duration-300"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                      <div className="flex gap-8">
                        {project.liveDemo && (
                          <a
                            className="font-mono text-label-sm text-on-background border-b border-primary hover:text-primary transition-colors duration-300 inline-flex items-center gap-2"
                            href={project.liveDemo}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Live Demo{" "}
                            <span className="material-symbols-outlined text-sm">
                              north_east
                            </span>
                          </a>
                        )}
                        {project.github && (
                          <a
                            className="font-mono text-label-sm text-on-background border-b border-primary hover:text-primary transition-colors duration-300 inline-flex items-center gap-2"
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Source{" "}
                            <span className="material-symbols-outlined text-sm">
                              code
                            </span>
                          </a>
                        )}
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>

            {secondaryProjects.length > 0 && (
              <motion.div
                className="grid grid-cols-12 gap-gutter pt-12 border-t border-outline-variant"
                variants={cardStaggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={viewportRepeat}
              >
                {secondaryProjects.map((project, idx) => {
                  const number = idx + 3;
                  let sectionLabel = "SYSTEMS";
                  if (project.id === "lautech-studyhub")
                    sectionLabel = "EDUCATION";
                  if (project.id === "simple-rest-api")
                    sectionLabel = "UTILITIES";

                  return (
                    <motion.div
                      key={project.id}
                      variants={fadeUp}
                      transition={cardTransition}
                      whileHover={
                        reducedMotion ? undefined : { scale: 1.02 }
                      }
                      className="col-span-12 md:col-span-4 border border-outline-variant p-8 flex flex-col justify-between bg-[#1c1c1a] group hover:border-primary/40 transition-colors duration-300"
                    >
                      <div>
                        <div className="font-mono text-[10px] text-on-surface-variant mb-4 uppercase tracking-widest">
                          {`0${number} // ${sectionLabel}`}
                        </div>
                        <h3 className="font-serif text-headline-md text-on-background mb-4">
                          {project.name}
                        </h3>
                        <p className="font-mono text-body-md text-on-surface-variant mb-6 leading-relaxed">
                          {project.description}
                        </p>
                      </div>

                      <div>
                        <div className="flex flex-wrap gap-2 mb-6">
                          {project.technologies.slice(0, 4).map((tech) => (
                            <span
                              key={tech}
                              className="px-2 py-0.5 border border-outline-variant font-mono text-[9px] text-on-surface-variant uppercase"
                            >
                              {tech}
                            </span>
                          ))}
                          {project.technologies.length > 4 && (
                            <span className="px-2 py-0.5 border border-outline-variant font-mono text-[9px] text-on-surface-variant uppercase">
                              +{project.technologies.length - 4} MORE
                            </span>
                          )}
                        </div>

                        <div className="flex gap-4">
                          {project.liveDemo && (
                            <a
                              className="font-mono text-[11px] text-on-background border-b border-primary hover:text-primary transition-colors duration-300 inline-flex items-center gap-1"
                              href={project.liveDemo}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              Live{" "}
                              <span className="material-symbols-outlined text-[11px]">
                                north_east
                              </span>
                            </a>
                          )}
                          {project.github && (
                            <a
                              className="font-mono text-[11px] text-on-background border-b border-primary hover:text-primary transition-colors duration-300 inline-flex items-center gap-1"
                              href={project.github}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              Code{" "}
                              <span className="material-symbols-outlined text-[11px]">
                                code
                              </span>
                            </a>
                          )}
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </motion.div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}

