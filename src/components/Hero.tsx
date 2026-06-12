"use client";
import { motion } from "framer-motion";
import { Shield, Activity, ArrowRight } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden pt-32 pb-24 lg:pt-40 lg:pb-32"
    >
      <div className="absolute inset-0 grid-bg opacity-40" />
      <div
        className="absolute inset-0"
        style={{ background: "var(--gradient-glow)" }}
      />

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full rounded-full bg-emerald opacity-75 animate-pulse-ring" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald" />
            </span>
            <span className="text-muted-foreground">
              SOC Active · 24/7 Monitoring
            </span>
          </div>

          <h1 className="mt-6 text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl text-foreground">
            Protecting Digital Assets.{" "}
            <span className="text-gradient">Securing Tomorrow.</span>
          </h1>

          <p className="mt-6 max-w-xl text-lg text-muted-foreground">
            CipherWard Technologies delivers advanced cybersecurity solutions
            that safeguard businesses from evolving cyber threats through
            intelligent defense, proactive monitoring, and trusted security
            expertise.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground glow-cyan transition hover:opacity-90"
            >
              Get Protected{" "}
              <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full glass px-6 py-3 text-sm font-semibold text-foreground transition hover:bg-white/5"
            >
              Schedule a Security Assessment
            </a>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-3 text-xs text-muted-foreground">
            <span className="font-mono uppercase tracking-widest">
              SOC 2 · ISO 27001 · HIPAA · PCI-DSS
            </span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative"
        >
          <div
            className="absolute -inset-10 rounded-full"
            style={{ background: "var(--gradient-glow)" }}
          />
          <div className="relative overflow-hidden rounded-3xl glass">
            <Image
              src="/hero-shield.jpg"
              alt="Encrypted shield protecting global network"
              width={1536}
              height={1536}
              className="h-full w-full object-cover"
              priority
            />
            <div
              className="pointer-events-none absolute inset-x-0 top-0 h-32"
              style={{
                background:
                  "linear-gradient(180deg, oklch(0.13 0.03 250 / 0.6), transparent)",
              }}
            />
          </div>

          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 5, repeat: Infinity }}
            className="absolute -left-4 top-10 glass rounded-2xl p-4 shadow-lg"
          >
            <div className="flex items-center gap-3">
              <div className="rounded-lg bg-primary/20 p-2">
                <Shield className="h-5 w-5 text-primary" />
              </div>
              <div>
                <div className="text-[10px] uppercase tracking-widest text-muted-foreground">
                  Blocked Today
                </div>
                <div className="font-mono text-lg font-semibold text-foreground">
                  14,827
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 6, repeat: Infinity }}
            className="absolute -right-4 bottom-10 glass rounded-2xl p-4 shadow-lg"
          >
            <div className="flex items-center gap-3">
              <div className="rounded-lg bg-emerald/20 p-2">
                <Activity className="h-5 w-5 text-emerald" />
              </div>
              <div>
                <div className="text-[10px] uppercase tracking-widest text-muted-foreground">
                  MTTR
                </div>
                <div className="font-mono text-lg font-semibold text-foreground">
                  {"< 12 min"}
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
