import { Footer } from "@/components/sections/Footer";
import { Header } from "@/components/sections/Header";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "GAMZA - 코딩 동아리",
  description: "프로젝트의 시작, GAMZA. 모두가 함께 고민하고, 함께 성장합니다. 개발에 열정이 있는 당신을 기다립니다!",
  generator: "이경환",
  icons: {
    icon: "/logo.svg",
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
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
