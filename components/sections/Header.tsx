"use client";

import { ApplyButton } from "@/components/ui/apply-button";
import Link from "next/link";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full bg-transparent">
      <div className="container mx-auto flex h-16 w-full items-center justify-end px-6">
        <div className="flex items-center space-x-8">
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-300 hover:text-white transition-colors text-sm">
              홈
            </Link>
            <Link href="/projects" className="text-gray-300 hover:text-white transition-colors text-sm">
              프로젝트
            </Link>
            <Link href="https://app.gamzatech.site/" className="text-gray-300 hover:text-white transition-colors text-sm">
              블로그
            </Link>
          </nav>
          <ApplyButton />

        </div>
      </div>
    </header>
  );
}
