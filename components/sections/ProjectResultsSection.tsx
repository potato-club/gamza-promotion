import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

export function ProjectResultsSection() {
  return (
    <section className="px-6 py-16 max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold mb-12">프로젝트 결과물</h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
        <Card className="bg-gray-800 border-gray-700 overflow-hidden">
          <CardContent className="p-0">
            <div className="aspect-video bg-gray-700">
              <Image
                src="/placeholder.svg?height=250&width=400&text=E-Commerce+Platform"
                alt="E-Commerce Platform"
                width={400}
                height={250}
                className="w-full h-full object-cover opacity-50"
              />
            </div>
            <div className="p-6">
              <h3 className="font-semibold mb-2">쇼핑몰 플랫폼</h3>
              <p className="text-gray-400 text-sm">
                React와 Node.js를 활용한 풀스택 쇼핑몰 플랫폼 개발 프로젝트입니다. 사용자 인증, 결제 시스템, 관리자
                페이지 등 실무에서 필요한 모든 기능을 구현했습니다.
              </p>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gray-800 border-gray-700 overflow-hidden">
          <CardContent className="p-0">
            <div className="aspect-video bg-gray-700">
              <Image
                src="/placeholder.svg?height=250&width=400&text=Task+Management+App"
                alt="Task Management App"
                width={400}
                height={250}
                className="w-full h-full object-cover opacity-50"
              />
            </div>
            <div className="p-6">
              <h3 className="font-semibold mb-2">업무 관리 도구</h3>
              <p className="text-gray-400 text-sm">
                팀 협업을 위한 업무 관리 도구입니다. 실시간 채팅, 파일 공유, 일정 관리 등의 기능을 통해 효율적인
                팀워크를 지원합니다.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
        {[1, 2, 3, 4, 5].map((i) => (
          <Card key={i} className="bg-gray-800 border-gray-700 aspect-square overflow-hidden">
            <CardContent className="p-0 h-full">
              <Image
                src={`/placeholder.svg?height=200&width=200&text=Project+${i}`}
                alt={`Project ${i}`}
                width={200}
                height={200}
                className="w-full h-full object-cover opacity-50"
              />
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
