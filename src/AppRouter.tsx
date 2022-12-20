import { createBrowserRouter } from "react-router-dom";
import { ammoPageRoute } from "./ammo-page/ammo-page.route";
import { mmToMoaRoute } from "./calculator-page/mm-to-moa.route";
import { Layout } from "./Layout";
import { resultsPageRoute } from "./results-page/result-page.route";

export const AppRouter = () => {
  return createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [resultsPageRoute, mmToMoaRoute, ammoPageRoute],
    },
  ]);
};
