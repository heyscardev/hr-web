import { Footer, Navbar } from "@/components";
import clsx from "clsx";
import { ScrollLayout } from "./ScrollLayout";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ScrollLayout>
      <Navbar />
      <main className=" flex-1 flex flex-col   ">{children}</main>
      <Footer />{" "}
    </ScrollLayout>
  );
}
