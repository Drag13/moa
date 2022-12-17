import { Outlet } from "react-router-dom";
import { Footer } from "./Footer";
import styles from "./layout.module.css";

export const Layout = () => {
  return (
    <>
      <main className={styles.root}>
        <Outlet></Outlet>
      </main>
      <Footer />
    </>
  );
};
