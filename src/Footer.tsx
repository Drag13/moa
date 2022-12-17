import { AppLink } from "./shared/nav-link/nav-link";
import { AppRoutes } from "./shared/path";
import styles from "./footer.module.css";

export const Footer = () => (
  <footer className={styles.root}>
    <AppLink to={AppRoutes.Calculator()}>Calculator</AppLink>
    <AppLink to={AppRoutes.Logs()}>Logs</AppLink>
  </footer>
);
