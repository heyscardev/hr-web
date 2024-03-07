import Image from "next/image";
interface Props {
  size?: number;
}
export const LoaderToButtons = ({ size = 30 }: Props) => {
  const spacing = size * 0.18;
  const border = spacing * 0.4;
  return (
    <div className="relative ">
      <div
        className="absolute "
        style={{ top: spacing, right: spacing, left: spacing, bottom: spacing }}
      >
        <Image
          className="object-contain h-full w-full "
          src="/imgs/logo-gradient.png"
          width={100}
          height={100}
          priority
          alt="logo heyscar romero"
        />
      </div>
      <div
        className={`rounded-full border-t-2 border-b-2 border-gray-200`}
        style={{
          height: size,
          width: size,
          borderBottomWidth: border,
          borderTopWidth: border,
        }}
      ></div>
      <div
        style={{
          height: size,
          width: size,
          borderBottomWidth: border,
          borderTopWidth: border,
        }}
        className={`absolute top-0 left-0  rounded-full  border-primary-500 animate-spin`}
      ></div>
    </div>
  );
};
