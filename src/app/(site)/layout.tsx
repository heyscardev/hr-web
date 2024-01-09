import { Footer, Navbar } from "@/components";
import Image from "next/image";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex flex-col max-h-screen overflow-x-hidden  scroll-smooth">
      <Navbar />
      <main className=" flex-1 flex flex-col relative  ">
        <Image
          className="astrounaut-image-global animate-wiggle lg:animate-bounce animate-infinite animate-duration-[15000ms] lg:animate-duration-[20000ms]  animate-ease-in-out"
          src="/imgs/astronaut-background.png"
          alt="astounaut"
          width={100}
          height={100}
          unoptimized
        />
        {children}
      </main>
      <Footer />
    </div>
  );
}
