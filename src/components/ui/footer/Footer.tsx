import Image from "next/image";
import Link from "next/link";
import { FaGoogle, FaLinkedin, FaWhatsapp } from "react-icons/fa6";
import { SiGooglemaps } from "react-icons/si";
import { CopyrightText } from "../CopyrightText";
import { SocialButtons } from "../ContacButtons/SocialButtons";

export const Footer = () => {
  return (
    <footer className=" snap-end z-10 w-full text-gray-700 bg-gray-100 body-font">
      <div className="container flex flex-col md:justify-center flex-wrap px-5 py-24 mx-auto md:items-center lg:items-start md:flex-row md:flex-no-wrap">
        <div className="flex-shrink-0  w-64 md:w-auto mx-auto text-center md:mx-0 md:text-left">
          <a className="flex items-center  w-full justify-center font-medium title-font md:justify-start font-hr-title text-primary-500 text-2xl">
            <Image
              src="/imgs/logo-gradient.png"
              width={100}
              height={50}
              className=" "
              alt="heyscar romero logo"
            />
          </a>
          <p className="mt-2 text-sm text-gray-500 w-full text-center">
            Desarrollador Web
          </p>
          <div className="mt-4">
            <span className="inline-flex justify-center mt-2 sm:ml-auto sm:mt-0  w-full">
              <SocialButtons size={20} />
            </span>
          </div>
        </div>
        <div className="flex flex-wrap flex-grow mt-10 -mb-10 text-center md:pl-20 md:mt-0 md:text-left">
          <div className="w-full px-4 lg:w-1/4 md:w-1/2">
            <h2 className="mb-3 text-sm font-medium tracking-widest text-gray-900 uppercase title-font">
              Acerca de
            </h2>
            <nav className="mb-10 list-none">
              <li className="mt-3">
                <a className="text-gray-500 cursor-pointer hover:text-gray-900">
                  Tecnologías
                </a>
              </li>
              <li className="mt-3">
                <a className="text-gray-500 cursor-pointer hover:text-gray-900">
                  Proyectos
                </a>
              </li>
              <li className="mt-3">
                <a className="text-gray-500 cursor-pointer hover:text-gray-900">
                  Empresas
                </a>
              </li>
            </nav>
          </div>
          <div className="w-full px-4 lg:w-1/4 md:w-1/2">
            <h2 className="mb-3 text-sm font-medium tracking-widest text-gray-900 uppercase title-font">
              Direcciones
            </h2>
            <nav className="mb-10 list-none">
              <li className="mt-3 flex justify-center lg:block">
                <a
                  className="text-gray-500 cursor-pointer hover:text-gray-900 flex items-center "
                  href="https://maps.app.goo.gl/MB2qQUEoqoaa3ZPP6"
                  target="_blank"
                >
                  <SiGooglemaps className="mr-2" />
                  Buenos Aires Argentina
                </a>
              </li>

              <li className="mt-3 flex justify-center lg:block">
                <a
                  className="text-gray-500 cursor-pointer hover:text-gray-900 flex items-center"
                  href="https://maps.app.goo.gl/WTCqiw1W4ByUxqx57"
                  target="_blank"
                >
                  <SiGooglemaps className="mr-2" />
                  Lara Venezuela
                </a>
              </li>
            </nav>
          </div>
          <div className="w-full px-4 lg:w-1/4 md:w-1/2">
            <h2 className="mb-3 text-sm font-medium tracking-widest text-gray-900 uppercase title-font">
              Sitio
            </h2>
            <nav className="mb-10 list-none">
              <li className="mt-3">
                <Link
                  href="/privacidad"
                  className="text-gray-500 cursor-pointer hover:text-gray-900"
                >
                  Terminos y Privacidad
                </Link>
              </li>
              <li className="mt-3">
                <Link
                  href="/cv.pdf"
                  target="_blank"
                  className="text-gray-500 cursor-pointer hover:text-gray-900"
                >
                  Curriculum
                </Link>
              </li>
            </nav>
          </div>
          <div className="w-full px-4 lg:w-1/4 md:w-1/2">
            <h2 className="mb-3 text-sm font-medium tracking-widest text-gray-900 uppercase title-font">
              Contacto
            </h2>
            <nav className="mb-10 list-none">
              <li className="mt-3">
                <a
                  className="text-gray-500 cursor-pointer hover:text-gray-900"
                  href="tel:+5491140372927"
                  target="_blank"
                >
                  +54 11-4037-2927
                </a>
              </li>
              <li className="mt-3">
                <a
                  className="text-gray-500 cursor-pointer hover:text-gray-900"
                  target="blank"
                  href="mailto:heyscar.dev@gmail.com"
                >
                  Heyscar.dev@gmail.com
                </a>
              </li>
            </nav>
          </div>
        </div>
      </div>
      <div className="bg-primary-700">
        <div className="container px-5 py-4 mx-auto">
          <p className="text-sm text-neutral-200 capitalize xl:text-center">
            <CopyrightText />
          </p>
        </div>
      </div>
    </footer>
  );
};
