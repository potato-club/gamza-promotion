// ActivitiesSection 컴포넌트 관련 상수들

export const ACTIVITIES_CONSTANTS = {
  // Text content
  SECTION_TITLE: "활동 내용",

  // Card dimensions and styling
  CARD_HEIGHT: "275px",
  CARD_BACKGROUND: "#272C2F",

  // Image dimensions
  ICON_DIMENSIONS: {
    width: 60,
    height: 40,
  },

  // Activities data
  ACTIVITIES: [
    {
      title: "정기 세미나 및 스터디",
      description:
        "매주 스터디를 통해 함께 공부하며 정기적으로 세미나를 진행합니다.",
      src: "/icons/activityIcon1.svg",
    },
    {
      title: "개발 네트워킹 및 멘토링",
      description:
        "개발 공부에 대한 고민에 대해 조언을 구하며 함께 해결해갑니다.",
      src: "/icons/activityIcon2.svg",
    },
    {
      title: "해커톤 및 공모전",
      description: "해커톤, 공모전에 참여하여 도전의 기회를 가집니다.",
      src: "/icons/activityIcon3.svg",
    },
    {
      title: "프로젝트 기획 및 개발",
      description:
        "세미나 및 스터디를 직접 기획하고 동아리 프로젝트를 개발합니다.",
      src: "/icons/activityIcon4.svg",
    },
  ],
} as const;
