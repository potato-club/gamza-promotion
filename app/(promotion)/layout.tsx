import { Footer } from "../../components/sections/Footer";
import { Header } from "../../components/sections/Header";


export default function PromotionPageLayout({
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
