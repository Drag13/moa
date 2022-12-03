import { PropsWithChildren } from "react";
import { NavLink } from "react-router-dom";
import { AppRoutes } from "../path";

type AppLinksProps = PropsWithChildren<{ to: AppRoutes }>;
export const AppLink = ({ to, children }: AppLinksProps) => (
  <NavLink className="text-lg pt-2 hover:underline" to={to}>
    {children}
  </NavLink>
);
