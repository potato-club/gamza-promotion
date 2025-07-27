import { StatCard } from "./StatCard";

export function StatisticsSection() {
  return (
    <section className="px-6 py-16 max-w-7xl mx-auto">
      <h2 className="text-center text-2xl font-semibold mb-12 text-gray-300">숫자로 보는 감자</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        <StatCard number={10} suffix="년" label="운영 기간" />
        <StatCard number={9} suffix="기" label="현재 기수" />
        <StatCard number={21} suffix="명" label="활동 인원" />
        <StatCard number={30} suffix="+" label="완성 프로젝트" />
      </div>
    </section>
  );
}
