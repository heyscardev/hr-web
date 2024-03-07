import Image from "next/image";

export const Loader = () => {
  return (
    <div className="relative ">
      <div className="absolute top-5 left-5 right-5  bottom-5">
        <Image
          className="object-contain h-full w-full "
          src="/imgs/logo-gradient.png"
          width={100}
          height={100}
          priority
          alt="logo heyscar romero"
        />
      </div>
      <div className="h-24 w-24 rounded-full border-t-8 border-b-8 border-gray-200"></div>
      <div className="absolute top-0 left-0 h-24 w-24 rounded-full border-t-8 border-b-8 border-primary-500 animate-spin"></div>
    </div>
  );
};
