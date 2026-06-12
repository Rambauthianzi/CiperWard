import Image from "next/image";

function FooterCol({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <div className="font-display text-sm font-semibold text-foreground">{title}</div>
      <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
        {items.map((item) => (
          <li key={item}>
            <a href="#" className="transition hover:text-foreground">
              {item}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="border-t border-border/60 bg-navy-deep/50 py-12">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-8 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-3">
              <Image
                src="/logo.png"
                alt="CipherWard"
                width={40}
                height={40}
                className="rounded-lg bg-white p-1"
              />
              <div>
                <div className="font-display font-bold text-foreground">CipherWard</div>
                <div className="text-[10px] uppercase tracking-[0.2em] text-accent">
                  Technologies
                </div>
              </div>
            </div>
            <p className="mt-4 max-w-xs text-sm text-muted-foreground">
              Encrypt. Defend. Secure. — Protecting digital assets, securing
              tomorrow.
            </p>
          </div>
          <FooterCol
            title="Services"
            items={["Managed Security", "SOC", "Pen Testing", "Cloud Security"]}
          />
          <FooterCol
            title="Company"
            items={["About", "Insights", "Careers", "Contact"]}
          />
          <div>
            <div className="font-display text-sm font-semibold text-foreground">
              Stay informed
            </div>
            <p className="mt-2 text-xs text-muted-foreground">
              Threat intelligence briefings, monthly.
            </p>
            <form className="mt-3 flex gap-2">
              <input
                type="email"
                placeholder="you@company.com"
                className="flex-1 rounded-full border border-border bg-input px-4 py-2 text-xs text-foreground outline-none focus:border-primary"
              />
              <button
                type="submit"
                className="rounded-full bg-primary px-4 py-2 text-xs font-semibold text-primary-foreground"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-border/60 pt-6 text-xs text-muted-foreground sm:flex-row">
          <div>
            &copy; {new Date().getFullYear()} CipherWard Technologies. All
            rights reserved.
          </div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-foreground transition">Privacy</a>
            <a href="#" className="hover:text-foreground transition">Terms</a>
            <a href="#" className="hover:text-foreground transition">Security</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
