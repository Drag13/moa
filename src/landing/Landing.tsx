import { NavLink } from "react-router-dom";
import { useAmmoData, usePracticeData } from "./landing.loader";

type PracticeResultProps = {
  distance: number;
  result: number;
  date: Date;
  ammo: { name: string; id: string };
};

const PracticeResult = ({
  distance,
  result,
  date,
  ammo,
}: PracticeResultProps) => (
  <p className="flex text-white">
    <span>{date.toDateString()}:</span>
    <span>{distance}m</span>
    <span>{result} MOA</span>
    <span>
      with <NavLink to={`/ammo/${ammo.id}`}>{ammo.name}</NavLink>{" "}
    </span>
  </p>
);

const UNKNOWN_AMMO = {
  id: "",
  name: "unknown",
};

export const Landing = () => {
  const logs = usePracticeData();
  const ammos = useAmmoData();
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
