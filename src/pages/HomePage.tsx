"use client";

import {
  ActivitiesSection,
  HeroSection,
  ProjectResultsSection,
  StatisticsSection,
  WhatWeDoSection,
} from "@/domains/promotion";

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
