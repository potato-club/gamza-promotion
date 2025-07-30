"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface ApplyButtonProps {
  className?: string;
  size?: "sm" | "md" | "lg";
}

export function ApplyButton({ className = "", size = "lg" }: ApplyButtonProps) {
  const handleApplyClick = () => {
    alert("지금은 모집 중이 아닙니다!");
  };

  const sizeClasses = {
    sm: "px-2 py-1.5 text-xs",
    md: "px-4 py-2 text-sm",
    lg: "px-4 py-3 text-base"
  };

  const iconSizes = {
    sm: "h-3 w-3",
    md: "h-4 w-4",
    lg: "h-5 w-5"
  };

  return (
    <>
      <Button
        onClick={handleApplyClick}
        className={`bg-blue-500 hover:bg-blue-600 text-white rounded-full font-medium ${sizeClasses[size]} ${className}`}
      >
        10기 알림받기
        <ArrowRight className={`${iconSizes[size]}`} />
      </Button>
      {/* <Link href="/">
            <Button className="bg-blue-500 hover:bg-blue-600 text-white rounded-full px-6 py-2 text-sm font-medium">
              10기 지원하기
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link> */}
    </>
  );
}
