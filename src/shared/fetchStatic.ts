import results from "../data/log.json";
import ammo from "../data/ammo.json";
import { matchCaseInsensitive } from "./string";

type Path = "results" | "ammo" | `ammo.${string}`;

export function fetchStatic(path: Path): any {
  switch (path) {
    case "ammo":
      return Promise.resolve(ammo);

    case "results":
      return Promise.resolve(results);

    default: {
      const ammoCode = path.split(".")[1];
      return ammo.find((v) => matchCaseInsensitive(v.id, ammoCode));
    }
  }
}
