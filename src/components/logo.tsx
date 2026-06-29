import Image from "next/image";
import { cn } from "@/lib/utils";
import llIcon from "../../public/ll-icon.png";

/**
 * Liquid Lighting wordmark — the brand "liquid wave" spiral mark
 * (pulled from the Shopify storefront) beside the type lockup.
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
      <LogoMark className="size-8 shrink-0" />
      {showText && (
        <span className="flex flex-col leading-none">
          <span className="font-heading text-sm font-semibold uppercase tracking-[0.2em] text-foreground">
            Liquid
          </span>
          <span className="font-heading text-[0.6rem] font-medium uppercase tracking-[0.34em] text-muted-foreground">
            Lighting
          </span>
        </span>
      )}
    </span>
  );
}

export function LogoMark({ className }: { className?: string }) {
  return (
    <Image
      src={llIcon}
      alt="Liquid Lighting"
      priority
      sizes="48px"
      className={cn("object-contain", className)}
    />
  );
}
