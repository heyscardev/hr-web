"use client";
import clsx from "clsx";
import Link from "next/link";
import { useRef } from "react";
import { GiArrowFlights } from "react-icons/gi";

interface Props {
  text: string;
  href: string;
  className?: string;
}
export const MoveButton = ({ text, href, className }: Props) => {
  const btn = useRef<HTMLButtonElement>(null);
  const onMouseDown = () => {
    btn.current?.classList.add("active-go");
  };
  const onMouseUp = () => {
    setTimeout(() => {
      btn.current?.classList.remove("active-go");
    }, 700);
  };
  const onMouseLeave = () => {
    btn.current?.classList.remove("active-go");
  };
  return (
    <Link href={href}>
      <button
        ref={btn}
        onMouseDown={onMouseDown}
        onMouseUp={onMouseUp}
        onMouseLeave={onMouseLeave}
        className={clsx(
          `transition-all animate-wiggle hover:animate-none duration-500 
        bg-gradient-to-t group  from-primary-950 my-4 shadow-lg to-yellow-500 flex 
         p-4 rounded-lg font-hr-title font-medium text-white hover:shadow-2xl`,
          {
            "text-3xl": !className,
          },
          [className]
        )}
      >
        {text}
        <GiArrowFlights className="mx-2 -rotate-45 group-[.active-go]:translate-x-[100vw] transition-all duration-500 group-hover:text-orange-400 group-hover:drop-shadow-lg " />
      </button>
    </Link>
  );
};
