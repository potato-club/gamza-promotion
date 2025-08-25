"use client";

import { Button } from "@/shared/ui/button";

export default function ResultNotFoundClient({
  message = "이름 혹은 전화번호를 확인해주세요.",
  onRetry,
}: {
  message?: string;
  onRetry?: () => void;
}) {
  return (
    <div className="flex flex-col items-center gap-4 text-white text-center">
      <div className="text-6xl mb-4">🔍</div>
      <div className="text-xl font-semibold">정보를 찾을 수 없습니다</div>
      <div className="text-gray-300 mb-4">{message}</div>
      {onRetry && (
        <Button onClick={onRetry} className="bg-[#007AFF] hover:bg-[#0056CC]">
          다시 시도
        </Button>
      )}
    </div>
  );
}
