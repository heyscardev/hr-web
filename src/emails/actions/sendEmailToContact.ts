"use server";

import { Resend } from "resend";
import { ClientEmailTemplate } from "../components/ClientMailTemplate";

export const sendEmailToContact = async () => {
  const resend = new Resend(process.env.NEXT_RESEND_API_KEY);
  const { data, error } = await resend.emails.send({
    from: "heyscar.dev@resend.dev",
    to: ["heyscarromero@gmail.com"],
    subject: "Gracias Por Contactarme",
    react: ClientEmailTemplate({ firstName: "pablo" }),
  });

  if (error) {
    return error;
  }

  return data;
};
