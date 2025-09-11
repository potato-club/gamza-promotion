import { STATISTICS_CONSTANTS } from "../../constants/statisticsSection";
import { StatCard } from "./StatCard";

export function StatisticsSection() {
  return (
    <section className="py-32 sm:pb-56 sm:pt-64">
      <div className="mx-auto max-w-6xl px-5 lg:px-7">
        <div className="w-full">
          <h2 className="text-center text-3xl font-bold tracking-tight text-white sm:text-4xl mb-14">
            {STATISTICS_CONSTANTS.SECTION_TITLE}
          </h2>
          <div className="grid grid-cols-2 gap-8 sm:gap-14 lg:grid-cols-4">
            {STATISTICS_CONSTANTS.STATS.map((stat, index) => (
              <StatCard
                key={index}
                number={stat.number}
                suffix={stat.suffix}
                label={stat.label}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
