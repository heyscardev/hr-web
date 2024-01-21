"use client";

import clsx from "clsx";
import { usePathname } from "next/navigation";

interface Props {
  children: React.ReactNode;
}
const routesWithSmoth = ["/"];

export const ScrollLayout = ({ children }: Props) => {
  const pathname = usePathname();
  const smooth = !!routesWithSmoth.includes(pathname);
  return (
    <div
      className={clsx(
        "min-h-screen flex flex-col max-h-screen overflow-x-hidden ",
        { "scroll-smooth": smooth }
      )}
    >
      {children}
    </div>
  );
};
