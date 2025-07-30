"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function Footer() {
  const pathname = usePathname();

  return (
    <footer className="border-t border-gray-800/50">
      <div className="mx-8 flex flex-col items-center justify-center gap-6 py-12 px-6 md:flex-row md:items-start md:justify-between">
        <div className="text-center md:text-left flex flex-col items-center md:items-start gap-4">
          <h3 className="text-3xl font-bold mb-1">GAMZA</h3>
          <p className="text-gray-400 text-sm mb-2">
            모두가 함께 고민하고, 함께 성장합니다.<br /> 개발에 열정이 있는 당신을 기다립니다.
          </p>
          <Link href="https://github.com/potato-club" aria-label="Github" className="text-gray-400 hover:text-white transition-colors">
            <Image src="/githubIcon.svg" alt="Github" width={24} height={24} />
          </Link>
          <p className="text-sm text-gray-700">© 2025 GAMZA. All Rights Reserved.</p>
        </div>
        <div className="flex items-center justify-center gap-10 md:items-start md:mt-4">
          <Link
            href="/"
            className={`text-sm hover:text-white transition-colors ${pathname === "/" ? "text-[#F8FAFB]" : "text-gray-400"
              }`}
          >
            홈
          </Link>
          <Link
            href="/projects"
            className={`text-sm hover:text-white transition-colors ${pathname === "/projects" ? "text-[#F8FAFB]" : "text-gray-400"
              }`}
          >
            프로젝트
          </Link>
          <Link
            href="https://app.gamzatech.site/"
            className={`text-sm hover:text-white transition-colors ${pathname === "/blog" ? "text-[#F8FAFB]" : "text-gray-400"
              }`}
          >
            블로그
          </Link>

        </div>
      </div>
    </footer>
  );
}
