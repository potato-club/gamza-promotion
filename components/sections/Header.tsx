import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full bg-transparent">
      <div className="container mx-auto flex h-16 w-full items-center justify-between px-6">
        <div className="w-8 h-8">
          <Image
            src="/gamzaLogo.svg"
            alt="Gamza Logo"
            width={32}
            height={32}
            className="w-full h-full object-contain"
          />
        </div>
        <div className="flex items-center space-x-8">
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="#" className="text-gray-300 hover:text-white transition-colors text-sm">
              홈
            </Link>
            <Link href="/projects" className="text-gray-300 hover:text-white transition-colors text-sm">
              프로젝트
            </Link>
            <Link href="https://app.gamzatech.site/" className="text-gray-300 hover:text-white transition-colors text-sm">
              블로그
            </Link>
          </nav>
          <Button className="bg-blue-500 hover:bg-blue-600 text-white rounded-full px-6 py-2 text-sm font-medium">
            10기 지원하기
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </header>
  );
}
