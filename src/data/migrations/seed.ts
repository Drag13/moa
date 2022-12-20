import { IDBPDatabase } from "idb";
import ammo from "../ammo.json";

export const INITIAL_SCHEMA = {
  ammos: "ammo",
};

export function createAmmoScheme(db: IDBPDatabase<unknown>) {
  const ammoTable = db.createObjectStore(INITIAL_SCHEMA.ammos, {
    keyPath: "id",
  });

  ammoTable.createIndex("id", "id", { unique: true });
  ammoTable.createIndex("name", "name", { unique: true });
  ammoTable.createIndex("velocityFPS", "velocityFPS");
  ammoTable.createIndex("k", "k");
  ammoTable.createIndex("weightGrn", "weightGrn");
  ammoTable.createIndex("prices", "prices", { multiEntry: true });

  return ammoTable.transaction.done;
}

export function fulfillAmmoData(db: IDBPDatabase<unknown>) {
  const ammoTable = db
    .transaction(INITIAL_SCHEMA.ammos, "readwrite")
    .objectStore(INITIAL_SCHEMA.ammos);

  const result = ammo.map((l) => ammoTable.add(l));

  return Promise.all(result);
}
