import { SectionTitle } from "@/components";
import { PlanetSkills } from "@/components/Planet/PlanetSkills";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";

export const Tecnologies = () => {
  return (
    <div id="tecnologias"  className=" xl:min-h-screen  text-center justify-center flex flex-col snap-start pt-32 bg-gradient-to-tr  from-orange-200 -z-10 via-primary-100  to-orange-300">
      <SectionTitle title="Mi Mundo Digital"  />
      <div
        className={clsx([
          "  grid mx-10  pb-10  mt-20 ",
          "grid-cols-3  justify-center items-center space-y-10 grid-flow-row ",
          "md:grid-cols-6   md:gap-x-20 md:items-center md:space-y-0",
          "xl:grid-cols-12 xl:grid-rows-3 xl:mx-20 xl:gap-x-0",
        ])}
      >
        <PlanetSkills
          primary
          className="col-span-3  md:row-start-1"
          title="Desarrollo Web de Élite"
          content="En el borde de nuestro planeta digital, la experiencia en codificación da vida a soluciones web. Descubre el arte de la programación de la mano de Heyscar Romero."
        />
        <PlanetSkills
          className=" col-span-3 md:row-start-1 row-span-1 xl:col-start-10"
          title="Arquitectura Digital Sofisticada"
          content="Desde el núcleo hasta la interfaz, nuestra arquitectura digital es una sinfonía de habilidades de programación. Cada línea de código es una obra de arte funcional."
        />
        <Link
          href="/mi-universo"
          className="relative  animate-duration-[10s]  md:animate-bounce hover:animate-stop hover:opacity-80 active:opacity-100 saturate-150 transition-all duration-500  flex justify-center object-contain object-center items-center col-span-3 md:col-span-3 md:row-span-2 md:col-start-1 xl:col-span-4  xl:col-start-5 xl:row-start-1 xl:row-span-3"
        >
          <div
          className={clsx(
            "absolute top-[10%] right-[14%] w-20  text-sm  bg-white border border-gray-500 text-gray-600 rounded-md p-1 ",
     
          )}
          >Toca par Explorar
          </div>
          <Image
            className="w-full  h-full "
            src="/imgs/hr-planet-background.png"
            alt="planet-hr"
            width={600}
            height={600}
          />
        </Link>

        <PlanetSkills
          className="  col-span-3  xl:col-start-10 xl:row-start-3"
          title="Innovación en Backend y Frontend"
          content="En el espacio digital, la innovación no conoce límites. Nuestros productos destacan tanto en el backend como en el frontend, ofreciendo una experiencia completa."
        />
        <PlanetSkills
          primary
          className=" col-span-3 md:col-start-4 xl:col-start-1 xl:row-start-3"
          title="Codificación Responsiva"
          content="La esencia de la programación responsiva se refleja en cada detalle de nuestras soluciones web. Descubre la magia de la adaptabilidad en cada línea de código."
        />
      </div>
    </div>
  );
};
