import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Hero } from "@/components/sections/hero";
import { ExecutiveSummary } from "@/components/sections/executive-summary";
import { Opportunity } from "@/components/sections/opportunity";
import { Objectives } from "@/components/sections/objectives";
import { Audience } from "@/components/sections/audience";
import { Channels } from "@/components/sections/channels";
import { LaunchApproach } from "@/components/sections/launch-approach";
import { Measurement } from "@/components/sections/measurement";
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
        <LaunchApproach />
        <Measurement />
        <Investment />
        <Closing />
      </main>
      <SiteFooter />
    </>
  );
}
