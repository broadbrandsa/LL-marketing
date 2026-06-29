import { Home, Compass, ArrowRight } from "lucide-react";
import { Section, SectionHeading } from "@/components/section";
import { Reveal } from "@/components/reveal";
import { audience } from "@/content/proposal";

export function Audience() {
  return (
    <Section id="audience" className="border-t border-border bg-[var(--ink)]/40">
      <SectionHeading
        index="04"
        eyebrow="Audience"
        title="Who we are talking to"
        lede={audience.lede}
      />

      <div className="mt-12 grid gap-4 md:grid-cols-2">
        <AudienceCard
          icon={Home}
          label={audience.primary.label}
          body={audience.primary.body}
          points={audience.primary.points}
          accent
        />
        <AudienceCard
          icon={Compass}
          label={audience.secondary.label}
          body={audience.secondary.body}
          points={audience.secondary.points}
        />
      </div>

      {/* Funnel mapping */}
      <Reveal className="mt-16">
        <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-muted-foreground">
          How the funnel maps to the audience
        </h3>
      </Reveal>

      <div className="mt-6 space-y-3">
        {audience.funnel.map((row, i) => (
          <Reveal key={row.stage} delay={i * 70}>
            <div className="grid items-center gap-4 rounded-xl border border-border bg-surface p-5 md:grid-cols-[150px_1fr_auto]">
              <div className="flex items-center gap-3">
                <span className="font-mono text-xs text-gold/70">
                  0{i + 1}
                </span>
                <span className="font-heading font-semibold text-foreground">
                  {row.stage}
                </span>
              </div>
              <p className="text-sm italic text-muted-foreground">
                “{row.mindset}”
              </p>
              <div className="flex items-center gap-2 text-sm text-foreground/90">
                <ArrowRight className="size-4 shrink-0 text-gold/60" aria-hidden />
                <span>{row.channels}</span>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

function AudienceCard({
  icon: Icon,
  label,
  body,
  points,
  accent,
}: {
  icon: React.ElementType;
  label: string;
  body: string;
  points: readonly string[];
  accent?: boolean;
}) {
  return (
    <Reveal delay={accent ? 0 : 80}>
      <div
        className={
          "flex h-full flex-col rounded-2xl border p-7 " +
          (accent
            ? "border-gold/25 bg-gold-soft"
            : "border-border bg-surface")
        }
      >
        <div className="flex size-11 items-center justify-center rounded-lg border border-gold/20 bg-background/30">
          <Icon className="size-5 text-gold" aria-hidden />
        </div>
        <div className="mt-5 text-xs font-semibold uppercase tracking-[0.14em] text-gold">
          {label}
        </div>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
          {body}
        </p>
        <ul className="mt-5 space-y-2.5 border-t border-border pt-5">
          {points.map((p) => (
            <li key={p} className="flex gap-2.5 text-sm text-foreground/90">
              <span className="mt-2 size-1.5 shrink-0 rounded-full bg-gold" aria-hidden />
              <span className="leading-relaxed">{p}</span>
            </li>
          ))}
        </ul>
      </div>
    </Reveal>
  );
}
