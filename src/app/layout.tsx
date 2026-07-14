import { LenisScroller } from "@/domains/promotion";
import { ToastProvider, ToastViewport } from "@/shared/ui/toast";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.gamza.site"),
  title: "감자 - 한세대학교 웹 개발 동아리",
  description:
    "프로젝트의 시작, GAMZA. 모두가 함께 고민하고, 함께 성장합니다. 개발에 열정이 있는 당신을 기다립니다!",
  generator: "경환, 지훈, 소영",
  applicationName: "감자",
  openGraph: {
    siteName: "감자",
    type: "website",
    locale: "ko_KR",
    url: "https://www.gamza.site",
  },
  icons: {
    icon: "/logo/logo.svg",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "감자",
  alternateName: "한세대학교 웹 개발 동아리",
  url: "https://www.gamza.site",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className="min-h-screen text-white bg-[#0F1112]">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <ToastProvider>
          <LenisScroller />
          {children}
          <ToastViewport />
        </ToastProvider>
      </body>
    </html>
  );
}
