// HeroSection 컴포넌트 관련 상수들

export const HERO_CONSTANTS = {
  // Media
  BACKGROUND_VIDEO_SRC: "/background.mp4",
  VIDEO_TYPE: "video/mp4",

  // Text content
  MAIN_TITLE_TEXT: "프로젝트의 시작\nGAMZA",

  // Animation settings
  TYPING_SPEED: 100,
  PAUSE_DURATION: 3000,
  CURSOR_CHARACTER: "_",
  ANIMATION_DELAY: "0.5s",
} as const;

// JSX Constants
export const DESCRIPTION_TEXT = (
  <>
    모두가 <span className="font-extrabold">함께 고민</span>하고,{" "}
    <span className="font-extrabold">함께 성장</span>합니다.
    <br />
    개발에 <span className="font-extrabold">열정</span>이 있는 당신을
    기다립니다!
  </>
);
