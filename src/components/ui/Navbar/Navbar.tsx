"use client";
import { titleFont } from "@/config/fonts";
import Image from "next/image";
import Link from "next/link";
import { FaAlignJustify } from "react-icons/fa6";
import { NavbarLink } from "./NavbarLink";
import { useState } from "react";
import clsx from "clsx";
export const Navbar = () => {
  const [open, setOpen] = useState<boolean>(false);
  const onClick = () => {
    setOpen(!open);
  };
  return (
    <div
      onClick={onClick}
      className={clsx(
        " duration-1000  transition-all shadow-black/30   shadow-md  flex z-20 justify-between px-2 lg:px-10 py-2 bg-neutral-100 items-center   fixed top-3 left-5 right-5",
        { "h-20 rounded-full": !open, "h-full rounded-none": open }
      )}
    >
      <Link href="">
        <Image
          className="h-full w-full"
          src="/imgs/logo-gradient.png"
          alt="heyscar romero logo"
          width={40}
          height={40}
        />
      </Link>
      <div className="flex-1 ">
        <h1
          className={`${titleFont.className}  text-primary-500 text-center  lg:text-left lg:px-5 `}
        >
          <span className="text-xl  font-medium">Heyscar Romero</span> <br />
          <span className={`text-sm font-medium text-secondary-950`}>
            Desarrollador Web
          </span>
        </h1>
      </div>
      <nav className=" hidden lg:flex lg:justify-center items-end self-stretch mr-8">
        <ul className="flex gap-5 ">
          <NavbarLink href="/#presentacion" title="Presentación" />
          <NavbarLink href="/#descubre" title="Descubre" />
          <NavbarLink href="/proyectos" title="Proyectos" />
          <NavbarLink href="/meeting" title="Agendar Una Cita" />
          <NavbarLink href="/contact" title="Contactame" />
        </ul>
      </nav>
      <button className="lg:hidden">
        <FaAlignJustify className="text-secondary-950" size={30} />
      </button>
    </div>
  );
};
