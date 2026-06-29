import { BookOpen } from "lucide-react";
import { Section, SectionHeading } from "@/components/section";
import { Reveal } from "@/components/reveal";
import { glossary } from "@/content/proposal";

export function Glossary() {
  return (
    <Section id="glossary" className="border-t border-border bg-[var(--ink)]/40">
      <SectionHeading
        index="—"
        eyebrow="Appendix"
        title="Index of terms & abbreviations"
        lede={glossary.lede}
      />

      <Reveal className="mt-12 flex items-center gap-2.5" delay={20}>
        <BookOpen className="size-4 text-gold" aria-hidden />
        <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-muted-foreground">
          Glossary
        </h3>
      </Reveal>

      <dl className="mt-6 grid gap-x-8 gap-y-5 sm:grid-cols-2 lg:grid-cols-3">
        {glossary.terms.map((t, i) => (
          <Reveal key={t.term} delay={Math.min(i * 25, 200)}>
            <div className="flex h-full flex-col rounded-xl border border-border bg-surface p-5">
              <div className="flex items-baseline gap-2">
                <dt className="font-heading text-base font-bold text-gold">{t.term}</dt>
                <span className="text-xs text-muted-foreground/80">{t.full}</span>
              </div>
              <dd className="mt-2 text-sm leading-relaxed text-muted-foreground">{t.def}</dd>
            </div>
          </Reveal>
        ))}
      </dl>
    </Section>
  );
}
