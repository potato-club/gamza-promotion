import { StatCard } from "./StatCard";

export function StatisticsSection() {
  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 lg:px-7">
        <div className="mx-auto max-w-xl lg:max-w-5xl">
          <h2 className="text-center text-3xl font-bold tracking-tight text-white sm:text-4xl mb-14">
            숫자로 보는 감자
          </h2>
          <div className="grid grid-cols-1 gap-14 sm:grid-cols-2 lg:grid-cols-4">
            <StatCard number={6} suffix="년" label="운영 기간" />
            <StatCard number={9} suffix="기" label="현재 기수" />
            <StatCard number={56} suffix="명" label="활동 인원" />
            <StatCard number={30} suffix="+" label="프로젝트 수" />
          </div>
        </div>
      </div>
    </section>
  );
}