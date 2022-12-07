import { Outlet } from "react-router-dom";
import { Footer } from "./Footer";

export const Layout = () => {
  return (
    <div className="bg-current h-screen ">
      <main className="container mx-auto pt-10">
        <Outlet></Outlet>
      </main>
      <Footer />
    </div>
  );
};
