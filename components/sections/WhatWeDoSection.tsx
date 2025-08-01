"use client";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { useState } from "react";

type RoleType = "Frontend" | "Backend" | "Designer";

const roleContent = {
  "Frontend": {
    image: "/roadmap/frontend.svg",
    description: `사용자가 직접 상호작용하는 웹 인터페이스를 개발하며\n React, Vue.js 등을 활용하여 직관적이고 반응형인 사용자 경험을 구현합니다.`
  },
  "Backend": {
    image: "/roadmap/backend.svg",
    description: "서버, 데이터베이스, API를 설계하고 구축하며 안정적이고\n 확장 가능한 시스템 아키텍처를 통해 서비스의 핵심 기능을 구현합니다."
  },
  // "App": {
  //   image: "/placeholder.svg?height=300&width=300&text=App+Developer",
  //   description: "모바일 애플리케이션을 개발합니다. iOS, Android 플랫폼에 맞춰 최적화된 사용자 경험을 제공합니다."
  // },
  "Designer": {
    image: "/roadmap/designer.svg",
    description: " 사용자 흐름과 UI를 설계해 직관적이고 편리한 화면을 만들며\n 시각 디자인과 인터랙션을 제작해 개발자와 협업하며 완성도를 높입니다."
  },
};

export function WhatWeDoSection() {
  const [selectedRole, setSelectedRole] = useState<RoleType>("Frontend");
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handleRoleChange = (newRole: RoleType) => {
    if (newRole === selectedRole) return;

    setIsTransitioning(true);
    setTimeout(() => {
      setSelectedRole(newRole);
      setTimeout(() => {
        setIsTransitioning(false);
      }, 300); // 적절한 딜레이로 복원
    }, 400); // 원래 속도로 복원
  }; return (
    <section className="py-24 sm:py-32 relative overflow-hidden">
      {/* Floating decorative icons */}
      <div className="absolute top-80 left-72  w-14 h-14 animate-float hidden md:block">
        <Image
          src="/icons/WhatWedoIcon1.svg"
          alt="Decorative icon 1"
          width={200}
          height={200}
        />
      </div>
      <div className="absolute top-80 right-2 w-64 h-14  animate-float-delayed hidden md:block">
        <Image
          src="/icons/WhatWedoIcon2.svg"
          alt="Decorative icon 2"
          width={160}
          height={200}
        />
      </div>
      <div className="absolute bottom-80 left-28 w-64 h-12 animate-float-slow hidden md:block">
        <Image
          src="/icons/WhatWedoIcon3.svg"
          alt="Decorative icon 3"
          width={180}
          height={200}
        />
      </div>
      <div className="absolute bottom-36 right-52 w-20 h-20 animate-float hidden md:block">
        <Image
          src="/icons/WhatWedoIcon4.svg"
          alt="Decorative icon 4"
          width={200}
          height={200}
        />
      </div>

      <div className="mx-auto max-w-6xl px-5 lg:px-7">
        <h2 className="text-center text-3xl font-bold tracking-tight text-white sm:text-4xl mb-20">
          What we do
        </h2>
        <div className="flex justify-center flex-wrap gap-3 mb-10">
          <Badge
            className={`px-4 py-2 rounded-full text-sm cursor-pointer transition-all duration-300 transform hover:scale-105 ${selectedRole === "Frontend"
              ? "bg-[#1270D6] bg-opacity-60 border border-[#007AFF] text-white shadow-lg shadow-blue-500/25"
              : "bg-gray-700/60 text-gray-300 border-gray-600 hover:bg-gray-600/60 hover:border-gray-500"
              } ${isTransitioning ? 'pointer-events-none' : ''}`}
            onClick={() => handleRoleChange("Frontend")}
          >
            Frontend
          </Badge>
          <Badge
            className={`px-4 py-2 rounded-full text-sm cursor-pointer transition-all duration-300 transform hover:scale-105 ${selectedRole === "Backend"
              ? "bg-[#16A34A] bg-opacity-60 border border-[#22C55E] text-white shadow-lg shadow-green-500/25"
              : "bg-gray-700/60 text-gray-300 border-gray-600 hover:bg-gray-600/60 hover:border-gray-500"
              } ${isTransitioning ? 'pointer-events-none' : ''}`}
            onClick={() => handleRoleChange("Backend")}
          >
            Backend
          </Badge>
          <Badge
            className={`px-4 py-2 rounded-full text-sm cursor-pointer transition-all duration-300 transform hover:scale-105 ${selectedRole === "Designer"
              ? "bg-[#DB2777] bg-opacity-60 border border-[#EC4899] text-white shadow-lg shadow-pink-500/25"
              : "bg-gray-700/60 text-gray-300 border-gray-600 hover:bg-gray-600/60 hover:border-gray-500"
              } ${isTransitioning ? 'pointer-events-none' : ''}`}
            onClick={() => handleRoleChange("Designer")}
          >
            Designer
          </Badge>
        </div>

        <p className={`text-gray-300 text-center max-w-3xl mx-auto mb-12 whitespace-pre-wrap transition-all duration-500 ease-out ${isTransitioning ? 'opacity-0 transform translate-y-2' : 'opacity-100 transform translate-y-0'
          }`}>
          {roleContent[selectedRole].description}
        </p>

        <Card
          className="relative overflow-hidden w-full mx-auto rounded-xl bg-transparent border-none"
        >
          <CardContent className="p-0">
            <div className="flex items-center justify-center relative min-h-[400px] sm:min-h-[500px] lg:min-h-[650px]">
              {/* 기존 이미지를 사용 */}
              <div className={`transition-all duration-500 ease-out ${isTransitioning ? 'opacity-0 transform scale-98' : 'opacity-100 transform scale-100'
                }`}>
                <Image
                  src={roleContent[selectedRole].image}
                  alt={`${selectedRole} showcase`}
                  width={1200}
                  height={650}
                  className="rounded-lg"
                />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
