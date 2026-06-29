import { Target, Sparkles, Repeat, Layers } from "lucide-react";
import { Section, SectionHeading } from "@/components/section";
import { Reveal } from "@/components/reveal";
import { summary } from "@/content/proposal";

const focusIcons = [Target, Sparkles, Repeat, Layers];

export function ExecutiveSummary() {
  return (
    <Section id="summary" className="border-t border-border">
      <SectionHeading
        index="01"
        eyebrow="Executive Summary"
        title="The launch in one page"
        lede={summary.lede}
      />

      <Reveal className="mt-8 max-w-3xl space-y-5">
        {summary.body.map((para, i) => (
          <p key={i} className="text-pretty leading-relaxed text-muted-foreground">
            {para}
          </p>
        ))}
      </Reveal>

      {/* Stat row */}
      <div className="mt-14 grid gap-4 sm:grid-cols-3">
        {summary.stats.map((stat, i) => (
          <Reveal key={stat.label} delay={i * 80}>
            <div className="h-full rounded-2xl border border-border bg-surface p-6">
              <div className="flex items-baseline gap-0.5">
                <span className="font-heading text-5xl font-extrabold tracking-tight text-gold">
                  {stat.value}
                </span>
                {stat.unit && (
                  <span className="font-heading text-2xl font-bold text-gold/80">
                    {stat.unit}
                  </span>
                )}
              </div>
              <div className="mt-3 text-xs font-semibold uppercase tracking-[0.16em] text-foreground">
                {stat.label}
              </div>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {stat.detail}
              </p>
            </div>
          </Reveal>
        ))}
      </div>

      {/* Focus pillars */}
      <Reveal className="mt-16">
        <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-muted-foreground">
          Where this plan focuses
        </h3>
      </Reveal>
      <div className="mt-6 grid gap-x-10 gap-y-8 sm:grid-cols-2">
        {summary.focus.map((item, i) => {
          const Icon = focusIcons[i % focusIcons.length];
          return (
            <Reveal key={item.title} delay={i * 70}>
              <div className="flex gap-4">
                <div className="mt-0.5 flex size-10 shrink-0 items-center justify-center rounded-lg border border-gold/20 bg-gold-soft">
                  <Icon className="size-5 text-gold" />
                </div>
                <div>
                  <h4 className="font-heading text-base font-semibold text-foreground">
                    {item.title}
                  </h4>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                    {item.body}
                  </p>
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
