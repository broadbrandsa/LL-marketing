import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Glossary } from "@/components/sections/glossary";

export const metadata: Metadata = {
  title: "Appendix · Liquid Lighting Launch Marketing Plan",
  description:
    "Index of terms and abbreviations used in the Liquid Lighting Launch Marketing Plan.",
  robots: { index: false, follow: false },
};

export default function AppendixPage() {
  return (
    <>
      <SiteHeader />
      <main className="pt-16">
        <div className="mx-auto w-full max-w-6xl px-6 pt-10 lg:px-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="size-4" /> Back to the proposal
          </Link>
        </div>
        <Glossary />
      </main>
      <SiteFooter />
    </>
  );
}
