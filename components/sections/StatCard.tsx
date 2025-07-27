"use client";

import { Card, CardContent } from "@/components/ui/card";
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
    <Card
      ref={cardRef}
      className="bg-gray-800 border-gray-700 text-center p-6 hover:border-blue-500/50 transition-colors"
    >
      <CardContent className="p-0">
        <div className="text-3xl font-bold text-blue-400 mb-2">
          {count}
          {suffix}
        </div>
        <div className="text-gray-400 text-sm">{label}</div>
      </CardContent>
    </Card>
  );
}
