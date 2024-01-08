import { Footer, Navbar } from "@/components";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex flex-col max-h-screen md:snap-y snap-proximity overflow-y-scroll   scroll-smooth">
      <Navbar />
      <main className=" flex-1 flex flex-col ">{children}</main>
      <Footer />
    </div>
  );
}
