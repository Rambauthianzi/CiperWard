import { createFileRoute } from "@tanstack/react-router";
import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState, type FormEvent } from "react";
import {
  Shield, Lock, Eye, Zap, Server, Cloud, Users, GraduationCap,
  AlertTriangle, FileCheck, KeyRound, Network, ArrowRight, CheckCircle2,
  Activity, Globe, Building2, Hospital, Landmark, ShoppingBag, Factory, Cpu,
  Briefcase, Mail, Phone, MapPin, ChevronDown, MessageSquare,
  Search, Radar, ShieldCheck, Siren, RotateCw, TrendingUp, Star, Menu, X,
} from "lucide-react";
import logoAsset from "@/assets/cipherward-logo.asset.json";
import heroShield from "@/assets/hero-shield.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "CipherWard Technologies — Encrypt. Defend. Secure." },
      { name: "description", content: "Advanced cybersecurity solutions for modern enterprises. Managed security, SOC, threat detection, penetration testing, and 24/7 incident response." },
      { property: "og:title", content: "CipherWard Technologies" },
      { property: "og:description", content: "Protecting Digital Assets. Securing Tomorrow." },
      { property: "og:image", content: heroShield },
    ],
  }),
  component: Home,
});

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

const benefits = [
  { icon: Eye, title: "24/7 Threat Monitoring", desc: "Always-on surveillance across your entire attack surface." },
  { icon: ShieldCheck, title: "Certified Security Experts", desc: "CISSP, OSCP, CISM-credentialed analysts and engineers." },
  { icon: Radar, title: "Proactive Defense Strategies", desc: "We hunt threats before they reach your environment." },
  { icon: Cpu, title: "Advanced Threat Intelligence", desc: "Global feeds correlated with your unique threat profile." },
  { icon: Siren, title: "Rapid Incident Response", desc: "Sub-15-minute mean time to acknowledge critical alerts." },
  { icon: FileCheck, title: "Regulatory Compliance Support", desc: "Audit-ready evidence and continuous control validation." },
  { icon: Building2, title: "Enterprise-Grade Solutions", desc: "Battle-tested platforms trusted by Fortune 500 teams." },
];

const industries = [
  { icon: Landmark, name: "Financial Services" },
  { icon: Hospital, name: "Healthcare" },
  { icon: Briefcase, name: "Government" },
  { icon: GraduationCap, name: "Education" },
  { icon: ShoppingBag, name: "Retail" },
  { icon: Factory, name: "Manufacturing" },
  { icon: Cpu, name: "Technology" },
  { icon: Building2, name: "SMB" },
];

const approach = [
  { icon: Search, label: "Assess", desc: "Baseline your risk posture and exposure." },
  { icon: Radar, label: "Detect", desc: "Identify threats with continuous telemetry." },
  { icon: Shield, label: "Protect", desc: "Deploy layered defenses across assets." },
  { icon: Siren, label: "Respond", desc: "Contain and neutralize incidents fast." },
  { icon: RotateCw, label: "Recover", desc: "Restore operations with verified integrity." },
  { icon: TrendingUp, label: "Improve", desc: "Refine controls from every engagement." },
];

const testimonials = [
  { quote: "CipherWard transformed our security posture. Their SOC caught a zero-day exploit within minutes — saving us millions.", name: "Sarah Chen", role: "CISO, Meridian Financial" },
  { quote: "The team is unmatched. Certified, responsive, and deeply embedded in our operations. They feel like part of our staff.", name: "Marcus Webb", role: "VP of IT, Helix Health Systems" },
  { quote: "Penetration tests that actually surface what attackers would do. Pragmatic remediation, no fluff. Highly recommended.", name: "Priya Raman", role: "Head of Security, Vector Cloud" },
];

const stats = [
  { value: 2400000, suffix: "+", label: "Threats Mitigated" },
  { value: 850000, suffix: "+", label: "Protected Endpoints" },
  { value: 1200, suffix: "+", label: "Assessments Completed" },
  { value: 99, suffix: "%", label: "Client Satisfaction" },
];

const faqs = [
  { q: "How quickly can CipherWard onboard our organization?", a: "Most clients are fully onboarded within 2–4 weeks. Critical protections such as endpoint and SOC monitoring can be live in under 72 hours." },
  { q: "Do you provide 24/7 monitoring on weekends and holidays?", a: "Yes. Our Security Operations Center runs 24/7/365 with global coverage. There is no off-hours gap." },
  { q: "What compliance frameworks do you support?", a: "SOC 2, ISO 27001, HIPAA, PCI-DSS, GDPR, NIST CSF, CMMC, and more. We map controls to your specific obligations." },
  { q: "Can you integrate with our existing security stack?", a: "Absolutely. We're vendor-agnostic and integrate with leading SIEM, EDR, IAM, and cloud platforms — including Microsoft, CrowdStrike, Okta, Splunk, and many others." },
  { q: "What does a typical engagement look like?", a: "We begin with a discovery and risk assessment, design a tailored security program, deploy in phases, and provide ongoing managed services with quarterly business reviews." },
];

