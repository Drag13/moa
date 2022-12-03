import { RouteObject } from "react-router-dom";
import { AppRoutes } from "../shared/path";
import { Landing } from "./Landing";

export const LandingRoute: RouteObject = {
  path: AppRoutes.Landing,
  element: <Landing />,
  index: true,
};
