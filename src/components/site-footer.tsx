import { Download } from "lucide-react";
import { Logo } from "@/components/logo";
import { Button } from "@/components/ui/button";
import { meta, download } from "@/content/proposal";

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-[var(--ink)]">
      <div className="mx-auto w-full max-w-6xl px-6 py-12 lg:px-8">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div>
            <Logo />
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
              {meta.confidentiality}
            </p>
            <p className="mt-2 max-w-sm text-xs leading-relaxed text-muted-foreground/70">
              {meta.agencyLegal} · {meta.agencyAddress} · {meta.agencyPhone}
            </p>
            <Button asChild size="sm" variant="outline" className="mt-5">
              <a href={download.href} download={download.filename} target="_blank" rel="noopener">
                <Download className="size-4" />
                {download.label}
              </a>
            </Button>
          </div>
          <dl className="grid grid-cols-2 gap-x-10 gap-y-4 text-sm">
            <div>
              <dt className="text-xs font-semibold uppercase tracking-wider text-muted-foreground/70">
                Prepared by
              </dt>
              <dd className="mt-1 text-foreground">{meta.agency}</dd>
            </div>
            <div>
              <dt className="text-xs font-semibold uppercase tracking-wider text-muted-foreground/70">
                Status
              </dt>
              <dd className="mt-1 text-foreground">{meta.status} · {meta.signedDate}</dd>
            </div>
            <div>
              <dt className="text-xs font-semibold uppercase tracking-wider text-muted-foreground/70">
                Document
              </dt>
              <dd className="mt-1 font-mono text-foreground">{meta.docRef}</dd>
            </div>
            <div>
              <dt className="text-xs font-semibold uppercase tracking-wider text-muted-foreground/70">
                Plan ref
              </dt>
              <dd className="mt-1 font-mono text-foreground">{meta.planRef}</dd>
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
