"use client";

import { motion } from "framer-motion";
import { Briefcase, Building2, CheckCircle2 } from "lucide-react";
import { SectionHeading } from "./section-heading";
import { experiences } from "@/lib/portfolio-data";

export function Experience() {
  return (
    <section id="experience" className="relative bg-slate-50 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Experience"
          title="Where I've Worked"
          description="Hands-on industry training and internship experience that shaped my full stack development skills."
        />

        <div className="relative mx-auto max-w-3xl">
          {/* Timeline rail */}
          <div
            aria-hidden="true"
            className="absolute left-[27px] top-2 h-[calc(100%-16px)] w-px bg-gradient-to-b from-teal-500/60 via-slate-300 to-transparent sm:left-[31px]"
          />

          <ol className="space-y-8">
            {experiences.map((exp, i) => (
              <motion.li
                key={exp.company}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.55, delay: i * 0.12, ease: "easeOut" }}
                className="relative flex gap-4 sm:gap-6"
              >
                {/* Timeline node */}
                <span
                  className={`relative z-10 mt-1 flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl ring-1 sm:h-16 sm:w-16 ${
                    exp.current
                      ? "bg-teal-500 text-slate-950 ring-teal-400 shadow-lg shadow-teal-500/30"
                      : "bg-white text-teal-600 ring-slate-200 shadow-sm"
                  }`}
                >
                  <Briefcase className="h-6 w-6" aria-hidden="true" />
                </span>

                {/* Card */}
                <div className="flex-1 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:-translate-y-0.5 hover:border-teal-300 hover:shadow-lg sm:p-7">
                  <div className="flex flex-wrap items-start justify-between gap-2">
                    <div>
                      <h3 className="font-display text-lg font-bold text-slate-900">
                        {exp.role}
                      </h3>
                      <p className="mt-1 flex items-center gap-1.5 text-sm font-medium text-teal-700">
                        <Building2 className="h-4 w-4" aria-hidden="true" />
                        {exp.company}
                        {exp.current && (
                          <span className="ml-2 rounded-full bg-teal-500/10 px-2.5 py-0.5 text-xs font-semibold text-teal-700 ring-1 ring-teal-500/25">
                            Latest
                          </span>
                        )}
                      </p>
                    </div>
                    <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600">
                      {exp.period}
                    </span>
                  </div>

                  <ul className="mt-4 space-y-2.5">
                    {exp.points.map((point) => (
                      <li key={point} className="flex items-start gap-2.5">
                        <CheckCircle2
                          className="mt-0.5 h-4 w-4 shrink-0 text-teal-500"
                          aria-hidden="true"
                        />
                        <span className="text-sm leading-relaxed text-slate-600">
                          {point}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
