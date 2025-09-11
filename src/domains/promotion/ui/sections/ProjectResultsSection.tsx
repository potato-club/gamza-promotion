import { Card, CardContent } from "@/shared/ui/card";
import Image from "next/image";
import Link from "next/link";
import Marquee from "react-fast-marquee";
import { PROJECT_RESULTS_CONSTANTS } from "../../constants/projectResultsSection";

export function ProjectResultsSection() {
  return (
    <section className="py-32 sm:pb-64 sm:pt-56">
      <div className="mx-auto max-w-6xl px-5 lg:px-7">
        <h2 className="text-center text-3xl font-bold tracking-tight text-white sm:text-4xl mb-28">
          {PROJECT_RESULTS_CONSTANTS.SECTION_TITLE}
        </h2>

        {/* <div className="grid grid-cols-1 lg:grid-cols-2 gap-7 mb-11">
          {mainProjects.map((project, index) => (
            <Card
              key={index}
              className="relative overflow-hidden transition-all duration-300 hover:bg-gray-800/80 backdrop-blur-sm rounded-xl"
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
              <CardContent className="p-0">
                <div className="aspect-video bg-gray-900/50">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={400}
                    height={250}
                    className="w-full h-full object-cover opacity-70"
                  />
                </div>
                <div className="p-5">
                  <h3 className="font-semibold text-lg text-white mb-2">{project.title}</h3>
                  <p className="text-gray-400 text-sm">{project.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div> */}
      </div>

      {/* Marquee가 화면 전체 폭으로 표시되도록 컨테이너 밖으로 분리 */}
      <div className="w-full">
        <Marquee
          speed={PROJECT_RESULTS_CONSTANTS.MARQUEE_SPEED}
          pauseOnHover={true}
          className="overflow-hidden"
          autoFill={true}
        >
          {PROJECT_RESULTS_CONSTANTS.PROJECTS.map((project, i) => (
            <Link key={i} href={project.src || "#"}>
              <Card
                className="relative overflow-hidden transition-all duration-300 rounded-xl mx-2 cursor-pointer border-none"
                style={{
                  width: `${PROJECT_RESULTS_CONSTANTS.CARD_DIMENSIONS.width}px`,
                  height: `${PROJECT_RESULTS_CONSTANTS.CARD_DIMENSIONS.height}px`,
                }}
              >
                <CardContent className="p-0 h-full">
                  <Image
                    src={project.image}
                    alt={project.title || `Sub project ${i + 1}`}
                    width={PROJECT_RESULTS_CONSTANTS.CARD_DIMENSIONS.width}
                    height={PROJECT_RESULTS_CONSTANTS.CARD_DIMENSIONS.height}
                    className="w-full h-full object-cover rounded-xl"
                  />
                </CardContent>
              </Card>
            </Link>
          ))}
        </Marquee>
      </div>

      {/* 더보기 버튼 추가 */}
      <div className="text-center mt-16">
        <Link
          href={PROJECT_RESULTS_CONSTANTS.PROJECTS_PAGE_ROUTE}
          className="inline-block px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors duration-300"
        >
          {PROJECT_RESULTS_CONSTANTS.MORE_PROJECTS_BUTTON_TEXT}
        </Link>
      </div>
    </section>
  );
}
