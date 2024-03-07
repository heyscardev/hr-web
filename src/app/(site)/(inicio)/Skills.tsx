import { Card, SectionTitle } from "@/components";

export const Skills = () => {
  return (
    <div
      id="skills"
      className=" lg:min-h-screen  snap-end pt-20 md:pt-36 pb-10  overflow-y-auto w-full   flex flex-col justify-center"
    >
      <SectionTitle
        title="Productos Web Excepcionales"
        subtile="Servicios Digitales a Medida"
        className="my-10 text-center"
      />
      <div className="lg:container  m-auto px-6 text-gray-500 md:px-12 xl:px-0 py-5">
        <div className="mx-auto grid gap-6 w-3/4 grid-cols-1 md:grid-cols-2 xl:w-11/12 xl:grid-cols-3">
          <Card
            title="Desarrrollo de Apps Enfocados en un Modelo de Negocio"
            Content={
              <ul className="mx-5">
                <li className="list-disc">
                  Transformamos tus ideas en plataformas digitales innovadoras,
                  creando modelos de negocio personalizados para maximizar el
                  valor y el éxito de tu proyecto.
                </li>
                <li className="list-disc my-2">
                  Nos enfocamos en dar vida a tus conceptos con soluciones
                  estratégicas que impulsen el crecimiento y la diferenciación
                  en el mercado, identificando oportunidades de ingresos y valor
                  añadido para tu plataforma.
                </li>
              </ul>
            }
            linkHref="/diseño-unico"
            image={{
              alt: "unica web",
              src: "/svg//skills/unique-web.svg",
            }}
          />

          <Card
            title="Diseño y Desarrollo de Páginas Web Elegantes"
            Content={
              <ul className="mx-5">
                <li className="list-disc">
                  Creamos sitios web visualmente atractivos y funcionales que
                  representan la identidad de tu marca.
                </li>
                <li className="list-disc my-2">
                  Nuestros equipos de diseño y desarrollo trabajan juntos para
                  ofrecer una experiencia de usuario intuitiva y agradable.
                </li>
                <li className="list-disc ">
                  Utilizamos las últimas tendencias en diseño web y tecnologías
                  responsivas para una óptima visualización en cualquier
                  dispositivo.
                </li>
              </ul>
            }
            linkHref="/experiencia-intuitiva"
            image={{
              alt: "responsive-design",
              src: "/svg//skills/user-experience.svg",
            }}
          />
          <Card
            className="md:col-span-2 xl:col-span-1"
            title="Desarrollo de Aplicaciones Empresariales Multiplataforma"
            Content={
              <ul className="mx-5">
                <li className="list-disc ">
                  Creamos aplicaciones empresariales personalizadas que
                  funcionan en diferentes plataformas, como web, móvil y
                  escritorio.
                </li>
                <li className="list-disc my-2">
                  Nos enfocamos en la escalabilidad, seguridad y usabilidad para
                  garantizar el rendimiento óptimo.
                </li>
                <li className="list-disc ">
                  Utilizamos tecnologías modernas y frameworks líderes para
                  garantizar la compatibilidad y eficiencia.
                </li>
              </ul>
            }
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
