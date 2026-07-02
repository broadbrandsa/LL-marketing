import { Sparkles, Download, Share2, Hash } from "lucide-react";
import { Section, SectionHeading } from "@/components/section";
import { Reveal } from "@/components/reveal";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { addon } from "@/content/proposal";

export function AddOn() {
  return (
    <Section id="add-on" className="border-t border-border bg-[var(--ink)]/40">
      <Reveal>
        <span className="inline-flex items-center gap-2 rounded-full border border-gold/25 bg-gold-soft px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-gold">
          <Sparkles className="size-3.5" aria-hidden />
          {addon.eyebrow}
        </span>
      </Reveal>

      <SectionHeading
        eyebrow={addon.kicker}
        title={addon.title}
        lede={addon.lede}
        className="mt-4"
      />

      {/* Optional-extra note + deck download */}
      <Reveal className="mt-8" delay={60}>
        <div className="flex flex-col gap-5 rounded-2xl border border-gold/25 bg-gold-soft p-6 sm:flex-row sm:items-center sm:justify-between sm:p-7">
          <p className="max-w-2xl text-sm leading-relaxed text-muted-foreground">
            {addon.note}
          </p>
          <Button asChild size="lg" className="shrink-0">
            <a href={addon.download.href} download={addon.download.filename} target="_blank" rel="noopener">
              <Download className="size-4" />
              {addon.download.shortLabel}
            </a>
          </Button>
        </div>
      </Reveal>

      {/* Objective + platforms */}
      <div className="mt-8 grid gap-4 sm:grid-cols-3">
        <Reveal className="sm:col-span-2">
          <div className="h-full rounded-2xl border border-border bg-surface p-6">
            <h3 className="text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
              Campaign objective
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-foreground/90">{addon.objective}</p>
          </div>
        </Reveal>
        <Reveal delay={80}>
          <div className="flex h-full flex-col rounded-2xl border border-border bg-surface p-6">
            <div className="flex items-center gap-2">
              <Share2 className="size-4 text-gold" aria-hidden />
              <h3 className="text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                Platforms
              </h3>
            </div>
            <p className="mt-2 text-sm leading-relaxed text-foreground/90">{addon.platforms}</p>
          </div>
        </Reveal>
      </div>

      {/* Packages */}
      <Reveal className="mt-12">
        <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-muted-foreground">
          Choose a package
        </h3>
      </Reveal>
      <div className="mt-5 grid gap-4 lg:grid-cols-3">
        {addon.packages.map((pkg, i) => (
          <Reveal key={pkg.option} delay={i * 80}>
            <div className="flex h-full flex-col rounded-2xl border border-border bg-surface p-6">
              <div className="flex items-baseline justify-between">
                <span className="text-xs font-semibold uppercase tracking-[0.16em] text-gold/80">
                  {pkg.option}
                </span>
                <span className="font-heading text-2xl font-extrabold tracking-tight text-gold">
                  {pkg.price}
                </span>
              </div>
              <h4 className="mt-2 font-heading text-lg font-semibold text-foreground">
                {pkg.name}
              </h4>

              <div className="mt-5 border-t border-border pt-4">
                <div className="text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-muted-foreground/70">
                  Influencer mix
                </div>
                <ul className="mt-3 space-y-3">
                  {pkg.mix.map((m) => (
                    <li key={m.influencer}>
                      <div className="flex items-center gap-2">
                        <Badge
                          variant="outline"
                          className="border-gold/30 bg-gold-soft text-[0.6rem] uppercase tracking-wider text-gold"
                        >
                          {m.tier}
                        </Badge>
                        <span className="font-heading text-sm font-semibold text-foreground">
                          {m.influencer}
                        </span>
                      </div>
                      <p className="mt-1 text-xs leading-relaxed text-muted-foreground">{m.fit}</p>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-auto border-t border-border pt-4">
                <div className="text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-muted-foreground/70">
                  Total deliverables
                </div>
                <div className="mt-3 flex flex-wrap gap-2">
                  {pkg.totals.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-border bg-background/40 px-2.5 py-1 text-xs text-foreground"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      {/* Content themes */}
      <Reveal className="mt-14">
        <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-muted-foreground">
          Recommended content themes
        </h3>
      </Reveal>
      <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {addon.themes.map((theme, i) => (
          <Reveal key={theme.title} delay={i * 60}>
            <div className="h-full rounded-xl border border-border bg-surface p-5">
              <div className="rule-gold" />
              <h4 className="mt-3 font-heading text-sm font-semibold text-foreground">
                “{theme.title}”
              </h4>
              <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{theme.body}</p>
            </div>
          </Reveal>
        ))}
      </div>

      {/* Hashtags */}
      <Reveal className="mt-10 rounded-2xl border border-border bg-surface/50 p-6" delay={60}>
        <div className="flex items-center gap-2">
          <Hash className="size-4 text-gold" aria-hidden />
          <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
            Campaign hashtags
          </h3>
        </div>
        <div className="mt-4 space-y-3">
          <div className="flex flex-wrap items-center gap-2">
            <span className="w-16 text-xs uppercase tracking-wider text-muted-foreground/70">Brand</span>
            {addon.hashtags.brand.map((tag) => (
              <span key={tag} className="rounded-full border border-gold/25 bg-gold-soft px-2.5 py-1 text-xs font-medium text-gold">
                {tag}
              </span>
            ))}
          </div>
          <div className="flex flex-wrap items-center gap-2">
            <span className="w-16 text-xs uppercase tracking-wider text-muted-foreground/70">Category</span>
            {addon.hashtags.category.map((tag) => (
              <span key={tag} className="rounded-full border border-border bg-background/40 px-2.5 py-1 text-xs text-foreground/90">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
