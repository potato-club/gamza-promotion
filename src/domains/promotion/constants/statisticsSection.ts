// StatisticsSection 컴포넌트 관련 상수들

export const STATISTICS_CONSTANTS = {
  // Text content
  SECTION_TITLE: "숫자로 보는 감자",

  // Statistics data
  STATS: [
    { number: 6, suffix: "년", label: "운영 기간" },
    { number: 10, suffix: "기", label: "현재 기수" },
    { number: 62, suffix: "명", label: "활동 인원" },
    { number: 30, suffix: "+", label: "프로젝트 수" },
  ],
} as const;
