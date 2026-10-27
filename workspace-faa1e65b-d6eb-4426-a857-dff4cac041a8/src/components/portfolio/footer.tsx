"use client";

import { Code2, Heart } from "lucide-react";
import { navLinks, profile } from "@/lib/portfolio-data";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-slate-950 pb-[env(safe-area-inset-bottom)]">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <a
            href="#home"
            className="flex items-center gap-2 font-display text-lg font-bold text-white"
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-teal-500/15 ring-1 ring-teal-500/40">
              <Code2 className="h-5 w-5 text-teal-500" aria-hidden="true" />
            </span>
            <span>
              {profile.firstName}
              <span className="text-teal-500">.</span>
            </span>
          </a>

          <nav aria-label="Footer navigation">
            <ul className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-slate-400 transition-colors hover:text-teal-400"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="mt-8 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 text-xs text-slate-500 md:flex-row">
          <p>
            © {year} {profile.name}. All rights reserved.
          </p>
          <p className="flex items-center gap-1.5">
            Designed & built with
            <Heart
              className="h-3.5 w-3.5 fill-teal-500 text-teal-500"
              aria-hidden="true"
            />
            using React & Next.js
          </p>
        </div>
      </div>
    </footer>
  );
}
