import { Logo } from "@/components/logo";
import { meta } from "@/content/proposal";

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-[var(--ink)]">
      <div className="mx-auto w-full max-w-6xl px-6 py-12 lg:px-8">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div>
            <Logo />
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
              {meta.confidentiality}
            </p>
          </div>
          <dl className="grid grid-cols-2 gap-x-10 gap-y-3 text-sm sm:flex sm:gap-12">
            <div>
              <dt className="text-xs font-semibold uppercase tracking-wider text-muted-foreground/70">
                Prepared by
              </dt>
              <dd className="mt-1 text-foreground">{meta.agency}</dd>
            </div>
            <div>
              <dt className="text-xs font-semibold uppercase tracking-wider text-muted-foreground/70">
                Document
              </dt>
              <dd className="mt-1 font-mono text-foreground">{meta.docRef}</dd>
            </div>
            <div>
              <dt className="text-xs font-semibold uppercase tracking-wider text-muted-foreground/70">
                Companion to
              </dt>
              <dd className="mt-1 font-mono text-foreground">{meta.companionRef}</dd>
            </div>
          </dl>
        </div>
        <div className="mt-10 flex flex-col gap-2 border-t border-border pt-6 text-xs text-muted-foreground/70 sm:flex-row sm:items-center sm:justify-between">
          <span>
            © {new Date().getFullYear()} {meta.agency.split(" · ")[0]}. All rights reserved.
          </span>
          <span className="tracking-[0.18em]">{meta.tagline}</span>
        </div>
      </div>
    </footer>
  );
}
