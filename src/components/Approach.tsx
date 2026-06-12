"use client";
import { motion } from "framer-motion";
import { Search, Radar, Shield, Siren, RotateCw, TrendingUp } from "lucide-react";
import Section from "./Section";

const steps = [
  { icon: Search, label: "Assess", desc: "Baseline your risk posture and exposure." },
  { icon: Radar, label: "Detect", desc: "Identify threats with continuous telemetry." },
  { icon: Shield, label: "Protect", desc: "Deploy layered defenses across assets." },
  { icon: Siren, label: "Respond", desc: "Contain and neutralize incidents fast." },
  { icon: RotateCw, label: "Recover", desc: "Restore operations with verified integrity." },
  { icon: TrendingUp, label: "Improve", desc: "Refine controls from every engagement." },
];

export default function Approach() {
  return (
    <Section id="approach" eyebrow="Our Approach" title="A continuous cycle of defense.">
      <div className="relative">
        <div className="absolute left-0 right-0 top-9 hidden h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent lg:block" />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-6">
          {steps.map((step, i) => (
            <motion.div
              key={step.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="relative text-center"
            >
              <div className="relative mx-auto flex h-16 w-16 items-center justify-center rounded-2xl glass">
                <step.icon className="h-7 w-7 text-primary" />
                <span className="absolute -top-2 -right-2 flex h-6 w-6 items-center justify-center rounded-full bg-primary text-[10px] font-bold text-primary-foreground">
                  {i + 1}
                </span>
              </div>
              <div className="mt-4 font-display font-semibold text-foreground">{step.label}</div>
              <div className="mt-1 text-xs text-muted-foreground">{step.desc}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
