"use client";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { useState } from "react";

const projects = [
  {
    id: 1,
    title: "프로젝트명",
    category: "WEB",
    description: "프로젝트 설명 간단하게—프로젝트의 설명이 간단하게—프로젝트 설명이 간단하게",
    image: "/placeholder.svg?height=200&width=300&text=Project+1",
  },
  {
    id: 2,
    title: "프로젝트명",
    category: "WEB",
    description: "프로젝트 설명 간단하게—프로젝트의 설명이 간단하게—프로젝트 설명이 간단하게",
    image: "/placeholder.svg?height=200&width=300&text=Project+2",
  },
  {
    id: 3,
    title: "프로젝트명",
    category: "WEB",
    description: "프로젝트 설명 간단하게—프로젝트의 설명이 간단하게—프로젝트 설명이 간단하게",
    image: "/placeholder.svg?height=200&width=300&text=Project+3",
  },
  {
    id: 4,
    title: "프로젝트명",
    category: "WEB",
    description: "프로젝트 설명 간단하게—프로젝트의 설명이 간단하게—프로젝트 설명이 간단하게",
    image: "/placeholder.svg?height=200&width=300&text=Project+4",
  },
  {
    id: 5,
    title: "프로젝트명",
    category: "APP",
    description: "프로젝트 설명 간단하게—프로젝트의 설명이 간단하게—프로젝트 설명이 간단하게",
    image: "/placeholder.svg?height=200&width=300&text=Project+5",
  },
  {
    id: 6,
    title: "프로젝트명",
    category: "WEB",
    description: "프로젝트 설명 간단하게—프로젝트의 설명이 간단하게—프로젝트 설명이 간단하게",
    image: "/placeholder.svg?height=200&width=300&text=Project+6",
  },
  {
    id: 7,
    title: "프로젝트명",
    category: "WEB",
    description: "프로젝트 설명 간단하게—프로젝트의 설명이 간단하게—프로젝트 설명이 간단하게",
    image: "/placeholder.svg?height=200&width=300&text=Project+7",
  },
  {
    id: 8,
    title: "프로젝트명",
    category: "APP",
    description: "프로젝트 설명 간단하게—프로젝트의 설명이 간단하게—프로젝트 설명이 간단하게",
    image: "/placeholder.svg?height=200&width=300&text=Project+8",
  },
  {
    id: 9,
    title: "프로젝트명",
    category: "WEB",
    description: "프로젝트 설명 간단하게—프로젝트의 설명이 간단하게—프로젝트 설명이 간단하게",
    image: "/placeholder.svg?height=200&width=300&text=Project+9",
  },
  {
    id: 10,
    title: "프로젝트명",
    category: "WEB",
    description: "프로젝트 설명 간단하게—프로젝트의 설명이 간단하게—프로젝트 설명이 간단하게",
    image: "/placeholder.svg?height=200&width=300&text=Project+10",
  },
  {
    id: 11,
    title: "프로젝트명",
    category: "APP",
    description: "프로젝트 설명 간단하게—프로젝트의 설명이 간단하게—프로젝트 설명이 간단하게",
    image: "/placeholder.svg?height=200&width=300&text=Project+11",
  },
];

export default function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState("WEB");

  const filteredProjects =
    selectedCategory === "ALL" ? projects : projects.filter((project) => project.category === selectedCategory);

  return (
    <div className="min-h-screen text-white">
      {/* Projects Section */}
      <section className="px-5 lg:px-7 py-24 mx-auto max-w-6xl">
        <h1 className="text-3xl sm:text-4xl font-bold text-center mb-14 tracking-tight">프로젝트</h1>

        {/* Category Filter */}
        <div className="flex justify-center space-x-3 mb-14">
          <Badge
            className={`px-3 py-2 rounded-full text-sm cursor-pointer transition-all duration-300 ${selectedCategory === "ALL"
              ? "bg-blue-500 text-white"
              : "bg-gray-700/60 text-gray-300 border-gray-600 hover:bg-gray-600/60"
              }`}
            onClick={() => setSelectedCategory("ALL")}
          >
            전체
          </Badge>
          <Badge
            className={`px-3 py-2 rounded-full text-sm cursor-pointer transition-all duration-300 ${selectedCategory === "WEB"
              ? "bg-blue-500 text-white"
              : "bg-gray-700/60 text-gray-300 border-gray-600 hover:bg-gray-600/60"
              }`}
            onClick={() => setSelectedCategory("WEB")}
          >
            WEB
          </Badge>
          <Badge
            className={`px-3 py-2 rounded-full text-sm cursor-pointer transition-all duration-300 ${selectedCategory === "APP"
              ? "bg-blue-500 text-white"
              : "bg-gray-700/60 text-gray-300 border-gray-600 hover:bg-gray-600/60"
              }`}
            onClick={() => setSelectedCategory("APP")}
          >
            APP
          </Badge>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {filteredProjects.map((project) => (
            <Card
              key={project.id}
              className="relative overflow-hidden transition-all duration-300 hover:bg-gray-800/80 backdrop-blur-sm rounded-xl bg-transparent border border-transparent"
            >
              <CardContent className="p-0">
                <div className="aspect-[2/1] bg-gray-900/50">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    width={300}
                    height={200}
                    className="w-full h-full object-cover opacity-70"
                  />
                </div>
                <div className="p-5 bg-transparent">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="font-semibold text-lg text-white">{project.title}</h3>
                    <Badge
                      className={`text-xs px-2 py-1 rounded-full ${project.category === "WEB"
                        ? "bg-blue-500/20 text-blue-400 border-blue-400/30"
                        : "bg-green-500/20 text-green-400 border-green-400/30"
                        }`}
                    >
                      {project.category}
                    </Badge>
                  </div>
                  <p className="text-gray-400 text-sm leading-relaxed">{project.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}
