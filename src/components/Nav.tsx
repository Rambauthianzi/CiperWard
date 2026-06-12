"use client";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";

const links = [
  ["Services", "#services"],
  ["Why Us", "#why"],
  ["Approach", "#approach"],
  ["Industries", "#industries"],
  ["FAQ", "#faq"],
  ["Contact", "#contact"],
] as const;

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all ${
        scrolled ? "glass border-b border-border/60" : ""
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="#top" className="flex items-center gap-3">
          <Image
            src="/logo.png"
            alt="CipherWard"
            width={40}
            height={40}
            className="rounded-lg bg-white p-1"
          />
          <div className="flex flex-col leading-tight">
            <span className="font-display text-lg font-bold tracking-tight text-foreground">
              CipherWard
            </span>
            <span className="text-[10px] uppercase tracking-[0.2em] text-accent">
              Technologies
            </span>
          </div>
        </a>

        <nav className="hidden items-center gap-8 lg:flex">
          {links.map(([l, h]) => (
            <a
              key={h}
              href={h}
              className="text-sm text-muted-foreground transition hover:text-foreground"
            >
              {l}
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          className="hidden rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition hover:opacity-90 lg:inline-flex"
        >
          Get Protected
        </a>

        <button
          className="text-foreground lg:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="glass border-t border-border/60 px-6 py-6 lg:hidden">
          <div className="flex flex-col gap-4">
            {links.map(([l, h]) => (
              <a
                key={h}
                href={h}
                onClick={() => setOpen(false)}
                className="text-sm text-muted-foreground"
              >
                {l}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="rounded-full bg-primary px-5 py-2.5 text-center text-sm font-semibold text-primary-foreground"
            >
              Get Protected
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
