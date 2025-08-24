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
    // show alert
    if (typeof window !== "undefined") {
      alert(message);
      // Removed router.replace("/result"); to prevent infinite loop
    }
  }, [message]); // Removed router from dependency array as it's not used for navigation anymore

  return null;
}
