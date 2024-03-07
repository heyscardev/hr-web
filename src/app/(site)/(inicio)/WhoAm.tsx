import Image from "next/image";

export const WhoAm = () => {
  return (
    <div
      id="descubre"
      className=" overflow-y-auto w-full    flex flex-col pt-16 md:pt-32 lg:flex-row  snap-start px-5  md:px-[5%] lg:flex-wrap items-center sm:justify-around"
    >
      <div className="  lg:w-5/12 xl:w-6/12 z-10">
        <h1 className={`hr-title `}>Heyscar Romero</h1>

        <h2 className="hr-subtitle animate-fade-down animate-delay-300">
          Transformando tu Visión en Realidad
        </h2>
        <p className=" hr-paragraph  mt-4">
          <span className="adorn ">{"< "}</span>
          Te ofrecemos servicios integrales de desarrollo de aplicaciones web y
          sistemas, así como soluciones empresariales a medida. Me por mi
          creatividad y dedicación para llevar tus ideas a la realidad digital.
          Desde el diseño de páginas web elegantes hasta la implementación de
          sistemas complejos, nos enorgullece fusionar tecnología de vanguardia
          con un enfoque centrado en el usuario. Nuestro objetivo es impulsar tu
          negocio hacia el éxito en línea, brindándote herramientas digitales
          innovadoras que te ayuden a destacar en el mercado. ¿Tienes una visión
          única? ¡Déjanos convertirla en una realidad digital excepcional!
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
