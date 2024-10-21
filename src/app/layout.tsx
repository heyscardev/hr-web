import type { Metadata } from "next";
import "./globals.css";
import { inter, titleFont } from "@/config/fonts";
import toast, { ToastBar, Toaster } from "react-hot-toast";
import { ToastPlugin } from "./plugins/ToastPlugin";
import { ThemeProvider } from "@mui/material";
import { theme } from "@/config";

export const metadata: Metadata = {
  title: "Heyscar Romero | Desarrollador Web",
  description:
    "Heyscar Romero: Desarrollador web de páginas y aplicaciones web empresariales que convierte ideas en experiencias digitales únicas. Descubre la fusión perfecta entre tecnología avanzada y diseño elegante en cada proyecto. Además, proporciono soluciones empresariales completas y desarrollo aplicaciones web a medida para mejorar la eficiencia operativa. Con un enfoque en la innovación, integro automatizaciones de procesos utilizando IA para optimizar tu modelo de negocio.",
  keywords: [
    "hr desarrollador",
    "heyscar",
    "romero",
    "web developer",
    "programador",
    "desarrollador",
    "portafolio",
    "diseño web",
    "counsultora",
    "el mejor programador de america latina",
    "desarrollador web",
    "aplicaciones web",
    "páginas web",
    "experiencias digitales",
    "tecnología avanzada",
    "diseño elegante",
    "soluciones empresariales",
    "eficiencia operativa",
    "innovación",
    "automatizaciones de procesos",
    "inteligencia artificial",
    "modelo de negocio",
    "sitio web a medida",
    "desarrollo web personalizado",
    "optimización SEO",
    "experiencia del usuario",
    "interfaz de usuario",
    "responsive design",
    "optimización de velocidad",
    "seguridad web",
    "mantenimiento web",
    "soporte técnico",
    "consultoría web",
    "estrategias de marketing digital",
    "analítica web",
    "integraciones de terceros",
    "e-commerce",
    "tiendas online",
    "optimización de conversión",
    "creación de contenido",
    "redes sociales",
    "branding digital",
    "SEO local",
    "SEO técnico",
    "desarrollo frontend",
    "desarrollo backend",
    "HTML5",
    "CSS3",
    "JavaScript",
    "PHP",
    "Python",
    "frameworks de desarrollo",
    "WordPress",
    "Magento",
    "Shopify",
    "Django",
    "React",
    "Angular",
    "Vue.js",
    "Bootstrap",
    "base de datos",
    "MySQL",
    "MongoDB",
    "Firebase",
    "seguridad informática",
    "ciberseguridad",
    "certificados SSL",
    "criptografía",
    "pruebas de penetración",
    "auditorías de seguridad",
    "desarrollo ágil",
    "Scrum",
    "Kanban",
    "DevOps",
    "control de versiones",
    "Git",
    "SVN",
    "GitHub",
    "Bitbucket",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <title>Heyscar Romero | Desarrollador Web</title>
        <meta
          name="description"
          content="Desarrollador web de páginas y aplicaciones web empresariales..."
        />
        <meta property="og:url" content="https://heyscar.dev" />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Heyscar Romero | Desarrollador Web"
        />
        <meta
          property="og:description"
          content="Desarrollador web de páginas y aplicaciones web empresariales."
        />
        <meta
          property="og:image"
          content="https://heyscar.dev/imgs/og.jpeg"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="heyscar.dev" />
        <meta property="twitter:url" content="https://heyscar.dev" />
        <meta
          name="twitter:title"
          content="Heyscar Romero | Desarrollador Web"
        />
        <meta
          name="twitter:description"
          content="Desarrollador web de páginas y aplicaciones web empresariales..."
        />
        <meta
          name="twitter:image"
          content="https://heyscar.dev/imgs/og.jpeg"
        />
        {/* Meta tags de Open Graph */}
        <link rel="icon" href="/favicon.ico" /> {/* Favicon */}
      </head>
      <body className={`${inter.className} ${titleFont.variable} `}>
        <ToastPlugin />
        <ThemeProvider theme={theme}>{children}</ThemeProvider>
      </body>
    </html>
  );
}
