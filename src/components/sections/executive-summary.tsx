"use client";

import { Target, Sparkles, Repeat, Layers } from "lucide-react";
import { Section, SectionHeading } from "@/components/section";
import { Reveal } from "@/components/reveal";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { summary } from "@/content/proposal";

const focusIcons = [Target, Sparkles, Repeat, Layers];

export function ExecutiveSummary() {
  return (
    <Section id="summary" className="border-t border-border">
      <SectionHeading
        index="01"
        eyebrow="Executive Summary"
        title="The launch in one page"
        lede={summary.lede}
      />

      <Reveal className="mt-8">
        <Accordion
          type="single"
          collapsible
          className="w-full rounded-2xl border border-border bg-surface px-5 sm:px-7"
        >
          {/* Overview */}
          <AccordionItem value="overview">
            <AccordionTrigger className="font-heading text-base font-semibold text-foreground hover:no-underline">
              Overview
            </AccordionTrigger>
            <AccordionContent>
              <div className="max-w-3xl space-y-5 pb-2">
                {summary.body.map((para, i) => (
                  <p key={i} className="text-pretty leading-relaxed text-muted-foreground">
                    {para}
                  </p>
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>

          {/* By the numbers */}
          <AccordionItem value="numbers">
            <AccordionTrigger className="font-heading text-base font-semibold text-foreground hover:no-underline">
              The launch by the numbers
            </AccordionTrigger>
            <AccordionContent>
              <div className="grid gap-4 pb-2 sm:grid-cols-3">
                {summary.stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="h-full rounded-2xl border border-border bg-background/40 p-6"
                  >
                    <div className="flex items-baseline gap-0.5">
                      <span className="font-heading text-5xl font-extrabold tracking-tight text-gold">
                        {stat.value}
                      </span>
                      {stat.unit && (
                        <span className="font-heading text-2xl font-bold text-gold/80">
                          {stat.unit}
                        </span>
                      )}
                    </div>
                    <div className="mt-3 text-xs font-semibold uppercase tracking-[0.16em] text-foreground">
                      {stat.label}
                    </div>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {stat.detail}
                    </p>
                  </div>
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>

          {/* Focus */}
          <AccordionItem value="focus" className="border-b-0">
            <AccordionTrigger className="font-heading text-base font-semibold text-foreground hover:no-underline">
              Where this plan focuses
            </AccordionTrigger>
            <AccordionContent>
              <div className="grid gap-x-10 gap-y-8 pb-2 sm:grid-cols-2">
                {summary.focus.map((item, i) => {
                  const Icon = focusIcons[i % focusIcons.length];
                  return (
                    <div key={item.title} className="flex gap-4">
                      <div className="mt-0.5 flex size-10 shrink-0 items-center justify-center rounded-lg border border-gold/20 bg-gold-soft">
                        <Icon className="size-5 text-gold" aria-hidden />
                      </div>
                      <div>
                        <h4 className="font-heading text-base font-semibold text-foreground">
                          {item.title}
                        </h4>
                        <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                          {item.body}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </Reveal>
    </Section>
  );
}
