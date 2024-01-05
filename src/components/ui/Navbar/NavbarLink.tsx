"use client";
import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
interface Props {
  href: string;
  title?: string;
  icon?: React.ReactNode;
}
export const NavbarLink = ({ icon, title, href }: Props) => {
  const pathname = usePathname();
  const isCurrent = pathname === href;
  return (
    <li>
      <Link
        href={href}
        className={clsx(
          " underline underline-offset-4 hover:text-primary-500 text-sm transition-all font-semibold",
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
