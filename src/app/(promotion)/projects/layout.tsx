export default function ProjectPageLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <h1 className="text-3xl sm:text-4xl font-bold text-center mt-36 mb-24 tracking-tight">
        프로젝트
      </h1>
      <main>{children}</main>
    </>
  );
}
