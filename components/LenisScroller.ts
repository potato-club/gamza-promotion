"use client"; // 이 파일만 클라이언트 컴포넌트로 지정

import Lenis from "@studio-freight/lenis";
import { useEffect } from "react";

export function LenisScroller() {
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return null; // 이 컴포넌트는 시각적으로 아무것도 렌더링하지 않습니다.
}