import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section className="relative px-6 py-20 max-w-7xl mx-auto overflow-hidden">
      {/* Main blue gradient background */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-l from-blue-600/30 via-blue-500/20 to-transparent rounded-full blur-3xl animate-pulse"></div>
      <div
        className="absolute top-10 right-10 w-[600px] h-[600px] bg-gradient-to-bl from-blue-400/25 via-blue-600/15 to-transparent rounded-full blur-2xl animate-pulse"
        style={{ animationDelay: "1s" }}
      ></div>

      {/* Additional glow effects */}
      <div
        className="absolute top-20 right-20 w-[400px] h-[400px] bg-blue-500/20 rounded-full blur-3xl animate-bounce"
        style={{ animationDuration: "3s" }}
      ></div>
      <div
        className="absolute top-32 right-32 w-[200px] h-[200px] bg-blue-300/30 rounded-full blur-xl animate-ping"
        style={{ animationDuration: "4s" }}
      ></div>

      {/* Floating particles */}
      <div
        className="absolute top-16 right-16 w-2 h-2 bg-blue-400 rounded-full animate-bounce"
        style={{ animationDelay: "0.5s", animationDuration: "2s" }}
      ></div>
      <div
        className="absolute top-40 right-40 w-1 h-1 bg-blue-300 rounded-full animate-bounce"
        style={{ animationDelay: "1.5s", animationDuration: "3s" }}
      ></div>
      <div
        className="absolute top-60 right-24 w-1.5 h-1.5 bg-blue-500 rounded-full animate-bounce"
        style={{ animationDelay: "2s", animationDuration: "2.5s" }}
      ></div>

      <div className="relative z-10">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
          프론트의 시작
          <br />
          <span className="text-blue-400 animate-pulse">GAMZA</span>
        </h1>
        <p className="text-gray-400 text-lg mb-8 max-w-md animate-fade-in" style={{ animationDelay: "0.5s" }}>
          웹 개발의 기초부터 실무까지,
          <br />
          함께 성장하는 프론트엔드 개발 동아리입니다.
        </p>
        <Button
          className="bg-blue-600 hover:bg-blue-700 text-lg px-8 py-3 animate-fade-in hover:scale-105 transition-transform"
          style={{ animationDelay: "1s" }}
        >
          Contact
        </Button>
      </div>
    </section>
  );
}
