"use client";

import { motion } from "framer-motion";
import { GraduationCap, School, BookOpen, Award } from "lucide-react";
import { SectionHeading } from "./section-heading";
import { education } from "@/lib/portfolio-data";

const icons = [GraduationCap, School, BookOpen];

export function Education() {
  return (
    <section id="education" className="light-grid relative bg-white py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Education"
          title="My Academic Journey"
          description="The academic foundation that supports my engineering practice."
        />

        <div className="grid gap-6 md:grid-cols-3">
          {education.map((edu, i) => (
            <motion.div
              key={edu.degree}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, delay: i * 0.1, ease: "easeOut" }}
              className={`group flex flex-col rounded-2xl border p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg sm:p-7 ${
                i === 0
                  ? "border-teal-300 bg-gradient-to-b from-teal-50/60 to-white hover:shadow-teal-500/10"
                  : "border-slate-200 bg-white hover:border-teal-200"
              }`}
            >
              <div className="mb-5 flex items-center justify-between">
                <span
                  className={`flex h-12 w-12 items-center justify-center rounded-xl ring-1 transition-colors ${
                    i === 0
                      ? "bg-teal-500 text-white ring-teal-400"
                      : "bg-teal-500/10 text-teal-600 ring-teal-500/20 group-hover:bg-teal-500 group-hover:text-white"
                  }`}
                >
                  {(() => {
                    const Icon = icons[i % icons.length];
                    return <Icon className="h-6 w-6" aria-hidden="true" />;
                  })()}
                </span>
                <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600">
                  {edu.period}
                </span>
              </div>

              <h3 className="font-display text-lg font-bold leading-snug text-slate-900">
                {edu.degree}
              </h3>
              <p className="mt-1.5 text-sm text-slate-500">{edu.institution}</p>

              <div className="mt-auto pt-5">
                <div
                  className={`flex items-center justify-between rounded-xl px-4 py-3 ${
                    i === 0 ? "bg-teal-500/10" : "bg-slate-50"
                  }`}
                >
                  <span className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wide text-slate-500">
                    <Award
                      className={`h-4 w-4 ${i === 0 ? "text-teal-600" : "text-slate-400"}`}
                      aria-hidden="true"
                    />
                    {edu.scoreLabel}
                  </span>
                  <span
                    className={`font-display text-lg font-bold ${
                      i === 0 ? "text-teal-700" : "text-slate-800"
                    }`}
                  >
                    {edu.score}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
