import { Star } from "lucide-react";
import Section from "./Section";

const testimonials = [
  {
    quote: "CipherWard transformed our security posture. Their SOC caught a zero-day exploit within minutes — saving us millions.",
    name: "Sarah Chen",
    role: "CISO, Meridian Financial",
  },
  {
    quote: "The team is unmatched. Certified, responsive, and deeply embedded in our operations. They feel like part of our staff.",
    name: "Marcus Webb",
    role: "VP of IT, Helix Health Systems",
  },
  {
    quote: "Penetration tests that actually surface what attackers would do. Pragmatic remediation, no fluff. Highly recommended.",
    name: "Priya Raman",
    role: "Head of Security, Vector Cloud",
  },
];

export default function Testimonials() {
  return (
    <Section id="testimonials" eyebrow="Client Trust" title="What security leaders say.">
      <div className="grid gap-6 lg:grid-cols-3">
        {testimonials.map((t) => (
          <figure key={t.name} className="glass flex flex-col rounded-2xl p-6">
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-accent text-accent" />
              ))}
            </div>
            <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-foreground/90">
              &ldquo;{t.quote}&rdquo;
            </blockquote>
            <figcaption className="mt-6 border-t border-border/60 pt-4">
              <div className="text-sm font-semibold text-foreground">{t.name}</div>
              <div className="text-xs text-muted-foreground">{t.role}</div>
            </figcaption>
          </figure>
        ))}
      </div>
    </Section>
  );
}
