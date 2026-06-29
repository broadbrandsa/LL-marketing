import { Check, Info, Download, FileText } from "lucide-react";
import { Section, SectionHeading } from "@/components/section";
import { Reveal } from "@/components/reveal";
import { Button } from "@/components/ui/button";
import { investment, download, meta } from "@/content/proposal";

const fmt = (n: number) =>
  `${investment.currency}${n.toLocaleString("en-ZA")}`;

export function Investment() {
  const { termMonths, lines } = investment;
  const monthlyTotal = lines.reduce((sum, l) => sum + l.monthly, 0);
  const total = monthlyTotal * termMonths;

  return (
    <Section id="investment" className="border-t border-border bg-[var(--ink)]/40">
      <SectionHeading
        index="09"
        eyebrow="Investment"
        title="The engagement"
        lede={investment.lede}
      />

      <div className="mt-12 grid gap-6 lg:grid-cols-[1.4fr_1fr] lg:items-start">
        {/* Line items */}
        <div className="space-y-4">
          {lines.map((line, i) => (
            <Reveal key={line.name} delay={i * 80}>
              <div className="rounded-2xl border border-border bg-surface p-6 sm:p-7">
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <div className="text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-gold/80">
                      {line.tag}
                    </div>
                    <h3 className="mt-1.5 font-heading text-xl font-semibold text-foreground">
                      {line.name}
                    </h3>
                  </div>
                  <div className="text-right">
                    <div className="font-heading text-2xl font-bold text-gold">
                      {fmt(line.monthly)}
                    </div>
                    <div className="text-xs uppercase tracking-wider text-muted-foreground">
                      per month
                    </div>
                  </div>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  {line.detail}
                </p>

                {"split" in line && line.split && (
                  <div className="mt-4 grid gap-3 sm:grid-cols-2">
                    {line.split.map((s) => (
                      <div
                        key={s.label}
                        className="rounded-xl border border-border bg-background/30 p-4"
                      >
                        <div className="flex items-baseline justify-between gap-2">
                          <span className="font-heading text-sm font-semibold text-foreground">
                            {s.label}
                          </span>
                          <span className="font-mono text-sm font-bold text-gold">
                            {fmt(s.monthly)}
                            <span className="text-xs font-normal text-muted-foreground">/mo</span>
                          </span>
                        </div>
                        <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground">
                          {s.note}
                        </p>
                      </div>
                    ))}
                  </div>
                )}

                <div className="mt-4 flex items-center justify-between border-t border-border pt-4 text-sm">
                  <span className="text-muted-foreground">
                    Over {termMonths} months
                  </span>
                  <span className="font-mono font-medium text-foreground">
                    {fmt(line.monthly * termMonths)}
                  </span>
                </div>
              </div>
            </Reveal>
          ))}

          {/* What's included */}
          <Reveal delay={120}>
            <div className="rounded-2xl border border-border bg-surface/50 p-6 sm:p-7">
              <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                What the retainer covers
              </h3>
              <ul className="mt-5 grid gap-x-8 gap-y-3 sm:grid-cols-2">
                {investment.includes.map((item) => (
                  <li key={item} className="flex gap-2.5 text-sm text-foreground/90">
                    <Check className="mt-0.5 size-4 shrink-0 text-gold" aria-hidden />
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>

        {/* Summary card */}
        <Reveal delay={100} className="lg:sticky lg:top-24">
          <div className="overflow-hidden rounded-2xl border border-gold/30 bg-gradient-to-b from-gold-soft to-transparent">
            <div className="border-b border-gold/20 p-7">
              <div className="text-xs font-semibold uppercase tracking-[0.18em] text-gold/80">
                {termMonths}-month engagement window
              </div>
              <div className="mt-4 flex items-baseline gap-2">
                <span className="font-heading text-5xl font-extrabold tracking-tight text-foreground">
                  {fmt(monthlyTotal)}
                </span>
                <span className="text-sm text-muted-foreground">/ month</span>
              </div>
              <p className="mt-2 text-sm text-muted-foreground">
                {fmt(lines[0].monthly)} media + {fmt(lines[1].monthly)} retainer
              </p>
            </div>
            <div className="space-y-3 p-7">
              {lines.map((line) => (
                <div key={line.name} className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">{line.name}</span>
                  <span className="font-mono text-foreground">
                    {fmt(line.monthly * termMonths)}
                  </span>
                </div>
              ))}
              <div className="flex items-center justify-between border-t border-gold/20 pt-4">
                <span className="font-heading font-semibold text-foreground">
                  Total over {termMonths} months
                </span>
                <span className="font-heading text-xl font-bold text-gold">
                  {fmt(total)}
                </span>
              </div>
            </div>
          </div>
        </Reveal>
      </div>

      {/* Note */}
      <Reveal className="mt-6" delay={80}>
        <div className="flex max-w-4xl gap-3 rounded-xl border-l-2 border-gold/50 bg-surface/40 px-5 py-4">
          <Info className="mt-0.5 size-4 shrink-0 text-gold/70" aria-hidden />
          <p className="text-sm leading-relaxed text-muted-foreground">{investment.note}</p>
        </div>
      </Reveal>

      {/* Signed SOW download */}
      <Reveal className="mt-6" delay={120}>
        <div className="flex flex-col gap-4 rounded-2xl border border-gold/25 bg-gold-soft p-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-start gap-4">
            <div className="flex size-12 shrink-0 items-center justify-center rounded-xl border border-gold/30 bg-background/30">
              <FileText className="size-6 text-gold" aria-hidden />
            </div>
            <div>
              <h3 className="font-heading text-base font-semibold text-foreground">
                Signed scope of work
              </h3>
              <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                {download.note} Signed by {meta.signedBy}, {meta.signedDate}. PO {meta.poNumber}.
              </p>
            </div>
          </div>
          <Button asChild size="lg" className="shrink-0">
            <a href={download.href} download={download.filename} target="_blank" rel="noopener">
              <Download className="size-4" />
              {download.shortLabel}
            </a>
          </Button>
        </div>
      </Reveal>
    </Section>
  );
}
