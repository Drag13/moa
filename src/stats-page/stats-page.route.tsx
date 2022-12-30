import React, { Suspense } from "react";
import { fetchLogs } from "../data/fetch/log";
import { AppRoutes } from "../shared/path";
import { mapLogsDtoToLogs } from "../shared/services/mapper";
const NewPage = React.lazy(() => import("./stats.page"));

export const newLogPageRoute = {
  path: AppRoutes.NewLogPage(),
  element: (
    <Suspense fallback={"...loading"}>
      <NewPage />
    </Suspense>
  ),
  loader: () => fetchLogs(mapLogsDtoToLogs),
};
