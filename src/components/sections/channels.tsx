"use client";

import { Search, Megaphone, Mail } from "lucide-react";
import { Section, SectionHeading } from "@/components/section";
import { Reveal } from "@/components/reveal";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { channels } from "@/content/proposal";

export function Channels() {
  return (
    <Section id="channels" className="border-t border-border">
      <SectionHeading
        index="05"
        eyebrow="Channel Strategy"
        title="Four channels, one funnel"
        lede={channels.lede}
      />

      <Reveal className="mt-10">
        <Tabs defaultValue="search" className="w-full gap-6">
          <TabsList className="h-auto w-full flex-wrap justify-start gap-1 bg-surface p-1.5">
            <TabsTrigger value="search" className="gap-2 px-4 py-2 data-[state=active]:bg-gold data-[state=active]:text-[var(--ink)]">
              <Search className="size-4" /> Paid search
            </TabsTrigger>
            <TabsTrigger value="social" className="gap-2 px-4 py-2 data-[state=active]:bg-gold data-[state=active]:text-[var(--ink)]">
              <Megaphone className="size-4" /> Paid social
            </TabsTrigger>
            <TabsTrigger value="owned" className="gap-2 px-4 py-2 data-[state=active]:bg-gold data-[state=active]:text-[var(--ink)]">
              <Mail className="size-4" /> SEO, email &amp; social
            </TabsTrigger>
          </TabsList>

          {/* Paid search */}
          <TabsContent value="search" className="space-y-6">
            <p className="max-w-3xl text-pretty leading-relaxed text-muted-foreground">
              {channels.paidSearch.lede}
            </p>
            <CampaignTable
              cols={["Campaign", "Role", "Optimisation"]}
              rows={channels.paidSearch.rows.map((r) => ({
                name: r.campaign,
                tag: "tag" in r ? r.tag : undefined,
                a: r.role,
                b: r.optimisation,
              }))}
            />
            <div className="grid gap-6 md:grid-cols-2">
              <NoteBlock title="A clean foundation" body={channels.paidSearch.foundation} />
              <NoteBlock title="Keyword approach" body={channels.paidSearch.keywords} />
            </div>
          </TabsContent>

          {/* Paid social */}
          <TabsContent value="social" className="space-y-6">
            <p className="max-w-3xl text-pretty leading-relaxed text-muted-foreground">
              {channels.paidSocial.lede}
            </p>
            <CampaignTable
              cols={["Campaign", "Role", "Creative cadence"]}
              rows={channels.paidSocial.rows.map((r) => ({
                name: r.campaign,
                tag: "tag" in r ? r.tag : undefined,
                a: r.role,
                b: r.cadence,
              }))}
            />
            <NoteBlock body={channels.paidSocial.note} />
            <div className="grid gap-4 sm:grid-cols-3">
              {channels.paidSocial.creative.map((c) => (
                <div key={c.title} className="rounded-xl border border-border bg-surface p-5">
                  <h4 className="font-heading text-sm font-semibold text-foreground">
                    {c.title}
                  </h4>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {c.body}
                  </p>
                </div>
              ))}
            </div>
          </TabsContent>

          {/* SEO & email */}
          <TabsContent value="owned" className="space-y-6">
            <p className="max-w-3xl text-pretty leading-relaxed text-muted-foreground">
              {channels.seoEmail.lede}
            </p>
            <NoteBlock
              title={channels.seoEmail.seo.title}
              body={channels.seoEmail.seo.body}
            />
            <div className="rounded-2xl border border-border bg-surface p-7">
              <h4 className="font-heading text-base font-semibold text-foreground">
                {channels.seoEmail.email.title}
              </h4>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {channels.seoEmail.email.intro}
              </p>
              <div className="mt-6 grid gap-4 sm:grid-cols-3">
                {channels.seoEmail.email.flows.map((f) => (
                  <div
                    key={f.title}
                    className="rounded-xl border border-border bg-background/30 p-5"
                  >
                    <div className="rule-gold" />
                    <h5 className="mt-3 font-heading text-sm font-semibold text-foreground">
                      {f.title}
                    </h5>
                    <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                      {f.body}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <NoteBlock
              title={channels.seoEmail.social.title}
              body={channels.seoEmail.social.body}
            />
          </TabsContent>
        </Tabs>
      </Reveal>
    </Section>
  );
}

function CampaignTable({
  cols,
  rows,
}: {
  cols: [string, string, string];
  rows: { name: string; tag?: string; a: string; b: string }[];
}) {
  return (
    <div className="overflow-hidden rounded-2xl border border-border">
      <div className="overflow-x-auto">
        <table className="w-full min-w-[46rem] border-collapse text-left">
          <thead>
            <tr className="bg-surface-2">
              {cols.map((h) => (
                <th
                  key={h}
                  className="px-5 py-4 text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground"
                >
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, i) => (
              <tr key={row.name} className={i % 2 ? "bg-surface/40" : "bg-surface/10"}>
                <td className="w-[24%] border-t border-border px-5 py-4 align-top">
                  <div className="font-heading text-sm font-semibold text-gold">
                    {row.name}
                  </div>
                  {row.tag && (
                    <Badge
                      variant="outline"
                      className="mt-2 border-gold/30 bg-gold-soft text-[0.65rem] uppercase tracking-wider text-gold"
                    >
                      {row.tag}
                    </Badge>
                  )}
                </td>
                <td className="border-t border-border px-5 py-4 align-top text-sm leading-relaxed text-foreground">
                  {row.a}
                </td>
                <td className="border-t border-border px-5 py-4 align-top text-sm leading-relaxed text-muted-foreground">
                  {row.b}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function NoteBlock({ title, body }: { title?: string; body: string }) {
  return (
    <div className="rounded-xl border border-border bg-surface/50 p-6">
      {title && (
        <h4 className="font-heading text-sm font-semibold text-foreground">{title}</h4>
      )}
      <p className={(title ? "mt-2 " : "") + "text-sm leading-relaxed text-muted-foreground"}>
        {body}
      </p>
    </div>
  );
}
