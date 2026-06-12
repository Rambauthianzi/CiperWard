"use client";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import Section from "./Section";

const faqs = [
  {
    q: "How quickly can CipherWard onboard our organization?",
    a: "Most clients are fully onboarded within 2–4 weeks. Critical protections such as endpoint and SOC monitoring can be live in under 72 hours.",
  },
  {
    q: "Do you provide 24/7 monitoring on weekends and holidays?",
    a: "Yes. Our Security Operations Center runs 24/7/365 with global coverage. There is no off-hours gap.",
  },
  {
    q: "What compliance frameworks do you support?",
    a: "SOC 2, ISO 27001, HIPAA, PCI-DSS, GDPR, NIST CSF, CMMC, and more. We map controls to your specific obligations.",
  },
  {
    q: "Can you integrate with our existing security stack?",
    a: "Absolutely. We're vendor-agnostic and integrate with leading SIEM, EDR, IAM, and cloud platforms — including Microsoft, CrowdStrike, Okta, Splunk, and many others.",
  },
  {
    q: "What does a typical engagement look like?",
    a: "We begin with a discovery and risk assessment, design a tailored security program, deploy in phases, and provide ongoing managed services with quarterly business reviews.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <Section id="faq" eyebrow="FAQ" title="Answers to common questions.">
      <div className="mx-auto max-w-3xl space-y-3">
        {faqs.map((f, i) => (
          <div key={f.q} className="glass overflow-hidden rounded-2xl">
            <button
              onClick={() => setOpen(open === i ? null : i)}
              className="flex w-full items-center justify-between px-6 py-5 text-left"
            >
              <span className="font-medium text-foreground">{f.q}</span>
              <ChevronDown
                className={`h-5 w-5 text-primary transition ${open === i ? "rotate-180" : ""}`}
              />
            </button>
            {open === i && (
              <div className="px-6 pb-5 text-sm text-muted-foreground">{f.a}</div>
            )}
          </div>
        ))}
      </div>
    </Section>
  );
}
