"use client";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { fetchProjects } from "@/lib/api/projects";
import { Project } from "@/types/project";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState("ALL");
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadProjects = async () => {
      try {
        setLoading(true);
        setError(null);

        const response = await fetchProjects({
          page: 0,
          size: 10, // 충분한 수의 프로젝트를 가져옴
        });

        if (response.status === 'error') {
          setError('프로젝트 데이터를 불러오는데 실패했습니다.');
          setProjects([]);
        } else {
          setProjects(response.data);
        }
      } catch (err) {
        console.error('프로젝트 데이터 로딩 중 오류:', err);
        setError('프로젝트 데이터를 불러오는데 실패했습니다.');
        setProjects([]);
      } finally {
        setLoading(false);
      }
    };

    loadProjects();
  }, []);

  const filteredProjects =
    selectedCategory === "ALL" ? projects : projects.filter((project: Project) => project.category === selectedCategory);

  return (
    <div className="min-h-screen text-white" >
      <section className="px-5 lg:px-7 py-24 mx-auto max-w-6xl">
        <h1 className="text-3xl sm:text-4xl font-bold text-center mt-10 mb-44 tracking-tight">프로젝트</h1>

        {/* Loading State */}
        {loading && (
          <div className="text-center text-gray-400 mb-8">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-white mx-auto mb-4"></div>
            프로젝트를 불러오는 중...
          </div>
        )}

        {/* Error State */}
        {error && (
          <div className="text-center text-red-400 mb-8 p-4 bg-red-900/20 rounded-lg">
            {error}
          </div>
        )}

        {/* Category Filter */}
        {/* <div className="flex justify-center space-x-3 mb-14">
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
        </div> */}

        {/* Projects Grid */}
        {!loading && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 animate-fade-in" style={{ animationDuration: "2s" }}>
            {filteredProjects.map((project: Project) => {
              const ProjectCard = (
                <Card
                  key={project.id}
                  className={`relative overflow-hidden transition-all duration-300 rounded-xl bg-transparent border-transparent ${project.url ? 'hover:bg-gray-800/80 backdrop-blur-sm border cursor-pointer' : ''}`}
                >
                  <CardContent className="p-0">
                    <div className={`aspect-[398/233] rounded-xl ${project.url ? 'bg-gray-900/50' : ''}`}>
                      <Image
                        src={project.thumbnailUrl || "/placeholder.svg"}
                        alt={project.title}
                        width={300}
                        height={200}
                        className="w-full h-full object-cover rounded-xl"
                      />
                    </div>
                    <div className="p-3 bg-transparent">
                      <div className="flex items-center justify-between mb-3">
                        <h3 className="font-semibold text-lg text-white">{project.title}</h3>
                        <Badge className="text-[16px] rounded-full bg-transparent border-none font-normal p-0" style={{ color: '#ABB5BD' }}>
                          {project.category}
                        </Badge>
                      </div>
                      <p className="text-gray-400 text-sm leading-relaxed">{project.snippet}</p>
                    </div>
                  </CardContent>
                </Card>
              );

              // URL이 있으면 Link로 감싸고, 없으면 그냥 Card 반환
              return project.url ? (
                <Link
                  key={project.id}
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  {ProjectCard}
                </Link>
              ) : (
                ProjectCard
              );
            })}
          </div>
        )}

        {/* Empty State */}
        {!loading && filteredProjects.length === 0 && (
          <div className="text-center text-gray-400 py-16">
            <p>표시할 프로젝트가 없습니다.</p>
          </div>
        )}
      </section>
    </div>
  );
}
