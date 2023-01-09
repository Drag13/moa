import React, { Suspense } from "react";
import { fetchLogs } from "../data/fetch/log";
import { AppRoutes } from "../shared/path";
import { mapLogsDtoToLogs } from "../shared/services/mapper";
const NewPage = React.lazy(() => import("./progress.page"));

export const progressPageRoute = {
  path: AppRoutes.Progress(),
  element: (
    <Suspense fallback={"...loading"}>
      <NewPage />
    </Suspense>
  ),
  loader: () => fetchLogs(mapLogsDtoToLogs),
};
