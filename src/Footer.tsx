import { AppLink } from "./shared/nav-link/nav-link";
import { AppRoutes } from "./shared/path";

export const Footer = () => (
  <footer className="text-white flex justify-between fixed bottom-0 left-0 z-20 p-4 w-full">
    <AppLink to={AppRoutes.Calculator()}>Calculator</AppLink>
    <AppLink to={AppRoutes.Logs()}>Logs</AppLink>
  </footer>
);
