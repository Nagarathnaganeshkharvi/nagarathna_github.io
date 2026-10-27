"use client";

import { motion } from "framer-motion";
import { Linkedin, Mail, MapPin, Phone, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "./section-heading";
import { profile } from "@/lib/portfolio-data";

const contactCards = [
  {
    icon: Mail,
    label: "Email",
    value: profile.email,
    href: `mailto:${profile.email}`,
  },
  {
    icon: Phone,
    label: "Phone",
    value: profile.phone,
    href: `tel:${profile.phone.replace(/\s/g, "")}`,
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: profile.linkedinLabel,
    href: profile.linkedin,
  },
  {
    icon: MapPin,
    label: "Location",
    value: profile.location,
    href: null,
  },
];

export function Contact() {
  return (
    <section
      id="contact"
      className="dot-grid relative overflow-hidden bg-slate-950 py-20 md:py-28"
    >
      {/* Ambient glows */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-32 top-0 h-80 w-80 rounded-full bg-teal-500/15 blur-[110px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 bottom-0 h-80 w-80 rounded-full bg-emerald-500/10 blur-[110px]"
      />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Get In Touch"
          title="Let's Work Together"
          description="I'm actively looking for Java Full Stack Developer opportunities. My inbox is always open — whether you have a role, a project, or just want to say hi!"
          dark
        />

        <div className="mx-auto max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.55, ease: "easeOut" }}
            className="mb-10 flex justify-center"
          >
            <a href={`mailto:${profile.email}`}>
              <Button
                size="lg"
                className="group h-14 rounded-full bg-teal-500 px-10 text-base font-semibold text-slate-950 shadow-xl shadow-teal-500/25 transition-all hover:bg-teal-400 hover:shadow-teal-400/30"
              >
                <Send
                  className="mr-2 h-4 w-4 transition-transform group-hover:translate-x-1"
                  aria-hidden="true"
                />
                Say Hello
              </Button>
            </a>
          </motion.div>

          <div className="grid gap-4 sm:grid-cols-2">
            {contactCards.map((card, i) => {
              const CardWrapper = card.href ? "a" : "div";
              return (
                <motion.div
                  key={card.label}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{
                    duration: 0.5,
                    delay: i * 0.08,
                    ease: "easeOut",
                  }}
                >
                  <CardWrapper
                    {...(card.href
                      ? {
                          href: card.href,
                          target:
                            card.href.startsWith("http") ? "_blank" : undefined,
                          rel: card.href.startsWith("http")
                            ? "noopener noreferrer"
                            : undefined,
                        }
                      : {})}
                    className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm transition-all hover:-translate-y-0.5 hover:border-teal-500/40 hover:bg-white/10"
                  >
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-teal-500/15 text-teal-400 ring-1 ring-teal-500/25 transition-colors group-hover:bg-teal-500 group-hover:text-slate-950">
                      <card.icon className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <span className="min-w-0">
                      <span className="block text-xs font-semibold uppercase tracking-wider text-slate-400">
                        {card.label}
                      </span>
                      <span className="block truncate text-sm font-medium text-slate-100">
                        {card.value}
                      </span>
                    </span>
                  </CardWrapper>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
