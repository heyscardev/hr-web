"use client";
import clsx from "clsx";
import Link from "next/link";
import { useParams, usePathname } from "next/navigation";
import { MouseEventHandler, useEffect, useState } from "react";

interface Props {
  href: string;
  title?: string;
  icon?: React.ReactNode;
  active?: boolean;
  scroll?: boolean;
  onClick?: MouseEventHandler<HTMLAnchorElement>;
}

export const NavbarLink = ({ icon, title, active = false, ...link }: Props) => {
  const pathname = usePathname();
  const params = useParams();
  const [currentHash, setCurrentHash] = useState("");

  useEffect(() => {
    const updateHash = () => {
      setCurrentHash(window.location.hash);
    };

    // Set initial hash
    updateHash();

    // Listen for hash changes
    window.addEventListener("hashchange", updateHash);

    return () => {
      window.removeEventListener("hashchange", updateHash);
    };
  }, [params]);

  const isCurrent = (() => {
    // Si el href incluye un hash, comparamos pathname + hash
    if (link.href) {
      const currentUrl = pathname + currentHash;
      return currentUrl === link.href;
    }
    // Si no hay hash, comparamos solo el pathname
    return pathname === link.href;
  })();

  return (
    <li>
      <Link
        {...link}
        className={clsx(
          " underline underline-offset-4 hover:text-primary-500 text-lg lg:text-sm  transition-all font-semibold",
          {
            "text-red-500": isCurrent,
            "text-secondary-950": !isCurrent,
          }
        )}
      >
        {icon}
        {title}
      </Link>
    </li>
  );
};
