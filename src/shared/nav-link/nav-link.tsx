import { PropsWithChildren } from "react";
import { NavLink } from "react-router-dom";
import { AppPath } from "../path";

type AppLinksProps = PropsWithChildren<{ to: AppPath }>;

export const AppLink = ({ to, children }: AppLinksProps) => (
  <NavLink className="" to={to}>
    {children}
  </NavLink>
);
