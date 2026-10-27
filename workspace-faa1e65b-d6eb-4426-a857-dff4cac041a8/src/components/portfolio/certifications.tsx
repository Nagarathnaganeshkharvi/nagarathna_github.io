"use client";

import { motion } from "framer-motion";
import { BadgeCheck, ShieldCheck } from "lucide-react";
import { SectionHeading } from "./section-heading";
import { certifications } from "@/lib/portfolio-data";

export function Certifications() {
  return (
    <section id="certifications" className="relative bg-slate-50 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Certifications"
          title="Credentials & Achievements"
          description="Recognized training programs and certifications that validate my technical skills."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {certifications.map((cert, i) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, delay: i * 0.1, ease: "easeOut" }}
              className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:border-teal-300 hover:shadow-lg hover:shadow-teal-500/10 sm:p-7"
            >
              <div
                aria-hidden="true"
                className="absolute -right-8 -top-8 h-28 w-28 rounded-full bg-teal-500/10 blur-2xl transition-all group-hover:bg-teal-500/20"
              />
              <div className="relative">
                <div className="mb-5 flex items-center justify-between">
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-teal-500/10 text-teal-600 ring-1 ring-teal-500/20 transition-colors group-hover:bg-teal-500 group-hover:text-white">
                    <ShieldCheck className="h-6 w-6" aria-hidden="true" />
                  </span>
                  <BadgeCheck
                    className="h-5 w-5 text-teal-500"
                    aria-label="Verified certification"
                  />
                </div>
                <h3 className="font-display text-base font-bold leading-snug text-slate-900">
                  {cert.title}
                </h3>
                <p className="mt-2 text-sm font-medium text-slate-500">
                  Issued by{" "}
                  <span className="font-semibold text-teal-700">
                    {cert.issuer}
                  </span>
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
