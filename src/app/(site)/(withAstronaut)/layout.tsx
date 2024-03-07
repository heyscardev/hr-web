import Image from "next/image";

export default function RootLayout({
  children,
  ...rest
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col relative overflow-hidden">
      <Image
        className="astrounaut-image-global animate-wiggle lg:animate-bounce animate-infinite animate-duration-[15000ms] lg:animate-duration-[20000ms]  animate-ease-in-out"
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
