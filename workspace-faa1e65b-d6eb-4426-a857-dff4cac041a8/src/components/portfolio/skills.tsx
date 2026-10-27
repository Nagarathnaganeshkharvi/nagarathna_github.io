"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { SectionHeading } from "./section-heading";
import { skillGroups } from "@/lib/portfolio-data";

export function Skills() {
  return (
    <section
      id="skills"
      className="relative bg-slate-50 py-20 md:py-28"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Technical Skills"
          title="My Tech Stack"
          description="Tools and technologies I use to design, build, and ship full stack applications."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {skillGroups.map((group, i) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, delay: i * 0.1, ease: "easeOut" }}
              className="flex flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="mb-5 flex items-center gap-3">
                <span
                  className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg ring-1 ring-black/5 ${group.accent}`}
                >
                  <group.icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <h3 className="font-display text-sm font-bold leading-snug text-slate-900">
                  {group.title}
                </h3>
              </div>

              <ul className="flex flex-1 flex-wrap content-start gap-2">
                {group.skills.map((skill) => (
                  <li key={skill.name}>
                    <Badge
                      variant="secondary"
                      className="cursor-default gap-1.5 rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs font-medium text-slate-700 transition-colors hover:border-teal-300 hover:bg-teal-50 hover:text-teal-800"
                    >
                      <skill.icon
                        className="h-3.5 w-3.5 text-teal-600"
                        aria-hidden="true"
                      />
                      {skill.name}
                    </Badge>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
