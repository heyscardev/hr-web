import Image from "next/image";
import { SectionTitle } from "../../../../components/ui/SectionTitle";
import { MoveButton } from "@/components/ui/Buttons/MoveButton";
import { ContactForm } from "./ui/ContactForm";

export const revalidate = 60 * 60 * 24 * 7;
export default function ContactPage() {
  return (
    <div className="pt-28 min-h-screen w-full  flex justify-center  m-auto  relative">
      <Image
        src={"/imgs/creative_rocket.png"}
        alt="contact rocket"
        width={400}
        height={400}
        className="object-contain animate- w-[550px] -left-[250px] bottom-[250px] h-auto lg:w-[50vw] absolute lg:-bottom-[20vw] lg:-left-[15vw] opacity-25 -z-10"
      />

      <section className=" py-20 lg:py-[120px] max-w-7xl xl:w-full  relative z-10">
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
            <div className="w-full lg:w-1/2 xl:w-5/12 px-4 mx-5 lg:mx-0">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
