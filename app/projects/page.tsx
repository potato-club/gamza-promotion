"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import { useState } from "react"

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
]

export default function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState("WEB")

  const filteredProjects =
    selectedCategory === "ALL" ? projects : projects.filter((project) => project.category === selectedCategory)

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Header */}
      <header className="flex items-center justify-between p-6 max-w-7xl mx-auto">
        <div className="w-8 h-8 bg-white rounded-sm"></div>
        <div className="flex items-center space-x-8">
          <nav className="hidden md:flex items-center space-x-8">
            <a href="/" className="text-gray-300 hover:text-white transition-colors">
              홈
            </a>
            <a href="/projects" className="text-white font-medium">
              프로젝트
            </a>
            <a href="#" className="text-gray-300 hover:text-white transition-colors">
              블로그
            </a>
          </nav>
          <Button className="bg-blue-600 hover:bg-blue-700">10기 지원하기</Button>
        </div>
      </header>

      {/* Projects Section */}
      <section className="px-6 py-16 max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-12">프로젝트</h1>

        {/* Category Filter */}
        <div className="flex justify-center space-x-4 mb-12">
          <Button
            variant={selectedCategory === "WEB" ? "default" : "outline"}
            onClick={() => setSelectedCategory("WEB")}
            className={
              selectedCategory === "WEB"
                ? "bg-blue-600 hover:bg-blue-700"
                : "border-gray-600 text-gray-300 hover:text-white hover:border-gray-400"
            }
          >
            WEB
          </Button>
          <Button
            variant={selectedCategory === "APP" ? "default" : "outline"}
            onClick={() => setSelectedCategory("APP")}
            className={
              selectedCategory === "APP"
                ? "bg-blue-600 hover:bg-blue-700"
                : "border-gray-600 text-gray-300 hover:text-white hover:border-gray-400"
            }
          >
            APP
          </Button>
          <Button
            variant={selectedCategory === "ALL" ? "default" : "outline"}
            onClick={() => setSelectedCategory("ALL")}
            className={
              selectedCategory === "ALL"
                ? "bg-blue-600 hover:bg-blue-700"
                : "border-gray-600 text-gray-300 hover:text-white hover:border-gray-400"
            }
          >
            ALL
          </Button>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <Card
              key={project.id}
              className="bg-gray-800 border-gray-700 overflow-hidden hover:border-gray-600 transition-colors"
            >
              <CardContent className="p-0">
                <div className="aspect-[4/3] bg-gray-700">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    width={300}
                    height={200}
                    className="w-full h-full object-cover opacity-50"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="font-semibold text-lg">{project.title}</h3>
                    <Badge
                      variant="secondary"
                      className={`text-xs ${
                        project.category === "WEB" ? "bg-blue-600/20 text-blue-400" : "bg-green-600/20 text-green-400"
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

      {/* Footer */}
      <footer className="border-t border-gray-800 px-6 py-12 max-w-7xl mx-auto">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-2xl font-bold mb-2">GAMZA</h3>
            <p className="text-gray-400 text-sm mb-4">프론트엔드 개발 동아리</p>
            <div className="flex items-center space-x-4 text-gray-400 text-sm">
              <span>© 2024 GAMZA</span>
              <span>•</span>
              <a href="#" className="hover:text-white transition-colors">
                개인정보처리방침
              </a>
              <span>•</span>
              <a href="#" className="hover:text-white transition-colors">
                이용약관
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
