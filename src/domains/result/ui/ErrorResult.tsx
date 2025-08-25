import { Button } from "@/shared";

interface ErrorResultProps {
  title: string;
  message: string;
  icon: string;
  onRetry: () => void;
  retryLabel?: string;
}

export default function ErrorResult({
  title,
  message,
  icon,
  onRetry,
  retryLabel = "다시 시도",
}: ErrorResultProps) {
  return (
    <div className="relative flex h-screen w-screen items-center justify-center overflow-hidden bg-[#0F1112]">
      <div className="relative z-10 flex items-center justify-center">
        <div className="w-[350px] space-y-6 bg-white px-6 py-12 rounded-2xl shadow-md text-black text-center">
          <div className="text-6xl mb-4">{icon}</div>
          <div className="text-xl font-semibold text-black">{title}</div>
          <div className="text-gray-500 mb-4">{message}</div>
          <Button onClick={onRetry} className="w-full bg-[#007AFF] rounded-2xl">
            {retryLabel}
          </Button>
        </div>
      </div>
    </div>
  );
}
