import Image from "next/image";
import Link from "next/link";

interface Props {
  title?: string;
  content?: string;
  linkHref?: string;
  linkTitle?: string;
  image?: { src: string; alt: string };
}

export const Card = ({
  title,
  image,
  content,
  linkHref,
  linkTitle = "Saber Mas",
}: Props) => {
  return (
    <article className="bg-white rounded-2xl shadow-xl px-8 py-12 flex flex-col sm:px-12 lg:px-8">
      <div className="mb-12 space-y-4 flex flex-col flex-1">
        <h3 className="text-2xl font-semibold text-primary-400 ">{title}</h3>
        <p className="mb-6">{content}</p>
        {linkHref && (
          <Link href={linkHref} className="block font-medium text-primary-300">
            {linkTitle}
          </Link>
        )}
      </div>
      <div className="flex-1"></div>
      {image && (
        <Image
          src={image.src}
          alt={image.alt}
          unoptimized
          width={600}
          height={600}
          className="w-2/3 ml-auto -mb-12"
          loading="lazy"
        />
      )}
    </article>
  );
};
