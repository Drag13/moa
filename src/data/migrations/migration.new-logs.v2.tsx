import { IDBPDatabase } from "idb";
import { INITIAL_SCHEMA } from "./seed";
import logs from "../log.json";

export const SCHEMA_V2 = {
  ...INITIAL_SCHEMA,
  logs: "logs",
};

export function createLogsScheme(db: IDBPDatabase<unknown>) {
  const logsTable = db.createObjectStore(SCHEMA_V2.logs, {
    keyPath: "id",
  });

  logsTable.createIndex("id", "id", { unique: true });
  logsTable.createIndex("date", "date");
  logsTable.createIndex("series", "series");

  return logsTable.transaction.done;
}

export function fulfillLogsData(db: IDBPDatabase<unknown>) {
  const logsStore = db
    .transaction(SCHEMA_V2.logs, "readwrite")
    .objectStore(SCHEMA_V2.logs);

  const result = logs.map((l) => logsStore.add(l));

  return Promise.all(result);
}
