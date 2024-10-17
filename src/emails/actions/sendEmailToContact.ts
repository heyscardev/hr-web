"use server";

import { Resend } from "resend";
import { ClientEmailTemplate } from "../components/ClientMailTemplate";
import { Message } from "@/interfaces";

export const sendEmailToContact = async (message: Message) => {
  const emailFrom = "heyscar@heyscar.dev";
  const resend = new Resend(process.env.NEXT_RESEND_API_KEY);
  const { data, error } = await resend.emails.send({
    from: emailFrom,
    to: [message.email],
    subject: "Gracias Por Contactarme",
    react: ClientEmailTemplate({ ...message, emailFrom }),
  });

  if (error) {
    return { ok: false, error };
  }

  return { ok: true, data };
};
