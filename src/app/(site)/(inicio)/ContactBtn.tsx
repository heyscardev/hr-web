"use client";

import { useRef } from "react";
import { GiArrowFlights } from "react-icons/gi";

export const ContactBtn = () => {
  const btn = useRef<HTMLButtonElement>(null);
  const onClick = () => {
    btn.current?.classList.add("active-go");
    setTimeout(() => {
      btn.current?.classList.remove("active-go");
    }, 700);
  };
  return (
    <button
      ref={btn}
      onClick={onClick}
      className="transition-all animate-wiggle hover:animate-none duration-500 bg-gradient-to-t group  from-primary-950 my-4 shadow-lg to-yellow-500 flex text-3xl p-4 rounded-lg font-hr-title font-medium text-white hover:shadow-2xl"
    >
      Unete Al Equipo
      <GiArrowFlights className="mx-2 -rotate-45 group-[.active-go]:translate-x-[100vw] transition-all duration-500 group-hover:text-orange-400 group-hover:drop-shadow-lg " />
    </button>
  );
};
