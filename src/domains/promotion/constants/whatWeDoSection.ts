// WhatWeDoSection 컴포넌트 관련 상수들

export type RoleType = "Frontend" | "Backend" | "Designer";

export const WHAT_WE_DO_CONSTANTS = {
  // Text content
  SECTION_TITLE: "What we do",

  // Animation settings
  TRANSITION_DELAY: 300,
  ANIMATION_DELAY: 400,

  // Role content data
  ROLE_CONTENT: {
    Frontend: {
      image: "/roadmap/frontend.svg",
      description: `사용자가 직접 상호작용하는 웹 인터페이스를 개발하며\n React, Vue.js 등을 활용하여 직관적이고 반응형인 사용자 경험을 구현합니다.`,
    },
    Backend: {
      image: "/roadmap/backend.svg",
      description:
        "서버, 데이터베이스, API를 설계하고 구축하며 안정적이고\n 확장 가능한 시스템 아키텍처를 통해 서비스의 핵심 기능을 구현합니다.",
    },
    Designer: {
      image: "/roadmap/designer.svg",
      description:
        " 사용자 흐름과 UI를 설계해 직관적이고 편리한 화면을 만들며\n 시각 디자인과 인터랙션을 제작해 개발자와 협업하며 완성도를 높입니다.",
    },
  },

  // Role styles
  ROLE_STYLES: {
    Frontend: {
      active:
        "bg-[#1270D6] bg-opacity-60 border border-[#007AFF] text-white shadow-lg shadow-blue-500/25",
      inactive:
        "bg-gray-700/60 text-gray-300 border-gray-600 hover:bg-gray-600/60 hover:border-gray-500",
    },
    Backend: {
      active:
        "bg-[#2E6639] bg-opacity-60 border border-[#46A258] text-white shadow-lg shadow-green-500/25",
      inactive:
        "bg-gray-700/60 text-gray-300 border-gray-600 hover:bg-gray-600/60 hover:border-gray-500",
    },
    Designer: {
      active:
        "bg-[#891E4E] bg-opacity-60 border border-[#DB428D] text-white shadow-lg shadow-pink-500/25",
      inactive:
        "bg-gray-700/60 text-gray-300 border-gray-600 hover:bg-gray-600/60 hover:border-gray-500",
    },
  },

  // Image dimensions
  IMAGE_DIMENSIONS: {
    width: 900,
    height: 650,
  },
} as const;
