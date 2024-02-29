import React from "react";
import clsx from "clsx";
import {
  FieldError,
  UseFormRegister,
  RegisterOptions,
  FieldValues,
  Path,
} from "react-hook-form";
import { FieldErrorMessage } from "./FieldErrorMessage";

interface FieldProps<T extends FieldValues> {
  label: string;
  id: string;
  name: Path<T>;
  rows?: number;
  error?: FieldError;
  autoComplete?: string;
  onlyNumbers?: boolean;
  onlyEmail?: boolean;
  register: UseFormRegister<T>;
}
type CustomFieldProps<T extends FieldValues> = FieldProps<T> &
  RegisterOptions<T, Path<T>>;

//validations
const onlyNumbersVal = {
  onlyNumbers: (value = "") => !!/^(0|[1-9]\d*)(\.\d+)?$/.test(value),
};
const onlyEmailVal = {
  onlyEmail: (value = "") =>
    !!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value),
};

export const TextArea = <T extends FieldValues>({
  label,
  id,
  error,
  autoComplete,
  name,
  rows,
  register,
  onlyEmail,
  onlyNumbers,
  ...rest
}: CustomFieldProps<T>) => {
  const { validate = {}, maxLength } = rest;
  const withOurValidation = onlyNumbers || onlyEmail;

  const validateObj = !withOurValidation
    ? validate
    : {
        ...validate,
        ...(onlyNumbers ? onlyNumbersVal : {}),
        ...(onlyEmail ? onlyEmailVal : {}),
      };
  return (
    <div className="mb-3 flex flex-col">
      <FieldErrorMessage error={error} options={rest} />
      <textarea
        placeholder={label}
        {...register(name, { ...rest, validate: validateObj })}
        id={id}
        rows={rows}
        maxLength={!maxLength || isNaN(+maxLength) ? -1 : +maxLength}
        autoComplete={autoComplete}
        className={clsx(
          `
            w-full
            rounded
            py-3
            px-[14px]
            text-body-color text-base
            border border-[f0f0f0]
            resize-none
            outline-none
            focus-visible:shadow-none
            focus:border-primary
          `,
          {
            "border-red-500 placeholder:text-red-500": error,
          }
        )}
      />
    </div>
  );
};
