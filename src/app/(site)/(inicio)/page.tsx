import { GiRocket } from "react-icons/gi";
import Image from "next/image";
import Link from "next/link";
import Presentation from "./Presentation";
import { WhoAm } from "./WhoAm";
import "./inicio.css";
import { Skills } from "./Skills";
import { Tecnologies } from "./Tecnologies";
import { LanguagesPlanet } from "@/modules/LanguagesPlanets";
import { SectionTitle } from "@/components";
import { MyUniverse } from "./MyUniverse";

export default function IndexPage() {
  return (
    <div className="z-10">
      <Presentation />
      <div className=" relative bg-gradient-to-br from-orange-200 -z-10 via-primary-100  to-orange-300 overflow-hidden">
        <Image
          className=" top-[10%] sm:top-[5%] xl:top-[30%]  w-full lg:w-auto  absolute -z-10  h-[50%] object-cover opacity-30  "
          src="/imgs/luna-background.png"
          alt="moon"
          width={800}
          height={800}
        />
        <Image
          className="astrounaut-image animate-wiggle lg:animate-bounce animate-infinite animate-duration-[15000ms] lg:animate-duration-[20000ms]  animate-ease-in-out"
          src="/imgs/astronaut-background.png"
          alt="astounaut"
          width={400}
          height={800}
          loading="eager"
        />
        <WhoAm />
        <Skills />
      </div>
      <MyUniverse />
      {/* <Tecnologies /> */}
    </div>
  );
}
