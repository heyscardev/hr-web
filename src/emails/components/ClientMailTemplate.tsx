import * as React from "react";
import { Img, Link } from "@react-email/components";

import { EmailLayout } from "../layouts/EmailLayout";
import Image from "next/image";
import { Message } from "@/interfaces";
interface EmailTemplateProps extends Message {}

export const ClientEmailTemplate = ({
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
      className="max-w-2xl px-6 py-8 mx-auto  dark:bg-gray-900"
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
          alt=""
          width={"100%"}
          height={"100%"}
        />
      </header>

      <main className="mt-8">
        <h2 className="text-gray-700 dark:text-gray-200">Hola {name},</h2>

        <p className="mt-2 leading-loose text-gray-600 dark:text-gray-300">
          Grcias por ponerte en contacto con Heyscar Romero Desarrollador Web
          nos pondremos en contacto a la brevedad posible por este correo. si
          tienes una consulta extra vuelve a consultar por nuestra pagina web
          <span className="font-semibold ">Heyscar.vercel.app</span>.
        </p>

        <button className="px-6 py-2 mt-4 text-sm font-medium tracking-wider text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-lg hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80">
          Accept the invite
        </button>

        <p className="mt-8 text-gray-600 dark:text-gray-300">
          Thanks, <br />
          Meraki UI team
        </p>
      </main>

      <footer className="mt-8">
        <p className="text-gray-500 dark:text-gray-400">
          This email was sent to{" "}
          <a
            href="#"
            className="text-blue-600 hover:underline dark:text-blue-400"
            target="_blank"
          >
            contact@merakiui.com
          </a>
          . If you&apos;d rather not receive this kind of email, you can{" "}
          <a
            href="#"
            className="text-blue-600 hover:underline dark:text-blue-400"
          >
            unsubscribe
          </a>{" "}
          or{" "}
          <a
            href="#"
            className="text-blue-600 hover:underline dark:text-blue-400"
          >
            manage your email preferences
          </a>
          .
        </p>

        <p className="mt-3 text-gray-500 dark:text-gray-400">
          © {new Date().getFullYear()} Meraki UI. All Rights Reserved.
        </p>
      </footer>
    </section>
  </EmailLayout>
);
