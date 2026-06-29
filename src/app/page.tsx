import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Hero } from "@/components/sections/hero";
import { ExecutiveSummary } from "@/components/sections/executive-summary";
import { Opportunity } from "@/components/sections/opportunity";
import { Objectives } from "@/components/sections/objectives";
import { Audience } from "@/components/sections/audience";
import { Channels } from "@/components/sections/channels";
import { Showcase } from "@/components/sections/showcase";
import { LaunchApproach } from "@/components/sections/launch-approach";
import { Roadmap } from "@/components/sections/roadmap";
import { Measurement } from "@/components/sections/measurement";
import { Benchmarks } from "@/components/sections/benchmarks";
import { Investment } from "@/components/sections/investment";
import { Closing } from "@/components/sections/closing";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <ExecutiveSummary />
        <Opportunity />
        <Objectives />
        <Audience />
        <Channels />
        <Showcase />
        <LaunchApproach />
        <Roadmap />
        <Measurement />
        <Benchmarks />
        <Investment />
        <Closing />
      </main>
      <SiteFooter />
    </>
  );
}
