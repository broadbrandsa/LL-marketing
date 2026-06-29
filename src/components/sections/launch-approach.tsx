import { ShieldCheck, Check } from "lucide-react";
import { Section, SectionHeading } from "@/components/section";
import { Reveal } from "@/components/reveal";
import { approach } from "@/content/proposal";

export function LaunchApproach() {
  return (
    <Section id="approach" className="border-t border-border bg-[var(--ink)]/40">
      <SectionHeading
        index="06"
        eyebrow="The Launch Approach"
        title="Soft launch, ramp gate, hard launch"
        lede={approach.lede}
      />

      {/* Timeline */}
      <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {approach.timeline.map((step, i) => (
          <Reveal key={step.step} delay={i * 80}>
            <div className="relative flex h-full flex-col rounded-2xl border border-border bg-surface p-6">
              <div className="flex items-center justify-between">
                <span className="flex size-9 items-center justify-center rounded-full bg-gold font-heading text-sm font-bold text-[var(--ink)]">
                  {step.step}
                </span>
                <span className="font-mono text-xs uppercase tracking-wider text-gold/70">
                  {step.when}
                </span>
              </div>
              <h3 className="mt-5 font-heading text-lg font-semibold text-foreground">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {step.body}
              </p>
              {i < approach.timeline.length - 1 && (
                <span
                  aria-hidden
                  className="absolute right-[-10px] top-10 z-10 hidden text-gold/40 lg:block"
                >
                  ›
                </span>
              )}
            </div>
          </Reveal>
        ))}
      </div>

      {/* Ramp gate callout */}
      <Reveal className="mt-8">
        <div className="flex flex-col gap-4 rounded-2xl border border-gold/30 bg-gold-soft p-7 sm:flex-row">
          <div className="flex size-12 shrink-0 items-center justify-center rounded-xl border border-gold/30 bg-background/30">
            <ShieldCheck className="size-6 text-gold" aria-hidden />
          </div>
          <div>
            <h3 className="font-heading text-lg font-semibold text-foreground">
              {approach.gate.title}
            </h3>
            <p className="mt-2 max-w-3xl text-sm leading-relaxed text-muted-foreground">
              {approach.gate.body}
            </p>
          </div>
        </div>
      </Reveal>

      {/* Day 1 checklist */}
      <Reveal className="mt-14">
        <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-muted-foreground">
          What is in place on Day 1
        </h3>
      </Reveal>
      <div className="mt-6 grid gap-3 sm:grid-cols-2">
        {approach.day1.map((item, i) => (
          <Reveal key={item} delay={i * 60}>
            <div className="flex h-full items-start gap-3 rounded-xl border border-border bg-surface/60 p-5">
              <Check className="mt-0.5 size-5 shrink-0 text-gold" aria-hidden />
              <p className="text-sm leading-relaxed text-foreground/90">{item}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
