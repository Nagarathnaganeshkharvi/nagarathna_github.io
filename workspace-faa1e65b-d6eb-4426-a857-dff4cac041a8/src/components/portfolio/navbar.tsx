"use client";

import { useEffect, useState } from "react";
import { Menu, X, Code2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { navLinks, profile } from "@/lib/portfolio-data";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-slate-200/70 bg-white/85 shadow-sm backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <nav
        className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 md:h-[72px]"
        aria-label="Main navigation"
      >
        <a
          href="#home"
          className={`flex items-center gap-2 font-display text-lg font-bold tracking-tight transition-colors ${
            scrolled ? "text-slate-900" : "text-white"
          }`}
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-teal-500/15 ring-1 ring-teal-500/40">
            <Code2 className="h-5 w-5 text-teal-500" aria-hidden="true" />
          </span>
          <span>
            <span>
              {profile.firstName}
              <span className="text-teal-500">.</span>
            </span>
          </span>
        </a>

        {/* Desktop links */}
        <ul className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                  scrolled
                    ? "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
                    : "text-slate-300 hover:bg-white/10 hover:text-white"
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
          <li className="ml-2">
            <a href={`mailto:${profile.email}`}>
              <Button className="rounded-full bg-teal-500 text-slate-950 shadow-lg shadow-teal-500/25 hover:bg-teal-400">
                Hire Me
              </Button>
            </a>
          </li>
        </ul>

        {/* Mobile toggle */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
          className={`flex h-11 w-11 items-center justify-center rounded-lg transition-colors md:hidden ${
            scrolled
              ? "text-slate-700 hover:bg-slate-100"
              : "text-white hover:bg-white/10"
          }`}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="border-t border-slate-200/70 bg-white/95 shadow-lg backdrop-blur-xl md:hidden">
          <ul className="space-y-1 px-4 py-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-4 py-3 text-sm font-medium text-slate-700 transition-colors hover:bg-slate-100 hover:text-slate-900"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="pt-2">
              <a href={`mailto:${profile.email}`} onClick={() => setOpen(false)}>
                <Button className="w-full rounded-full bg-teal-500 text-slate-950 hover:bg-teal-400">
                  Hire Me
                </Button>
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
