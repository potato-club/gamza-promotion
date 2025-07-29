import { ApplyButton } from "../ui/apply-button";

export function HeroSection() {
  return (
    <section className="relative flex min-h-[calc(100vh-4rem)] items-center justify-center md:justify-start overflow-hidden px-6 md:pl-52">
      {/* Main blue gradient background */}
      <div className="absolute top-1/2 right-0 w-[800px] h-[800px] bg-gradient-to-l from-blue-600/30 via-blue-500/20 to-transparent rounded-full blur-3xl animate-pulse transform -translate-y-1/2"></div>

      <div className="relative z-10 w-full max-w-2xl">
        <h1 className="text-4xl md:text-5xl lg:text-7xl mb-6 animate-fade-in text-center md:text-left">
          프로젝트의 시작
          <br />
          <span className="text-white font-bold">GAMZA</span>
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
