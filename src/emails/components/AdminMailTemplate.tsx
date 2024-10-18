/* eslint-disable @next/next/no-img-element */
import * as React from "react";
import { Img, Link } from "@react-email/components";

import { EmailLayout } from "../layouts/EmailLayout";

import { Message } from "@/interfaces";
import { CopyrightText } from "@/components";
interface EmailTemplateProps extends Message {
  emailFrom: string;
}

export const AdminEmailTemplate = ({
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
        <img
          className=" object-contain  w-24 h-24 mx-auto"
          src="https://www.heyscar.dev/imgs/logo-gradient.png"
          alt="heyscar"
          width={"100%"}
          height={"100%"}
        />
      </header>

      <main className="mt-8">
        <h2 className="text-gray-700 dark:text-gray-200">
          UNA PERSONA SE HA PUESTO EN CONTACTO CONTIGO
        </h2>

        <p className="mt-2 leading-loose text-gray-600 dark:text-gray-300">
          Nombre: {name}
          <br />
          Email: {email}
          <br />
          Telefono: {phone}
          <br />
          Mensaje: {message}
        </p>

        <p className="mt-4 text-gray-600 dark:text-gray-300">
          <Link href={`mailto:${email}`} className="text-primary-500">
            Responder a {email}
          </Link>
        </p>
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
