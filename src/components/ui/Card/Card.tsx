import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";

interface Props {
  title?: string;
  Content?: ReactNode;
  linkHref?: string;
  linkTitle?: string;
  image?: { src: string; alt: string };
  className?: string;
}

export const Card = ({
  title,
  image,
  Content,
  className,
  linkHref,
  linkTitle = "Saber Mas",
}: Props) => {
  return (
    <article
      className={
        "bg-white rounded-2xl shadow-lg px-8 py-12 flex flex-col sm:px-12 lg:px-8 " +
        className
      }
    >
      <div className="mb-12 space-y-4 flex flex-col flex-1">
        <h3 className="text-2xl font-semibold text-primary-400 ">{title}</h3>
        {typeof Content === "string" ? (
          <p className="mb-6">{Content}</p>
        ) : (
          <div className="mb-6">{Content}</div>
        )}
        {linkHref && (
          <Link href={linkHref} className="block font-medium text-primary-300">
            {linkTitle}
          </Link>
        )}
      </div>
      <div className="flex-1 "></div>
      {image && (
        <Image
          src={image.src}
          alt={image.alt}
          unoptimized
          width={600}
          height={600}
          className="w-2/3 ml-auto -mb-12 flex-1"
        />
      )}
    </article>
  );
};
