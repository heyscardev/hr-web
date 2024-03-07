import clsx from "clsx";
import { IconType } from "react-icons";
import { FaGoogle, FaLinkedin, FaWhatsapp } from "react-icons/fa6";

interface Props {
  size?: number;
  iconClassName?: string;
}

interface SocialMedia {
  icon: IconType;
  href: string;
  name: string;
}
const socialMedias: SocialMedia[] = [
  {
    name: "Whatsapp",
    href: "https://wa.me/5491140372927?text=Me encanta tu trabajo! y quiero trabajar contigo",
    icon: FaWhatsapp,
  },
  {
    name: "Linkedin",
    href: "https://www.linkedin.com/in/heyscar/",
    icon: FaLinkedin,
  },
  {
    name: "Gmail",
    href: "mailto:heyscar.dev@gmail.com",
    icon: FaGoogle,
  },
];
export const SocialButtons = ({ size = 20, iconClassName }: Props) => {
  return (
    <>
      {socialMedias.map((social) => (
        <a
          key={social.name}
          className={clsx(
            "text-gray-500 cursor-pointer hover:text-gray-700 mr-2"
          )}
          href={social.href}
          target="_blank"
        >
          <social.icon size={size} className={iconClassName} />
        </a>
      ))}
    </>
  );
};
