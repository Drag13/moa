import { PracticeResult } from "./practice";
import { useResultPageData } from "./result.page.loader";

const UNKNOWN_AMMO = {
  id: "",
  name: "unknown",
};

export const ResultsPage = () => {
  const { ammos, logs } = useResultPageData();
  return (
    <>
      <h1>Results</h1>

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
