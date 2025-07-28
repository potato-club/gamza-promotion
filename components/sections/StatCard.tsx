"use client";

import { useEffect, useRef, useState } from "react";

interface StatCardProps {
  number: number;
  suffix: string;
  label: string;
}

export function StatCard({ number, suffix, label }: StatCardProps) {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 },
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const duration = 3000; // 1500에서 3000으로 변경 (3초)
    const steps = 100; // 더 많은 스텝으로 빠른 카운트 효과
    const stepDuration = duration / steps;

    let currentStep = 0;
    const timer = setInterval(() => {
      currentStep++;
      const progress = currentStep / steps;
      // 선형 증가로 변경 (더 일정한 속도)
      const currentCount = Math.floor(progress * number);

      setCount(currentCount);

      if (currentStep >= steps) {
        setCount(number);
        clearInterval(timer);
      }
    }, stepDuration);

    return () => clearInterval(timer);
  }, [isVisible, number]);

  return (
    <div
      ref={cardRef}
      className="relative text-center p-8 transition-all duration-300 hover:bg-gray-800/80 backdrop-blur-sm rounded-xl"
      style={{
        background: '#272C2F',
        border: '1px solid transparent',
        backgroundImage: `
          linear-gradient(#272C2F, #272C2F),
          linear-gradient(315deg, 
            rgba(248, 250, 251, 0.4) 0%, 
            rgba(128, 128, 128, 0.2) 50%,
            rgba(128, 128, 128, 0.1) 100%
          )
        `,
        backgroundOrigin: 'border-box',
        backgroundClip: 'padding-box, border-box'
      }}
    >
      <div className="text-gray-400 text-sm mb-2">{label}</div>
      <div className="text-4xl md:text-5xl font-bold text-white">
        {count}
        <span className="text-3xl md:text-4xl">{suffix}</span>
      </div>
    </div>
  );
}
