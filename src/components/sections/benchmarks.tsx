import {
  TrendingUp,
  Scale,
  Calculator,
  Database,
  Lightbulb,
  PieChart,
  BookText,
} from "lucide-react";
import { Section, SectionHeading } from "@/components/section";
import { Reveal } from "@/components/reveal";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { benchmarks } from "@/content/proposal";

function TriggerLabel({ icon: Icon, children }: { icon: React.ElementType; children: React.ReactNode }) {
  return (
    <span className="flex items-center gap-2.5">
      <Icon className="size-4 shrink-0 text-gold" aria-hidden />
      <span className="font-heading text-base font-semibold text-foreground">{children}</span>
    </span>
  );
}

export function Benchmarks() {
  return (
    <Section id="benchmarks" className="border-t border-border">
      <SectionHeading
        index="09"
        eyebrow="KPIs & SA-Verified Benchmarks"
        title="What success looks like — month by month"
        lede={benchmarks.lede}
      />

      {/* Month-by-month targets — the visible lead */}
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
                      "font-heading text-sm font-bold " + (isGoal ? "text-gold" : "text-foreground")
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
                          "font-mono text-sm font-semibold " + (isGoal ? "text-gold" : "text-foreground")
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

      {/* All supporting benchmarks, collapsed into an accordion */}
      <Reveal className="mt-12">
        <Accordion
          type="multiple"
          defaultValue={["compare"]}
          className="w-full rounded-2xl border border-border bg-surface px-5 sm:px-7"
        >
          {/* How LL compares */}
          <AccordionItem value="compare">
            <AccordionTrigger className="hover:no-underline">
              <TriggerLabel icon={Scale}>How LL targets compare to benchmarks</TriggerLabel>
            </AccordionTrigger>
            <AccordionContent>
              <p className="mb-4 max-w-3xl text-sm leading-relaxed text-muted-foreground">
                {benchmarks.comparison.note}
              </p>
              <div className="overflow-x-auto rounded-xl border border-border">
                <table className="w-full min-w-[34rem] border-collapse text-left">
                  <thead>
                    <tr className="bg-surface-2">
                      <th className="px-5 py-3.5 text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                        Metric
                      </th>
                      <th className="px-5 py-3.5 text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                        Benchmark
                      </th>
                      <th className="px-5 py-3.5 text-xs font-semibold uppercase tracking-[0.14em] text-gold/80">
                        Liquid Lighting · M3
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {benchmarks.comparison.rows.map((row, i) => (
                      <tr key={row.metric} className={i % 2 ? "bg-surface/40" : "bg-surface/10"}>
                        <td className="border-t border-border px-5 py-3.5 align-top text-sm font-medium text-foreground">
                          {row.metric}
                        </td>
                        <td className="border-t border-border px-5 py-3.5 align-top font-mono text-sm text-muted-foreground">
                          {row.benchmark}
                        </td>
                        <td className="border-t border-border px-5 py-3.5 align-top font-mono text-sm font-semibold text-gold">
                          {row.ll}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </AccordionContent>
          </AccordionItem>

          {/* Blended CPA */}
          <AccordionItem value="cpa">
            <AccordionTrigger className="hover:no-underline">
              <TriggerLabel icon={Calculator}>{benchmarks.cpaApproach.title}</TriggerLabel>
            </AccordionTrigger>
            <AccordionContent>
              <p className="max-w-3xl text-sm leading-relaxed text-muted-foreground">
                {benchmarks.cpaApproach.note}
              </p>
              <div className="mt-5 grid gap-3 sm:grid-cols-3">
                {benchmarks.cpaApproach.trajectory.map((t, i) => {
                  const isGoal = i === benchmarks.cpaApproach.trajectory.length - 1;
                  return (
                    <div
                      key={t.phase}
                      className={
                        "flex items-center justify-between rounded-xl border p-4 " +
                        (isGoal ? "border-gold/35 bg-gold-soft" : "border-border bg-background/30")
                      }
                    >
                      <span className="text-sm text-muted-foreground">{t.phase}</span>
                      <span
                        className={
                          "font-heading text-xl font-bold " + (isGoal ? "text-gold" : "text-foreground")
                        }
                      >
                        {t.value}
                      </span>
                    </div>
                  );
                })}
              </div>
            </AccordionContent>
          </AccordionItem>

          {/* Verified SA inputs */}
          <AccordionItem value="inputs">
            <AccordionTrigger className="hover:no-underline">
              <TriggerLabel icon={Database}>Verified SA inputs</TriggerLabel>
            </AccordionTrigger>
            <AccordionContent>
              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {benchmarks.inputs.map((row) => (
                  <div
                    key={row.metric}
                    className="flex flex-col rounded-xl border border-border bg-background/30 p-5"
                  >
                    <span className="font-heading text-2xl font-bold text-gold">{row.value}</span>
                    <span className="mt-2 text-sm leading-snug text-foreground/90">{row.metric}</span>
                    <span className="mt-3 text-xs text-muted-foreground/80">{row.source}</span>
                  </div>
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>

          {/* Sector context */}
          <AccordionItem value="sector">
            <AccordionTrigger className="hover:no-underline">
              <TriggerLabel icon={Lightbulb}>Lighting &amp; home decor sector context</TriggerLabel>
            </AccordionTrigger>
            <AccordionContent>
              <p className="max-w-3xl text-sm leading-relaxed text-muted-foreground">
                {benchmarks.sector.note}
              </p>
              <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {benchmarks.sector.benchmarks.map((row) => (
                  <div
                    key={row.name}
                    className="flex items-center justify-between gap-3 rounded-xl border border-border bg-background/30 p-4"
                  >
                    <span className="text-sm leading-snug text-muted-foreground">{row.name}</span>
                    <span className="shrink-0 font-mono text-sm font-semibold text-foreground">
                      {row.value}
                    </span>
                  </div>
                ))}
              </div>
              <h4 className="mt-7 font-heading text-base font-semibold text-foreground">
                {benchmarks.sector.whyTitle}
              </h4>
              <div className="mt-4 grid gap-x-8 gap-y-5 sm:grid-cols-2 lg:grid-cols-3">
                {benchmarks.sector.why.map((item) => (
                  <div key={item.point} className="border-l-2 border-gold/40 pl-4">
                    <div className="font-heading text-sm font-semibold text-foreground">
                      {item.point}
                    </div>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{item.note}</p>
                  </div>
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>

          {/* Google Ads split */}
          <AccordionItem value="split">
            <AccordionTrigger className="hover:no-underline">
              <TriggerLabel icon={PieChart}>{benchmarks.paidSplit.title}</TriggerLabel>
            </AccordionTrigger>
            <AccordionContent>
              <div className="rounded-xl border border-border bg-background/30 p-6 sm:max-w-2xl">
                <div className="space-y-5">
                  {benchmarks.paidSplit.items.map((item) => (
                    <div key={item.label}>
                      <div className="flex items-baseline justify-between">
                        <span className="text-sm text-foreground">{item.label}</span>
                        <span className="font-heading text-sm font-bold text-gold">{item.pct}%</span>
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
              </div>
            </AccordionContent>
          </AccordionItem>

          {/* Sources */}
          <AccordionItem value="sources" className="border-b-0">
            <AccordionTrigger className="hover:no-underline">
              <TriggerLabel icon={BookText}>Sources</TriggerLabel>
            </AccordionTrigger>
            <AccordionContent>
              <ol className="grid gap-1.5 text-xs leading-relaxed text-muted-foreground/80 sm:grid-cols-2">
                {benchmarks.sources.map((s, i) => (
                  <li key={s} className="flex gap-2">
                    <span className="font-mono text-gold/60">{i + 1}.</span>
                    <span>{s}</span>
                  </li>
                ))}
              </ol>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </Reveal>
    </Section>
  );
}
