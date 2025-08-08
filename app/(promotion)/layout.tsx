import { Footer } from "../../components/sections/Footer";
import { Header } from "../../components/sections/Header";

export default function PromotionPageLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}
