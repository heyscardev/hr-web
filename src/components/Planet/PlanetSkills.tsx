import clsx from "clsx";

interface Props {
  className?: string;
  title: string;
  content: string;
  primary?: boolean;
}
export const PlanetSkills = ({
  className,
  title,
  content,
  primary = false,
}: Props) => {
  return (
    <div className={`${className}`}>
      <div className="flex items-end  mb-3 ">
        <div
          className={clsx(" w-6 h-1", {
            "bg-orange-500": !primary,
            "bg-primary-400": primary,
          })}
        ></div>
        <h2
          className={clsx("text-xl  font-semibold font-hr-title text-start", {
            "text-orange-500": !primary,
            "text-primary-400": primary,
          })}
        >
          {title}
        </h2>
      </div>

      <p className="text-justify">{content}</p>
    </div>
  );
};
