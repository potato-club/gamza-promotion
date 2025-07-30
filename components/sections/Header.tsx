"use client";

import { ApplyButton } from "@/components/ui/apply-button";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function Header() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full bg-transparent">
      <div className="container mx-auto flex h-16 w-full items-center justify-end px-6">
        <div className="flex items-center space-x-8">
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className={`hover:text-white transition-colors text-sm ${pathname === "/" ? "text-[#F8FAFB]" : "text-gray-500"
                }`}
            >
              홈
            </Link>
            <Link
              href="/projects"
              className={`hover:text-white transition-colors text-sm ${pathname === "/projects" ? "text-[#F8FAFB]" : "text-gray-500"
                }`}
            >
              프로젝트
            </Link>
            <Link
              href="https://app.gamzatech.site/"
              className={`hover:text-white transition-colors text-sm ${pathname === "/blog" ? "text-[#F8FAFB]" : "text-gray-500"
                }`}
            >
              블로그
            </Link>
          </nav>
          <ApplyButton />

        </div>
      </div>
    </header>
  );
}
