import TextType from "../blocks/TextAnimations/TextType/TextType";
import { ApplyButton } from "../ui/apply-button";

export function HeroSection() {
  return (
    <section className="relative flex min-h-screen items-center justify-center md:items-start md:justify-start overflow-hidden px-6 md:pl-52 md:pt-[calc(100vh/4)] -mt-16 pt-16">
      {/* Particles 배경 효과 */}
      {/* <div className="absolute inset-0 w-full h-full z-0">
        <Particles
          particleColors={["#ffffff", "#3b82f6"]}
          particleCount={200}
          particleSpread={10}
          speed={0.5}
          particleBaseSize={200}
          moveParticlesOnHover={true}
          alphaParticles={false}
          disableRotation={false}
        />
      </div> */}



      {/* Main blue gradient background */}
      {/* <div className="absolute top-1/2 right-0 w-[800px] h-[800px] bg-gradient-to-l from-blue-600/30 via-blue-500/20 to-transparent rounded-full blur-3xl animate-pulse transform -translate-y-1/2"></div> */}
      {/* Background video only for hero section */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/background2.mp4" type="video/mp4" />
      </video>

      {/* Dark overlay with gradient transition for better text readability */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black/40 via-black/50 to-[#0F1112] z-10"></div>

      <div className="relative z-20 w-full max-w-2xl">
        <h1 className="text-4xl md:text-5xl lg:text-7xl mb-6 text-center md:text-left">
          {/* <span className="text-white font-bold">GAMZA</span> */}
          <TextType
            as="p"
            text={["프로젝트의 시작\nGAMZA"]}
            typingSpeed={100}
            pauseDuration={3000}
            showCursor={true}
            cursorCharacter="_"
            className="whitespace-pre-wrap  text-white font-bold leading-none align-top"
          />
        </h1>
        <p className="text-gray-300 text-base md:text-lg mb-8 max-w-xl animate-fade-in text-center md:text-left md:mx-0 mx-auto" style={{ animationDelay: "0.5s" }}>
          모두가 <span className="font-extrabold">함께 고민</span>하고, <span className="font-extrabold">함께 성장</span>합니다.
          <br />
          개발에 <span className="font-extrabold">열정</span>이 있는 당신을 기다립니다!
        </p>
        <div className="flex justify-center md:justify-start">
          <ApplyButton />
        </div>
      </div>
    </section>
  );
}
