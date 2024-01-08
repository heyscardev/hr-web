import Image from "next/image";
import Link from "next/link";
import { GiRocket } from "react-icons/gi";

export const Presentation = () => {
  return (
    <section
      id="presentacion"
      className=" flex flex-col md:flex-row min-h-screen items-center justify-evenly pt-20  relative snap-center sm:px-5  md:px-[5%]"
      style={{
        backgroundImage: "url('/imgs/background3.jpeg')",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="top-0 bottom-0 left-0 right-0 absolute  w-full h-full  bg-gradient-to-r  from-slate-800/40     backdrop-blur-sm " />

      <div className=" w-full md:w-[60%] lg:w-[50%] z-10">
        <h1
          className={`
          font-hr-title
          text-4xl  md:text-5xl xl:text-7xl 
          text-center md:text-left
        text-white font-semibold 
        animate-fade animate-delay-200  `}
        >
          <span className="text-7xl  lg:text-7xl xl:text-8xl text-primary-500 leading-tight  ">
            Explora
          </span>
          <br />
          mi mundo digital y transforma tus pensamientos en <br />
          <span className="text-7xl lg:text-7xl  xl:text-8xl text-primary-500 leading-tight  ">
            Paginas Web
          </span>
          <br />
          extraordinarias.
        </h1>
      </div>
      <div className="my-4 md:flex-1 flex justify-center z-10">
        <Link href="#descubre" className=" ">
          <button className="rocket-btn">
            <GiRocket size="100%" className="rocket" />
          </button>
        </Link>
      </div>
    </section>
  );
};

export default Presentation;
