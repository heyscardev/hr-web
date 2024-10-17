import * as React from "react";
import { Img, Link } from "@react-email/components";

import { EmailLayout } from "../layouts/EmailLayout";

import { Message } from "@/interfaces";
import { CopyrightText } from "@/components";
interface EmailTemplateProps extends Message {
  emailFrom: string;
}

export const ClientEmailTemplate = ({
  emailFrom = "",
  name = "",
  message = "",
  email = "",
  phone = "",
}: EmailTemplateProps) => (
  <EmailLayout key={email + message}>
    <section
      style={{
        backgroundImage: "linear-gradient(to right, #fdba74,#FEA5B2, #fdba74)",
      }}
      className="max-w-2xl px-6 py-8 mx-auto  dark:bg-gray-900 rounded-lg"
    >
      <header
        style={{
          backgroundImage:
            "linear-gradient(to right, #fdba74,#FEA5B2, #fdba74)",
        }}
      >
        <Img
          className=" object-contain bg-red-500"
          src="/imgs/logo-gradient.png"
          alt="heyscar"
          width={"100%"}
          height={"100%"}
        />
      </header>

      <main className="mt-8">
        <h2 className="text-gray-700 dark:text-gray-200">Hola {name},</h2>

        <p className="mt-2 leading-loose text-gray-600 dark:text-gray-300">
          Grcias por ponerte en contacto con Heyscar Romero Desarrollador Web
          nos pondremos en contacto a la brevedad posible por este correo. si
          tienes una consulta extra vuelve a consultar por nuestra pagina web{" "}
          <span className="font-semibold ">Heyscar.vercel.app</span>.
        </p>

        <button 
        style={{
          padding: "8px 24px",
        color: "#fff",
        backgroundColor: "#fdba74",
        }}
        
        className=" px-6 py-2 mt-4 text-sm font-medium tracking-wider text-white capitalize  border-none transform bg-primary-500 rounded-lg">
          Ir al sitio
        </button>
      </main>

      <footer className="mt-8">
        <p className="text-gray-500 dark:text-gray-400">
          Este Correo fue enviado por{" "}
          <a
            href="#"
            className="text-blue-600 hover:underline dark:text-blue-400"
            target="_blank"
          >
            {emailFrom}
          </a>
        </p>

        <p className="mt-3 text-gray-500 dark:text-gray-400">
          <CopyrightText />
        </p>
      </footer>
    </section>
  </EmailLayout>
);
