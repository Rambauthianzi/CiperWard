import {
  Eye, ShieldCheck, Radar, Cpu, Siren, FileCheck, Building2,
} from "lucide-react";
import Section from "./Section";

const benefits = [
  { icon: Eye, title: "24/7 Threat Monitoring", desc: "Always-on surveillance across your entire attack surface." },
  { icon: ShieldCheck, title: "Certified Security Experts", desc: "CISSP, OSCP, CISM-credentialed analysts and engineers." },
  { icon: Radar, title: "Proactive Defense Strategies", desc: "We hunt threats before they reach your environment." },
  { icon: Cpu, title: "Advanced Threat Intelligence", desc: "Global feeds correlated with your unique threat profile." },
  { icon: Siren, title: "Rapid Incident Response", desc: "Sub-15-minute mean time to acknowledge critical alerts." },
  { icon: FileCheck, title: "Regulatory Compliance Support", desc: "Audit-ready evidence and continuous control validation." },
  { icon: Building2, title: "Enterprise-Grade Solutions", desc: "Battle-tested platforms trusted by Fortune 500 teams." },
];

export default function WhyUs() {
  return (
    <Section id="why" eyebrow="Why CipherWard" title="Built for trust. Engineered for resilience.">
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {benefits.map((b) => (
          <div key={b.title} className="glass rounded-2xl p-6">
            <b.icon className="h-7 w-7 text-accent" />
            <h3 className="mt-4 font-semibold text-foreground">{b.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{b.desc}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
