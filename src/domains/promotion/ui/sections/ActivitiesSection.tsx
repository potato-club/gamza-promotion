import { Card, CardContent } from "@/shared/ui/card";
import Image from "next/image";
import { ACTIVITIES_CONSTANTS } from "../../constants/activitiesSection";

export function ActivitiesSection() {
  return (
    <section className="py-32 sm:py-56">
      <div className="mx-auto max-w-6xl px-5 lg:px-7">
        <h2 className="text-center text-3xl font-bold tracking-tight text-white sm:text-4xl mb-28">
          {ACTIVITIES_CONSTANTS.SECTION_TITLE}
        </h2>
        <div className="grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-4">
          {ACTIVITIES_CONSTANTS.ACTIVITIES.map(activity => (
            <Card
              key={activity.title}
              className="relative p-7 text-center transition-all duration-300 hover:bg-gray-800/80 backdrop-blur-sm rounded-xl"
              style={{
                height: ACTIVITIES_CONSTANTS.CARD_HEIGHT,
                background: ACTIVITIES_CONSTANTS.CARD_BACKGROUND,
                border: "1px solid transparent",
                backgroundImage: `
                  linear-gradient(${ACTIVITIES_CONSTANTS.CARD_BACKGROUND}, ${ACTIVITIES_CONSTANTS.CARD_BACKGROUND}),
                  linear-gradient(315deg, 
                  rgba(128, 128, 128, 0.6) 0%, 
                  rgba(128, 128, 128, 0.7) 50%,
                  rgba(248, 250, 251, 0.7) 100%
                )
                `,
                backgroundOrigin: "border-box",
                backgroundClip: "padding-box, border-box",
              }}
            >
              <CardContent className="flex flex-col gap-12 h-full p-0 mt-2">
                <div>
                  <h3 className="font-semibold text-lg text-white mb-5">
                    {activity.title}
                  </h3>
                  <p className="text-gray-400 text-sm">
                    {activity.description}
                  </p>
                </div>
                <Image
                  src={activity.src}
                  width={ACTIVITIES_CONSTANTS.ICON_DIMENSIONS.width}
                  height={ACTIVITIES_CONSTANTS.ICON_DIMENSIONS.height}
                  alt={activity.title}
                  className="mx-auto"
                />
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
