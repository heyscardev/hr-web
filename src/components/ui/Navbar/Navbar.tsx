"use client";
import { titleFont } from "@/config/fonts";
import Image from "next/image";
import Link from "next/link";
import { FaAlignJustify, FaX } from "react-icons/fa6";
import { NavbarLink } from "./NavbarLink";
import { useState } from "react";
import clsx from "clsx";
interface Route {
  href: string;
  title: string;
  scroll?: boolean;
}
const routes: Route[] = [
  { href: "/", title: "Inicio" },
  { href: "/#descubre", title: "Quien Soy" },
  { href: "/#skills", title: "Yo desarrollo" },
  { href: "/#tecnologias", title: "Tecnologías" },
  { href: "/mi-universo", title: "Mi Universo"},
  { href: "/contacto", title: "Contactame", scroll: true },
];
export const Navbar = () => {
  const [open, setOpen] = useState<boolean>(false);
  const onClick = () => {
    setOpen(!open);
  };
  return (
    <div
      // onClick={onClick}
      className={clsx(
        " duration-100 lg:rounded-full transition-all  shadow-black/30 py-2  shadow-md flex flex-col overflow-hidden   px-2 sm:px-5 lg:px-6 xl:px-10  bg-neutral-100 items-center   ",
        {
          " sm:rounded-full  sm:top-3 sm:left-5 sm:right-5": !open,
          " rounded-none   ": !open,
          "fixed top-0 left-0 z-20 right-0  lg:top-3 lg:left-5 lg:right-5":
            true,
        }
      )}
    >
      <div
        className={clsx(
          "flex  justify-between items-center  w-full lg:h-full ",
          {
            "h-full": !open,
          }
        )}
      >
        <Link href="/">
          <Image
         
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
            {routes.map((route) => (
              <NavbarLink {...route} key={route.href} />
            ))}
          </ul>
        </nav>
        <button
          className="lg:hidden hover:bg-primary-300 p-2 rounded-xl group"
          onClick={onClick}
        >
          {!open ? (
            <FaAlignJustify
              className="text-neutral-900 group-btn-top:bg-red-500 group-hover:text-white transition-all  duration-1000 "
              size={30}
            />
          ) : (
            <FaX
              className="text-neutral-800 group-btn-top:bg-red-500 group-hover:text-white transition-all  duration-1000 "
              size={30}
            />
          )}
        </button>
      </div>

      <nav
        className={clsx(
          "lg:hidden  transition-all duration-1000 flex overflow-hidden lg:justify-center  items-center self-stretch   ",
          {
            "h-[280px] my-14": open,
            "h-[0px] ": !open,
          }
        )}
      >
        <ul className="flex flex-col w-full gap-5 h-full text-center justify-evenly items-center  ">
          {routes.map((route) => (
            <NavbarLink
              {...route}
              key={route.href}
              onClick={() => setOpen(false)}
            />
          ))}
        </ul>
      </nav>
    </div>
  );
};
