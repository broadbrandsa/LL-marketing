import { cn } from "@/lib/utils";

/**
 * Liquid Lighting wordmark — a luminous orb mark over a clean type lockup.
 */
export function Logo({
  className,
  showText = true,
}: {
  className?: string;
  showText?: boolean;
}) {
  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <LogoMark className="size-7 shrink-0" />
      {showText && (
        <span className="flex flex-col leading-none">
          <span className="font-heading text-sm font-bold uppercase tracking-[0.18em] text-foreground">
            Liquid
          </span>
          <span className="font-heading text-[0.6rem] font-medium uppercase tracking-[0.32em] text-muted-foreground">
            Lighting
          </span>
        </span>
      )}
    </span>
  );
}

export function LogoMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="ll-orb" x1="12" y1="6" x2="36" y2="42" gradientUnits="userSpaceOnUse">
          <stop stopColor="var(--gold)" />
          <stop offset="1" stopColor="var(--gold-muted)" stopOpacity="0.55" />
        </linearGradient>
      </defs>
      <circle cx="24" cy="24" r="20" stroke="var(--gold)" strokeOpacity="0.35" strokeWidth="1.5" />
      <path
        d="M9 30c3.4-2.2 5.6-6.4 8.6-6.4 3 0 3.3 3.2 6.4 3.2 3 0 4-5.1 7-5.1 2.6 0 4.4 3.4 7 4.6"
        stroke="url(#ll-orb)"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M24 6a18 18 0 0 1 0 36"
        fill="url(#ll-orb)"
        fillOpacity="0.18"
      />
      <circle cx="24" cy="24" r="3" fill="var(--gold)" />
    </svg>
  );
}
