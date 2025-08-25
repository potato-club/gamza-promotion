// Project related types (moved from shared)
export interface ProjectListResponse {
  id: number;
  title: string;
  category: string;
  snippet: string;
  thumbnailUrl?: string;
  url?: string;
}

export interface ResponseDtoListProjectListResponse {
  status: string;
  message: string;
  data: ProjectListResponse[];
  timestamp: number;
}

export interface PageableRequest {
  page: number;
  size: number;
  sort: string[];
}

// Statistics types
export interface StatisticItem {
  label: string;
  value: string;
  icon?: React.ComponentType<any>;
}

// Activity types
export interface Activity {
  id: string;
  title: string;
  description: string;
  image?: string;
}

// Section types
export interface HeroSectionProps {
  title: string;
  subtitle: string;
  description: string;
}

export interface WhatWeDoItem {
  title: string;
  description: string;
  skills: string[];
  icon: React.ComponentType<any>;
}
