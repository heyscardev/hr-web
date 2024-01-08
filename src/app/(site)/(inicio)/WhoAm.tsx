import Image from "next/image";

export const WhoAm = () => {
  return (
    <div
      id="descubre"
      className=" overflow-y-auto w-full    flex flex-col pt-32 lg:flex-row  snap-start px-5  md:px-[5%] lg:flex-wrap items-center sm:justify-around"
    >
      <div className="  lg:w-5/12 xl:w-6/12 z-10">
        <h1 className={`hr-title `}>Heyscar Romero</h1>

        <h2 className="hr-subtitle animate-fade-down animate-delay-300">
          Arquitecto Digital de Experiencias Únicas
        </h2>
        <p className=" hr-paragraph  mt-4">
          <span className="adorn ">{"< "}</span>
          En mi universo digital, fusiono todas las tecnologías de vanguardia
          para tejer productos de calidad excepcional. Desde el diseño elegante
          hasta la funcionalidad impecable, cada línea de código es una
          expresión de mi dedicación a la perfección. Tu visión es mi impulso, y
          juntos, creamos soluciones web que destacan.
          <span className="adorn ">{" />"}</span>
        </p>
      </div>
      <div className=" lg:w-6/12  xl:w-5/12  py-10 sm:py-20 md:my-0 pl-10">
        <div className=" bg-slate-300 rounded-lg backdrop-blur-lg shadow-xl bg-opacity-60 border border-secondary-900/10">
          <Image
            className="w-full rounded-lg relative  shadow-black/20 shadow-md -translate-x-3   sm:-translate-x-7 -translate-y-4 sm:-translate-y-10 z-20"
            src="/imgs/teslo-shop.png"
            width={800}
            height={500}
            alt="tailus shop"
          />
        </div>
      </div>

      {/* <div className="col-start-8 col-span-2">
        <Image
          src="/imgs/rocket.png"
          width={500}
          height={500}
          className="w-full"
          alt="hola"
        />
      </div> */}
    </div>
  );
};
