import { Github } from "lucide-react";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-gray-800/50">
      <div className="container mx-auto flex flex-col items-center justify-between gap-6 py-12 px-6 md:flex-row">
        <div className="text-center md:text-left">
          <h3 className="text-xl font-bold mb-1">GAMZA</h3>
          <p className="text-gray-400 text-sm mb-2">
            모두가 함께 고민하고, 함께 성장합니다. 개발에 열정이 있는 당신을 기다립니다.
          </p>
          <p className="text-xs text-gray-500">© 2025 GAMZA. All Rights Reserved.</p>
        </div>
        <div className="flex items-center gap-6">
          <Link href="#" className="text-sm text-gray-400 hover:text-white transition-colors">
            소개
          </Link>
          <Link href="/projects" className="text-sm text-gray-400 hover:text-white transition-colors">
            프로젝트
          </Link>
          <Link href="https://app.gamzatech.site/" className="text-sm text-gray-400 hover:text-white transition-colors">
            블로그
          </Link>
          <Link href="https://github.com/potato-club" aria-label="Github" className="text-gray-400 hover:text-white transition-colors">
            <Github className="h-6 w-6" />
          </Link>
        </div>
      </div>
    </footer>
  );
}
