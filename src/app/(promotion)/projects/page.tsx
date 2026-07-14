// 👈 "use client"를 제거하여 서버 컴포넌트로 만듭니다.
import { getProjectList, ProjectListResponse } from "@/domains/promotion";
import { Badge } from "@/shared/ui/badge";
import { Card, CardContent } from "@/shared/ui/card";
import Image from "next/image";
import Link from "next/link";
// 👈 useState, useEffect 훅을 사용하지 않으므로 임포트에서 제거합니다.

// 👈 컴포넌트 함수를 'async'로 선언합니다.
export default async function ProjectsPage() {
  // 실패 시 null로 폴백한다. 프리렌더가 throw하면 빌드 전체가 실패하므로
  // 백엔드가 죽어도 배포는 통과시킨다. fetch의 revalidate(60초)가 살아 있어
  // 백엔드가 복구되면 재배포 없이 목록이 다시 채워진다.
  // null(요청 실패)과 빈 배열(프로젝트가 실제로 없음)은 다른 화면으로 구분한다.
  const projects: ProjectListResponse[] | null = await getProjectList({
    page: 0,
    size: 10,
  })
    .then(response => response.data)
    .catch(error => {
      console.error("프로젝트 목록 조회 실패:", error);
      return null;
    });

  if (!projects) {
    return (
      <div className="min-h-screen text-white">
        <section className="px-5 lg:px-7 py-24 mx-auto max-w-6xl">
          <div className="text-center text-gray-400 py-16">
            <p className="mb-2 text-white">요청이 실패했습니다.</p>
            <p className="text-sm">
              프로젝트를 불러오지 못했습니다. 잠시 후 다시 시도해 주세요.
            </p>
          </div>
        </section>
      </div>
    );
  }

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
