import { PropsWithChildren } from "react";
import { Footer } from "./Footer";

export const Layout = ({ children }: PropsWithChildren) => {
  return (
    <div className="bg-current h-screen ">
      <main className="container mx-auto pt-10">{children}</main>
      <Footer />
    </div>
  );
};
