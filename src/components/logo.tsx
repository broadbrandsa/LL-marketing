import Image from "next/image";
import { cn } from "@/lib/utils";
import fullLogo from "../../public/liquid-lighting-logo.png";
import llIconWhite from "../../public/ll-icon-white.png";

/**
 * Official Liquid Lighting logo lockup (spiral mark + wordmark),
 * pulled from the brand's Shopify theme assets.
 */
export function Logo({ className }: { className?: string }) {
  return (
    <Image
      src={fullLogo}
      alt="Liquid Lighting"
      priority
      sizes="200px"
      className={cn("h-9 w-auto select-none", className)}
    />
  );
}

/** The spiral mark on its own — white version, for use on dark backgrounds. */
export function LogoMark({ className }: { className?: string }) {
  return (
    <Image
      src={llIconWhite}
      alt="Liquid Lighting"
      sizes="48px"
      className={cn("object-contain", className)}
    />
  );
}