function Home() {
  return (
    <div className="min-h-screen text-foreground">
      <Nav />
      <Hero />
      <Stats />
      <About />
      <Services />
      <WhyUs />
      <Approach />
      <Industries />
      <Testimonials />
      <FAQ />
      <Contact />
      <Footer />
      <ChatWidget />
    </div>
  );
}

/* ---------------- Nav ---------------- */
function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  const links = [
    ["Services", "#services"],
    ["Why Us", "#why"],
    ["Approach", "#approach"],
    ["Industries", "#industries"],
    ["FAQ", "#faq"],
    ["Contact", "#contact"],
  ];
  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all ${scrolled ? "glass border-b border-border/60" : ""}`}>
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="#top" className="flex items-center gap-3">
          <img src={logoAsset.url} alt="CipherWard" className="h-10 w-10 rounded-lg bg-white p-1" />
          <div className="flex flex-col leading-tight">
            <span className="font-display text-lg font-bold tracking-tight">CipherWard</span>
            <span className="text-[10px] uppercase tracking-[0.2em] text-accent">Technologies</span>
          </div>
        </a>
        <nav className="hidden items-center gap-8 lg:flex">
          {links.map(([l, h]) => (
            <a key={h} href={h} className="text-sm text-muted-foreground transition hover:text-foreground">{l}</a>
          ))}
        </nav>
        <a href="#contact" className="hidden rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition hover:opacity-90 lg:inline-flex">
          Get Protected
        </a>
        <button className="lg:hidden" onClick={() => setOpen(!open)} aria-label="Menu">
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <div className="glass border-t border-border/60 px-6 py-6 lg:hidden">
          <div className="flex flex-col gap-4">
            {links.map(([l, h]) => (
              <a key={h} href={h} onClick={() => setOpen(false)} className="text-sm text-muted-foreground">{l}</a>
            ))}
            <a href="#contact" onClick={() => setOpen(false)} className="rounded-full bg-primary px-5 py-2.5 text-center text-sm font-semibold text-primary-foreground">Get Protected</a>
          </div>
        </div>
      )}
    </header>
  );
}

/* ---------------- Hero ---------------- */
function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-32 pb-24 lg:pt-40 lg:pb-32">
      <div className="absolute inset-0 grid-bg opacity-40" />
      <div className="absolute inset-0" style={{ background: "var(--gradient-glow)" }} />
      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-2">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <div className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full rounded-full bg-emerald opacity-75 animate-pulse-ring" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald" />
            </span>
            <span className="text-muted-foreground">SOC Active · 24/7 Monitoring</span>
          </div>
          <h1 className="mt-6 text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
            Protecting Digital Assets.{" "}
            <span className="text-gradient">Securing Tomorrow.</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg text-muted-foreground">
            CipherWard Technologies delivers advanced cybersecurity solutions that safeguard businesses from evolving cyber threats through intelligent defense, proactive monitoring, and trusted security expertise.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a href="#contact" className="group inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground glow-cyan transition hover:opacity-90">
              Get Protected <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
            </a>
            <a href="#contact" className="inline-flex items-center gap-2 rounded-full glass px-6 py-3 text-sm font-semibold transition hover:bg-white/5">
              Schedule a Security Assessment
            </a>
          </div>
          <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-3 text-xs text-muted-foreground">
            <span className="font-mono uppercase tracking-widest">SOC 2 · ISO 27001 · HIPAA · PCI-DSS</span>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1, delay: 0.2 }} className="relative">
          <div className="absolute -inset-10 rounded-full" style={{ background: "var(--gradient-glow)" }} />
          <div className="relative overflow-hidden rounded-3xl glass">
            <img src={heroShield} alt="Encrypted shield protecting global network" width={1536} height={1536} className="h-full w-full object-cover" />
            <div className="pointer-events-none absolute inset-x-0 top-0 h-32" style={{ background: "linear-gradient(180deg, oklch(0.13 0.03 250 / 0.6), transparent)" }} />
          </div>
          {/* Floating metric chips */}
          <motion.div animate={{ y: [0, -12, 0] }} transition={{ duration: 5, repeat: Infinity }} className="absolute -left-4 top-10 glass rounded-2xl p-4 shadow-lg">
            <div className="flex items-center gap-3">
              <div className="rounded-lg bg-primary/20 p-2"><Shield className="h-5 w-5 text-primary" /></div>
              <div>
                <div className="text-[10px] uppercase tracking-widest text-muted-foreground">Blocked Today</div>
                <div className="font-mono text-lg font-semibold">14,827</div>
              </div>
            </div>
          </motion.div>
          <motion.div animate={{ y: [0, 12, 0] }} transition={{ duration: 6, repeat: Infinity }} className="absolute -right-4 bottom-10 glass rounded-2xl p-4 shadow-lg">
            <div className="flex items-center gap-3">
              <div className="rounded-lg bg-emerald/20 p-2"><Activity className="h-5 w-5 text-emerald" /></div>
              <div>
                <div className="text-[10px] uppercase tracking-widest text-muted-foreground">MTTR</div>
                <div className="font-mono text-lg font-semibold">{"< 12 min"}</div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

/* ---------------- Stats ---------------- */
function Counter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!inView) return;
    const duration = 1800;
    const start = performance.now();
    let raf = 0;
    const tick = (t: number) => {
      const p = Math.min((t - start) / duration, 1);
      setN(Math.floor(value * (1 - Math.pow(1 - p, 3))));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, value]);
  return <span ref={ref} className="font-mono">{n.toLocaleString()}{suffix}</span>;
}

function Stats() {
  return (
    <section className="border-y border-border/60 bg-navy-deep/40 py-12">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-6 lg:grid-cols-4">
        {stats.map((s) => (
          <div key={s.label} className="text-center">
            <div className="text-3xl font-bold text-gradient sm:text-4xl"><Counter value={s.value} suffix={s.suffix} /></div>
            <div className="mt-2 text-xs uppercase tracking-widest text-muted-foreground">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ---------------- About ---------------- */
function About() {
  return (
    <Section id="about" eyebrow="About Us" title="Intelligent encryption meets unwavering protection.">
      <div className="grid gap-10 lg:grid-cols-2">
        <p className="text-lg leading-relaxed text-muted-foreground">
          CipherWard Technologies was founded on a singular conviction: that every organization deserves enterprise-grade protection against the relentless evolution of cyber threats. We combine deep cryptographic expertise with proactive defense engineering to safeguard the data, systems, and people that power your business.
        </p>
        <p className="text-lg leading-relaxed text-muted-foreground">
          From global financial institutions to fast-moving startups, our certified analysts, threat hunters, and incident responders operate as an extension of your team — vigilant around the clock, transparent in our reporting, and relentless in our pursuit of resilience.
        </p>
      </div>
      <div className="mt-12 grid grid-cols-2 gap-4 lg:grid-cols-4">
        {[
          ["Trusted", "By 500+ enterprises"],
          ["Certified", "CISSP · OSCP · CISM"],
          ["Proven", "12+ years defending networks"],
          ["Global", "24/7 SOC, 5 continents"],
        ].map(([t, d]) => (
          <div key={t} className="glass rounded-2xl p-5">
            <div className="text-sm font-semibold text-primary">{t}</div>
            <div className="mt-1 text-xs text-muted-foreground">{d}</div>
          </div>
        ))}
      </div>
    </Section>
  );
}

/* ---------------- Services ---------------- */
function Services() {
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
              <div className="inline-flex rounded-xl bg-primary/15 p-3"><s.icon className="h-6 w-6 text-primary" /></div>
              <h3 className="mt-4 text-lg font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

/* ---------------- Why Us ---------------- */
function WhyUs() {
  return (
    <Section id="why" eyebrow="Why CipherWard" title="Built for trust. Engineered for resilience.">
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {benefits.map((b) => (
          <div key={b.title} className="glass rounded-2xl p-6">
            <b.icon className="h-7 w-7 text-accent" />
            <h3 className="mt-4 font-semibold">{b.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{b.desc}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}

/* ---------------- Approach ---------------- */
function Approach() {
  return (
    <Section id="approach" eyebrow="Our Approach" title="A continuous cycle of defense.">
      <div className="relative">
        <div className="absolute left-0 right-0 top-9 hidden h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent lg:block" />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-6">
          {approach.map((step, i) => (
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
                <span className="absolute -top-2 -right-2 flex h-6 w-6 items-center justify-center rounded-full bg-primary text-[10px] font-bold text-primary-foreground">{i + 1}</span>
              </div>
              <div className="mt-4 font-display font-semibold">{step.label}</div>
              <div className="mt-1 text-xs text-muted-foreground">{step.desc}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}

/* ---------------- Industries ---------------- */
function Industries() {
  return (
    <Section id="industries" eyebrow="Industries We Protect" title="Specialized defense for every sector.">
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
        {industries.map((ind) => (
          <div key={ind.name} className="group glass flex flex-col items-center gap-3 rounded-2xl p-6 text-center transition hover:border-primary/40">
            <ind.icon className="h-8 w-8 text-primary transition group-hover:scale-110" />
            <div className="text-sm font-medium">{ind.name}</div>
          </div>
        ))}
      </div>
    </Section>
  );
}

/* ---------------- Testimonials ---------------- */
function Testimonials() {
  return (
    <Section id="testimonials" eyebrow="Client Trust" title="What security leaders say.">
      <div className="grid gap-6 lg:grid-cols-3">
        {testimonials.map((t) => (
          <figure key={t.name} className="glass flex flex-col rounded-2xl p-6">
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => <Star key={i} className="h-4 w-4 fill-accent text-accent" />)}
            </div>
            <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-foreground/90">"{t.quote}"</blockquote>
            <figcaption className="mt-6 border-t border-border/60 pt-4">
              <div className="text-sm font-semibold">{t.name}</div>
              <div className="text-xs text-muted-foreground">{t.role}</div>
            </figcaption>
          </figure>
        ))}
      </div>
    </Section>
  );
}

/* ---------------- FAQ ---------------- */
function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <Section id="faq" eyebrow="FAQ" title="Answers to common questions.">
      <div className="mx-auto max-w-3xl space-y-3">
        {faqs.map((f, i) => (
          <div key={f.q} className="glass overflow-hidden rounded-2xl">
            <button onClick={() => setOpen(open === i ? null : i)} className="flex w-full items-center justify-between px-6 py-5 text-left">
              <span className="font-medium">{f.q}</span>
              <ChevronDown className={`h-5 w-5 text-primary transition ${open === i ? "rotate-180" : ""}`} />
            </button>
            {open === i && <div className="px-6 pb-5 text-sm text-muted-foreground">{f.a}</div>}
          </div>
        ))}
      </div>
    </Section>
  );
}

/* ---------------- Contact ---------------- */
function Contact() {
  const [sent, setSent] = useState(false);
  function submit(e: FormEvent) { e.preventDefault(); setSent(true); }
  return (
    <Section id="contact" eyebrow="Contact" title="Talk to a security expert.">
      <div className="grid gap-10 lg:grid-cols-5">
        <div className="lg:col-span-2 space-y-6">
          <p className="text-muted-foreground">Tell us about your environment and concerns. A senior analyst will respond within one business hour.</p>
          <div className="space-y-4">
            <ContactItem icon={MapPin} title="Headquarters" value="100 Cyber Plaza, Suite 2400, Boston, MA 02110" />
            <ContactItem icon={Mail} title="Email" value="contact@cipherward.tech" />
            <ContactItem icon={Phone} title="24/7 SOC Hotline" value="+1 (888) 555-0142" />
            <ContactItem icon={Globe} title="LinkedIn" value="linkedin.com/company/cipherward" />
          </div>
          <div className="glass rounded-2xl p-5">
            <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-emerald">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full rounded-full bg-emerald opacity-75 animate-pulse-ring" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald" />
              </span>
              SOC Online
            </div>
            <div className="mt-2 text-sm text-muted-foreground">Average response: <span className="font-mono text-foreground">2m 14s</span></div>
          </div>
        </div>

        <form onSubmit={submit} className="glass space-y-4 rounded-3xl p-6 lg:col-span-3 lg:p-8">
          <div className="grid gap-4 sm:grid-cols-2">
            <Field label="Name" name="name" required />
            <Field label="Company" name="company" required />
            <Field label="Work Email" name="email" type="email" required />
            <Field label="Phone" name="phone" type="tel" />
          </div>
          <div>
            <label className="text-xs uppercase tracking-widest text-muted-foreground">Security Concern</label>
            <select className="mt-2 w-full rounded-xl border border-border bg-input px-4 py-3 text-sm outline-none focus:border-primary">
              <option>Managed Security Services</option>
              <option>Threat Detection & Response</option>
              <option>Penetration Testing</option>
              <option>Incident Response</option>
              <option>Compliance & Audit</option>
              <option>Other</option>
            </select>
          </div>
          <div>
            <label className="text-xs uppercase tracking-widest text-muted-foreground">Message</label>
            <textarea required rows={4} className="mt-2 w-full rounded-xl border border-border bg-input px-4 py-3 text-sm outline-none focus:border-primary" placeholder="Tell us about your environment..." />
          </div>
          <button type="submit" className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-6 py-3.5 font-semibold text-primary-foreground glow-cyan transition hover:opacity-90">
            {sent ? <><CheckCircle2 className="h-5 w-5" /> Message Received</> : <>Request Assessment <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" /></>}
          </button>
          <p className="text-center text-[11px] text-muted-foreground">Encrypted in transit · No data shared with third parties.</p>
        </form>
      </div>
    </Section>
  );
}

function Field({ label, name, type = "text", required }: { label: string; name: string; type?: string; required?: boolean }) {
  return (
    <div>
      <label className="text-xs uppercase tracking-widest text-muted-foreground">{label}</label>
      <input name={name} type={type} required={required} className="mt-2 w-full rounded-xl border border-border bg-input px-4 py-3 text-sm outline-none transition focus:border-primary" />
    </div>
  );
}

function ContactItem({ icon: Icon, title, value }: { icon: typeof Mail; title: string; value: string }) {
  return (
    <div className="flex gap-4">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/15"><Icon className="h-5 w-5 text-primary" /></div>
      <div>
        <div className="text-xs uppercase tracking-widest text-muted-foreground">{title}</div>
        <div className="text-sm">{value}</div>
      </div>
    </div>
  );
}

/* ---------------- Footer ---------------- */
function Footer() {
  return (
    <footer className="border-t border-border/60 bg-navy-deep/50 py-12">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-8 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-3">
              <img src={logoAsset.url} alt="CipherWard" className="h-10 w-10 rounded-lg bg-white p-1" />
              <div>
                <div className="font-display font-bold">CipherWard</div>
                <div className="text-[10px] uppercase tracking-[0.2em] text-accent">Technologies</div>
              </div>
            </div>
            <p className="mt-4 max-w-xs text-sm text-muted-foreground">Encrypt. Defend. Secure. — Protecting digital assets, securing tomorrow.</p>
          </div>
          <FooterCol title="Services" items={["Managed Security", "SOC", "Pen Testing", "Cloud Security"]} />
          <FooterCol title="Company" items={["About", "Insights", "Careers", "Contact"]} />
          <div>
            <div className="font-display text-sm font-semibold">Stay informed</div>
            <p className="mt-2 text-xs text-muted-foreground">Threat intelligence briefings, monthly.</p>
            <form className="mt-3 flex gap-2">
              <input type="email" placeholder="you@company.com" className="flex-1 rounded-full border border-border bg-input px-4 py-2 text-xs outline-none focus:border-primary" />
              <button className="rounded-full bg-primary px-4 py-2 text-xs font-semibold text-primary-foreground">Subscribe</button>
            </form>
          </div>
        </div>
        <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-border/60 pt-6 text-xs text-muted-foreground sm:flex-row">
          <div>© {new Date().getFullYear()} CipherWard Technologies. All rights reserved.</div>
          <div className="flex gap-6"><a href="#">Privacy</a><a href="#">Terms</a><a href="#">Security</a></div>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <div className="font-display text-sm font-semibold">{title}</div>
      <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
        {items.map((i) => <li key={i}><a href="#" className="transition hover:text-foreground">{i}</a></li>)}
      </ul>
    </div>
  );
}

/* ---------------- Chat ---------------- */
function ChatWidget() {
  const [open, setOpen] = useState(false);
  return (
    <div className="fixed bottom-6 right-6 z-40">
      {open && (
        <div className="glass mb-3 w-72 rounded-2xl p-4">
          <div className="flex items-center gap-2 text-sm font-semibold"><span className="h-2 w-2 rounded-full bg-emerald" /> CipherWard Support</div>
          <p className="mt-2 text-xs text-muted-foreground">Hi — a security specialist is online. How can we help protect your business today?</p>
          <input placeholder="Type a message..." className="mt-3 w-full rounded-full border border-border bg-input px-4 py-2 text-xs outline-none" />
        </div>
      )}
      <button onClick={() => setOpen(!open)} aria-label="Open chat" className="flex h-14 w-14 items-center justify-center rounded-full bg-primary text-primary-foreground glow-cyan transition hover:scale-105">
        {open ? <X className="h-5 w-5" /> : <MessageSquare className="h-5 w-5" />}
      </button>
    </div>
  );
}

/* ---------------- Section helper ---------------- */
function Section({ id, eyebrow, title, children }: { id: string; eyebrow: string; title: string; children: React.ReactNode }) {
  return (
    <section id={id} className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 max-w-2xl">
          <div className="text-xs uppercase tracking-[0.3em] text-primary">{eyebrow}</div>
          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">{title}</h2>
        </div>
        {children}
      </div>
    </section>
  );
}
