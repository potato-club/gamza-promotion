"use client";

import { ApplyButton } from "@/shared/ui/apply-button";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function Header() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full bg-transparent">
      <div className="container mx-auto px-4 md:px-6">
        {/* Mobile Layout - justify-between으로 좌우 정렬 */}
        <div className="flex md:hidden h-16 w-full items-center justify-between">
          {/* Mobile Navigation - Left aligned with optimized touch targets */}
          <nav className="flex items-center space-x-2">
            <Link
              href="/"
              className={`hover:text-white transition-colors text-sm px-3 py-2 rounded-md min-h-[44px] flex items-center ${
                pathname === "/" ? "text-[#F8FAFB]" : "text-gray-500"
              }`}
            >
              홈
            </Link>
            <Link
              href="/projects"
              className={`hover:text-white transition-colors text-sm px-3 py-2 rounded-md min-h-[44px] flex items-center ${
                pathname === "/projects" ? "text-[#F8FAFB]" : "text-gray-500"
              }`}
            >
              프로젝트
            </Link>
            <Link
              href="https://app.gamza.site/"
              className={`hover:text-white transition-colors text-sm px-3 py-2 rounded-md min-h-[44px] flex items-center ${
                pathname === "/blog" ? "text-[#F8FAFB]" : "text-gray-500"
              }`}
            >
              블로그
            </Link>
          </nav>

          {/* Mobile Apply Button - Right aligned */}
          <ApplyButton size="md" className="shrink-0" />
        </div>

        {/* Desktop Layout - justify-end로 우측 정렬 유지 */}
        <div className="hidden md:flex h-16 w-full items-center justify-end">
          <div className="flex items-center space-x-6">
            <nav className="flex items-center space-x-6">
              <Link
                href="/"
                className={`hover:text-white transition-colors text-sm px-2 py-1 rounded-md ${
                  pathname === "/" ? "text-[#F8FAFB]" : "text-gray-500"
                }`}
              >
                홈
              </Link>
              <Link
                href="/projects"
                className={`hover:text-white transition-colors text-sm px-2 py-1 rounded-md ${
                  pathname === "/projects" ? "text-[#F8FAFB]" : "text-gray-500"
                }`}
              >
                프로젝트
              </Link>
              <Link
                href="https://app.gamza.site/"
                className={`hover:text-white transition-colors text-sm px-2 py-1 rounded-md ${
                  pathname === "/blog" ? "text-[#F8FAFB]" : "text-gray-500"
                }`}
              >
                블로그
              </Link>
            </nav>
            <ApplyButton size="md" className="shrink-0" />
          </div>
        </div>
      </div>
    </header>
  );
}
