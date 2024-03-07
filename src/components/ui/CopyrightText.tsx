interface Props {}
export const CopyrightText = ({}: Props) => {
  const year = new Date().getFullYear();
  return `Heyscar Romero © ${year} Todos los derechos reservados`;
};
