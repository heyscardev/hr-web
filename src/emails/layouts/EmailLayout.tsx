/* eslint-disable @next/next/no-head-element */
import { Body, Head, Tailwind, Html } from "@react-email/components";
import config from "../../../tailwind.config";

interface Props {
  key: string | number;
  children: React.ReactNode;
}
export const EmailLayout = ({ key, children }: Props) => {
  return (
    <Html>
      <Tailwind config={config}>
        <head>
          <title>Heyscar Romero Desarrollador Web</title>
        </head>
        <Body key={key}>
          <div className="max-w-2xl px-2 py-3 mx-auto bg-gray-100 dark:bg-gray-900 rounded-lg">
            {children}
          </div>
        </Body>
      </Tailwind>
    </Html>
  );
};
