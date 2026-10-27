"use client";

import { motion } from "framer-motion";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  dark?: boolean;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  dark = false,
}: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.55, ease: "easeOut" }}
      className="mx-auto mb-12 max-w-2xl text-center md:mb-16"
    >
      <span
        className={`mb-3 inline-block rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] ${
          dark
            ? "bg-teal-500/10 text-teal-400 ring-1 ring-teal-500/25"
            : "bg-teal-500/10 text-teal-700 ring-1 ring-teal-500/25"
        }`}
      >
        {eyebrow}
      </span>
      <h2
        className={`font-display text-3xl font-bold tracking-tight sm:text-4xl ${
          dark ? "text-slate-50" : "text-slate-900"
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`mt-4 text-base leading-relaxed sm:text-lg ${
            dark ? "text-slate-400" : "text-slate-600"
          }`}
        >
          {description}
        </p>
      )}
    </motion.div>
  );
}
