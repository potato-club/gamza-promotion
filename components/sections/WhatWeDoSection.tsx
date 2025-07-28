"use client";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { useState } from "react";

type RoleType = "Product Owner" | "Frontend" | "Backend" | "Designer";

const roleContent = {
  "Product Owner": {
    image: "/placeholder.svg?height=300&width=300&text=Product+Owner",
    description: "제품의 비전을 설정하고 개발 방향을 결정합니다. 사용자 요구사항을 분석하고 우선순위를 정하여 팀이 올바른 제품을 만들 수 있도록 가이드합니다."
  },
  "Frontend": {
    image: "/placeholder.svg?height=300&width=300&text=Frontend",
    description: "사용자가 직접 상호작용하는 웹 인터페이스를 개발합니다. React, Vue.js 등을 활용하여 직관적이고 반응형인 사용자 경험을 구현합니다."
  },
  "Backend": {
    image: "/placeholder.svg?height=300&width=300&text=Backend",
    description: "서버, 데이터베이스, API를 설계하고 구축합니다. 안정적이고 확장 가능한 시스템 아키텍처를 통해 서비스의 핵심 기능을 구현합니다."
  },
  "Designer": {
    image: "/placeholder.svg?height=300&width=300&text=Designer",
    description: "사용자 중심의 디자인을 통해 직관적인 UI/UX를 설계합니다. 브랜드 아이덴티티와 사용성을 고려한 시각적 요소들을 디자인합니다."
  }
};

export function WhatWeDoSection() {
  const [selectedRole, setSelectedRole] = useState<RoleType>("Frontend");

  return (
    <section className="py-24 sm:py-32 relative overflow-hidden">
      {/* Floating decorative elements */}
      <div className="absolute top-1/4 left-9 w-14 h-14 bg-cyan-500/20 rounded-full blur-2xl animate-pulse"></div>
      <div className="absolute top-1/2 right-9 w-20 h-20 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      <div className="absolute bottom-1/4 left-1/3 w-10 h-10 bg-green-500/20 rounded-full blur-2xl animate-pulse delay-500"></div>

      <div className="mx-auto max-w-6xl px-5 lg:px-7">
        <h2 className="text-center text-3xl font-bold tracking-tight text-white sm:text-4xl mb-7">
          What we do
        </h2>
        <div className="flex justify-center flex-wrap gap-3 mb-14">
          <Badge
            className={`px-3 py-2 rounded-full text-sm cursor-pointer transition-all duration-300 ${selectedRole === "Product Owner"
              ? "bg-blue-500 text-white"
              : "bg-gray-700/60 text-gray-300 border-gray-600 hover:bg-gray-600/60"
              }`}
            onClick={() => setSelectedRole("Product Owner")}
          >
            Product Owner
          </Badge>
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
