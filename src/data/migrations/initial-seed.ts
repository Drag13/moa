import { DBSchema, IDBPDatabase } from "idb";
import ammos from "../ammo.json";
import logs from "../log.json";

type StripArray<T> = T extends Array<infer U> ? U : never;
export type AmmoDto = StripArray<typeof ammos>;
export type LogEntryDto = StripArray<typeof logs>;

type Ammo = {
  value: AmmoDto;
  key: string;
  indexes: {
    id: string;
    name: string;
    velocityFPS: string;
    k: number;
    weightGrn: number;
    prices: [];
  };
};

type Log = {
  value: LogEntryDto;
  key: string;
  indexes: { id: string };
};

type SchemaV1 = {
  ammos: Ammo;
  logs: Log;
};

export interface IAppDbSchema_0 extends DBSchema, SchemaV1 {}

export async function createInitialSchema(db: IDBPDatabase<unknown>) {
  const migratedDb = db as IDBPDatabase<IAppDbSchema_0>;
  const ammoTable = migratedDb.createObjectStore("ammos", {
    keyPath: "id",
  });

  ammoTable.createIndex("id", "id", { unique: true });
  ammoTable.createIndex("name", "name", { unique: true });
  ammoTable.createIndex("velocityFPS", "velocityFPS");
  ammoTable.createIndex("k", "k");
  ammoTable.createIndex("weightGrn", "weightGrn");
  ammoTable.createIndex("prices", "prices", { multiEntry: true });

  const logsTable = migratedDb.createObjectStore("logs", {
    keyPath: "id",
  });

  logsTable.createIndex("id", "id", { unique: true });

  await Promise.all([ammoTable.transaction.done, logsTable.transaction.done]);

  const ammoT = migratedDb
    .transaction("ammos", "readwrite")
    .objectStore("ammos");

  await Promise.all(ammos.map((a) => ammoT.add(a)));

  const logsT = migratedDb.transaction("logs", "readwrite").objectStore("logs");

  await Promise.all(logs.map((l) => logsT.add(l)));
}
