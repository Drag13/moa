import { openDB } from "idb";
import { AppDbSchema, DB_METADATA } from "../../data/db";

export const fetchAmmoById = async (id: string) => {
  const db = await openDB<AppDbSchema>(DB_METADATA.name);
  const ammos = await db
    .transaction("ammos", "readonly")
    .objectStore("ammos")
    .index("id")
    .get(id);

  return ammos;
};
