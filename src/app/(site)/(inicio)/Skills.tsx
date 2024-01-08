import { Card, SectionTitle } from "@/components";
import Image from "next/image";

export const Skills = () => {
  return (
    <div
      id="skills"
      className=" lg:min-h-screen  snap-start pt-36  overflow-y-auto w-full   flex flex-col justify-center"
    >
      <SectionTitle
        title="Productos Web Excepcionales"
        subtile="Servicios Digitales a Medida"
        className="my-10 text-center"
      />
      <div className="container m-auto px-6 text-gray-500 md:px-12 xl:px-0 py-5">
        <div className="mx-auto grid gap-6 md:w-3/4 lg:w-full lg:grid-cols-3">
          <Card
            title="Aplicaciones Web Personalizadas"
            content="Transformamos ideas en soluciones digitales únicas. Desde concepto hasta implementación, creamos aplicaciones web a medida que se adaptan perfectamente a tus necesidades y metas"
            linkHref="/diseño-unico"
            image={{
              alt: "unica web",
              src: "/svg//skills/unique-web.svg",
            }}
          />

          <Card
            title="Experiencia de Usuario Intuitiva:"
            content="Descubre la magia de la interacción digital. Diseñamos experiencias que cautivan y guían de forma natural, poniendo la facilidad de uso en el corazón de cada proyecto."
            linkHref="/experiencia-intuitiva"
            image={{
              alt: "responsive-design",
              src: "/svg//skills/user-experience.svg",
            }}
          />
          <Card
            title="Diseño Responsive y Moderno"
            content="Adéntrate en la estética digital del mañana. Nuestro enfoque en el diseño responsive garantiza una experiencia visual impecable en todos los dispositivos, fusionando estilo y funcionalidad de manera armoniosa."
            linkHref="/diseño-responsivo"
            image={{
              alt: "responsive-design",
              src: "/svg//skills/responsive-design.svg",
            }}
          />
        </div>
      </div>
    </div>
  );
};
