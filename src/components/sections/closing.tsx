import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { Button } from "@/components/ui/button";
import { LogoMark } from "@/components/logo";
import { closing, meta } from "@/content/proposal";

export function Closing() {
  return (
    <section id="closing" className="relative overflow-hidden border-t border-border">
      <div aria-hidden className="pointer-events-none absolute inset-0 bg-grain" />
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-[-16rem] left-1/2 size-[44rem] -translate-x-1/2 rounded-full opacity-50 blur-3xl"
        style={{
          background:
            "radial-gradient(circle, oklch(0.795 0.124 82 / 16%), transparent 65%)",
        }}
      />
      <div className="relative mx-auto w-full max-w-4xl px-6 py-28 text-center sm:py-36 lg:px-8">
        <Reveal>
          <LogoMark className="mx-auto size-12" />
        </Reveal>
        <Reveal delay={80}>
          <h2 className="mt-8 text-balance text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl md:text-6xl">
            {closing.headline}
          </h2>
        </Reveal>
        <Reveal delay={140}>
          <p className="mx-auto mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">
            {closing.body}
          </p>
        </Reveal>
        <Reveal delay={200}>
          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button asChild size="lg">
              <a href="mailto:hello@broadbrand.co.za?subject=Liquid%20Lighting%20Launch%20Plan%20—%20Approval">
                {closing.ctaPrimary}
                <ArrowRight className="size-4" />
              </a>
            </Button>
            <Button asChild size="lg" variant="outline">
              <a href="mailto:hello@broadbrand.co.za?subject=Liquid%20Lighting%20Launch%20Plan%20—%20Questions">
                {closing.ctaSecondary}
              </a>
            </Button>
          </div>
        </Reveal>
        <Reveal delay={260}>
          <p className="mt-12 text-xs uppercase tracking-[0.22em] text-muted-foreground/70">
            {meta.tagline}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
