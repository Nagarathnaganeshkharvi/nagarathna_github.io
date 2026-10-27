"use client";

import { motion } from "framer-motion";
import { GraduationCap, Target, Rocket, HeartHandshake } from "lucide-react";
import { SectionHeading } from "./section-heading";
import { profile, stats } from "@/lib/portfolio-data";

const highlights = [
  {
    icon: GraduationCap,
    title: "B.E. Computer Science & Business System",
    text: "Graduated from Canara Engineering College (VTU) with a CGPA of 7.66/10, blending core CS with business thinking.",
  },
  {
    icon: Target,
    title: "Full Stack Foundations",
    text: "Strong command over Java, Spring Boot, ReactJS and SQL with hands-on training from two industry internships.",
  },
  {
    icon: Rocket,
    title: "Project-Driven Learner",
    text: "Built a blockchain e-voting platform and an ML-based skin lesion classifier — always shipping, always learning.",
  },
  {
    icon: HeartHandshake,
    title: "Team Player",
    text: "Passionate about problem-solving and eager to contribute to real-world software development projects.",
  },
];

export function About() {
  return (
    <section id="about" className="light-grid relative bg-white py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="About Me"
          title="Turning Code Into Solutions"
          description="A quick introduction to who I am, what I do, and what drives me as a developer."
        />

        <div className="grid gap-10 lg:grid-cols-5 lg:gap-12">
          {/* Summary */}
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="lg:col-span-2"
          >
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
              <h3 className="font-display text-xl font-bold text-slate-900">
                Professional Summary
              </h3>
              <p className="mt-4 leading-relaxed text-slate-600">
                {profile.summary}
              </p>
              <div className="mt-6 rounded-xl bg-teal-500/5 p-4 ring-1 ring-teal-500/20">
                <p className="text-sm leading-relaxed text-teal-800">
                  <span className="font-semibold">Currently:</span> sharpening
                  full-stack skills at JSpiders and open to Java Full Stack
                  Developer roles.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Highlight cards */}
          <div className="grid gap-4 sm:grid-cols-2 lg:col-span-3">
            {highlights.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.08, ease: "easeOut" }}
                className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:border-teal-300 hover:shadow-lg hover:shadow-teal-500/10"
              >
                <span className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-teal-500/10 text-teal-600 ring-1 ring-teal-500/20 transition-colors group-hover:bg-teal-500 group-hover:text-white">
                  <item.icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <h4 className="font-display text-base font-bold text-slate-900">
                  {item.title}
                </h4>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  {item.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="mt-14 grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: "easeOut" }}
              className="rounded-2xl border border-slate-200 bg-gradient-to-b from-white to-slate-50 p-6 text-center shadow-sm"
            >
              <p className="font-display text-3xl font-bold text-teal-600 md:text-4xl">
                {stat.value}
              </p>
              <p className="mt-1 text-xs font-medium uppercase tracking-wide text-slate-500 sm:text-sm">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
