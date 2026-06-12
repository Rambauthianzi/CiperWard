import {
  Landmark, Hospital, Briefcase, GraduationCap,
  ShoppingBag, Factory, Cpu, Building2,
} from "lucide-react";
import Section from "./Section";

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

export default function Industries() {
  return (
    <Section id="industries" eyebrow="Industries We Protect" title="Specialized defense for every sector.">
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
        {industries.map((ind) => (
          <div
            key={ind.name}
            className="group glass flex flex-col items-center gap-3 rounded-2xl p-6 text-center transition hover:border-primary/40"
          >
            <ind.icon className="h-8 w-8 text-primary transition group-hover:scale-110" />
            <div className="text-sm font-medium text-foreground">{ind.name}</div>
          </div>
        ))}
      </div>
    </Section>
  );
}
