import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

const activities = [
  {
    title: "정기 세미나 및 스터디",
    description: "매주 스터디를 통해 함께 공부하며 정기적으로 세미나를 진행합니다.",
    src: "/activityIcon1.svg",
  },
  {
    title: "개발 네트워킹 및 멘토링",
    description: "개발 공부에 대한 고민에 대해 조언을 구하며 함께 해결해갑니다.",
    src: "/activityIcon2.svg",
  },
  {
    title: "해커톤 및 공모전",
    description: "해커톤, 공모전에 참여하여 도전의 기회를 가집니다.",
    src: "/activityIcon3.svg",
  },
  {
    title: "프로젝트 기획 및 개발",
    description: "세미나 및 스터디를 직접 기획하고 동아리 프로젝트를 개발합니다.",
    src: "/activityIcon4.svg",
  },
];

export function ActivitiesSection() {
  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="text-center text-3xl font-bold tracking-tight text-white sm:text-4xl mb-16">
          활동 내용
        </h2>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {activities.map((activity) => (
            <Card
              key={activity.title}
              className="relative p-8 text-center transition-all duration-300 hover:bg-gray-800/80 backdrop-blur-sm rounded-xl"
              style={{
                background: '#272C2F',
                border: '1px solid transparent',
                backgroundImage: `
                  linear-gradient(#272C2F, #272C2F),
                  linear-gradient(315deg, 
                  rgba(128, 128, 128, 0.6) 0%, 
                  rgba(128, 128, 128, 0.7) 50%,
                  rgba(248, 250, 251, 0.7) 100%
                )
                `,
                backgroundOrigin: 'border-box',
                backgroundClip: 'padding-box, border-box'
              }}
            >
              <CardContent className="flex flex-col items-center p-0">
                {/* <div className="mb-6">{activity.icon}</div> */}
                <Image src={activity.src} width={40} height={40} alt={activity.title} className="mb-6" />
                <h3 className="font-semibold text-lg text-white mb-3">{activity.title}</h3>
                <p className="text-gray-400 text-sm">{activity.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
