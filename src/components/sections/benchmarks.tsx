import { Database, Calculator, Target } from "lucide-react";
import { Section, SectionHeading } from "@/components/section";
import { Reveal } from "@/components/reveal";
import { benchmarks } from "@/content/proposal";

export function Benchmarks() {
  return (
    <Section id="benchmarks" className="border-t border-border">
      <SectionHeading
        index="08"
        eyebrow="KPIs & SA-Verified Benchmarks"
        title="Targets set against South African data"
        lede={benchmarks.lede}
      />

      {/* Verified SA inputs */}
      <Reveal className="mt-12 flex items-center gap-2.5">
        <Database className="size-4 text-gold" aria-hidden />
        <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-muted-foreground">
          Verified SA inputs
        </h3>
      </Reveal>
      <Reveal className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3" delay={40}>
        {benchmarks.inputs.map((row) => (
          <div
            key={row.metric}
            className="flex flex-col rounded-xl border border-border bg-surface p-5"
          >
            <span className="font-heading text-2xl font-bold text-gold">
              {row.value}
            </span>
            <span className="mt-2 text-sm leading-snug text-foreground/90">
              {row.metric}
            </span>
            <span className="mt-3 text-xs text-muted-foreground/80">
              {row.source}
            </span>
          </div>
        ))}
      </Reveal>

      {/* Derived CPA model */}
      <Reveal className="mt-14 flex items-center gap-2.5">
        <Calculator className="size-4 text-gold" aria-hidden />
        <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-muted-foreground">
          Derived CPA target for Liquid Lighting
        </h3>
      </Reveal>
      <Reveal className="mt-3 max-w-3xl text-sm leading-relaxed text-muted-foreground" delay={40}>
        {benchmarks.cpaModel.note}
      </Reveal>
      <Reveal className="mt-5 overflow-hidden rounded-2xl border border-border" delay={60}>
        <div className="overflow-x-auto">
          <table className="w-full min-w-[40rem] border-collapse text-left">
            <thead>
              <tr className="bg-surface-2">
                {["Channel & scenario", "Assumed CPC", "Assumed CVR", "Implied CPA"].map((h) => (
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
              {benchmarks.cpaModel.rows.map((row, i) => {
                const highlight = "highlight" in row && row.highlight;
                return (
                  <tr
                    key={row.scenario}
                    className={
                      highlight
                        ? "bg-gold-soft"
                        : i % 2
                          ? "bg-surface/40"
                          : "bg-surface/10"
                    }
                  >
                    <td
                      className={
                        "border-t border-border px-5 py-4 align-top text-sm font-semibold " +
                        (highlight ? "text-gold" : "text-foreground")
                      }
                    >
                      {row.scenario}
                    </td>
                    <td className="border-t border-border px-5 py-4 align-top font-mono text-sm text-muted-foreground">
                      {row.cpc}
                    </td>
                    <td className="border-t border-border px-5 py-4 align-top font-mono text-sm text-muted-foreground">
                      {row.cvr}
                    </td>
                    <td
                      className={
                        "border-t border-border px-5 py-4 align-top font-mono text-sm font-semibold " +
                        (highlight ? "text-gold" : "text-foreground")
                      }
                    >
                      {row.cpa}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </Reveal>

      {/* 90-day KPI targets + paid split */}
      <div className="mt-14 grid gap-8 lg:grid-cols-5">
        {/* KPI targets */}
        <div className="lg:col-span-3">
          <Reveal className="flex items-center gap-2.5">
            <Target className="size-4 text-gold" aria-hidden />
            <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-muted-foreground">
              90-day KPI targets
            </h3>
          </Reveal>
          <Reveal className="mt-5 overflow-hidden rounded-2xl border border-border" delay={40}>
            <div className="overflow-x-auto">
              <table className="w-full min-w-[32rem] border-collapse text-left">
                <thead>
                  <tr className="bg-surface-2">
                    {benchmarks.kpiTargets.columns.map((h, i) => (
                      <th
                        key={h}
                        className={
                          "px-5 py-4 text-xs font-semibold uppercase tracking-[0.14em] " +
                          (i === 0 ? "text-muted-foreground" : "text-gold/80")
                        }
                      >
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {benchmarks.kpiTargets.rows.map((row, i) => (
                    <tr key={row.kpi} className={i % 2 ? "bg-surface/40" : "bg-surface/10"}>
                      <td className="border-t border-border px-5 py-4 align-top text-sm font-medium text-foreground">
                        {row.kpi}
                      </td>
                      <td className="border-t border-border px-5 py-4 align-top font-mono text-sm text-muted-foreground">
                        {row.m1}
                      </td>
                      <td className="border-t border-border px-5 py-4 align-top font-mono text-sm text-muted-foreground">
                        {row.m2}
                      </td>
                      <td className="border-t border-border px-5 py-4 align-top font-mono text-sm font-semibold text-gold">
                        {row.m3}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Reveal>
        </div>

        {/* Paid split */}
        <div className="lg:col-span-2">
          <Reveal>
            <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-muted-foreground">
              {benchmarks.paidSplit.title}
            </h3>
          </Reveal>
          <Reveal className="mt-5 rounded-2xl border border-border bg-surface p-6" delay={40}>
            <div className="space-y-5">
              {benchmarks.paidSplit.items.map((item) => (
                <div key={item.label}>
                  <div className="flex items-baseline justify-between">
                    <span className="text-sm text-foreground">{item.label}</span>
                    <span className="font-heading text-sm font-bold text-gold">
                      {item.pct}%
                    </span>
                  </div>
                  <div className="mt-2 h-2 overflow-hidden rounded-full bg-surface-2">
                    <div
                      className="h-full rounded-full bg-gold"
                      style={{ width: `${item.pct}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
            <p className="mt-5 border-t border-border pt-4 text-xs leading-relaxed text-muted-foreground">
              {benchmarks.paidSplit.note}
            </p>
          </Reveal>
        </div>
      </div>

      {/* Sources */}
      <Reveal className="mt-12 rounded-xl border border-border bg-surface/40 p-6" delay={60}>
        <h4 className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
          Sources
        </h4>
        <ol className="mt-3 grid gap-1.5 text-xs leading-relaxed text-muted-foreground/80 sm:grid-cols-2">
          {benchmarks.sources.map((s, i) => (
            <li key={s} className="flex gap-2">
              <span className="font-mono text-gold/60">{i + 1}.</span>
              <span>{s}</span>
            </li>
          ))}
        </ol>
      </Reveal>
    </Section>
  );
}
