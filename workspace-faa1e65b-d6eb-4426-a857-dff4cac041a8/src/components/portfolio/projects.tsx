"use client";

import { motion } from "framer-motion";
import { CheckCircle2, FolderGit2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { SectionHeading } from "./section-heading";
import { projects } from "@/lib/portfolio-data";

export function Projects() {
  return (
    <section id="projects" className="light-grid relative bg-white py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Projects"
          title="Things I've Built"
          description="A selection of projects that showcase my ability to solve real problems with modern technology."
        />

        <div className="grid gap-8 lg:grid-cols-2">
          {projects.map((project, i) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.12, ease: "easeOut" }}
              className="group relative flex flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition-all hover:-translate-y-1.5 hover:border-teal-300 hover:shadow-xl hover:shadow-teal-500/10"
            >
              {/* Card header banner */}
              <div className="relative overflow-hidden bg-slate-950 px-6 py-8 sm:px-8">
                <div
                  aria-hidden="true"
                  className="dot-grid absolute inset-0 opacity-60"
                />
                <div
                  aria-hidden="true"
                  className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-teal-500/20 blur-3xl transition-all group-hover:bg-teal-500/30"
                />
                <div className="relative flex items-start justify-between gap-4">
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-teal-500/15 text-teal-400 ring-1 ring-teal-500/30">
                    <project.icon className="h-6 w-6" aria-hidden="true" />
                  </span>
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-white/5 px-3 py-1 text-xs font-medium text-slate-300 ring-1 ring-white/10">
                    <FolderGit2 className="h-3.5 w-3.5 text-teal-400" aria-hidden="true" />
                    Project {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <h3 className="font-display relative mt-5 text-xl font-bold leading-snug text-white sm:text-2xl">
                  {project.title}
                </h3>
                <p className="relative mt-2 text-sm leading-relaxed text-slate-400">
                  {project.description}
                </p>
              </div>

              {/* Card body */}
              <div className="flex flex-1 flex-col p-6 sm:p-8">
                <ul className="flex-1 space-y-3">
                  {project.points.map((point) => (
                    <li key={point} className="flex items-start gap-3">
                      <CheckCircle2
                        className="mt-0.5 h-4.5 w-4.5 shrink-0 text-teal-500"
                        aria-hidden="true"
                      />
                      <span className="text-sm leading-relaxed text-slate-600">
                        {point}
                      </span>
                    </li>
                  ))}
                </ul>

                <div className="mt-6 flex flex-wrap gap-2 border-t border-slate-100 pt-5">
                  {project.tech.map((t) => (
                    <Badge
                      key={t}
                      variant="secondary"
                      className="rounded-full bg-teal-500/10 px-3 py-1 text-xs font-medium text-teal-700 ring-1 ring-teal-500/20"
                    >
                      {t}
                    </Badge>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
