import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative flex min-h-[calc(100vh-4rem)] items-center overflow-hidden pl-52">
      {/* Main blue gradient background */}
      <div className="absolute top-1/2 right-0 w-[800px] h-[800px] bg-gradient-to-l from-blue-600/30 via-blue-500/20 to-transparent rounded-full blur-3xl animate-pulse transform -translate-y-1/2"></div>

      <div className="relative z-10 px-6">
        <h1 className="text-5xl md:text-7xl mb-6 animate-fade-in">
          프로젝트의 시작
          <br />
          <span className="text-white font-bold">GAMZA</span>
        </h1>
        <p className="text-gray-300 text-lg mb-8 max-w-xl mx-auto animate-fade-in" style={{ animationDelay: "0.5s" }}>
          모두가 <span className="font-extrabold">함께 고민</span>하고, <span className="font-extrabold">함께 성장</span>합니다.
          <br />
          개발에 <span className="font-extrabold">열정</span>이 있는 당신을 기다립니다!
        </p>
        <Button
          className="bg-blue-500 hover:bg-blue-600 text-white rounded-full px-8 py-3 text-base font-medium animate-fade-in hover:scale-105 transition-transform"
          style={{ animationDelay: "1s" }}
        >
          10기 지원하기
          <ArrowRight className="ml-2 h-5 w-5" />
        </Button>
      </div>
    </section>
  );
}
