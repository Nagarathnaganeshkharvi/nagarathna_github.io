"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  ChevronDown,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Sparkles,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { profile } from "@/lib/portfolio-data";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.12 * i, duration: 0.6, ease: "easeOut" as const },
  }),
};

export function Hero() {
  return (
    <section
      id="home"
      className="dot-grid relative flex min-h-screen items-center overflow-hidden bg-slate-950"
    >
      {/* Ambient gradient orbs */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-32 top-1/4 h-96 w-96 rounded-full bg-teal-500/20 blur-[120px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 bottom-1/4 h-96 w-96 rounded-full bg-emerald-500/15 blur-[120px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 h-72 w-[36rem] -translate-x-1/2 rounded-full bg-teal-400/10 blur-[100px]"
      />

      <div className="relative z-10 mx-auto w-full max-w-6xl px-4 pb-24 pt-32 sm:px-6 md:pt-36">
        <div className="mx-auto max-w-3xl text-center">
          <motion.div
            custom={0}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/5 px-4 py-2 text-sm font-medium text-teal-300 ring-1 ring-teal-500/30"
          >
            <Sparkles className="h-4 w-4" aria-hidden="true" />
            Available for opportunities
          </motion.div>

          <motion.p
            custom={1}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="mb-4 text-lg font-medium text-slate-400"
          >
            Hello, I&apos;m
          </motion.p>

          <motion.h1
            custom={2}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="font-display text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl"
          >
            {profile.firstName}{" "}
            <span className="bg-gradient-to-r from-teal-400 via-emerald-400 to-teal-300 bg-clip-text text-transparent">
              Ganesh Kharvi
            </span>
          </motion.h1>

          <motion.p
            custom={3}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="font-display mt-6 text-xl font-semibold text-teal-400 sm:text-2xl md:text-3xl"
          >
            {profile.role}
          </motion.p>

          <motion.p
            custom={4}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-slate-400 sm:text-lg"
          >
            I build responsive web applications and integrate front-end with
            back-end systems — turning ideas into reliable, real-world software
            with Java, Spring Boot & React.
          </motion.p>

          <motion.div
            custom={5}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <a href="#projects" className="w-full sm:w-auto">
              <Button
                size="lg"
                className="group w-full rounded-full bg-teal-500 px-8 text-base font-semibold text-slate-950 shadow-xl shadow-teal-500/25 hover:bg-teal-400 sm:w-auto"
              >
                View My Projects
                <ArrowRight
                  className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </Button>
            </a>
            <a href="#contact" className="w-full sm:w-auto">
              <Button
                size="lg"
                variant="outline"
                className="w-full rounded-full border-white/20 bg-white/5 px-8 text-base font-semibold text-white hover:bg-white/10 hover:text-white sm:w-auto"
              >
                Get In Touch
              </Button>
            </a>
          </motion.div>

          <motion.div
            custom={6}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-sm text-slate-400"
          >
            <a
              href={`mailto:${profile.email}`}
              className="flex items-center gap-2 transition-colors hover:text-teal-400"
            >
              <Mail className="h-4 w-4 text-teal-500" aria-hidden="true" />
              {profile.email}
            </a>
            <a
              href={`tel:${profile.phone.replace(/\s/g, "")}`}
              className="flex items-center gap-2 transition-colors hover:text-teal-400"
            >
              <Phone className="h-4 w-4 text-teal-500" aria-hidden="true" />
              {profile.phone}
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 transition-colors hover:text-teal-400"
            >
              <Linkedin className="h-4 w-4 text-teal-500" aria-hidden="true" />
              LinkedIn Profile
            </a>
            <span className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-teal-500" aria-hidden="true" />
              {profile.location}
            </span>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.a
        href="#about"
        aria-label="Scroll to about section"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-slate-500 transition-colors hover:text-teal-400"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
        >
          <ChevronDown className="h-7 w-7" aria-hidden="true" />
        </motion.div>
      </motion.a>
    </section>
  );
}
