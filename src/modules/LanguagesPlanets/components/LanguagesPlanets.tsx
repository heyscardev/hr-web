"use client";
import { Loader } from "@/components";
import dynamic from "next/dynamic";

const Graph = dynamic(
  () => {
    return import("./Graph");
  },
  { 
loading: () =>  <div className="flex items-center justify-center flex-col  w-full h-full flex-1">
  <Loader />
    <p className="text-white mt-3 font-hr-title text-lg">El BigBang de Tecnologías esta por iniciar<span className="text-primary-500">...</span></p>
</div>, ssr: false },
);
export const LanguagesPlanet = () => {
  return (
    <div className=" bg-white/10 justify-center flex px-10 min-h-[500px] h-[65vh] w-full  shadow-[inset_1px_1px_3px_-1px_rgba(0,0,0,0.5),inset_1px_-1px_3px_-1px_rgba(0,0,0,0.5)] ">

        <Graph heightPercent={65} />
  
    </div>
  );
};
