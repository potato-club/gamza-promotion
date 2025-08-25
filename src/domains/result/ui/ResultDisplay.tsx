import PassBackground from "@/app/result/PassBackground";
import type { ResultState, UserData } from "../model/types";
import ErrorResult from "./ErrorResult";
import ResultFail from "./ResultFail";
import ResultPass from "./ResultPass";

interface ResultDisplayProps {
  state: ResultState;
  userData: UserData | null;
  error: string | null;
  onRetry: () => void;
  onReset: () => void;
}

export default function ResultDisplay({
  state,
  userData,
  error,
  onRetry,
  onReset,
}: ResultDisplayProps) {
  const userName = userData?.name;

  switch (state) {
    case "pass":
      return (
        <div className="relative flex h-screen w-screen items-center justify-center overflow-hidden">
          <PassBackground />
          <div className="relative z-10 flex items-center justify-center">
            <ResultPass name={userName} />
          </div>
        </div>
      );

    case "fail":
      return (
        <div className="relative flex h-screen w-screen items-center justify-center overflow-hidden bg-[#0F1112]">
          <div className="relative z-10 flex items-center justify-center">
            <ResultFail name={userName} />
          </div>
        </div>
      );

    case "notfound":
      return (
        <ErrorResult
          title="정보를 찾을 수 없습니다"
          message={error || "이름 혹은 전화번호를 확인해주세요."}
          icon="🔍"
          onRetry={onReset}
          retryLabel="다시 조회하기"
        />
      );

    case "error":
      return (
        <ErrorResult
          title="오류가 발생했습니다"
          message={error || "잠시 후 다시 시도해주세요."}
          icon="⚠️"
          onRetry={onRetry}
          retryLabel="재시도"
        />
      );

    default:
      return null;
  }
}
