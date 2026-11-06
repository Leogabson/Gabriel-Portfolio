"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Layout,
  Server,
  Database,
  ShieldCheck,
  Terminal,
  Sparkles,
  Calendar,
  MapPin,
  Cpu,
} from "lucide-react";
import skills from "@/data/skills";
import experiences from "@/data/experience";

type ViewTab = "all" | "stack" | "experience";

export default function SkillsSection() {
  const [activeTab, setActiveTab] = useState<ViewTab>("all");

  const renderIcon = (iconName: string) => {
    const props = { className: "w-5 h-5 text-primary", strokeWidth: 1.75 };
    switch (iconName) {
      case "Layout":
        return <Layout {...props} />;
      case "Server":
        return <Server {...props} />;
      case "Database":
        return <Database {...props} />;
      case "ShieldCheck":
        return <ShieldCheck {...props} />;
      case "Terminal":
        return <Terminal {...props} />;
      case "Sparkles":
        return <Sparkles {...props} />;
      default:
        return <Cpu {...props} />;
    }
  };

  const getStatusBadge = (status?: string) => {
    if (status === "PRODUCTION READY") {
      return (
        <span className="inline-flex items-center gap-1.5 font-mono text-[10px] text-emerald-400/90 tracking-wider uppercase">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          Production Ready
        </span>
      );
    }
    if (status === "ACTIVE STACK") {
      return (
        <span className="inline-flex items-center gap-1.5 font-mono text-[10px] text-primary/90 tracking-wider uppercase">
          <span className="w-1.5 h-1.5 rounded-full bg-primary" />
          Active Stack
        </span>
      );
    }
    return (
      <span className="inline-flex items-center gap-1.5 font-mono text-[10px] text-tertiary/90 tracking-wider uppercase">
        <span className="w-1.5 h-1.5 rounded-full bg-tertiary" />
        Active Exploration
      </span>
    );
  };

  return (
    <section
      className="mb-40 max-w-[1200px] mx-auto px-6 md:px-margin-page pt-20"
      id="skills"
    >
      <div className="technical-line mb-12" />

      {/* Header & Controls */}
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-12">
        <div>
          <div className="flex items-center gap-3 font-mono text-label-sm text-primary uppercase tracking-widest mb-3">
            <span className="inline-block w-2 h-2 bg-primary" />
            06 // CAPABILITIES &amp; TRACK RECORD
          </div>
          <h2 className="font-serif text-headline-lg text-on-background mb-4">
            Stack &amp; Experience
          </h2>
          <p className="font-mono text-body-md text-on-surface-variant max-w-2xl leading-relaxed">
            A disciplined engineering toolkit cultivated through full-stack systems architecture,
            defensive security, and hands-on media production IT operations.
          </p>
        </div>

        {/* View Switcher Tabs */}
        <div className="flex items-center gap-2 bg-[#1c1c1a] border border-outline-variant p-1">
          {(
            [
              { id: "all", label: "All" },
              { id: "stack", label: "Tech Stack" },
              { id: "experience", label: "Experience" },
            ] as { id: ViewTab; label: string }[]
          ).map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-2 font-mono text-label-sm uppercase tracking-wider transition-colors duration-200 ${
                activeTab === tab.id
                  ? "bg-primary text-[#131312] font-semibold"
                  : "text-on-surface-variant hover:text-on-background"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* High-Level Engineering Metrics */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16 pb-12 border-b border-outline-variant/40">
        <div className="border border-outline-variant/50 bg-[#181816] p-5">
          <div className="font-mono text-[10px] text-primary uppercase tracking-widest mb-1">
            Experience
          </div>
          <div className="font-serif text-3xl font-medium text-on-background">3+ Years</div>
          <div className="font-mono text-[11px] text-on-surface-variant mt-1">
            Full-stack engineering &amp; IT
          </div>
        </div>
        <div className="border border-outline-variant/50 bg-[#181816] p-5">
          <div className="font-mono text-[10px] text-primary uppercase tracking-widest mb-1">
            Track Record
          </div>
          <div className="font-serif text-3xl font-medium text-on-background">20+</div>
          <div className="font-mono text-[11px] text-on-surface-variant mt-1">
            Production &amp; open-source projects
          </div>
        </div>
        <div className="border border-outline-variant/50 bg-[#181816] p-5">
          <div className="font-mono text-[10px] text-primary uppercase tracking-widest mb-1">
            Reliability
          </div>
          <div className="font-serif text-3xl font-medium text-on-background">100%</div>
          <div className="font-mono text-[11px] text-on-surface-variant mt-1">
            Type-safe &amp; documented workflows
          </div>
        </div>
        <div className="border border-outline-variant/50 bg-[#181816] p-5">
          <div className="font-mono text-[10px] text-primary uppercase tracking-widest mb-1">
            Core Philosophy
          </div>
          <div className="font-serif text-2xl font-medium text-on-background">Local-First</div>
          <div className="font-mono text-[11px] text-on-surface-variant mt-1">
            Sub-100ms response &amp; offline ready
          </div>
        </div>
      </div>

      {/* SECTION 1: TECH STACK BENTO GRID */}
      {(activeTab === "all" || activeTab === "stack") && (
        <div className="mb-20">
          <div className="flex items-center justify-between mb-8">
            <span className="font-mono text-label-sm text-primary uppercase tracking-widest">
              STACK MATRIX // 6 SPECIALIZED DOMAINS
            </span>
            <span className="hidden sm:inline font-mono text-[11px] text-on-surface-variant/60">
              Interactive technology tags
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((domain) => (
              <motion.div
                key={domain.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.4 }}
                className="group relative border border-outline-variant bg-[#1c1c1a] hover:border-primary/60 transition-colors duration-300 p-7 flex flex-col justify-between"
              >
                {/* Subtle top indicator bar */}
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-transparent group-hover:bg-primary transition-colors duration-300" />

                <div>
                  {/* Header with Icon, Tag and Title */}
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <div className="p-2.5 bg-[#131312] border border-outline-variant/60 group-hover:border-primary/40 transition-colors">
                      {renderIcon(domain.icon)}
                    </div>
                    <span className="font-mono text-[9px] uppercase tracking-wider text-primary border border-primary/30 px-2 py-0.5 bg-[#131312]">
                      {domain.tag}
                    </span>
                  </div>

                  <h3 className="font-serif text-headline-sm text-on-background group-hover:text-primary transition-colors mb-2">
                    {domain.category}
                  </h3>

                  <p className="font-mono text-body-sm text-on-surface-variant leading-relaxed mb-6">
                    {domain.description}
                  </p>

                  {/* Skill Badges */}
                  <div className="flex flex-wrap gap-2 mb-8">
                    {domain.items.map((skill) => (
                      <span
                        key={skill}
                        className="px-2.5 py-1 bg-[#131312] border border-outline-variant/60 font-mono text-[11px] text-on-surface-variant group-hover:border-primary/30 hover:border-primary hover:text-on-background transition-all duration-200 flex items-center gap-1.5"
                      >
                        <span className="w-1 h-1 rounded-full bg-primary/70" />
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Status Indicator Footer */}
                <div className="pt-4 border-t border-outline-variant/40 flex items-center justify-between">
                  {getStatusBadge(domain.status)}
                  <span className="font-mono text-[10px] text-on-surface-variant/40 group-hover:text-primary transition-colors">
                    {domain.items.length} TECHNOLOGIES
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      )}

      {/* SECTION 2: TECHNICAL EXPERIENCE & ROLES */}
      {(activeTab === "all" || activeTab === "experience") && (
        <div className="mb-20">
          <div className="flex items-center justify-between mb-8">
            <span className="font-mono text-label-sm text-primary uppercase tracking-widest">
              HANDS-ON EXPERIENCE // ROLES &amp; IMPACT
            </span>
          </div>

          <div className="space-y-8">
            {experiences.map((exp, idx) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.4 }}
                className="border border-outline-variant bg-[#1c1c1a] p-8 md:p-10 group hover:border-primary/60 transition-colors duration-300"
              >
                <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6 mb-6">
                  <div>
                    <div className="flex flex-wrap items-center gap-3 mb-2">
                      <span className="font-mono text-[10px] uppercase tracking-widest text-primary border border-primary/40 px-2.5 py-0.5 bg-[#131312]">
                        {exp.badge}
                      </span>
                      <span className="font-mono text-xs text-on-surface-variant">
                        0{idx + 1} // {exp.type}
                      </span>
                    </div>

                    <h3 className="font-serif text-2xl md:text-3xl text-on-background group-hover:text-primary transition-colors">
                      {exp.role}
                    </h3>

                    <div className="font-mono text-body-md text-primary mt-1">
                      {exp.company}
                    </div>
                  </div>

                  <div className="flex flex-wrap lg:flex-col lg:items-end gap-2 lg:gap-1 font-mono text-xs text-on-surface-variant">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-3.5 h-3.5 text-primary" />
                      <span>{exp.period}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-3.5 h-3.5 text-primary" />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </div>

                <p className="font-mono text-body-md text-on-surface-variant leading-relaxed mb-6">
                  {exp.description}
                </p>

                {/* Highlights Bullet List */}
                <div className="mb-8 space-y-2.5 bg-[#131312] border border-outline-variant/40 p-5">
                  <div className="font-mono text-[10px] text-primary uppercase tracking-widest mb-3">
                    Key Responsibilities &amp; Outcomes
                  </div>
                  {exp.highlights.map((highlight, hIdx) => (
                    <div key={hIdx} className="flex items-start gap-3">
                      <span className="text-primary text-xs mt-1 shrink-0">✦</span>
                      <p className="font-mono text-body-sm text-on-surface-variant leading-relaxed">
                        {highlight}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Technologies Used in This Role */}
                <div className="flex flex-wrap items-center gap-2 pt-4 border-t border-outline-variant/40">
                  <span className="font-mono text-[10px] text-on-surface-variant uppercase tracking-wider mr-2">
                    Tools Applied:
                  </span>
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 border border-outline-variant font-mono text-[10px] text-on-surface-variant uppercase group-hover:border-primary/40 group-hover:text-on-background transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      )}

      {/* SECTION 3: WORKING APPROACH & METHODOLOGY */}
      <div className="mt-16 pt-12 border-t border-outline-variant/60">
        <div className="font-mono text-label-sm text-primary uppercase tracking-widest mb-8">
          ROLE-RELEVANT METHODOLOGY // HOW I WORK
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="border border-outline-variant bg-[#181816] p-6">
            <div className="font-mono text-[10px] text-primary uppercase tracking-widest mb-2">
              01 // INVESTIGATION
            </div>
            <h4 className="font-serif text-xl text-on-background mb-3">
              Methodical Diagnostics
            </h4>
            <p className="font-mono text-body-sm text-on-surface-variant leading-relaxed">
              Investigating technical bottlenecks through systematic telemetry and root-cause
              tracing rather than speculative patching.
            </p>
          </div>

          <div className="border border-outline-variant bg-[#181816] p-6">
            <div className="font-mono text-[10px] text-primary uppercase tracking-widest mb-2">
              02 // DOCUMENTATION
            </div>
            <h4 className="font-serif text-xl text-on-background mb-3">
              Reproducible Records
            </h4>
            <p className="font-mono text-body-sm text-on-surface-variant leading-relaxed">
              Writing step-by-step procedures, annotated logs, and architecture specs so that any
              collaborator can reproduce and verify outcomes.
            </p>
          </div>

          <div className="border border-outline-variant bg-[#181816] p-6">
            <div className="font-mono text-[10px] text-primary uppercase tracking-widest mb-2">
              03 // RELIABILITY
            </div>
            <h4 className="font-serif text-xl text-on-background mb-3">
              Independent Execution
            </h4>
            <p className="font-mono text-body-sm text-on-surface-variant leading-relaxed">
              Autonomous problem-solving equipped with defensive error handling, automated tests,
              and disciplined Git release management.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
