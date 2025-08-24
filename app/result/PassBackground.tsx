"use client";

import Confetti from "react-confetti-boom";

export default function PassBackground() {
  return (
    <div className="absolute inset-0 z-0">
      {/* <Prism
        animationType="rotate"
        scale={3.6}
        height={3.5}
        baseWidth={3.5}
        noise={0}
        glow={1}
        hueShift={0}
        colorFrequency={1}
      /> */}
      <Confetti mode="fall" particleCount={50} fadeOutHeight={1} />
    </div>
  );
}
