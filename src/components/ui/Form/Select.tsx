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
type Option = number | string | { value: string | number; label: string };
interface FieldProps<T extends FieldValues> {
  label: string;
  id: string;
  name: Path<T>;
  type?: string;
  error?: FieldError;
  autoComplete?: string;
  options: Option[];
  defaultValue?: string | number;
  onlyNumbers?: boolean;
  register: UseFormRegister<T>;
}
type CustomFieldProps<T extends FieldValues> = FieldProps<T> &
  RegisterOptions<T, Path<T>>;

//validations
const onlyNumbersVal = {
  onlyNumbers: (value = "") => !!/^(0|[1-9]\d*)(\.\d+)?$/.test(value),
};

export const Select = <T extends FieldValues>({
  label,
  id,
  type = "text",
  error,
  autoComplete,
  name,
  register,
  options,
  onlyNumbers,
  defaultValue = "",
  ...rest
}: CustomFieldProps<T>) => {
  const { validate = {} } = rest;
  const withOurValidation = onlyNumbers;

  const validateObj = !withOurValidation
    ? validate
    : {
        ...validate,
        ...(onlyNumbers ? onlyNumbersVal : {}),
      };
  return (
    <div className="mb-5 flex flex-col">
      <FieldErrorMessage error={error} options={rest} />

      <label htmlFor={id}>{label}</label>
      <select
        defaultValue={defaultValue}
        {...register(name, { ...rest, validate: validateObj })}
        id={id}
        autoComplete={id || autoComplete}
        className={clsx(
          "px-5 py-2 border bg-gray-300 rounded dark:bg-neutral-800  border-r-8  outline border-transparent",
          {
            "outline-red-500": error,
          }
        )}
      >
        <option value="" disabled>
          Select An Option
        </option>
        {options.map((value, index) => {
          if (typeof value === "string" || typeof value === "number")
            return (
              <option value={value} key={`index-${value}`}>
                {value}
              </option>
            );
          return (
            <option value={value.value} key={`index-${value.label}`}>
              {value.label}
            </option>
          );
        })}
      </select>
    </div>
  );
};
