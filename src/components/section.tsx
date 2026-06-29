import { cn } from "@/lib/utils";
import { Reveal } from "@/components/reveal";

/**
 * Standard section shell — consistent vertical rhythm, max width, and an
 * optional numbered eyebrow heading block.
 */
export function Section({
  id,
  children,
  className,
  containerClassName,
}: {
  id?: string;
  children: React.ReactNode;
  className?: string;
  containerClassName?: string;
}) {
  return (
    <section
      id={id}
      className={cn("relative scroll-mt-24 py-20 sm:py-28", className)}
    >
      <div className={cn("mx-auto w-full max-w-6xl px-6 lg:px-8", containerClassName)}>
        {children}
      </div>
    </section>
  );
}

export function SectionHeading({
  index,
  eyebrow,
  title,
  lede,
  className,
}: {
  index?: string;
  eyebrow: string;
  title: string;
  lede?: string;
  className?: string;
}) {
  return (
    <Reveal className={cn("max-w-3xl", className)}>
      <div className="flex items-center gap-3">
        {index && (
          <span className="font-mono text-sm font-medium text-gold/70">{index}</span>
        )}
        <span className="eyebrow">{eyebrow}</span>
      </div>
      <h2 className="mt-4 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-[2.75rem] md:leading-[1.08]">
        {title}
      </h2>
      {lede && (
        <p className="mt-5 text-pretty text-lg leading-relaxed text-muted-foreground">
          {lede}
        </p>
      )}
    </Reveal>
  );
}
