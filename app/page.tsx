"use client"

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, MessageSquare, Code, Settings, Star, Users, Trophy } from "lucide-react"
import Image from "next/image"

interface StatCardProps {
  number: number
  suffix: string
  label: string
}

function StatCard({ number, suffix, label }: StatCardProps) {
  const [count, setCount] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const cardRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (cardRef.current) {
      observer.observe(cardRef.current)
    }

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!isVisible) return

    const duration = 3000 // 1500에서 3000으로 변경 (3초)
    const steps = 100 // 더 많은 스텝으로 빠른 카운트 효과
    const stepDuration = duration / steps

    let currentStep = 0
    const timer = setInterval(() => {
      currentStep++
      const progress = currentStep / steps
      // 선형 증가로 변경 (더 일정한 속도)
      const currentCount = Math.floor(progress * number)

      setCount(currentCount)

      if (currentStep >= steps) {
        setCount(number)
        clearInterval(timer)
      }
    }, stepDuration)

    return () => clearInterval(timer)
  }, [isVisible, number])

  return (
    <Card
      ref={cardRef}
      className="bg-gray-800 border-gray-700 text-center p-6 hover:border-blue-500/50 transition-colors"
    >
      <CardContent className="p-0">
        <div className="text-3xl font-bold text-blue-400 mb-2">
          {count}
          {suffix}
        </div>
        <div className="text-gray-400 text-sm">{label}</div>
      </CardContent>
    </Card>
  )
}

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Header */}
      <header className="flex items-center justify-between p-6 max-w-7xl mx-auto">
        <div className="w-8 h-8 bg-white rounded-sm"></div>
        <div className="flex items-center space-x-8">
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-gray-300 hover:text-white transition-colors">
              홈
            </a>
            <a href="/projects" className="text-gray-300 hover:text-white transition-colors">
              프로젝트
            </a>
            <a href="#" className="text-gray-300 hover:text-white transition-colors">
              블로그
            </a>
          </nav>
          <Button className="bg-blue-600 hover:bg-blue-700">10기 지원하기</Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative px-6 py-20 max-w-7xl mx-auto overflow-hidden">
        {/* Main blue gradient background */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-l from-blue-600/30 via-blue-500/20 to-transparent rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute top-10 right-10 w-[600px] h-[600px] bg-gradient-to-bl from-blue-400/25 via-blue-600/15 to-transparent rounded-full blur-2xl animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>

        {/* Additional glow effects */}
        <div
          className="absolute top-20 right-20 w-[400px] h-[400px] bg-blue-500/20 rounded-full blur-3xl animate-bounce"
          style={{ animationDuration: "3s" }}
        ></div>
        <div
          className="absolute top-32 right-32 w-[200px] h-[200px] bg-blue-300/30 rounded-full blur-xl animate-ping"
          style={{ animationDuration: "4s" }}
        ></div>

        {/* Floating particles */}
        <div
          className="absolute top-16 right-16 w-2 h-2 bg-blue-400 rounded-full animate-bounce"
          style={{ animationDelay: "0.5s", animationDuration: "2s" }}
        ></div>
        <div
          className="absolute top-40 right-40 w-1 h-1 bg-blue-300 rounded-full animate-bounce"
          style={{ animationDelay: "1.5s", animationDuration: "3s" }}
        ></div>
        <div
          className="absolute top-60 right-24 w-1.5 h-1.5 bg-blue-500 rounded-full animate-bounce"
          style={{ animationDelay: "2s", animationDuration: "2.5s" }}
        ></div>

        <div className="relative z-10">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
            프론트의 시작
            <br />
            <span className="text-blue-400 animate-pulse">GAMZA</span>
          </h1>
          <p className="text-gray-400 text-lg mb-8 max-w-md animate-fade-in" style={{ animationDelay: "0.5s" }}>
            웹 개발의 기초부터 실무까지,
            <br />
            함께 성장하는 프론트엔드 개발 동아리입니다.
          </p>
          <Button
            className="bg-blue-600 hover:bg-blue-700 text-lg px-8 py-3 animate-fade-in hover:scale-105 transition-transform"
            style={{ animationDelay: "1s" }}
          >
            Contact
          </Button>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="px-6 py-16 max-w-7xl mx-auto">
        <h2 className="text-center text-2xl font-semibold mb-12 text-gray-300">숫자로 보는 감자</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <StatCard number={10} suffix="년" label="운영 기간" />
          <StatCard number={9} suffix="기" label="현재 기수" />
          <StatCard number={21} suffix="명" label="활동 인원" />
          <StatCard number={30} suffix="+" label="완성 프로젝트" />
        </div>
      </section>

      {/* What We Do Section */}
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

      {/* Activities Section */}
      <section className="px-6 py-16 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-12">활동 내용</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="bg-gray-800 border-gray-700 p-6">
            <CardContent className="p-0 text-center">
              <div className="w-16 h-16 bg-blue-600/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Calendar className="w-8 h-8 text-blue-400" />
              </div>
              <h3 className="font-semibold mb-2">정기 세미나 운영</h3>
              <p className="text-gray-400 text-sm">매주 진행되는 세미나를 통해 최신 기술 트렌드를 공유합니다</p>
            </CardContent>
          </Card>

          <Card className="bg-gray-800 border-gray-700 p-6">
            <CardContent className="p-0 text-center">
              <div className="w-16 h-16 bg-green-600/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                <MessageSquare className="w-8 h-8 text-green-400" />
              </div>
              <h3 className="font-semibold mb-2">개발 스터디 및 멘토링</h3>
              <p className="text-gray-400 text-sm">선후배 간의 멘토링을 통해 체계적인 학습을 지원합니다</p>
            </CardContent>
          </Card>

          <Card className="bg-gray-800 border-gray-700 p-6">
            <CardContent className="p-0 text-center">
              <div className="w-16 h-16 bg-purple-600/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Code className="w-8 h-8 text-purple-400" />
              </div>
              <h3 className="font-semibold mb-2">팀별 프로젝트</h3>
              <p className="text-gray-400 text-sm">실무와 동일한 환경에서 팀 프로젝트를 진행합니다</p>
            </CardContent>
          </Card>

          <Card className="bg-gray-800 border-gray-700 p-6">
            <CardContent className="p-0 text-center">
              <div className="w-16 h-16 bg-orange-600/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Settings className="w-8 h-8 text-orange-400" />
              </div>
              <h3 className="font-semibold mb-2">포트폴리오 제작 지원</h3>
              <p className="text-gray-400 text-sm">개인 포트폴리오 제작부터 취업 준비까지 전방위적으로 지원합니다</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Project Results Section */}
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
          <div className="flex space-x-4">
            <div className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center">
              <Users className="w-4 h-4" />
            </div>
            <div className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center">
              <MessageSquare className="w-4 h-4" />
            </div>
            <div className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center">
              <Trophy className="w-4 h-4" />
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
