// Model exports
export type {
  Activity,
  HeroSectionProps,
  PageableRequest,
  ProjectListResponse,
  ResponseDtoListProjectListResponse,
  StatisticItem,
  WhatWeDoItem,
} from "./model/types";

// API exports
export { getProjectList } from "./api/projectApi";

// UI Sections exports
export { ActivitiesSection } from "./ui/sections/ActivitiesSection";
export { Footer } from "./ui/sections/Footer";
export { Header } from "./ui/sections/Header";
export { HeroSection } from "./ui/sections/HeroSection";
export { ProjectResultsSection } from "./ui/sections/ProjectResultsSection";
export { StatCard } from "./ui/sections/StatCard";
export { StatisticsSection } from "./ui/sections/StatisticsSection";
export { WhatWeDoSection } from "./ui/sections/WhatWeDoSection";

// UI Components exports
export { LenisScroller } from "./ui/components/LenisScroller";
export { default as RoadmapChart } from "./ui/components/RoadmapChart";
