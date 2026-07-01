"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
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

function GalleryFigure({
  caption,
  children,
  delay,
  mediaClassName = "aspect-square",
}: {
  caption: string;
  children: React.ReactNode;
  delay: number;
  mediaClassName?: string;
}) {
  return (
    <Reveal delay={delay}>
      <figure className="group overflow-hidden rounded-[3px] border border-border bg-surface">
        <div className={`relative overflow-hidden ${mediaClassName}`}>{children}</div>
        <figcaption className="flex items-center gap-2.5 border-t border-border px-5 py-4">
          <span className="size-1.5 shrink-0 rounded-full bg-gold" aria-hidden />
          <span className="text-sm font-medium text-foreground">{caption}</span>
        </figcaption>
      </figure>
    </Reveal>
  );
}

function GroupLabel({ children }: { children: React.ReactNode }) {
  return (
    <Reveal className="mb-5 flex items-center gap-2.5">
      <span className="size-1.5 rounded-full bg-gold" aria-hidden />
      <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-muted-foreground">
        {children}
      </h3>
    </Reveal>
  );
}

export function Showcase() {
  return (
    <Section
      id="showcase"
      className="border-t bg-background [--background:#ffffff] [--foreground:#1c1917] [--muted-foreground:#57534e] [--border:#e7e5e4] [--surface:#f6f5f4] [--surface-2:#eceae8] [--card:#ffffff] [--gold:#9a7d1c]"
    >
      <SectionHeading
        eyebrow={showcase.eyebrow}
        title={showcase.title}
        lede={showcase.lede}
      />

      {/* Lifestyle videos */}
      <div className="mt-12">
        <GroupLabel>{showcase.videosLabel}</GroupLabel>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {showcase.videos.map((video, i) => (
            <GalleryFigure key={video.src} caption={video.caption} delay={i * 90}>
              <LazyVideo src={video.src} />
            </GalleryFigure>
          ))}
        </div>
      </div>

      {/* Vertical social reels */}
      <div className="mt-14">
        <GroupLabel>{showcase.reelsLabel}</GroupLabel>
        <div className="grid max-w-lg grid-cols-2 gap-4">
          {showcase.reels.map((reel, i) => (
            <GalleryFigure
              key={reel.src}
              caption={reel.caption}
              delay={i * 90}
              mediaClassName="aspect-[9/16]"
            >
              <LazyVideo src={reel.src} />
            </GalleryFigure>
          ))}
        </div>
      </div>

      {/* Product-led stills */}
      <div className="mt-14">
        <GroupLabel>{showcase.imagesLabel}</GroupLabel>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {showcase.images.map((image, i) => (
            <GalleryFigure key={image.src} caption={image.caption} delay={i * 90}>
              <Image
                src={image.src}
                alt={image.caption}
                fill
                sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                className="object-cover"
              />
            </GalleryFigure>
          ))}
        </div>
      </div>
    </Section>
  );
}
