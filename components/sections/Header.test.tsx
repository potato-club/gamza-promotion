/**
 * Test component for Header responsive layout
 * This file tests the 768px breakpoint behavior and mobile optimization
 */

"use client";

import { useIsMobile } from "@/hooks/use-mobile";
import { useEffect, useState } from "react";
import { Header } from "./Header";

export function HeaderTest() {
  const isMobile = useIsMobile();
  const [windowWidth, setWindowWidth] = useState<number>(0);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    // Set initial width
    setWindowWidth(window.innerWidth);

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Test Information Panel */}
      <div className="fixed top-0 left-0 z-[100] bg-black/80 text-white p-4 text-xs">
        <div>Window Width: {windowWidth}px</div>
        <div>Is Mobile: {isMobile ? "Yes" : "No"}</div>
        <div>
          Breakpoint:{" "}
          {windowWidth < 768 ? "Mobile (<768px)" : "Desktop (≥768px)"}
        </div>
      </div>

      {/* Header Component */}
      <Header />

      {/* Test Content */}
      <div className="pt-20 px-6">
        <h1 className="text-white text-2xl mb-4">Responsive Layout Test</h1>

        <div className="space-y-4 text-white">
          <div className="p-4 bg-gray-800 rounded">
            <h2 className="font-bold mb-2">Test Instructions:</h2>
            <ul className="space-y-1 text-sm">
              <li>1. Resize window to test 768px breakpoint</li>
              <li>
                2. Check mobile navigation appears on left when width &lt; 768px
              </li>
              <li>
                3. Check desktop navigation appears on right when width ≥ 768px
              </li>
              <li>
                4. Test touch targets on mobile (minimum 44px recommended)
              </li>
              <li>5. Verify navigation links work correctly</li>
            </ul>
          </div>

          <div className="p-4 bg-gray-800 rounded">
            <h2 className="font-bold mb-2">Current Layout Analysis:</h2>
            <div className="text-sm space-y-1">
              <div>
                Mobile Navigation:{" "}
                {windowWidth < 768 ? "Visible (Left)" : "Hidden"}
              </div>
              <div>
                Desktop Navigation:{" "}
                {windowWidth >= 768 ? "Visible (Right)" : "Hidden"}
              </div>
              <div>Apply Button: Always Visible (Right)</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
