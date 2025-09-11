"use client";

import { Badge } from "@/shared/ui/badge";
import { Card, CardContent } from "@/shared/ui/card";
import Image from "next/image";
import { useState } from "react";
import {
  WHAT_WE_DO_CONSTANTS,
  type RoleType,
} from "../../constants/whatWeDoSection";

export function WhatWeDoSection() {
  const [selectedRole, setSelectedRole] = useState<RoleType>("Frontend");
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handleRoleChange = (newRole: RoleType) => {
    if (newRole === selectedRole) return;

    setIsTransitioning(true);
    setTimeout(() => {
      setSelectedRole(newRole);
      setTimeout(() => {
        setIsTransitioning(false);
      }, WHAT_WE_DO_CONSTANTS.TRANSITION_DELAY);
    }, WHAT_WE_DO_CONSTANTS.ANIMATION_DELAY);
  };
  return (
    <section className="py-32 sm:py-56 relative overflow-hidden">
      {/* Floating decorative icons */}
      {/* <div className="absolute top-80 left-72 w-20 h-20 animate-float hidden md:block">
        <Image
          src="/icons/WhatWedoIcon1.png"
          alt="Decorative icon 1"
          width={200}
          height={200}
        />
      </div>
      <div className="absolute top-80 right-2 w-64 h-14  animate-float-delayed hidden md:block">
        <Image
          src="/icons/WhatWedoIcon2.svg"
          alt="Decorative icon 2"
          width={160}
          height={200}
        />
      </div>
      <div className="absolute bottom-80 left-28 w-64 h-12 animate-float-slow hidden md:block">
        <Image
          src="/icons/WhatWedoIcon3.svg"
          alt="Decorative icon 3"
          width={180}
          height={200}
        />
      </div>
      <div className="absolute bottom-36 right-52 w-24 h-24 animate-float hidden md:block">
        <Image
          src="/icons/WhatWedoIcon4.png"
          alt="Decorative icon 4"
          width={200}
          height={200}
        />
      </div> */}

      <div className="mx-auto max-w-6xl px-5 lg:px-7">
        <h2 className="text-center text-3xl font-bold tracking-tight text-white sm:text-4xl mb-20">
          {WHAT_WE_DO_CONSTANTS.SECTION_TITLE}
        </h2>
        <div className="flex justify-center flex-wrap gap-3 mb-10">
          <Badge
            className={`px-4 py-2 rounded-full text-sm cursor-pointer transition-all duration-300 transform hover:scale-105 ${
              selectedRole === "Frontend"
                ? WHAT_WE_DO_CONSTANTS.ROLE_STYLES.Frontend.active
                : WHAT_WE_DO_CONSTANTS.ROLE_STYLES.Frontend.inactive
            } ${isTransitioning ? "pointer-events-none" : ""}`}
            onClick={() => handleRoleChange("Frontend")}
          >
            Frontend
          </Badge>
          <Badge
            className={`px-4 py-2 rounded-full text-sm cursor-pointer transition-all duration-300 transform hover:scale-105 ${
              selectedRole === "Backend"
                ? WHAT_WE_DO_CONSTANTS.ROLE_STYLES.Backend.active
                : WHAT_WE_DO_CONSTANTS.ROLE_STYLES.Backend.inactive
            } ${isTransitioning ? "pointer-events-none" : ""}`}
            onClick={() => handleRoleChange("Backend")}
          >
            Backend
          </Badge>
          <Badge
            className={`px-4 py-2 rounded-full text-sm cursor-pointer transition-all duration-300 transform hover:scale-105 ${
              selectedRole === "Designer"
                ? WHAT_WE_DO_CONSTANTS.ROLE_STYLES.Designer.active
                : WHAT_WE_DO_CONSTANTS.ROLE_STYLES.Designer.inactive
            } ${isTransitioning ? "pointer-events-none" : ""}`}
            onClick={() => handleRoleChange("Designer")}
          >
            Designer
          </Badge>
        </div>

        <p
          className={`text-gray-300 text-center max-w-3xl mx-auto whitespace-pre-wrap transition-all duration-500 ease-out ${
            isTransitioning
              ? "opacity-0 transform translate-y-2"
              : "opacity-100 transform translate-y-0"
          }`}
        >
          {WHAT_WE_DO_CONSTANTS.ROLE_CONTENT[selectedRole].description}
        </p>

        <Card className="relative overflow-hidden w-full mx-auto rounded-xl bg-transparent border-none">
          <CardContent className="p-0">
            <div className="flex items-center justify-center relative min-h-[400px] sm:min-h-[500px] lg:min-h-[650px]">
              {/* 기존 이미지를 사용 */}
              <div
                className={`transition-all duration-500 ease-out ${
                  isTransitioning
                    ? "opacity-0 transform scale-98"
                    : "opacity-100 transform scale-100"
                }`}
              >
                <Image
                  src={WHAT_WE_DO_CONSTANTS.ROLE_CONTENT[selectedRole].image}
                  alt={`${selectedRole} showcase`}
                  width={WHAT_WE_DO_CONSTANTS.IMAGE_DIMENSIONS.width}
                  height={WHAT_WE_DO_CONSTANTS.IMAGE_DIMENSIONS.height}
                  className="rounded-lg"
                />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
