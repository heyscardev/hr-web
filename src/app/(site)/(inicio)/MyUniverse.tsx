"use client";
import { useRef } from "react";
import { SectionTitle } from "@/components";
import { useScrollToView } from "@/hooks";
import { LanguagesPlanet } from "@/modules/LanguagesPlanets";

interface Props {}
export const MyUniverse = ({}: Props) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { toView } = useScrollToView(containerRef);
  return (
    <div
      ref={containerRef}
      className="hr-gradient-background-reverse pt-32 flex flex-col items-center min-h-screen pb-2"
      
    >
      <SectionTitle
        className="text-center mb-10"
        title="Mi Universo de Tecnologías"
        subtile="Explora Nuestro Universo de Desarrollo Digital"
      />
      <LanguagesPlanet onNodeClick={() => toView()} />
    </div>
  );
};
