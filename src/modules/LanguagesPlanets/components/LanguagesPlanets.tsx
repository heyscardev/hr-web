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
    <div className=" bg-white/20 justify-center overflow-hidden flex px-10 min-h-[500px] h-[65vh] w-full md:w-11/12 md:rounded-xl xl:w-11/12 max-w-7xl  shadow-[inset_0px_2px_4px_-1px_rgba(0,0,0,0.5),inset_0px_-1px_3px_-1px_rgba(0,0,0,0.5)] ">

        <Graph heightPercent={65} />
  
    </div>
  );
};
