import { Body, Head, Section, Tailwind } from "@react-email/components";
import config from "../../../tailwind.config";

interface Props {
  key: string | number;
  children: React.ReactNode;
}
export const EmailLayout = ({ key, children }: Props) => {
  return (
    <Tailwind config={config}>
      <Head></Head>
      <Body key={key}>
        <div className="max-w-2xl px-6 py-8 mx-auto bg-gray-200 dark:bg-gray-900">
          {children}
        </div>
      </Body>
    </Tailwind>
  );
};
