import { Gauge, Mail, Search } from "lucide-react";
import { Section, SectionHeading } from "@/components/section";
import { Reveal } from "@/components/reveal";
import { measurement } from "@/content/proposal";

const rhythmIcons = [Gauge, Mail, Search];

export function Measurement() {
  return (
    <Section id="measurement" className="border-t border-border">
      <SectionHeading
        index="08"
        eyebrow="Measurement & Optimisation"
        title="How we read the data and act on it"
        lede={measurement.lede}
      />

      {/* Verification gate */}
      <Reveal className="mt-12">
        <div className="rounded-2xl border border-border bg-surface p-7">
          <div className="rule-gold" />
          <h3 className="mt-4 font-heading text-lg font-semibold text-foreground">
            {measurement.verification.title}
          </h3>
          <p className="mt-2 max-w-3xl text-sm leading-relaxed text-muted-foreground">
            {measurement.verification.body}
          </p>
        </div>
      </Reveal>

      {/* Weekly rhythm */}
      <Reveal className="mt-14">
        <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-muted-foreground">
          The weekly rhythm
        </h3>
      </Reveal>
      <div className="mt-6 grid gap-4 md:grid-cols-3">
        {measurement.rhythm.map((item, i) => {
          const Icon = rhythmIcons[i % rhythmIcons.length];
          return (
            <Reveal key={item.title} delay={i * 80}>
              <div className="h-full rounded-2xl border border-border bg-surface p-6">
                <div className="flex size-10 items-center justify-center rounded-lg border border-gold/20 bg-gold-soft">
                  <Icon className="size-5 text-gold" aria-hidden />
                </div>
                <h4 className="mt-4 font-heading text-base font-semibold text-foreground">
                  {item.title}
                </h4>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {item.body}
                </p>
              </div>
            </Reveal>
          );
        })}
      </div>

      {/* Test programme */}
      <Reveal className="mt-14">
        <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-muted-foreground">
          The test programme
        </h3>
      </Reveal>
      <Reveal className="mt-6 overflow-hidden rounded-2xl border border-border" delay={60}>
        <div className="overflow-x-auto">
          <table className="w-full min-w-[42rem] border-collapse text-left">
            <thead>
              <tr className="bg-surface-2">
                {["Test", "Hypothesis", "Window"].map((h) => (
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
              {measurement.tests.map((row, i) => (
                <tr key={row.test} className={i % 2 ? "bg-surface/40" : "bg-surface/10"}>
                  <td className="border-t border-border px-5 py-4 align-top font-heading text-sm font-semibold text-gold">
                    {row.test}
                  </td>
                  <td className="border-t border-border px-5 py-4 align-top text-sm leading-relaxed text-foreground">
                    {row.hypothesis}
                  </td>
                  <td className="whitespace-nowrap border-t border-border px-5 py-4 align-top font-mono text-sm text-muted-foreground">
                    {row.window}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Reveal>

      {/* Reporting */}
      <Reveal className="mt-8 max-w-3xl" delay={80}>
        <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-muted-foreground">
          Reporting
        </h3>
        <p className="mt-3 text-pretty leading-relaxed text-muted-foreground">
          {measurement.reporting}
        </p>
      </Reveal>
    </Section>
  );
}
