"use client";
import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { MouseEventHandler } from "react";
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
  const isCurrent = active || pathname === link.href;
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
