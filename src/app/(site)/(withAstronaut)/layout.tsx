import Image from "next/image";
import clsx from "clsx";
import { useState } from "react";

export default function RootLayout({
  children,
  ...rest
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col relative overflow-hidden  ">
  
         <Image
        className={clsx(
          "astrounaut-image-global animate-wiggle lg:animate-bounce lg:hover:animate-rotate-y animate-infinite animate-duration-[15000ms] lg:animate-duration-[20000ms]  animate-ease-in-out ",
        
        )}
        src="/imgs/astronaut-background.png"
        alt="astounaut"
        width={400}
        height={800}
        loading="eager"
      />

     
      {children}
    </div>
  );
}
