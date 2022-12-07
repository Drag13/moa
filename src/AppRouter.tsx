import { createHashRouter } from "react-router-dom";
import { mmToMoaRoute } from "./calculator/mm-to-moa.route";
import { LandingRoute } from "./landing/Landing.route";
import { Layout } from "./Layout";

export const AppRouter = createHashRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      LandingRoute,
      mmToMoaRoute,
      { path: "/ammo/:id", element: <>ammo</> },
    ],
  },
]);
