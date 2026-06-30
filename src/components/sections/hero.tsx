import { ArrowRight, ArrowUpRight, Download, BadgeCheck, Target } from "lucide-react";
import { Button } from "@/components/ui/button";
import { LogoMark } from "@/components/logo";
import { meta, download, primaryGoal } from "@/content/proposal";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      {/* Ambient glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-grain"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 left-1/2 size-[42rem] -translate-x-1/2 rounded-full opacity-60 blur-3xl"
        style={{
          background:
            "radial-gradient(circle, rgb(197 160 40 / 0.16), transparent 65%)",
        }}
      />
      {/* Concentric ring motif, echoing the brand mark */}
      <div
        aria-hidden
        className="pointer-events-none absolute right-[-12rem] top-[-6rem] hidden size-[40rem] rounded-full border border-gold/10 md:block"
      >
        <div className="absolute inset-12 rounded-full border border-gold/10" />
        <div className="absolute inset-28 rounded-full border border-gold/10" />
        <div className="absolute inset-44 rounded-full border border-gold/[0.07]" />
      </div>

      <div className="relative mx-auto w-full max-w-6xl px-6 pb-20 pt-32 sm:pt-40 lg:px-8 lg:pb-28">
        <div className="fade-in flex flex-wrap items-center gap-3">
          <span className="inline-flex items-center gap-2 rounded-full border border-gold/25 bg-gold-soft px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-gold">
            <LogoMark className="size-4" />
            {meta.subtitle}
          </span>
          <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-surface px-3 py-1 text-xs font-medium text-muted-foreground">
            <BadgeCheck className="size-3.5 text-gold" aria-hidden />
            {meta.status} · {meta.signedDate}
          </span>
        </div>

        <h1
          className="fade-in mt-8 max-w-4xl text-balance text-5xl font-extrabold leading-[1.02] tracking-tight text-foreground sm:text-6xl md:text-7xl"
          style={{ animationDelay: "60ms" }}
        >
          Launch Marketing <span className="gold-text">Plan</span>
        </h1>

        <p
          className="fade-in mt-7 max-w-2xl text-pretty text-xl leading-relaxed text-muted-foreground"
          style={{ animationDelay: "120ms" }}
        >
          {meta.lede}
        </p>

        <div
          className="fade-in mt-10 flex flex-col gap-3 sm:flex-row sm:items-center"
          style={{ animationDelay: "180ms" }}
        >
          <Button asChild size="lg">
            <a href="#summary">
              Read the plan
              <ArrowRight className="size-4" />
            </a>
          </Button>
          <Button asChild size="lg" variant="outline">
            <a href="#investment">
              See the investment
              <ArrowUpRight className="size-4" />
            </a>
          </Button>
          <Button asChild size="lg" variant="ghost" className="text-muted-foreground hover:text-foreground">
            <a href={download.href} download={download.filename} target="_blank" rel="noopener">
              <Download className="size-4" />
              {download.label}
            </a>
          </Button>
        </div>

        {/* Primary goal — CPA target */}
        <div className="fade-in mt-12" style={{ animationDelay: "210ms" }}>
          <div className="flex max-w-2xl flex-col gap-5 rounded-2xl border border-gold/30 bg-gradient-to-br from-gold-soft to-transparent p-6 sm:flex-row sm:items-center sm:justify-between sm:p-7">
            <div>
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-gold">
                <Target className="size-3.5" aria-hidden />
                {primaryGoal.label}
              </div>
              <div className="mt-2 font-heading text-lg font-semibold text-foreground">
                {primaryGoal.metric}
              </div>
              <p className="mt-1 text-sm text-muted-foreground">{primaryGoal.note}</p>
            </div>
            <div className="shrink-0 sm:text-right">
              <div className="flex items-baseline gap-2 sm:justify-end">
                <span className="font-heading text-5xl font-extrabold tracking-tight text-gold">
                  {primaryGoal.value}
                </span>
                <span className="text-sm text-muted-foreground">{primaryGoal.sub}</span>
              </div>
              <div className="mt-2 flex items-center gap-1.5 font-mono text-xs text-muted-foreground sm:justify-end">
                {primaryGoal.trajectory.map((t, i) => (
                  <span key={t} className="flex items-center gap-1.5">
                    {i > 0 && <ArrowRight className="size-3 text-gold/50" aria-hidden />}
                    <span
                      className={
                        i === primaryGoal.trajectory.length - 1
                          ? "font-semibold text-gold"
                          : ""
                      }
                    >
                      {t}
                    </span>
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Document meta strip */}
        <dl className="fade-in mt-12 grid max-w-3xl grid-cols-2 gap-x-8 gap-y-6 border-t border-border pt-8 sm:grid-cols-4" style={{ animationDelay: "270ms" }}>
          <MetaItem label="Prepared for" value={meta.client} />
          <MetaItem label="Prepared by" value={meta.agency} />
          <MetaItem label="Document" value={meta.docRef} mono />
          <MetaItem label="Companion to" value={meta.companionRef} mono />
        </dl>
      </div>
    </section>
  );
}

function MetaItem({
  label,
  value,
  mono,
}: {
  label: string;
  value: string;
  mono?: boolean;
}) {
  return (
    <div>
      <dt className="text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-muted-foreground/70">
        {label}
      </dt>
      <dd
        className={
          "mt-1.5 text-sm text-foreground" + (mono ? " font-mono" : "")
        }
      >
        {value}
      </dd>
    </div>
  );
}
