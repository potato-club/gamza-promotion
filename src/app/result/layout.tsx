export default function ResultPageLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="min-h-screen text-white bg-[#0F1112] flex flex-col items-center justify-center space-y-8">
      {children}
    </div>
  );
}
