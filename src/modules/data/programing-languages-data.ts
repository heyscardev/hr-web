import { Language } from "../interfaces/languages-interface";
const xl = 2;
const lg = 1.5;
const md = 1;
const sm = 0.7;
const xs = 0.5;

export const languages: Language[] = [
  {
    id: 1,
    name: "JS",
    slug: "java_script",
    img: "js-planet.png",
    relations: [3, 4, 5],
    val: xl,
  },
  //   { id: 2, name: "NODE", img: "js-planet.png", relations: [1, 3, 4, 5, 6] },
  {
    id: 3,
    name: "React",
    slug: "react",
    img: "react-planet.png",
    val: sm,
  },
  { id: 4, name: "Vue", slug: "vue", img: "vue-planet.png", val: sm },
  {
    id: 5,
    slug: "next",
    name: "NextJS",
    img: "nextjs-planet.png",
    val: md,
    relations: [1, 3],
  },
  // { id: 6, name: "ExpressJS", img: "js-planet.png", relations: [1] },
  {
    id: 7,
    name: "prisma",
    slug: "prisma",
    img: "prisma-planet.png",
    relations: [1],
    val: xs,
  },
  {
    id: 8,
    name: "MYSQL",
    slug: "mysql",
    img: "mysql-planet.png",
    relations: [7],
    val: sm,
  },

  {
    id: 9,
    name: "PHP",
    slug: "php",
    img: "php-planet.png",
    relations: [10],
    val: xl,
  },
  {
    id: 10,
    name: "Laravel",
    slug: "laravel",
    img: "laravel-planet.png",
    relations: [8],
    val: lg,
  },
  {
    id: 12,
    name: "JAVA",
    slug: "java",
    img: "java-planet.png",
    relations: [8],
    val: lg,
  },
  {
    id: 13,
    name: "TailwindCSS",
    slug: "tailwind",
    img: "tailwindcss-planet.png",
    relations: [],
  },
  {
    id: 14,
    name: "Bootstrap",
    slug: "bootstrap",
    img: "bootstrap-planet.png",
    relations: [],
  },
  {
    id: 15,
    name: "CSS",
    slug: "css",
    img: "css-planet.png",
    relations: [14, 13],
    val: lg,
  },
  {
    id: 16,
    name: "HTML",
    slug: "html",
    img: "html-planet.png",
    relations: [15, 1],
    val: lg,
  },
  {
    id: 17,
    name: "SASS",
    slug: "sass",
    img: "sass-planet.png",
    relations: [15],
    val: sm,
  },
  {
    id: 18,
    slug: "spring",
    name: "SpringBoot",
    img: "spring-planet.png",
    relations: [12],
    val: xl,
  },
  // {
  //   id: 18,
  //   name: "POSGRESQl",
  //   img: "bootstrap-planet.png",
  //   relations: [8],
  //   val: big,
  // },
  //  {
  //   id: 19,
  //   name: "APACHE2",
  //   img: "bootstrap-planet.png",
  //   relations: [20,9],
  //   val: big,
  // },
  //    {
  //   id: 20,
  //   name: "Linux",
  //   img: "bootstrap-planet.png",
  //   relations: [8],
  //   val: big,
  // },
  //       {
  //   id: 20,
  //   name: "MateriaLUI",
  //   img: "bootstrap-planet.png",
  //   relations: [3],
  //   val: big,
  // },
];
