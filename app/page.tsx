"use client";

import { ActivitiesSection } from "@/components/sections/ActivitiesSection";
import { HeroSection } from "@/components/sections/HeroSection";
import { ProjectResultsSection } from "@/components/sections/ProjectResultsSection";
import { StatisticsSection } from "@/components/sections/StatisticsSection";
import { WhatWeDoSection } from "@/components/sections/WhatWeDoSection";

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <HeroSection />

      {/* Statistics Section */}
      <StatisticsSection />

      {/* What We Do Section */}
      <WhatWeDoSection />

      {/* Activities Section */}
      <ActivitiesSection />

      {/* Project Results Section */}
      <ProjectResultsSection />
    </>
  );
}
