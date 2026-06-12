"use client";
import { useState, type FormEvent } from "react";
import { MapPin, Mail, Phone, Globe, ArrowRight, CheckCircle2 } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import Section from "./Section";

function Field({
  label,
  name,
  type = "text",
  required,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="text-xs uppercase tracking-widest text-muted-foreground">
        {label}
      </label>
      <input
        name={name}
        type={type}
        required={required}
        className="mt-2 w-full rounded-xl border border-border bg-input px-4 py-3 text-sm text-foreground outline-none transition focus:border-primary"
      />
    </div>
  );
}

function ContactItem({
  icon: Icon,
  title,
  value,
}: {
  icon: LucideIcon;
  title: string;
  value: string;
}) {
  return (
    <div className="flex gap-4">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/15">
        <Icon className="h-5 w-5 text-primary" />
      </div>
      <div>
        <div className="text-xs uppercase tracking-widest text-muted-foreground">
          {title}
        </div>
        <div className="text-sm text-foreground">{value}</div>
      </div>
    </div>
  );
}

export default function Contact() {
  const [sent, setSent] = useState(false);

  function submit(e: FormEvent) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <Section id="contact" eyebrow="Contact" title="Talk to a security expert.">
      <div className="grid gap-10 lg:grid-cols-5">
        <div className="space-y-6 lg:col-span-2">
          <p className="text-muted-foreground">
            Tell us about your environment and concerns. A senior analyst will
            respond within one business hour.
          </p>
          <div className="space-y-4">
            <ContactItem
              icon={MapPin}
              title="Headquarters"
              value="100 Cyber Plaza, Suite 2400, Boston, MA 02110"
            />
            <ContactItem icon={Mail} title="Email" value="contact@cipherward.tech" />
            <ContactItem icon={Phone} title="24/7 SOC Hotline" value="+1 (888) 555-0142" />
            <ContactItem
              icon={Globe}
              title="LinkedIn"
              value="linkedin.com/company/cipherward"
            />
          </div>
          <div className="glass rounded-2xl p-5">
            <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-emerald">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full rounded-full bg-emerald opacity-75 animate-pulse-ring" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald" />
              </span>
              SOC Online
            </div>
            <div className="mt-2 text-sm text-muted-foreground">
              Average response:{" "}
              <span className="font-mono text-foreground">2m 14s</span>
            </div>
          </div>
        </div>

        <form
          onSubmit={submit}
          className="glass space-y-4 rounded-3xl p-6 lg:col-span-3 lg:p-8"
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <Field label="Name" name="name" required />
            <Field label="Company" name="company" required />
            <Field label="Work Email" name="email" type="email" required />
            <Field label="Phone" name="phone" type="tel" />
          </div>
          <div>
            <label className="text-xs uppercase tracking-widest text-muted-foreground">
              Security Concern
            </label>
            <select className="mt-2 w-full rounded-xl border border-border bg-input px-4 py-3 text-sm text-foreground outline-none focus:border-primary">
              <option>Managed Security Services</option>
              <option>Threat Detection &amp; Response</option>
              <option>Penetration Testing</option>
              <option>Incident Response</option>
              <option>Compliance &amp; Audit</option>
              <option>Other</option>
            </select>
          </div>
          <div>
            <label className="text-xs uppercase tracking-widest text-muted-foreground">
              Message
            </label>
            <textarea
              required
              rows={4}
              className="mt-2 w-full rounded-xl border border-border bg-input px-4 py-3 text-sm text-foreground outline-none focus:border-primary"
              placeholder="Tell us about your environment..."
            />
          </div>
          <button
            type="submit"
            className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-6 py-3.5 font-semibold text-primary-foreground glow-cyan transition hover:opacity-90"
          >
            {sent ? (
              <>
                <CheckCircle2 className="h-5 w-5" /> Message Received
              </>
            ) : (
              <>
                Request Assessment{" "}
                <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
              </>
            )}
          </button>
          <p className="text-center text-[11px] text-muted-foreground">
            Encrypted in transit · No data shared with third parties.
          </p>
        </form>
      </div>
    </Section>
  );
}
