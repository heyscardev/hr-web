"use server";

import { Resend } from "resend";
import { ClientEmailTemplate } from "../components/ClientMailTemplate";
import { Message } from "@/interfaces";
import { AdminEmailTemplate } from "../components/AdminMailTemplate";

export const sendEmailToContact = async (message: Message) => {
  const emailFrom = "heyscar@heyscar.dev";
  const resend = new Resend(process.env.NEXT_RESEND_API_KEY);
  const emailClient = await resend.emails.send({
    from: emailFrom,
    to: [message.email],
    subject: "Gracias Por Contactarme",
    react: ClientEmailTemplate({ ...message, emailFrom }),
  });
  const emailAdmin = await resend.emails.send({
    from: emailFrom,
    to: ["heyscarromero@gmail.com"],
    subject: "Gracias Por Contactarme",
    react: AdminEmailTemplate({ ...message, emailFrom }),
  });

  if (emailClient.error || emailAdmin.error) {
    return { ok: false, error: emailClient.error || emailAdmin.error };
  }

  return { ok: true, data: emailClient.data };
};
