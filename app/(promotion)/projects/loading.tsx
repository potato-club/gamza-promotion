export default function ProjectPageLoading() {
  return (
    <div className="min-h-screen text-white">
      <section className="px-5 lg:px-7 py-24 mx-auto max-w-6xl">
        <div className="text-center text-gray-400 mb-8">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-white mx-auto mb-4"></div>
          프로젝트를 불러오는 중...
        </div>
      </section>
    </div>
  );
}
