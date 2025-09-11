// ProjectResultsSection 컴포넌트 관련 상수들

export const PROJECT_RESULTS_CONSTANTS = {
  // Text content
  SECTION_TITLE: "프로젝트 결과물",
  MORE_PROJECTS_BUTTON_TEXT: "더 많은 프로젝트 보기",

  // Marquee settings
  MARQUEE_SPEED: 80,

  // Card dimensions
  CARD_DIMENSIONS: {
    width: 270,
    height: 158, // 270 * (233/398) ≈ 158
  },

  // Projects data
  PROJECTS: [
    {
      image: "/projectThumbnails/DessertGallery.png",
      title: "디저트갤러리",
      src: "https://github.com/potato-club/dessert-gallery-back",
    },
    {
      image: "/projectThumbnails/MeongMeong.png",
      title: "멍멍",
      src: "https://github.com/potato-club/travel-with-pet",
    },
    {
      image: "/projectThumbnails/MeongHae.png",
      title: "멍해",
      src: "https://github.com/potato-club/meonghae_back",
    },
    {
      image: "/projectThumbnails/GamzaTechBlog.png",
      title: "감자기술블로그",
      src: "https://github.com/potato-club/GamzaTechBlog-back",
    },
    {
      image: "/projectThumbnails/Luview.png",
      title: "러뷰",
      src: "https://github.com/potato-club/Luview-back",
    },
    {
      image: "/projectThumbnails/EasyPhoto.png",
      title: "이지포토",
      src: "https://github.com/potato-club/photoshop-commission-site",
    },
    {
      image: "/projectThumbnails/CodyDiary.png",
      title: "코디다이어리",
      src: "https://github.com/potato-club/temperature-outfit",
    },
  ],

  // Routes
  PROJECTS_PAGE_ROUTE: "/projects",
} as const;
