"use client";

import Lenis from "@studio-freight/lenis";
import { useEffect, useRef } from "react";

export function LenisScroller() {
  const lenisRef = useRef<Lenis | null>(null);
  const rafRef = useRef<number | undefined>(undefined);

  useEffect(() => {
    // Lenis 인스턴스 생성 (더 빠른 스크롤 설정)
    lenisRef.current = new Lenis({
      duration: 0.7, // 더 빠른 스크롤
      easing: (t) => 1 - Math.pow(1 - t, 3), // 더 부드러운 easing
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1.2, // 더 빠른 휠 스크롤
      touchMultiplier: 2.0, // 더 빠른 터치 스크롤
      infinite: false,
      syncTouch: false,
      syncTouchLerp: 0.075,
      touchInertiaMultiplier: 30,
    });

    // 단순한 RAF - throttling 제거
    function raf(time: number) {
      if (lenisRef.current) {
        lenisRef.current.raf(time);
      }
      rafRef.current = requestAnimationFrame(raf);
    }

    rafRef.current = requestAnimationFrame(raf);

    // HTML에 lenis 클래스 추가
    document.documentElement.classList.add('lenis');

    // 클린업 함수
    return () => {
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
      if (lenisRef.current) {
        lenisRef.current.destroy();
      }
      document.documentElement.classList.remove('lenis');
    };
  }, []);

  return null;
}