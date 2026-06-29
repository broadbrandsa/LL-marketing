import { Quote, Check } from "lucide-react";
import { Section, SectionHeading } from "@/components/section";
import { Reveal } from "@/components/reveal";
import { opportunity } from "@/content/proposal";

export function Opportunity() {
  return (
    <Section id="opportunity" className="border-t border-border bg-[var(--ink)]/40">
      <SectionHeading
        index="02"
        eyebrow="The Opportunity"
        title="Market context and where we win"
        lede={opportunity.lede}
      />

      <Reveal className="mt-8 max-w-3xl">
        <p className="text-pretty leading-relaxed text-muted-foreground">
          {opportunity.body}
        </p>
      </Reveal>

      {/* Three pillars */}
      <div className="mt-12 grid gap-4 md:grid-cols-3">
        {opportunity.pillars.map((pillar, i) => (
          <Reveal key={pillar.title} delay={i * 80}>
            <div className="h-full rounded-2xl border border-border bg-surface p-6">
              <div className="rule-gold" />
              <h3 className="mt-4 font-heading text-lg font-semibold text-foreground">
                {pillar.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {pillar.body}
              </p>
            </div>
          </Reveal>
        ))}
      </div>

      {/* Competitive picture + quote */}
      <div className="mt-14 grid gap-10 lg:grid-cols-5">
        <Reveal className="lg:col-span-3">
          <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-muted-foreground">
            The competitive picture
          </h3>
          <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
            {opportunity.competitive}
          </p>
        </Reveal>
        <Reveal className="lg:col-span-2" delay={120}>
          <figure className="relative h-full rounded-2xl border border-gold/20 bg-gold-soft p-7">
            <Quote className="size-7 text-gold" aria-hidden />
            <blockquote className="mt-4 text-pretty font-heading text-xl font-medium leading-snug text-foreground">
              {opportunity.quote}
            </blockquote>
          </figure>
        </Reveal>
      </div>

      {/* Credibility */}
      <Reveal className="mt-16">
        <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-muted-foreground">
          What makes the launch credible from day one
        </h3>
      </Reveal>
      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {opportunity.credibility.map((item, i) => (
          <Reveal key={item.title} delay={i * 60}>
            <div className="flex h-full flex-col rounded-xl border border-border bg-surface/60 p-5">
              <Check className="size-5 text-gold" aria-hidden />
              <h4 className="mt-3 font-heading text-sm font-semibold text-foreground">
                {item.title}
              </h4>
              <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                {item.body}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
