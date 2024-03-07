"use client";
import {
  Loader,
  LoaderToButtons,
  SocialButtons,
  TextArea,
  TextField,
} from "@/components";
import { sendEmailToContact } from "@/emails";
import { Message } from "@/interfaces";
import clsx from "clsx";
import { SubmitHandler, useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { GrSend } from "react-icons/gr";
import { div } from "three/examples/jsm/nodes/Nodes.js";

interface Props {}
export const ContactForm = ({}: Props) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid, isSubmitted, isSubmitting },
  } = useForm<Message>({ mode: "onTouched" });

  const onSubmit: SubmitHandler<Message> = async (data) => {
    const res = await sendEmailToContact(data);
    if (!res.ok) {
      toast.error(
        res.error?.message ?? "Ha ocurrido un error! intente nuevamente"
      );
      return false;
    }
    toast.success(
      "se ha enviado exitosamente su mensaje nospondremos en contacto lo antes posible!"
    );
    return true;
  };

  return (
    <div className="bg-white relative rounded-lg p-8 sm:p-12 shadow-lg">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex justify-around  my-3 ">
          <SocialButtons
            size={30}
            iconClassName="text-primary-200 hover:text-primary-500"
          />
        </div>

        <TextField
          register={register}
          name="name"
          label="Tu Nombre"
          required
          id="name"
          error={errors.name}
        />

        <TextField
          register={register}
          name="email"
          label="Tu Correo"
          required
          onlyEmail
          id="email"
          error={errors.email}
        />
        <TextField
          register={register}
          name="phone"
          label="Tu Teléfono"
          required
          type="phone"
          id="phone"
          error={errors.phone}
        />
        <TextArea
          register={register}
          name="message"
          rows={6}
          label="Tu Mensáje"
          id="message"
          error={errors.message}
        />

        <div>
          <button
            type="submit"
            disabled={!isValid || isSubmitting}
            className={clsx(
              `  mt-6
                        w-full
                        items-center
                        text-white
                        flex justify-center gap-2
                        bg-primary-200
                        hover:bg-primary-400
                        hover:shadow
                        rounded
                        border border-primary-700
                        px-3
                        py-1
                        min-h-10
                        transition-all
                        duration-300
                        hover:bg-opacity-90
                     
                        `,
              {
                "disabled:bg-primary-100 disabled:border-primary-100":
                  isSubmitting,
                "disabled:bg-slate-400 disabled:border-slate-300":
                  !isSubmitting,
              }
            )}
          >
            {isSubmitting ? <LoaderToButtons /> : <GrSend className="" />}
          </button>
        </div>
      </form>
      <div>
        <span className="absolute -top-10 -right-9 z-[-1]">
          <svg
            width="100"
            height="100"
            viewBox="0 0 100 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              className="fill-primary-400"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M0 100C0 44.7715 0 0 0 0C55.2285 0 100 44.7715 100 100C100 100 100 100 0 100Z"
              fill="#3056D3"
            />
          </svg>
        </span>
        <span className="absolute -right-10 top-[90px] z-[-1]">
          <svg
            width="34"
            height="134"
            viewBox="0 0 34 134"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              className=" fill-primary-500"
              cx="31.9993"
              cy="132"
              r="1.66667"
              transform="rotate(180 31.9993 132)"
            />
            <circle
              cx="31.9993"
              cy="117.333"
              r="1.66667"
              transform="rotate(180 31.9993 117.333)"
              className=" fill-primary-500"
            />
            <circle
              cx="31.9993"
              cy="102.667"
              r="1.66667"
              transform="rotate(180 31.9993 102.667)"
              className=" fill-primary-500"
            />
            <circle
              cx="31.9993"
              cy="88"
              r="1.66667"
              transform="rotate(180 31.9993 88)"
              className=" fill-primary-500"
            />
            <circle
              cx="31.9993"
              cy="73.3333"
              r="1.66667"
              transform="rotate(180 31.9993 73.3333)"
              className=" fill-primary-500"
            />
            <circle
              cx="31.9993"
              cy="45"
              r="1.66667"
              transform="rotate(180 31.9993 45)"
              className=" fill-primary-500"
            />
            <circle
              cx="31.9993"
              cy="16"
              r="1.66667"
              transform="rotate(180 31.9993 16)"
              className=" fill-primary-500"
            />
            <circle
              cx="31.9993"
              cy="59"
              r="1.66667"
              transform="rotate(180 31.9993 59)"
              className=" fill-primary-500"
            />
            <circle
              cx="31.9993"
              cy="30.6666"
              r="1.66667"
              transform="rotate(180 31.9993 30.6666)"
              className=" fill-primary-500"
            />
            <circle
              cx="31.9993"
              cy="1.66665"
              r="1.66667"
              transform="rotate(180 31.9993 1.66665)"
              className=" fill-primary-500"
            />
            <circle
              cx="17.3333"
              cy="132"
              r="1.66667"
              transform="rotate(180 17.3333 132)"
              className=" fill-primary-500"
            />
            <circle
              cx="17.3333"
              cy="117.333"
              r="1.66667"
              transform="rotate(180 17.3333 117.333)"
              className=" fill-primary-500"
            />
            <circle
              cx="17.3333"
              cy="102.667"
              r="1.66667"
              transform="rotate(180 17.3333 102.667)"
              className=" fill-primary-500"
            />
            <circle
              cx="17.3333"
              cy="88"
              r="1.66667"
              transform="rotate(180 17.3333 88)"
              className=" fill-primary-500"
            />
            <circle
              cx="17.3333"
              cy="73.3333"
              r="1.66667"
              transform="rotate(180 17.3333 73.3333)"
              className=" fill-primary-500"
            />
            <circle
              cx="17.3333"
              cy="45"
              r="1.66667"
              transform="rotate(180 17.3333 45)"
              className=" fill-primary-500"
            />
            <circle
              cx="17.3333"
              cy="16"
              r="1.66667"
              transform="rotate(180 17.3333 16)"
              className=" fill-primary-500"
            />
            <circle
              cx="17.3333"
              cy="59"
              r="1.66667"
              transform="rotate(180 17.3333 59)"
              className=" fill-primary-500"
            />
            <circle
              cx="17.3333"
              cy="30.6666"
              r="1.66667"
              transform="rotate(180 17.3333 30.6666)"
              className=" fill-primary-500"
            />
            <circle
              cx="17.3333"
              cy="1.66665"
              r="1.66667"
              transform="rotate(180 17.3333 1.66665)"
              className=" fill-primary-500"
            />
            <circle
              cx="2.66536"
              cy="132"
              r="1.66667"
              transform="rotate(180 2.66536 132)"
              className=" fill-primary-500"
            />
            <circle
              cx="2.66536"
              cy="117.333"
              r="1.66667"
              transform="rotate(180 2.66536 117.333)"
              className=" fill-primary-500"
            />
            <circle
              cx="2.66536"
              cy="102.667"
              r="1.66667"
              transform="rotate(180 2.66536 102.667)"
              className=" fill-primary-500"
            />
            <circle
              cx="2.66536"
              cy="88"
              r="1.66667"
              transform="rotate(180 2.66536 88)"
              className=" fill-primary-500"
            />
            <circle
              cx="2.66536"
              cy="73.3333"
              r="1.66667"
              transform="rotate(180 2.66536 73.3333)"
              className=" fill-primary-500"
            />
            <circle
              cx="2.66536"
              cy="45"
              r="1.66667"
              transform="rotate(180 2.66536 45)"
              className=" fill-primary-500"
            />
            <circle
              cx="2.66536"
              cy="16"
              r="1.66667"
              transform="rotate(180 2.66536 16)"
              className=" fill-primary-500"
            />
            <circle
              cx="2.66536"
              cy="59"
              r="1.66667"
              transform="rotate(180 2.66536 59)"
              className=" fill-primary-500"
            />
            <circle
              cx="2.66536"
              cy="30.6666"
              r="1.66667"
              transform="rotate(180 2.66536 30.6666)"
              className=" fill-primary-500"
            />
            <circle
              cx="2.66536"
              cy="1.66665"
              r="1.66667"
              transform="rotate(180 2.66536 1.66665)"
              className=" fill-primary-500"
            />
          </svg>
        </span>
        <span className="absolute -left-7 -bottom-7 z-[-1]">
          <svg
            width="107"
            height="134"
            viewBox="0 0 107 134"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="104.999"
              cy="132"
              r="1.66667"
              transform="rotate(180 104.999 132)"
              className=" fill-primary-500"
            />
            <circle
              cx="104.999"
              cy="117.333"
              r="1.66667"
              transform="rotate(180 104.999 117.333)"
              className=" fill-primary-500"
            />
            <circle
              cx="104.999"
              cy="102.667"
              r="1.66667"
              transform="rotate(180 104.999 102.667)"
              className=" fill-primary-500"
            />
            <circle
              cx="104.999"
              cy="88"
              r="1.66667"
              transform="rotate(180 104.999 88)"
              className=" fill-primary-500"
            />
            <circle
              cx="104.999"
              cy="73.3333"
              r="1.66667"
              transform="rotate(180 104.999 73.3333)"
              className=" fill-primary-500"
            />
            <circle
              cx="104.999"
              cy="45"
              r="1.66667"
              transform="rotate(180 104.999 45)"
              className=" fill-primary-500"
            />
            <circle
              cx="104.999"
              cy="16"
              r="1.66667"
              transform="rotate(180 104.999 16)"
              className=" fill-primary-500"
            />
            <circle
              cx="104.999"
              cy="59"
              r="1.66667"
              transform="rotate(180 104.999 59)"
              className=" fill-primary-500"
            />
            <circle
              cx="104.999"
              cy="30.6666"
              r="1.66667"
              transform="rotate(180 104.999 30.6666)"
              className=" fill-primary-500"
            />
            <circle
              cx="104.999"
              cy="1.66665"
              r="1.66667"
              transform="rotate(180 104.999 1.66665)"
              className=" fill-primary-500"
            />
            <circle
              cx="90.3333"
              cy="132"
              r="1.66667"
              transform="rotate(180 90.3333 132)"
              className=" fill-primary-500"
            />
            <circle
              cx="90.3333"
              cy="117.333"
              r="1.66667"
              transform="rotate(180 90.3333 117.333)"
              className=" fill-primary-500"
            />
            <circle
              cx="90.3333"
              cy="102.667"
              r="1.66667"
              transform="rotate(180 90.3333 102.667)"
              className=" fill-primary-500"
            />
            <circle
              cx="90.3333"
              cy="88"
              r="1.66667"
              transform="rotate(180 90.3333 88)"
              className=" fill-primary-500"
            />
            <circle
              cx="90.3333"
              cy="73.3333"
              r="1.66667"
              transform="rotate(180 90.3333 73.3333)"
              className=" fill-primary-500"
            />
            <circle
              cx="90.3333"
              cy="45"
              r="1.66667"
              transform="rotate(180 90.3333 45)"
              className=" fill-primary-500"
            />
            <circle
              cx="90.3333"
              cy="16"
              r="1.66667"
              transform="rotate(180 90.3333 16)"
              className=" fill-primary-500"
            />
            <circle
              cx="90.3333"
              cy="59"
              r="1.66667"
              transform="rotate(180 90.3333 59)"
              className=" fill-primary-500"
            />
            <circle
              cx="90.3333"
              cy="30.6666"
              r="1.66667"
              transform="rotate(180 90.3333 30.6666)"
              className=" fill-primary-500"
            />
            <circle
              cx="90.3333"
              cy="1.66665"
              r="1.66667"
              transform="rotate(180 90.3333 1.66665)"
              className=" fill-primary-500"
            />
            <circle
              cx="75.6654"
              cy="132"
              r="1.66667"
              transform="rotate(180 75.6654 132)"
              className=" fill-primary-500"
            />
            <circle
              cx="31.9993"
              cy="132"
              r="1.66667"
              transform="rotate(180 31.9993 132)"
              className=" fill-primary-500"
            />
            <circle
              cx="75.6654"
              cy="117.333"
              r="1.66667"
              transform="rotate(180 75.6654 117.333)"
              className=" fill-primary-500"
            />
            <circle
              cx="31.9993"
              cy="117.333"
              r="1.66667"
              transform="rotate(180 31.9993 117.333)"
              className=" fill-primary-500"
            />
            <circle
              cx="75.6654"
              cy="102.667"
              r="1.66667"
              transform="rotate(180 75.6654 102.667)"
              className=" fill-primary-500"
            />
            <circle
              cx="31.9993"
              cy="102.667"
              r="1.66667"
              transform="rotate(180 31.9993 102.667)"
              className=" fill-primary-500"
            />
            <circle
              cx="75.6654"
              cy="88"
              r="1.66667"
              transform="rotate(180 75.6654 88)"
              className=" fill-primary-500"
            />
            <circle
              cx="31.9993"
              cy="88"
              r="1.66667"
              transform="rotate(180 31.9993 88)"
              className=" fill-primary-500"
            />
            <circle
              cx="75.6654"
              cy="73.3333"
              r="1.66667"
              transform="rotate(180 75.6654 73.3333)"
              className=" fill-primary-500"
            />
            <circle
              cx="31.9993"
              cy="73.3333"
              r="1.66667"
              transform="rotate(180 31.9993 73.3333)"
              className=" fill-primary-500"
            />
            <circle
              cx="75.6654"
              cy="45"
              r="1.66667"
              transform="rotate(180 75.6654 45)"
              className=" fill-primary-500"
            />
            <circle
              cx="31.9993"
              cy="45"
              r="1.66667"
              transform="rotate(180 31.9993 45)"
              className=" fill-primary-500"
            />
            <circle
              cx="75.6654"
              cy="16"
              r="1.66667"
              transform="rotate(180 75.6654 16)"
              className=" fill-primary-500"
            />
            <circle
              cx="31.9993"
              cy="16"
              r="1.66667"
              transform="rotate(180 31.9993 16)"
              className=" fill-primary-500"
            />
            <circle
              cx="75.6654"
              cy="59"
              r="1.66667"
              transform="rotate(180 75.6654 59)"
              className=" fill-primary-500"
            />
            <circle
              cx="31.9993"
              cy="59"
              r="1.66667"
              transform="rotate(180 31.9993 59)"
              className=" fill-primary-500"
            />
            <circle
              cx="75.6654"
              cy="30.6666"
              r="1.66667"
              transform="rotate(180 75.6654 30.6666)"
              className=" fill-primary-500"
            />
            <circle
              cx="31.9993"
              cy="30.6666"
              r="1.66667"
              transform="rotate(180 31.9993 30.6666)"
              className=" fill-primary-500"
            />
            <circle
              cx="75.6654"
              cy="1.66665"
              r="1.66667"
              transform="rotate(180 75.6654 1.66665)"
              className=" fill-primary-500"
            />
            <circle
              cx="31.9993"
              cy="1.66665"
              r="1.66667"
              transform="rotate(180 31.9993 1.66665)"
              className=" fill-primary-500"
            />
            <circle
              cx="60.9993"
              cy="132"
              r="1.66667"
              transform="rotate(180 60.9993 132)"
              className=" fill-primary-500"
            />
            <circle
              cx="17.3333"
              cy="132"
              r="1.66667"
              transform="rotate(180 17.3333 132)"
              className=" fill-primary-500"
            />
            <circle
              cx="60.9993"
              cy="117.333"
              r="1.66667"
              transform="rotate(180 60.9993 117.333)"
              className=" fill-primary-500"
            />
            <circle
              cx="17.3333"
              cy="117.333"
              r="1.66667"
              transform="rotate(180 17.3333 117.333)"
              className=" fill-primary-500"
            />
            <circle
              cx="60.9993"
              cy="102.667"
              r="1.66667"
              transform="rotate(180 60.9993 102.667)"
              className=" fill-primary-500"
            />
            <circle
              cx="17.3333"
              cy="102.667"
              r="1.66667"
              transform="rotate(180 17.3333 102.667)"
              className=" fill-primary-500"
            />
            <circle
              cx="60.9993"
              cy="88"
              r="1.66667"
              transform="rotate(180 60.9993 88)"
              className=" fill-primary-500"
            />
            <circle
              cx="17.3333"
              cy="88"
              r="1.66667"
              transform="rotate(180 17.3333 88)"
              className=" fill-primary-500"
            />
            <circle
              cx="60.9993"
              cy="73.3333"
              r="1.66667"
              transform="rotate(180 60.9993 73.3333)"
              className=" fill-primary-500"
            />
            <circle
              cx="17.3333"
              cy="73.3333"
              r="1.66667"
              transform="rotate(180 17.3333 73.3333)"
              className=" fill-primary-500"
            />
            <circle
              cx="60.9993"
              cy="45"
              r="1.66667"
              transform="rotate(180 60.9993 45)"
              className=" fill-primary-500"
            />
            <circle
              cx="17.3333"
              cy="45"
              r="1.66667"
              transform="rotate(180 17.3333 45)"
              className=" fill-primary-500"
            />
            <circle
              cx="60.9993"
              cy="16"
              r="1.66667"
              transform="rotate(180 60.9993 16)"
              className=" fill-primary-500"
            />
            <circle
              cx="17.3333"
              cy="16"
              r="1.66667"
              transform="rotate(180 17.3333 16)"
              className=" fill-primary-500"
            />
            <circle
              cx="60.9993"
              cy="59"
              r="1.66667"
              transform="rotate(180 60.9993 59)"
              className=" fill-primary-500"
            />
            <circle
              cx="17.3333"
              cy="59"
              r="1.66667"
              transform="rotate(180 17.3333 59)"
              className=" fill-primary-500"
            />
            <circle
              cx="60.9993"
              cy="30.6666"
              r="1.66667"
              transform="rotate(180 60.9993 30.6666)"
              className=" fill-primary-500"
            />
            <circle
              cx="17.3333"
              cy="30.6666"
              r="1.66667"
              transform="rotate(180 17.3333 30.6666)"
              className=" fill-primary-500"
            />
            <circle
              cx="60.9993"
              cy="1.66665"
              r="1.66667"
              transform="rotate(180 60.9993 1.66665)"
              className=" fill-primary-500"
            />
            <circle
              cx="17.3333"
              cy="1.66665"
              r="1.66667"
              transform="rotate(180 17.3333 1.66665)"
              className=" fill-primary-500"
            />
            <circle
              cx="46.3333"
              cy="132"
              r="1.66667"
              transform="rotate(180 46.3333 132)"
              className=" fill-primary-500"
            />
            <circle
              cx="2.66536"
              cy="132"
              r="1.66667"
              transform="rotate(180 2.66536 132)"
              className=" fill-primary-500"
            />
            <circle
              cx="46.3333"
              cy="117.333"
              r="1.66667"
              transform="rotate(180 46.3333 117.333)"
              className=" fill-primary-500"
            />
            <circle
              cx="2.66536"
              cy="117.333"
              r="1.66667"
              transform="rotate(180 2.66536 117.333)"
              className=" fill-primary-500"
            />
            <circle
              cx="46.3333"
              cy="102.667"
              r="1.66667"
              transform="rotate(180 46.3333 102.667)"
              className=" fill-primary-500"
            />
            <circle
              cx="2.66536"
              cy="102.667"
              r="1.66667"
              transform="rotate(180 2.66536 102.667)"
              className=" fill-primary-500"
            />
            <circle
              cx="46.3333"
              cy="88"
              r="1.66667"
              transform="rotate(180 46.3333 88)"
              className=" fill-primary-500"
            />
            <circle
              cx="2.66536"
              cy="88"
              r="1.66667"
              transform="rotate(180 2.66536 88)"
              className=" fill-primary-500"
            />
            <circle
              cx="46.3333"
              cy="73.3333"
              r="1.66667"
              transform="rotate(180 46.3333 73.3333)"
              className=" fill-primary-500"
            />
            <circle
              cx="2.66536"
              cy="73.3333"
              r="1.66667"
              transform="rotate(180 2.66536 73.3333)"
              className=" fill-primary-500"
            />
            <circle
              cx="46.3333"
              cy="45"
              r="1.66667"
              transform="rotate(180 46.3333 45)"
              className=" fill-primary-500"
            />
            <circle
              cx="2.66536"
              cy="45"
              r="1.66667"
              transform="rotate(180 2.66536 45)"
              className=" fill-primary-500"
            />
            <circle
              cx="46.3333"
              cy="16"
              r="1.66667"
              transform="rotate(180 46.3333 16)"
              className=" fill-primary-500"
            />
            <circle
              cx="2.66536"
              cy="16"
              r="1.66667"
              transform="rotate(180 2.66536 16)"
              className=" fill-primary-500"
            />
            <circle
              cx="46.3333"
              cy="59"
              r="1.66667"
              transform="rotate(180 46.3333 59)"
              className=" fill-primary-500"
            />
            <circle
              cx="2.66536"
              cy="59"
              r="1.66667"
              transform="rotate(180 2.66536 59)"
              className=" fill-primary-500"
            />
            <circle
              cx="46.3333"
              cy="30.6666"
              r="1.66667"
              transform="rotate(180 46.3333 30.6666)"
              className=" fill-primary-500"
            />
            <circle
              cx="2.66536"
              cy="30.6666"
              r="1.66667"
              transform="rotate(180 2.66536 30.6666)"
              className=" fill-primary-500"
            />
            <circle
              cx="46.3333"
              cy="1.66665"
              r="1.66667"
              transform="rotate(180 46.3333 1.66665)"
              className=" fill-primary-500"
            />
            <circle
              cx="2.66536"
              cy="1.66665"
              r="1.66667"
              transform="rotate(180 2.66536 1.66665)"
              className=" fill-primary-500"
            />
          </svg>
        </span>
      </div>
    </div>
  );
};
