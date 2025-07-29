"use client";

import { useEffect, useRef, useState } from "react";
import SlotCounter from "react-slot-counter";

interface StatCardProps {
  number: number;
  suffix: string;
  label: string;
}

export function StatCard({ number, suffix, label }: StatCardProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [shouldAnimate, setShouldAnimate] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !shouldAnimate) {
          setIsVisible(true);
          // 약간의 딜레이 후 애니메이션 시작
          setTimeout(() => {
            setShouldAnimate(true);
          }, 200);
        }
      },
      { threshold: 0.1 },
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, [shouldAnimate]);

  return (
    <div
      ref={cardRef}
      className="relative text-center px-4 py-10 transition-all duration-300 hover:bg-gray-800/80 backdrop-blur-sm rounded-xl"
      style={{
        background: '#272C2F',
        border: '1px solid transparent',
        backgroundImage: `
          linear-gradient(#272C2F, #272C2F),
          linear-gradient(315deg, 
            rgba(128, 128, 128, 0.6) 0%, 
            rgba(128, 128, 128, 0.7) 50%,
            rgba(248, 250, 251, 0.7) 100%
          )
        `,
        backgroundOrigin: 'border-box',
        backgroundClip: 'padding-box, border-box'
      }}
    >
      <div className="text-gray-400 text-xs mb-1">{label}</div>
      <div className="text-3xl md:text-4xl font-bold text-white leading-none">
        {shouldAnimate ? (
          <>
            <SlotCounter
              value={number}
              duration={2}
              animateUnchanged={true}
              useMonospaceWidth={true}
              charClassName="inline-block align-baseline"
            />
            <span className="align-baseline">{suffix}</span>
          </>
        ) : (
          <>0{suffix}</>
        )}
      </div>
    </div>
  );
}
