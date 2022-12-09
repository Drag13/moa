import { NavLink } from "react-router-dom";

type PracticeResultProps = {
  distance: number;
  result: number;
  date: Date;
  ammo: { name: string; id: string };
};

export const PracticeResult = ({
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
      with <NavLink to={`/ammo/${ammo.id}`}>{ammo.name}</NavLink>
    </span>
  </p>
);
