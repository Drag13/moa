import { NavLink } from "react-router-dom";
import { AppRoutes } from "../shared/path";
import { PracticeResult } from "./practice";
import { useResultPageData } from "./result.page.loader";

const UNKNOWN_AMMO = {
  id: "",
  name: "unknown",
};

export const LogsPage = () => {
  const { ammos, logs } = useResultPageData();
  return (
    <>
      <h1>Results</h1>

      <NavLink to={AppRoutes.NewLogPage()}>Add new entry</NavLink>

      <ul>
        {logs.map((r, i) => (
          <li key={i}>
            <PracticeResult
              ammo={ammos.find((x) => x.id === r.ammoId) ?? UNKNOWN_AMMO}
              date={r.date}
              distance={r.distance}
              result={r.score}
            />
          </li>
        ))}
      </ul>
    </>
  );
};
