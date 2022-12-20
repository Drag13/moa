import { fetchTableBy } from "../../data/db";

export const fetchAmmoById = (id: string) => {
  return fetchTableBy("ammo", "id", id);
};
