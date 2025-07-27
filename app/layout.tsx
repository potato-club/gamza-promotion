import { Footer } from '@/components/sections/Footer';
import { Header } from '@/components/sections/Header';
import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'GAMZA - 프론트엔드 개발 동아리',
  description: '프론트의 시작, GAMZA. 웹 개발의 기초부터 실무까지 함께 성장하는 프론트엔드 개발 동아리입니다.',
  generator: 'v0.dev',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-gray-900 text-white">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
