import Section from "./Section";

const pillars = [
  ["Trusted", "By 500+ enterprises"],
  ["Certified", "CISSP · OSCP · CISM"],
  ["Proven", "12+ years defending networks"],
  ["Global", "24/7 SOC, 5 continents"],
] as const;

export default function About() {
  return (
    <Section id="about" eyebrow="About Us" title="Intelligent encryption meets unwavering protection.">
      <div className="grid gap-10 lg:grid-cols-2">
        <p className="text-lg leading-relaxed text-muted-foreground">
          CipherWard Technologies was founded on a singular conviction: that
          every organization deserves enterprise-grade protection against the
          relentless evolution of cyber threats. We combine deep cryptographic
          expertise with proactive defense engineering to safeguard the data,
          systems, and people that power your business.
        </p>
        <p className="text-lg leading-relaxed text-muted-foreground">
          From global financial institutions to fast-moving startups, our
          certified analysts, threat hunters, and incident responders operate as
          an extension of your team — vigilant around the clock, transparent in
          our reporting, and relentless in our pursuit of resilience.
        </p>
      </div>
      <div className="mt-12 grid grid-cols-2 gap-4 lg:grid-cols-4">
        {pillars.map(([t, d]) => (
          <div key={t} className="glass rounded-2xl p-5">
            <div className="text-sm font-semibold text-primary">{t}</div>
            <div className="mt-1 text-xs text-muted-foreground">{d}</div>
          </div>
        ))}
      </div>
    </Section>
  );
}
