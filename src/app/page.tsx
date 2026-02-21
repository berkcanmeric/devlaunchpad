import { Hero } from "@/components/home/hero";
import { BentoGrid } from "@/components/home/bento-grid";
import { ToolsShowcase } from "@/components/home/tools-showcase";
import { CtaSection } from "@/components/home/cta-section";

export default function HomePage() {
  return (
    <>
      <Hero />
      <BentoGrid />
      <ToolsShowcase />
      <CtaSection />
    </>
  );
}
