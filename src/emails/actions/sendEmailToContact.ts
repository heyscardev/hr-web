"use server";

import { Resend } from "resend";
import { ClientEmailTemplate } from "../components/ClientMailTemplate";
import { Message } from "@/interfaces";

export const sendEmailToContact = async (message: Message) => {
  const resend = new Resend(process.env.NEXT_RESEND_API_KEY);
  const { data, error } = await resend.emails.send({
    from: "heyscar.dev@resend.dev",
    to: ["heyscarromero@gmail.com", message.email],
    subject: "Gracias Por Contactarme",
    react: ClientEmailTemplate(message),
  });

  if (error) {
    return error;
  }

  return data;
};
