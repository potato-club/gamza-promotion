"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function ResultNotFoundClient({
  message = "이름 혹은 전화번호를 확인해주세요.",
}: {
  message?: string;
}) {
  const router = useRouter();

  useEffect(() => {
    // show alert then replace the URL to clear query params
    if (typeof window !== "undefined") {
      alert(message);
      router.replace("/result");
    }
  }, [message, router]);  

  return null;
}
