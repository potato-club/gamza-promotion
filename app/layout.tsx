import { Footer } from "@/components/sections/Footer";
import { Header } from "@/components/sections/Header";
import type { Metadata } from "next";
import "./globals.css";
import { LenisScroller } from "../components/LenisScroller";

export const metadata: Metadata = {
  title: "감자 - 코딩 동아리",
  description:
    "프로젝트의 시작, GAMZA. 모두가 함께 고민하고, 함께 성장합니다. 개발에 열정이 있는 당신을 기다립니다!",
  generator: "경환, 지훈, 소영",
  icons: {
    icon: "/logo/logo.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className="min-h-screen text-white bg-[#0F1112]">
        <LenisScroller />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}