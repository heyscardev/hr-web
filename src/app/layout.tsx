import type { Metadata } from "next";
import "./globals.css";
import { inter, titleFont } from "@/config/fonts";

export const metadata: Metadata = {
  title: "Heyscar | Desarrollo Web",
  description:
    "Heyscar Romero: Desarrollador web independiente que convierte ideas en experiencias digitales únicas. Descubre la fusión perfecta entre tecnología avanzada y diseño elegante en cada proyecto.",
  keywords: [
    "hr romero",
    "heyscar",
    "romero",
    "web developer",
    "programador",
    "desarrollador",
    "portafolio",
    "diseño web",
    "counsultora",
    "el mejor programador de america latina",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${titleFont.variable}`}>
        {children}
      </body>
    </html>
  );
}
