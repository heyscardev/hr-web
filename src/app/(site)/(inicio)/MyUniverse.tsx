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
      id="my-universe"
      ref={containerRef}
      className=" pt-32 flex flex-col items-center min-h-screen pb-2"
    >
      <SectionTitle
        className="text-center mb-10"
        title="Mi Universo de Tecnologías"
        subtile="Navegá por todas mis skills"
      />
      <LanguagesPlanet onNodeClick={() => toView()} />
    </div>
  );
};
