import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Code, Star } from "lucide-react";
import Image from "next/image";

export function WhatWeDoSection() {
  return (
    <section className="px-6 py-16 max-w-7xl mx-auto relative">
      <div className="absolute top-10 left-10 w-12 h-12 bg-blue-500 rounded-full opacity-60"></div>
      <div className="absolute top-32 right-20 w-8 h-8 bg-green-400 rounded-full opacity-60"></div>
      <div className="absolute bottom-20 left-1/4 w-6 h-6 bg-purple-400 rounded-full opacity-60"></div>

      <h2 className="text-3xl font-bold mb-8">What we do</h2>
      <div className="flex flex-wrap gap-3 mb-12">
        <Badge variant="secondary" className="bg-gray-700 text-gray-300 px-4 py-2">
          프론트엔드
        </Badge>
        <Badge className="bg-blue-600 hover:bg-blue-700 px-4 py-2">React</Badge>
        <Badge variant="secondary" className="bg-gray-700 text-gray-300 px-4 py-2">
          JavaScript
        </Badge>
        <Badge variant="secondary" className="bg-gray-700 text-gray-300 px-4 py-2">
          TypeScript
        </Badge>
      </div>

      <Card className="bg-gray-800 border-gray-700 p-8 relative">
        <div className="absolute top-4 right-4 w-16 h-16 bg-purple-500/20 rounded-lg flex items-center justify-center">
          <Code className="w-8 h-8 text-purple-400" />
        </div>
        <div className="absolute bottom-4 left-4 w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center">
          <Star className="w-6 h-6 text-blue-400" />
        </div>
        <CardContent className="p-0">
          <div className="aspect-video bg-gray-700 rounded-lg mb-6 flex items-center justify-center">
            <Image
              src="/placeholder.svg?height=300&width=500&text=GAMZA+Project+Showcase"
              alt="Project showcase"
              width={500}
              height={300}
              className="rounded-lg opacity-50"
            />
          </div>
          <p className="text-gray-400 text-center">
            프론트엔드 개발의 모든 것을 배우고 실습합니다. — 기초부터 고급 기술까지 체계적인 커리큘럼으로 — 실무진과
            함께하는 프로젝트 경험을 통해 — 개발자로서의 역량을 키워나갑니다.
          </p>
        </CardContent>
      </Card>
    </section>
  );
}
