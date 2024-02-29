import { FieldError, RegisterOptions } from "react-hook-form";

export const generateFieldError = (
  error: FieldError,
  options: RegisterOptions
) => {
  if (error.message) return error.message;

  switch (error.type) {
    case "required":
      return `Requerido.`;

    case "maxLength":
      return `Excede los ${options.maxLength} caracteres.`;

    case "minLength":
      return `Debe tener mas de  ${options.minLength} caracteres.`;
    case "onlyNumbers":
      return `Solo Números.`;
    case "onlyEmail":
      return `Correo Inválido.`;

    default:
      return error.type;
  }
};

// import { FieldError, RegisterOptions } from "react-hook-form";

// export const generateFieldError = (
//   error: FieldError,
//   options: RegisterOptions
// ) => {
//   if (error.message) return error.message;

//   switch (error.type) {
//     case "required":
//       return `This Field is Required.`;

//     case "maxLength":
//       return `This Field exceds ${options.maxLength} characters.`;

//     case "minLength":
//       return `This Field must have more than ${options.minLength}.`;
//     case "onlyNumbers":
//       return `This Field only must contain numbers. `;
//     case "invalidEmail":
//       return `This Field only must contain numbers. `;

//     default:
//       return error.type;
//   }
// };
