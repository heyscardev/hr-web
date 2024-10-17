import { LuServerCog, LuWallpaper } from "react-icons/lu";
import { Language } from "../interfaces/languages-interface";
import { MdApi, MdHttps, MdPageview, MdRocket, MdRocketLaunch } from "react-icons/md";
import { GrCursor } from "react-icons/gr";
import { GiArmorVest, GiSpeedometer } from "react-icons/gi";
const xl = 2;
const lg = 1.5;
const md = 1;
const sm = 0.7;
const xs = 0.5;

export const languages: Language[] = [
  {
    id: 1,
    name: "JavaScript",
    slug: "java_script",
    img: "js-planet.png",
    logo: "js.png",
    color: "#f3e332",
    relations: [3, 4, 5],
    val: xl,
    large_name: "JavaScript",
    description:
      "JavaScript es un lenguaje de programación dinámico y ampliamente usado para el desarrollo web.",
    projects: ["Project A", "Project B", "Project C"],
    skills: [
      {
        title: "Más de 3 años de experiencia desarrollando",
        content: "3+",
      },
      {
        title:
          "He aplicado a lo largo de mi experiencia enfocado al frontend con esta tecnología",
        content: <LuWallpaper size={18} />,
      },
      {
        title:
          "He aplicado a lo largo de mi experiencia enfocado al Backend con esta tecnología",
        content: <LuServerCog size={18} />,
      },
    ],
  },
  {
    id: 3,
    name: "React",
    slug: "react",
    logo: "react.png",
    img: "react-planet.png",
    val: sm,
    large_name: "React.js",
    description:
      "React es una biblioteca de JavaScript para construir interfaces de usuario.",
    projects: ["Project D", "Project E"],
    skills: [
      {
        title: "Más de 4 años de experiencia",
        content: "4+",
      },
      {
        title: "Construccion de apps de alto rendimiento",
        content: <GiSpeedometer size={18} />,
      },
      {
        title: "Construccion de con enfoque a simuladores",
        content: <MdRocketLaunch size={18} />,
      },
      {
        title: "Focalizado en el desarrollo de interfaces modernas",
        content: <LuWallpaper size={18} />,
      },
    ],
  },
  {
    id: 4,
    name: "Vue",
    slug: "vue",
    img: "vue-planet.png",
    val: sm,
    large_name: "Vue.js",
    description:
      "Vue.js es un framework progresivo de JavaScript para la construcción de interfaces de usuario.",
    projects: ["Project F"],
    skills: [
      {
        title: "Más de 1 año de experiencia con Vue.js",
        content: "1+",
      },
      {
        title: "Focalizado en la simplicidad y flexibilidad",
        content: <LuWallpaper size={18} />,
      },
    ],
  },
  {
    id: 5,
    slug: "next",
    name: "NextJS",
    img: "nextjs-planet.png",
    val: md,
    relations: [1, 3],
    large_name: "Next.js",
    description:
      "Next.js es un framework de React para aplicaciones web optimizadas y renderizado en el servidor.",
    projects: ["Project G"],
    skills: [
      {
        title: "Experiencia construyendo aplicaciones con SSR",
        content: "2+",
      },
      {
        title: "Optimización y rendimiento en desarrollo web",
        content: <LuServerCog size={18} />,
      },
    ],
  },
  {
    id: 7,
    name: "Prisma",
    slug: "prisma",
    img: "prisma-planet.png",
    relations: [1],
    val: xs,
    large_name: "Prisma",
    description:
      "Prisma es un ORM para Node.js y TypeScript que simplifica las consultas a bases de datos.",
    projects: ["Project H"],
    skills: [
      {
        title: "Conexión con bases de datos SQL",
        content: "1+",
      },
      {
        title: "Facilitando la interacción con bases de datos",
        content: <LuServerCog size={18} />,
      },
    ],
  },
  {
    id: 8,
    name: "MySQL",
    slug: "mysql",
    img: "mysql-planet.png",
    relations: [7],
    val: sm,
    large_name: "MySQL",
    description:
      "MySQL es un sistema de gestión de bases de datos relacional de código abierto.",
    projects: ["Project I"],
    skills: [
      {
        title: "Gestión de bases de datos SQL",
        content: "3+",
      },
      {
        title: "Optimización de consultas y estructura de bases de datos",
        content: <LuServerCog size={18} />,
      },
    ],
  },
  {
    id: 9,
    name: "PHP",
    slug: "php",
    img: "php-planet.png",
    relations: [10],
    val: xl,
    large_name: "PHP",
    description:
      "PHP es un lenguaje de scripting popular para el desarrollo web del lado del servidor.",
    projects: ["Project J"],
    skills: [
      {
        title: "Más de 3 años de experiencia desarrollando con PHP",
        content: "3+",
      },
      {
        title: "Backend sólido con PHP",
        content: <LuServerCog size={18} />,
      },
    ],
  },
  {
    id: 10,
    name: "Laravel",
    slug: "laravel",
    img: "laravel-planet.png",
    relations: [8],
    val: lg,
    large_name: "Laravel",
    description:
      "Laravel es un framework de PHP diseñado para el desarrollo web elegante y expresivo.",
    projects: ["Project K"],
    skills: [
      {
        title: "Más de 3 años de experiencia con Laravel",
        content: "3+",
      },
      {
        title: "Desarrollo backend moderno",
        content: <LuServerCog size={18} />,
      },
      {
        title: "Desarrollo Monolítico",
        content: <GrCursor/>,
      },
      {
        title: "Desarrollo de API RESTful eficientes",
        content: <MdApi size={18} />,
      },
    ],
  },
  {
    id: 12,
    name: "Java",
    slug: "java",
    img: "java-planet.png",
    relations: [8],
    val: lg,
    large_name: "Java",
    description:
      "Java es un lenguaje de programación robusto y popular usado en muchas aplicaciones.",
    projects: ["Project L"],
    skills: [
      {
        title: "Más de 6 años de experiencia con Java",
        content: "6+",
      },
      {
        title: "Backend escalable con Java",
        content: <LuServerCog size={18} />,
      },
    ],
  },
  {
    id: 13,
    name: "TailwindCSS",
    slug: "tailwind",
    img: "tailwindcss-planet.png",
    large_name: "TailwindCSS",
    description:
      "TailwindCSS es un framework de CSS basado en utilidades que permite un diseño rápido.",
    projects: ["Project M"],
    skills: [
      {
        title: "Experiencia en diseño con utilidades de CSS",
        content: "2+",
      },
      {
        title: "Creación rápida de interfaces con Tailwind",
        content: <LuWallpaper size={18} />,
      },
    ],
  },
  {
    id: 14,
    name: "Bootstrap",
    slug: "bootstrap",
    img: "bootstrap-planet.png",
    large_name: "Bootstrap",
    description:
      "Bootstrap es un framework de CSS popular para el desarrollo de interfaces responsivas.",
    projects: ["Project N"],
    skills: [
      {
        title: "Más de 3 años de experiencia con Bootstrap",
        content: "3+",
      },
      {
        title: "Diseño de interfaces responsivas",
        content: <LuWallpaper size={18} />,
      },
    ],
  },
  {
    id: 15,
    name: "CSS",
    slug: "css",
    img: "css-planet.png",
    relations: [14, 13],
    val: lg,
    large_name: "CSS",
    description:
      "CSS es el lenguaje utilizado para describir la presentación de documentos web.",
    projects: ["Project O"],
    skills: [
      {
        title: "Más de 5 años de experiencia con CSS",
        content: "5+",
      },
      {
        title: "Estilización avanzada con CSS",
        content: <LuWallpaper size={18} />,
      },
    ],
  },
  {
    id: 16,
    name: "HTML",
    slug: "html",
    img: "html-planet.png",
    relations: [15, 1],
    val: lg,
    large_name: "HTML",
    description: "HTML es el estándar para la creación de documentos web.",
    projects: ["Project P"],
    skills: [
      {
        title: "Más de 5 años de experiencia con HTML",
        content: "5+",
      },
      {
        title: "Creación de estructuras web eficientes",
        content: <LuWallpaper size={18} />,
      },
    ],
  },
  {
    id: 17,
    name: "SASS",
    slug: "sass",
    img: "sass-planet.png",
    relations: [15],
    val: sm,
    large_name: "SASS",
    description:
      "SASS es un preprocesador CSS que facilita la escritura de estilos más mantenibles.",
    projects: ["Project Q"],
    skills: [
      {
        title: "Experiencia con preprocesadores CSS",
        content: "3+",
      },
      {
        title: "Estilos dinámicos con SASS",
        content: <LuWallpaper size={18} />,
      },
    ],
  },
  {
    id: 18,
    slug: "spring",
    name: "SpringBoot",
    img: "spring-planet.png",
    relations: [12],
    val: lg,
    large_name: "Spring Boot",
    description:
      "Spring Boot es un framework para la construcción de aplicaciones empresariales en Java.",
    projects: ["Project R"],
    skills: [
      {
        title: "Desarrollo de aplicaciones empresariales",
        content: "1+",
      },
      {
        title: "Backend robusto con Spring Boot",
        content: <LuServerCog size={18} />,
      },
    ],
  },
];
