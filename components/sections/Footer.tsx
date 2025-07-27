import { MessageSquare, Trophy, Users } from "lucide-react";

export function Footer() {
  return (
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
  );
}
