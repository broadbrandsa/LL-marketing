"use client";

import { useEffect, useRef } from "react";
import { Section, SectionHeading } from "@/components/section";
import { Reveal } from "@/components/reveal";
import { showcase } from "@/content/proposal";

/**
 * Lifestyle video gallery. Each clip is square (2000×2000) and only loads +
 * plays once scrolled into view (preload="none" + IntersectionObserver), so the
 * page isn't weighed down by video on initial load.
 */
function LazyVideo({ src }: { src: string }) {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            node.play().catch(() => {});
          } else {
            node.pause();
          }
        });
      },
      { threshold: 0.25 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <video
      ref={ref}
      src={src}
      muted
      loop
      playsInline
      preload="none"
      aria-hidden="true"
      className="size-full object-cover"
    />
  );
}

export function Showcase() {
  return (
    <Section id="showcase" className="border-t border-border bg-[var(--ink)]/40">
      <SectionHeading
        eyebrow={showcase.eyebrow}
        title={showcase.title}
        lede={showcase.lede}
      />

      <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {showcase.videos.map((video, i) => (
          <Reveal key={video.src} delay={i * 90}>
            <figure className="group overflow-hidden rounded-2xl border border-border bg-surface">
              <div className="aspect-square overflow-hidden">
                <LazyVideo src={video.src} />
              </div>
              <figcaption className="flex items-center gap-2.5 border-t border-border px-5 py-4">
                <span className="size-1.5 shrink-0 rounded-full bg-gold" aria-hidden />
                <span className="text-sm font-medium text-foreground">{video.caption}</span>
              </figcaption>
            </figure>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
