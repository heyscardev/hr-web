import { GiRocket } from "react-icons/gi";
import Image from "next/image";
import Link from "next/link";
import Presentation from "./Presentation";
import { WhoAm } from "./WhoAm";
import "./inicio.css";
import { Skills } from "./Skills";
import { Projects } from "./Projects";

export default function IndexPage() {
  return (
    <div className="">
      <Presentation />
      <div className=" relative bg-gradient-to-br from-orange-300 -z-10 via-primary-100  to-orange-300 overflow-x-hidden">
        <Image
          className=" top-[10%] sm:top-[5%] xl:top-[30%]  w-full lg:w-auto  absolute -z-10  h-[50%] object-cover opacity-30  "
          src="/imgs/luna-background.png"
          alt="moon"
          width={800}
          height={800}
        />
        <Image
          className="astrounaut-image"
          src="/imgs/astronaut-background.png"
          alt="astounaut"
          width={100}
          height={100}
          unoptimized
        />
        <WhoAm />
        <Skills />
      </div>
    </div>
  );
}
