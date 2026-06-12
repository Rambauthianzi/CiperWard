"use client";
import { motion } from "framer-motion";
import {
  Shield, Activity, Radar, Zap, Search, Network,
  Cloud, Server, KeyRound, GraduationCap, Siren, FileCheck,
} from "lucide-react";
import Section from "./Section";

const services = [
  { icon: Shield, title: "Managed Security Services", desc: "End-to-end management of your security stack with dedicated experts." },
  { icon: Activity, title: "Security Operations Center", desc: "24/7 SOC monitoring, triage, and analyst-driven defense." },
  { icon: Radar, title: "Threat Detection & Response", desc: "AI-powered detection paired with rapid human response." },
  { icon: Zap, title: "Penetration Testing", desc: "Adversary-emulation testing that uncovers real-world risk." },
  { icon: Search, title: "Vulnerability Assessments", desc: "Continuous discovery, prioritization, and remediation guidance." },
  { icon: Network, title: "Network Security", desc: "Zero-trust architecture, segmentation, and perimeter defense." },
  { icon: Cloud, title: "Cloud Security", desc: "Hardening, CSPM, and workload protection across AWS, Azure, GCP." },
  { icon: Server, title: "Endpoint Protection", desc: "EDR/XDR coverage for every device on your network." },
  { icon: KeyRound, title: "Identity & Access Management", desc: "IAM, SSO, MFA, and privileged access governance." },
  { icon: GraduationCap, title: "Security Awareness Training", desc: "Phishing simulations and human-risk reduction programs." },
  { icon: Siren, title: "Incident Response & Forensics", desc: "Containment, eradication, and digital forensic investigation." },
  { icon: FileCheck, title: "Compliance & Risk Management", desc: "SOC 2, ISO 27001, HIPAA, PCI-DSS, GDPR readiness." },
];

export default function Services() {
  return (
    <Section id="services" eyebrow="Services" title="A complete defense, engineered end-to-end.">
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: i * 0.04 }}
            className="group relative overflow-hidden rounded-2xl glass p-6 transition hover:border-primary/40"
          >
            <div className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-primary/10 blur-2xl transition group-hover:bg-primary/20" />
            <div className="relative">
              <div className="inline-flex rounded-xl bg-primary/15 p-3">
                <s.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-foreground">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
