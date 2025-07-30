import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import Marquee from "react-fast-marquee";

const mainProjects = [
  {
    title: "프로젝트명",
    description: "프로젝트 설명 간단하게-- 프로젝트 설명 간단하게-- 프로젝트 설명 간단하게-- 프로젝트 설명 간단하게--",
    image: "/placeholder.svg?height=250&width=400&text=Project+1",
  },
  {
    title: "프로젝트명",
    description: "프로젝트 설명 간단하게-- 프로젝트 설명 간단하게-- 프로젝트 설명 간단하게-- 프로젝트 설명 간단하게--",
    image: "/placeholder.svg?height=250&width=400&text=Project+2",
  },
];

const subProjects = [
  { image: "/placeholder.svg?height=200&width=200&text=Sub+1" },
  { image: "/placeholder.svg?height=200&width=200&text=Sub+2" },
  // { image: "/placeholder.svg?height=200&width=200&text=Sub+3" },
  // { image: "/placeholder.svg?height=200&width=200&text=Sub+4" },
  // { image: "/placeholder.svg?height=200&width=200&text=Sub+5" },
  // { image: "/placeholder.svg?height=200&width=200&text=Sub+6" },
  // { image: "/placeholder.svg?height=200&width=200&text=Sub+7" },
  // { image: "/placeholder.svg?height=200&width=200&text=Sub+8" },
];

export function ProjectResultsSection() {
  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 lg:px-7">
        <h2 className="text-center text-3xl font-bold tracking-tight text-white sm:text-4xl mb-14">
          프로젝트 결과물
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
          speed={80}
          pauseOnHover={true}
          className="overflow-hidden"
          autoFill={true}
        >
          {subProjects.map((project, i) => (
            <Card
              key={i}
              className="relative overflow-hidden transition-all duration-300 hover:bg-gray-800/80 backdrop-blur-sm rounded-xl mx-2 cursor-pointer"
              style={{
                width: "270px",
                height: "158px", // 270 * (233/398) ≈ 158
                background: '#272C2F',
                border: '1px solid transparent',
                backgroundImage: `
                  linear-gradient(#272C2F, #272C2F),
                  linear-gradient(315deg, 
                    rgba(248, 250, 251, 0.4) 0%, 
                    rgba(128, 128, 128, 0.2) 50%,
                    rgba(128, 128, 128, 0.1) 100%
                  )
                `,
                backgroundOrigin: 'border-box',
                backgroundClip: 'padding-box, border-box'
              }}
            >
              <CardContent className="p-0 h-full">
                <Image
                  src={project.image}
                  alt={`Sub project ${i + 1}`}
                  width={270}
                  height={158}
                  className="w-full h-full object-cover opacity-70 rounded-xl"
                />
              </CardContent>
            </Card>
          ))}
        </Marquee>
      </div>

      {/* 더보기 버튼 추가 */}
      <div className="text-center mt-16">
        <Link
          href="/projects"
          className="inline-block px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors duration-300"
        >
          더 많은 프로젝트 보기
        </Link>
      </div>
    </section>
  );
}
