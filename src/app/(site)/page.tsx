import { titleFont } from "@/config/fonts";
import Image from "next/image";

export default function IndexPage() {
  return (
    <div className="flex-1 flex  flex-col justify-center relative ">
      {/* <div
        className=" -top-10 -bottom-10 left-0 right-0 absolute -z-10 opacity-15  -rotate-45 scale-150 skew-x-3 grayscale "
        style={{
          backgroundImage: "url('/imgs/logo-gradient.png')",
          backgroundSize: "20%",
          backgroundRepeat: "space",
        }}
      ></div> */}
      <Image
        className="top-0 bottom-0 left-0 right-0 absolute -z-10 w-full h-full object-cover animate-fade-down "
        src="/imgs/background3.jpeg"
        alt="background hr"
        quality={100}
        fill
        sizes="100vw"
        priority
        style={{
          objectFit: "cover",
        }}
      />
      <div className="top-0 bottom-0 left-0 right-0 absolute -z-10 w-full h-full  bg-white bg-opacity-15  " />
      <div className="flex items-center justify-center gap-10  xl:gap-32 px-2 md:px-5 max-w-screen-2xl self-center">
        {/* <Image
          className="md:w-[50%]"
          src="/imgs/laptop-with-logo.png"
          alt="Heyscar Laptop"
          width={600}
          height={600}
        />{" "} */}
        <div className="md:max-w-[800px]">
          <h1
            className={`text-primary-500 md:underline text-4xl font-semibold font-hr-title md:text-5xl animate-fade animate-delay-200`}
          >
            Construyendo el Futuro Online
          </h1>
          <h2 className="hr-subtitle animate-fade-down animate-delay-300">
            Arquitecto Digital de Experiencias Únicas
          </h2>
          <p className=" text-secondary-950  bg-white bg-opacity-30 lg:text-xl font-medium  text-justify animate-fade-up backdrop-blur-xl px-5 py-3 shadow-lg mt-5 rounded-md overflow-hidden  ">
            <span className="text-primary-500  font-hr-title ">{"< "}</span>
            En mi universo digital, fusiono todas las tecnologías de vanguardia
            para tejer productos de calidad excepcional. Desde el diseño
            elegante hasta la funcionalidad impecable, cada línea de código es
            una expresión de mi dedicación a la perfección. Tu visión es mi
            impulso, y juntos, creamos soluciones web que destacan.
            <span className="text-primary-500  font-hr-title ">{" />"}</span>
          </p>
        </div>
      </div>
    </div>
  );
}
