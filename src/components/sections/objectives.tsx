import { Info } from "lucide-react";
import { Section, SectionHeading } from "@/components/section";
import { Reveal } from "@/components/reveal";
import { objectives } from "@/content/proposal";

export function Objectives() {
  const { primary, secondary, tertiary } = objectives.metrics;

  return (
    <Section id="objectives" className="border-t border-border">
      <SectionHeading
        index="03"
        eyebrow="Objectives & Success Measures"
        title="What we are optimising toward"
        lede={objectives.lede}
      />

      {/* Objectives table */}
      <Reveal className="mt-12 overflow-hidden rounded-2xl border border-border">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[44rem] border-collapse text-left">
            <thead>
              <tr className="bg-surface-2">
                {["Objective", "What it means", "How we measure it"].map((h) => (
                  <th
                    key={h}
                    className="px-5 py-4 text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground"
                  >
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {objectives.table.map((row, i) => (
                <tr
                  key={row.objective}
                  className={i % 2 ? "bg-surface/40" : "bg-surface/10"}
                >
                  <td className="border-t border-border px-5 py-4 align-top font-heading text-sm font-semibold text-gold">
                    {row.objective}
                  </td>
                  <td className="border-t border-border px-5 py-4 align-top text-sm leading-relaxed text-foreground">
                    {row.meaning}
                  </td>
                  <td className="border-t border-border px-5 py-4 align-top text-sm leading-relaxed text-muted-foreground">
                    {row.measure}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Reveal>

      {/* Note */}
      <Reveal className="mt-5" delay={80}>
        <div className="flex gap-3 rounded-xl border-l-2 border-gold bg-gold-soft px-5 py-4">
          <Info className="mt-0.5 size-4 shrink-0 text-gold" aria-hidden />
          <p className="text-sm leading-relaxed text-muted-foreground">
            <span className="font-semibold text-foreground">Targets are set, not assumed. </span>
            {objectives.note}
          </p>
        </div>
      </Reveal>

      {/* Metric hierarchy */}
      <Reveal className="mt-16">
        <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-muted-foreground">
          What we optimise for
        </h3>
      </Reveal>

      <div className="mt-6 space-y-4">
        {/* Primary */}
        <Reveal>
          <div className="grid gap-6 overflow-hidden rounded-2xl border border-gold/30 bg-gradient-to-br from-gold-soft to-transparent p-7 md:grid-cols-[180px_1fr] md:items-center">
            <div>
              <div className="text-xs font-semibold uppercase tracking-[0.18em] text-gold/80">
                {primary.tier}
              </div>
              <div className="mt-1 font-heading text-5xl font-extrabold tracking-tight text-gold">
                {primary.metric}
              </div>
            </div>
            <div>
              <h4 className="font-heading text-xl font-semibold text-foreground">
                {primary.heading}
              </h4>
              <div className="mt-1 text-xs font-semibold uppercase tracking-[0.14em] text-gold/70">
                {primary.tag}
              </div>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {primary.body}
              </p>
            </div>
          </div>
        </Reveal>

        {/* Secondary & tertiary */}
        {[secondary, tertiary].map((m, i) => (
          <Reveal key={m.tier} delay={i * 80}>
            <div className="grid gap-6 rounded-2xl border border-border bg-surface p-7 md:grid-cols-[180px_1fr] md:items-center">
              <div>
                <div className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                  {m.tier}
                </div>
                <div className="mt-1 font-heading text-2xl font-bold tracking-tight text-foreground">
                  {m.tier === "Secondary" ? "The levers" : "The signals"}
                </div>
              </div>
              <div>
                <h4 className="font-heading text-lg font-semibold text-foreground">
                  {m.heading}
                </h4>
                <div className="mt-1 text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground/80">
                  {m.tag}
                </div>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {m.body}
                </p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
