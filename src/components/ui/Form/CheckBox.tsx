import React from "react";
import clsx from "clsx";
import {
  FieldError,
  UseFormRegister,
  RegisterOptions,
  FieldValues,
  Path,
} from "react-hook-form";

interface FieldProps<T extends FieldValues> {
  label: string;
  id: string;
  name: Path<T>;
  type?: "checkbox" | "radio";
  error?: FieldError;
  register: UseFormRegister<T>;
}
type CustomFieldProps<T extends FieldValues> = FieldProps<T> &
  RegisterOptions<T, Path<T>>;

export const CheckBox = <T extends FieldValues>({
  label,
  id,
  type = "checkbox",
  error,
  name,
  register,
  ...rest
}: CustomFieldProps<T>) => {
  return (
    <div className="mb-5 flex flex-col">
      {error && (
        <span className="text-sm fade-in text-red-500">
          *{error.message || error.type}
        </span>
      )}
      <div className="flex items-center">
        <label
          className="relative flex cursor-pointer items-center rounded-full mr-3"
          htmlFor={id}
          data-ripple-dark="true"
        >
          <input
            {...register(name, {
              ...rest,
            })}
            id={id}
            type={type}
            className={clsx(
              "before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border border-gray-800 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-blue-500 checked:bg-blue-500 checked:before:bg-blue-500 hover:before:opacity-10",
              {
                "border-red-500": error,
              }
            )}
          />
          <div className="pointer-events-none absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 text-white opacity-0 transition-opacity peer-checked:opacity-100">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-3.5 w-3.5"
              viewBox="0 0 20 20"
              fill="currentColor"
              stroke="currentColor"
              strokeWidth="1"
            >
              <path
                fillRule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clipRule="evenodd"
              ></path>
            </svg>
          </div>
        </label>
        <label htmlFor={id} className="cursor-pointer">
          {label}
        </label>
      </div>
    </div>
  );
};
