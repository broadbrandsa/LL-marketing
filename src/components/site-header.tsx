"use client";

import { useEffect, useState } from "react";
import { Menu, X, Download } from "lucide-react";
import { Logo } from "@/components/logo";
import { Button } from "@/components/ui/button";
import { nav, download } from "@/content/proposal";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-border bg-background/80 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent",
      )}
    >
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-6 lg:px-8">
        <a href="#top" className="flex items-center" aria-label="Liquid Lighting">
          <Logo />
        </a>

        <nav className="hidden items-center gap-0.5 xl:flex">
          {nav.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="rounded-md px-2.5 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-2 xl:flex">
          <Button asChild size="sm" variant="ghost" className="text-muted-foreground hover:text-foreground">
            <a href={download.href} download={download.filename} target="_blank" rel="noopener" aria-label="Download signed plan PDF">
              <Download className="size-4" />
              {download.shortLabel}
            </a>
          </Button>
          <Button asChild size="sm">
            <a href="#investment">View investment</a>
          </Button>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="inline-flex size-10 items-center justify-center rounded-md text-foreground xl:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={cn(
          "overflow-hidden border-border bg-background/95 backdrop-blur-xl transition-all duration-300 xl:hidden",
          open ? "max-h-[28rem] border-b" : "max-h-0",
        )}
      >
        <nav className="mx-auto flex w-full max-w-6xl flex-col gap-1 px-6 py-4">
          {nav.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={() => setOpen(false)}
              className="rounded-md px-3 py-2.5 text-sm font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
            >
              {item.label}
            </a>
          ))}
          <Button asChild size="sm" className="mt-2">
            <a href="#investment" onClick={() => setOpen(false)}>
              View investment
            </a>
          </Button>
          <Button asChild size="sm" variant="outline">
            <a
              href={download.href}
              download={download.filename}
              target="_blank"
              rel="noopener"
              onClick={() => setOpen(false)}
            >
              <Download className="size-4" />
              {download.label}
            </a>
          </Button>
        </nav>
      </div>
    </header>
  );
}
