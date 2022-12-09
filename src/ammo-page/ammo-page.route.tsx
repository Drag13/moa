import { RouteObject } from "react-router-dom";
import { AppRoutes } from "../shared/path";
import { AmmoPage } from "./ammo-page";
import { ammoPageLoader } from "./ammo.loader";

export const ammoPageRoute: RouteObject = {
  path: AppRoutes.Ammo(),
  element: <AmmoPage />,
  loader: ammoPageLoader,
};
