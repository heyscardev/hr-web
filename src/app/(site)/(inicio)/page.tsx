import Image from "next/image";
import "./inicio.css";
import { MyUniverse } from "./MyUniverse";
import Presentation from "./Presentation";
import { Skills } from "./Skills";
import { WhoAm } from "./WhoAm";
import { SectionTitle } from "@/components";
import { MoveButton } from "@/components/ui/Buttons/MoveButton";
import { ContactForm } from "../(withAstronaut)/contacto/ui/ContactForm";

export default function IndexPage() {
  return (
    <div className="z-10 overflow-hidden">
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
          {/* <MyUniverse /> */}
      <div className="z-10 w-full overflow-hidden">
      <MyUniverse />
    
    </div>
      </div>
    
    <div className=" min-h-screen w-full  hr-gradient-background-reverse flex justify-center  m-auto  relative">
      <Image
        src={"/imgs/creative_rocket.png"}
        alt="contact rocket"
        width={400}
        height={400}
        className="object-contain animate- w-[550px]  -left-[250px] bottom-[250px] h-auto lg:w-[50vw] absolute lg:-bottom-[20vw] lg:-left-[15vw] opacity-25 "
      />

      <section id="contact" className=" py-20 lg:py-[120px] max-w-7xl xl:w-full  relative z-10">
        <div className="container">
          <div className="flex flex-wrap lg:justify-between -mx-4">
            <div className="w-full lg:w-1/2 xl:w-6/12 px-4 flex flex-col items-center lg:items-start">
              <div className="max-w-[570px] mb-12 lg:mb-0 text-center lg:text-start f">
                <SectionTitle
                  className="mb-4"
                  title="Contacta conmigo"
                  subtile="Conéctate con Heyscar Romero"
                />
                <p className=" text-base text-body-color text-secondary-950 leading-relaxed mb-1">
                  Estamos aquí para escucharte. Completa el formulario y en la
                  brevedad posible me pondre en contacto contigo.
                </p>
                <div className="w-full flex justify-center">
                  <MoveButton
                    text="Regresar a inicio"
                    href="/"
                    className="text-xl"
                  />
                </div>
              </div>
            </div>
            <div className="w-full overflow-hidden lg:w-1/2 xl:w-5/12 px-4 mx-5 lg:mx-0">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </div>
    </div>
  );
}
