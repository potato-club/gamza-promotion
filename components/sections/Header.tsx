import { Button } from "@/components/ui/button";

export function Header() {
  return (
    <header className="flex items-center justify-between p-6 max-w-7xl mx-auto">
      <div className="w-8 h-8 bg-white rounded-sm"></div>
      <div className="flex items-center space-x-8">
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#" className="text-gray-300 hover:text-white transition-colors">
            홈
          </a>
          <a href="/projects" className="text-gray-300 hover:text-white transition-colors">
            프로젝트
          </a>
          <a href="#" className="text-gray-300 hover:text-white transition-colors">
            블로그
          </a>
        </nav>
        <Button className="bg-blue-600 hover:bg-blue-700">10기 지원하기</Button>
      </div>
    </header>
  );
}
