import { Flag, Mail, Megaphone } from "lucide-react";
import { Section, SectionHeading } from "@/components/section";
import { Reveal } from "@/components/reveal";
import { roadmap } from "@/content/proposal";

const TOTAL = roadmap.totalWeeks;
const LABEL = "w-44 shrink-0 pr-3 sm:w-52";

// percentage helpers across the 12-week track
const leftPct = (week: number) => ((week - 1) / TOTAL) * 100;
const widthPct = (start: number, end: number) => ((end - start + 1) / TOTAL) * 100;
const dotLeft = (week: number) => ((week - 0.5) / TOTAL) * 100;

function GridLines() {
  return (
    <div className="absolute inset-0 grid grid-cols-12" aria-hidden>
      {Array.from({ length: TOTAL }).map((_, i) => (
        <div
          key={i}
          className={
            "border-l " + ((i + 1) % 4 === 0 && i + 1 !== TOTAL ? "border-border" : "border-border/25")
          }
        />
      ))}
    </div>
  );
}

export function Roadmap() {
  return (
    <Section id="roadmap" className="border-t border-border bg-[var(--ink)]/40">
      <SectionHeading
        index="07"
        eyebrow="The Roadmap"
        title="The 12-week launch roadmap"
        lede={roadmap.lede}
      />

      {/* Pre-launch banner */}
      <Reveal className="mt-10">
        <div className="flex flex-col gap-1 rounded-xl border-l-2 border-gold bg-gold-soft px-5 py-4 sm:flex-row sm:items-baseline sm:gap-3">
          <span className="font-heading text-sm font-semibold text-gold">
            {roadmap.prelaunch.label}
          </span>
          <span className="text-sm leading-relaxed text-muted-foreground">
            {roadmap.prelaunch.note}
          </span>
        </div>
      </Reveal>

      {/* Gantt */}
      <Reveal className="mt-6 overflow-x-auto rounded-2xl border border-border bg-surface" delay={60}>
        <div className="min-w-[48rem] p-5 sm:p-6">
          {/* Month header */}
          <div className="flex items-end">
            <div className={LABEL} />
            <div className="grid flex-1 grid-cols-3">
              {roadmap.months.map((m) => (
                <div key={m.label} className="border-l border-border px-2 pb-1 text-center">
                  <div className="font-heading text-sm font-semibold text-foreground">
                    {m.label}
                  </div>
                  <div className="text-[0.7rem] uppercase tracking-wider text-gold/80">
                    {m.sub}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Week numbers */}
          <div className="mt-2 flex items-center">
            <div className={`${LABEL} text-[0.7rem] font-semibold uppercase tracking-wider text-muted-foreground/70`}>
              Week
            </div>
            <div className="grid flex-1 grid-cols-12">
              {Array.from({ length: TOTAL }).map((_, i) => (
                <div
                  key={i}
                  className="border-l border-border/25 py-1 text-center font-mono text-[0.7rem] text-muted-foreground"
                >
                  {i + 1}
                </div>
              ))}
            </div>
          </div>

          {/* Milestones */}
          <div className="mt-1 flex items-center">
            <div className={`${LABEL} text-[0.7rem] font-semibold uppercase tracking-wider text-muted-foreground/70`}>
              Key moments
            </div>
            <div className="relative h-8 flex-1">
              <GridLines />
              {roadmap.milestones.map((m, i) => (
                <div
                  key={m.week}
                  className="absolute top-1/2 flex -translate-x-1/2 -translate-y-1/2 items-center justify-center"
                  style={{ left: `${dotLeft(m.week)}%` }}
                  title={m.label}
                >
                  <span className="flex size-5 items-center justify-center rounded-full border border-gold/40 bg-background text-[0.6rem] font-bold text-gold">
                    {i + 1}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Lanes */}
          {roadmap.lanes.map((lane) => (
            <div key={lane.group} className="mt-5">
              <div className="mb-2 flex items-center gap-2">
                <span className="size-1.5 rounded-full bg-gold" aria-hidden />
                <h4 className="text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                  {lane.group}
                </h4>
              </div>

              {lane.items.map((item) => (
                <div key={item.name} className="flex items-center py-1.5">
                  <div className={`${LABEL} flex items-center gap-1.5`}>
                    <span className="text-xs leading-tight text-foreground">{item.name}</span>
                    {"tag" in item && item.tag && (
                      <span className="hidden shrink-0 rounded-full border border-gold/30 bg-gold-soft px-1.5 py-0.5 text-[0.6rem] uppercase tracking-wider text-gold sm:inline">
                        {item.tag}
                      </span>
                    )}
                  </div>

                  <div className="relative h-7 flex-1">
                    <GridLines />

                    {item.type === "bar" && (
                      <div
                        className="absolute top-1/2 flex h-5 -translate-y-1/2 items-center rounded-md bg-gold/90"
                        style={{
                          left: `${leftPct(item.start)}%`,
                          width: `${widthPct(item.start, item.end)}%`,
                        }}
                      >
                        <span className="truncate px-2 text-[0.65rem] font-semibold text-[var(--ink)]">
                          Live
                        </span>
                      </div>
                    )}

                    {(item.type === "marker" || item.type === "weekly") &&
                      item.weeks.map((w) => (
                        <div
                          key={w}
                          className="absolute top-1/2 -translate-x-1/2 -translate-y-1/2"
                          style={{ left: `${dotLeft(w)}%` }}
                          title={`Week ${w}`}
                        >
                          {item.type === "marker" ? (
                            <span className="block size-3 rotate-45 rounded-[2px] bg-gold" />
                          ) : (
                            <span className="block size-2.5 rounded-full bg-gold/70" />
                          )}
                        </div>
                      ))}
                  </div>
                </div>
              ))}
            </div>
          ))}

          {/* Legend */}
          <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2 border-t border-border pt-4 text-xs text-muted-foreground">
            <span className="flex items-center gap-2">
              <span className="h-2.5 w-6 rounded-sm bg-gold/90" /> Campaign live
            </span>
            <span className="flex items-center gap-2">
              <span className="size-2.5 rotate-45 rounded-[2px] bg-gold" /> Monthly newsletter
            </span>
            <span className="flex items-center gap-2">
              <span className="size-2.5 rounded-full bg-gold/70" /> Weekly Meta post (IG + FB)
            </span>
          </div>
        </div>
      </Reveal>

      {/* Milestone key + ramp note */}
      <div className="mt-6 grid gap-4 lg:grid-cols-2">
        <Reveal>
          <div className="h-full rounded-2xl border border-border bg-surface p-6">
            <div className="flex items-center gap-2.5">
              <Flag className="size-4 text-gold" aria-hidden />
              <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                Key moments
              </h3>
            </div>
            <ol className="mt-4 space-y-3">
              {roadmap.milestones.map((m, i) => (
                <li key={m.week} className="flex items-start gap-3">
                  <span className="flex size-5 shrink-0 items-center justify-center rounded-full border border-gold/40 bg-background text-[0.6rem] font-bold text-gold">
                    {i + 1}
                  </span>
                  <span className="text-sm leading-relaxed text-foreground/90">
                    <span className="font-mono text-xs text-gold/70">Week {m.week} · </span>
                    {m.label}
                  </span>
                </li>
              ))}
            </ol>
          </div>
        </Reveal>

        <Reveal delay={80}>
          <div className="flex h-full flex-col gap-4 rounded-2xl border border-border bg-surface p-6">
            <div className="flex items-center gap-2.5">
              <Megaphone className="size-4 text-gold" aria-hidden />
              <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                Cadence
              </h3>
            </div>
            <p className="text-sm leading-relaxed text-muted-foreground">{roadmap.rampNote}</p>
            <div className="mt-auto flex flex-wrap gap-2">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-background/40 px-3 py-1 text-xs text-foreground">
                <Megaphone className="size-3.5 text-gold" aria-hidden /> 6 campaigns
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-background/40 px-3 py-1 text-xs text-foreground">
                <Mail className="size-3.5 text-gold" aria-hidden /> 1 newsletter / month
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-background/40 px-3 py-1 text-xs text-foreground">
                <Megaphone className="size-3.5 text-gold" aria-hidden /> 1 Meta post / week (IG + FB)
              </span>
            </div>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
