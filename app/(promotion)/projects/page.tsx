// 👈 "use client"를 제거하여 서버 컴포넌트로 만듭니다.
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { getProjectList } from "@/services/projectService";
import { ProjectListResponse } from "@/types/project";
import Image from "next/image";
import Link from "next/link";
// 👈 useState, useEffect 훅을 사용하지 않으므로 임포트에서 제거합니다.

// 👈 컴포넌트 함수를 'async'로 선언합니다.
export default async function ProjectsPage() {
  // 👈 서버에서 직접 API 함수를 호출하고 'await'로 데이터를 기다립니다.
  const response = await getProjectList({
    page: 0,
    size: 10,
  });

  // console.log("API Response:", response);

  const projects: ProjectListResponse[] = response.data;

  // console.log("Projects:", projects);

  return (
    <div className="min-h-screen text-white">
      <section className="px-5 lg:px-7 py-24 mx-auto max-w-6xl">
        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 animate-fade-in">
          {projects.map((project: ProjectListResponse) => {
            const ProjectCard = (
              <Card
                key={project.id}
                className={`relative overflow-hidden transition-all duration-300 rounded-xl bg-transparent border-transparent ${
                  project.url
                    ? "hover:bg-gray-800/80 backdrop-blur-sm border cursor-pointer"
                    : ""
                }`}
              >
                <CardContent className="p-0">
                  <div
                    className={`aspect-[398/233] rounded-xl ${
                      project.url ? "bg-gray-900/50" : ""
                    }`}
                  >
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
                      <h3 className="font-semibold text-lg text-white">
                        {project.title}
                      </h3>
                      <Badge
                        className="text-[16px] rounded-full bg-transparent border-none font-normal p-0"
                        style={{ color: "#ABB5BD" }}
                      >
                        {project.category}
                      </Badge>
                    </div>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {project.snippet}
                    </p>
                  </div>
                </CardContent>
              </Card>
            );

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

        {/* Empty State */}
        {projects.length === 0 && (
          <div className="text-center text-gray-400 py-16">
            <p>표시할 프로젝트가 없습니다.</p>
          </div>
        )}
      </section>
    </div>
  );
}
