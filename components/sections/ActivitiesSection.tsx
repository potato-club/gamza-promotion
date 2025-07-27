import { Card, CardContent } from "@/components/ui/card";
import { Calendar, Code, MessageSquare, Settings } from "lucide-react";

export function ActivitiesSection() {
  return (
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
  );
}
