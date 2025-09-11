import { ApplyButton } from "@/shared/ui/apply-button";
import TextType from "@/shared/ui/blocks/TextAnimations/TextType/TextType";
import { DESCRIPTION_TEXT, HERO_CONSTANTS } from "../../constants";

export function HeroSection() {
  return (
    <section className="relative flex min-h-screen items-center justify-center md:items-start md:justify-start overflow-hidden px-6 md:pl-52 md:pt-[calc(100vh/4)] -mt-16 pt-16">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        autoPlay
        loop
        muted
        playsInline
      >
        <source
          src={HERO_CONSTANTS.BACKGROUND_VIDEO_SRC}
          type={HERO_CONSTANTS.VIDEO_TYPE}
        />
      </video>

      {/* Dark overlay with gradient transition for better text readability */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black/40 via-black/50 to-[#0F1112] z-10"></div>

      <div className="relative z-20 w-full max-w-2xl">
        <h1 className="text-4xl md:text-5xl lg:text-7xl mb-2 text-center md:text-left">
          {/* <span className="text-white font-bold">GAMZA</span> */}
          <div className="h-[6rem] md:h-[8rem] lg:h-[158px] flex items-start">
            <TextType
              as="p"
              text={[HERO_CONSTANTS.MAIN_TITLE_TEXT]}
              typingSpeed={HERO_CONSTANTS.TYPING_SPEED}
              pauseDuration={HERO_CONSTANTS.PAUSE_DURATION}
              showCursor={true}
              cursorCharacter={HERO_CONSTANTS.CURSOR_CHARACTER}
              className="whitespace-pre-wrap text-white font-bold leading-none align-top"
            />
          </div>
        </h1>
        <p
          className="text-gray-300 text-base md:text-lg mb-8 max-w-xl animate-fade-in text-center md:text-left md:mx-0 mx-auto"
          style={{ animationDelay: HERO_CONSTANTS.ANIMATION_DELAY }}
        >
          {DESCRIPTION_TEXT}
        </p>
        <div className="flex justify-center md:justify-start">
          <ApplyButton />
        </div>
      </div>
    </section>
  );
}
