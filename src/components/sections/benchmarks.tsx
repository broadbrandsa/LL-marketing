import {
  TrendingUp,
  Scale,
  Calculator,
  Database,
  Lightbulb,
  PieChart,
} from "lucide-react";
import { Section, SectionHeading } from "@/components/section";
import { Reveal } from "@/components/reveal";
import { benchmarks } from "@/content/proposal";

export function Benchmarks() {
  return (
    <Section id="benchmarks" className="border-t border-border">
      <SectionHeading
        index="08"
        eyebrow="KPIs & SA-Verified Benchmarks"
        title="What success looks like — month by month"
        lede={benchmarks.lede}
      />

      {/* Month-by-month targets */}
      <Reveal className="mt-12 flex items-center gap-2.5">
        <TrendingUp className="size-4 text-gold" aria-hidden />
        <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-muted-foreground">
          Month-by-month targets
        </h3>
      </Reveal>
      <div className="mt-5 grid gap-4 md:grid-cols-3">
        {benchmarks.monthly.months.map((month, i) => {
          const isGoal = i === benchmarks.monthly.months.length - 1;
          return (
            <Reveal key={month.phase} delay={i * 80}>
              <div
                className={
                  "flex h-full flex-col rounded-2xl border p-6 " +
                  (isGoal
                    ? "border-gold/35 bg-gradient-to-b from-gold-soft to-transparent"
                    : "border-border bg-surface")
                }
              >
                <div className="flex items-baseline justify-between">
                  <span className="font-mono text-xs uppercase tracking-wider text-gold/70">
                    {month.phase}
                  </span>
                  <span
                    className={
                      "font-heading text-sm font-bold " +
                      (isGoal ? "text-gold" : "text-foreground")
                    }
                  >
                    {month.label}
                  </span>
                </div>
                <dl className="mt-5 space-y-0">
                  {benchmarks.monthly.metricOrder.map((key) => (
                    <div
                      key={key}
                      className="flex items-center justify-between border-t border-border/70 py-2.5 first:border-t-0 first:pt-0"
                    >
                      <dt className="text-sm text-muted-foreground">{key}</dt>
                      <dd
                        className={
                          "font-mono text-sm font-semibold " +
                          (isGoal ? "text-gold" : "text-foreground")
                        }
                      >
                        {month.metrics[key as keyof typeof month.metrics]}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>
            </Reveal>
          );
        })}
      </div>

      {/* How LL compares */}
      <Reveal className="mt-14 flex items-center gap-2.5">
        <Scale className="size-4 text-gold" aria-hidden />
        <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-muted-foreground">
          How LL targets compare to benchmarks
        </h3>
      </Reveal>
      <Reveal className="mt-3 max-w-3xl text-sm leading-relaxed text-muted-foreground" delay={40}>
        {benchmarks.comparison.note}
      </Reveal>
      <Reveal className="mt-5 overflow-hidden rounded-2xl border border-border" delay={60}>
        <div className="overflow-x-auto">
          <table className="w-full min-w-[36rem] border-collapse text-left">
            <thead>
              <tr className="bg-surface-2">
                <th className="px-5 py-4 text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                  Metric
                </th>
                <th className="px-5 py-4 text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                  Benchmark
                </th>
                <th className="px-5 py-4 text-xs font-semibold uppercase tracking-[0.14em] text-gold/80">
                  Liquid Lighting · M3
                </th>
              </tr>
            </thead>
            <tbody>
              {benchmarks.comparison.rows.map((row, i) => (
                <tr key={row.metric} className={i % 2 ? "bg-surface/40" : "bg-surface/10"}>
                  <td className="border-t border-border px-5 py-4 align-top text-sm font-medium text-foreground">
                    {row.metric}
                  </td>
                  <td className="border-t border-border px-5 py-4 align-top font-mono text-sm text-muted-foreground">
                    {row.benchmark}
                  </td>
                  <td className="border-t border-border px-5 py-4 align-top font-mono text-sm font-semibold text-gold">
                    {row.ll}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
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
                      highlight ? "bg-gold-soft" : i % 2 ? "bg-surface/40" : "bg-surface/10"
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

      {/* Verified SA inputs */}
      <Reveal className="mt-14 flex items-center gap-2.5">
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
            <span className="font-heading text-2xl font-bold text-gold">{row.value}</span>
            <span className="mt-2 text-sm leading-snug text-foreground/90">{row.metric}</span>
            <span className="mt-3 text-xs text-muted-foreground/80">{row.source}</span>
          </div>
        ))}
      </Reveal>

      {/* Sector context */}
      <Reveal className="mt-14 flex items-center gap-2.5">
        <Lightbulb className="size-4 text-gold" aria-hidden />
        <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-muted-foreground">
          Lighting &amp; home decor sector context
        </h3>
      </Reveal>
      <Reveal className="mt-3 max-w-3xl text-sm leading-relaxed text-muted-foreground" delay={40}>
        {benchmarks.sector.note}
      </Reveal>
      <Reveal className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3" delay={60}>
        {benchmarks.sector.benchmarks.map((row) => (
          <div
            key={row.name}
            className="flex items-center justify-between gap-3 rounded-xl border border-border bg-surface/60 p-4"
          >
            <span className="text-sm leading-snug text-muted-foreground">{row.name}</span>
            <span className="shrink-0 font-mono text-sm font-semibold text-foreground">
              {row.value}
            </span>
          </div>
        ))}
      </Reveal>

      {/* Why lighting converts lower */}
      <Reveal className="mt-8 rounded-2xl border border-border bg-surface p-6 sm:p-7">
        <h4 className="font-heading text-base font-semibold text-foreground">
          {benchmarks.sector.whyTitle}
        </h4>
        <div className="mt-5 grid gap-x-8 gap-y-5 sm:grid-cols-2 lg:grid-cols-3">
          {benchmarks.sector.why.map((item) => (
            <div key={item.point} className="border-l-2 border-gold/40 pl-4">
              <div className="font-heading text-sm font-semibold text-foreground">
                {item.point}
              </div>
              <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{item.note}</p>
            </div>
          ))}
        </div>
      </Reveal>

      {/* Google Ads campaign split */}
      <Reveal className="mt-14 flex items-center gap-2.5">
        <PieChart className="size-4 text-gold" aria-hidden />
        <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-muted-foreground">
          {benchmarks.paidSplit.title}
        </h3>
      </Reveal>
      <Reveal className="mt-5 rounded-2xl border border-border bg-surface p-6 sm:max-w-2xl" delay={40}>
        <div className="space-y-5">
          {benchmarks.paidSplit.items.map((item) => (
            <div key={item.label}>
              <div className="flex items-baseline justify-between">
                <span className="text-sm text-foreground">{item.label}</span>
                <span className="font-heading text-sm font-bold text-gold">{item.pct}%</span>
              </div>
              <div className="mt-2 h-2 overflow-hidden rounded-full bg-surface-2">
                <div className="h-full rounded-full bg-gold" style={{ width: `${item.pct}%` }} />
              </div>
            </div>
          ))}
        </div>
        <p className="mt-5 border-t border-border pt-4 text-xs leading-relaxed text-muted-foreground">
          {benchmarks.paidSplit.note}
        </p>
      </Reveal>

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
