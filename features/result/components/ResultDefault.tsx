import Image from "next/image";
import ResultFormClient from "./ResultFormClient";

export default function ResultDefault() {
  return (
    <div className="relative w-full min-h-screen bg-[#0F1112]">
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="flex flex-col items-center">
          <Image
            src="/resultLogo.svg"
            alt="결과 페이지 로고"
            width={260}
            height={100}
            className="object-cover rounded-lg mb-8"
          />

          <ResultFormClient />
        </div>
      </div>
    </div>
  );
}
