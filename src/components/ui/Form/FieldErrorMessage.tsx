import { generateFieldError } from "@/utils";
import { FieldError, RegisterOptions } from "react-hook-form";

interface Props {
  error?: FieldError;
  options: RegisterOptions<any, any>;
}
export const FieldErrorMessage = ({ error, options }: Props) => {
  return error ? (
    <span className="text-sm fade-in text-red-500">
      *{generateFieldError(error, options)}
    </span>
  ) : (
    <span className="text-sm ">&nbsp;</span>
  );
};
