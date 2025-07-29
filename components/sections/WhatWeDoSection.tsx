"use client";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { useState } from "react";

type RoleType = "App" | "Frontend" | "Backend" | "Designer";

const roleContent = {
  "Frontend": {
    image: "/placeholder.svg?height=300&width=300&text=Frontend",
    description: "사용자가 직접 상호작용하는 웹 인터페이스를 개발합니다. React, Vue.js 등을 활용하여 직관적이고 반응형인 사용자 경험을 구현합니다."
  },
  "Backend": {
    image: "/placeholder.svg?height=300&width=300&text=Backend",
    description: "서버, 데이터베이스, API를 설계하고 구축합니다. 안정적이고 확장 가능한 시스템 아키텍처를 통해 서비스의 핵심 기능을 구현합니다."
  },
  "App": {
    image: "/placeholder.svg?height=300&width=300&text=App+Developer",
    description: "모바일 애플리케이션을 개발합니다. iOS, Android 플랫폼에 맞춰 최적화된 사용자 경험을 제공합니다."
  },
  "Designer": {
    image: "/placeholder.svg?height=300&width=300&text=Designer",
    description: "사용자 중심의 디자인을 통해 직관적인 UI/UX를 설계합니다. 브랜드 아이덴티티와 사용성을 고려한 시각적 요소들을 디자인합니다."
  },
};

export function WhatWeDoSection() {
  const [selectedRole, setSelectedRole] = useState<RoleType>("Frontend");

  return (
    <section className="py-24 sm:py-32 relative overflow-hidden">
      {/* Floating decorative icons */}
      <div className="absolute top-56 left-72  w-14 h-14 animate-float hidden md:block">
        <Image
          src="/WhatWedoIcon1.svg"
          alt="Decorative icon 1"
          width={200}
          height={200}
        />
      </div>
      <div className="absolute top-32 right-32 w-64 h-14  animate-float-delayed hidden md:block">
        <Image
          src="/WhatWedoIcon2.svg"
          alt="Decorative icon 2"
          width={200}
          height={200}
        />
      </div>
      <div className="absolute bottom-96 left-40 w-64 h-12 animate-float-slow hidden md:block">
        <Image
          src="/WhatWedoIcon3.svg"
          alt="Decorative icon 3"
          width={200}
          height={200}
        />
      </div>
      <div className="absolute bottom-36 right-52 w-20 h-20 animate-float hidden md:block">
        <Image
          src="/WhatWedoIcon4.svg"
          alt="Decorative icon 4"
          width={200}
          height={200}
        />
      </div>

      <div className="mx-auto max-w-6xl px-5 lg:px-7">
        <h2 className="text-center text-3xl font-bold tracking-tight text-white sm:text-4xl mb-7">
          What we do
        </h2>
        <div className="flex justify-center flex-wrap gap-3 mb-14">

          <Badge
            className={`px-3 py-2 rounded-full text-sm cursor-pointer transition-all duration-300 ${selectedRole === "Frontend"
              ? "bg-blue-500 text-white"
              : "bg-gray-700/60 text-gray-300 border-gray-600 hover:bg-gray-600/60"
              }`}
            onClick={() => setSelectedRole("Frontend")}
          >
            Frontend
          </Badge>
          <Badge
            className={`px-3 py-2 rounded-full text-sm cursor-pointer transition-all duration-300 ${selectedRole === "Backend"
              ? "bg-blue-500 text-white"
              : "bg-gray-700/60 text-gray-300 border-gray-600 hover:bg-gray-600/60"
              }`}
            onClick={() => setSelectedRole("Backend")}
          >
            Backend
          </Badge>
          <Badge
            className={`px-3 py-2 rounded-full text-sm cursor-pointer transition-all duration-300 ${selectedRole === "App"
              ? "bg-blue-500 text-white"
              : "bg-gray-700/60 text-gray-300 border-gray-600 hover:bg-gray-600/60"
              }`}
            onClick={() => setSelectedRole("App")}
          >
            App
          </Badge>
          <Badge
            className={`px-3 py-2 rounded-full text-sm cursor-pointer transition-all duration-300 ${selectedRole === "Designer"
              ? "bg-blue-500 text-white"
              : "bg-gray-700/60 text-gray-300 border-gray-600 hover:bg-gray-600/60"
              }`}
            onClick={() => setSelectedRole("Designer")}
          >
            Designer
          </Badge>
        </div>

        <Card
          className="relative shadow-lg overflow-hidden backdrop-blur-sm w-4/5 mx-auto rounded-xl"
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
          <CardContent className="p-7">
            <div className="aspect-video bg-gray-900/50 rounded-lg mb-5 flex items-center justify-center">
              <Image
                src={roleContent[selectedRole].image}
                alt={`${selectedRole} showcase`}
                width={270}
                height={270}
                className="rounded-lg opacity-70"
              />
            </div>
            <p className="text-gray-300 text-center max-w-3xl mx-auto">
              {roleContent[selectedRole].description}
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
