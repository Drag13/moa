import { openDB } from "idb";
import { migrate } from "./migrations/migrator";
import { SCHEMA_V2 } from "./migrations/migration.new-logs.v2";

export const DB_METADATA = {
  name: "SIMPLE_MOA_DB_PRIMARY",
  currentVersion: 2,
  tables: SCHEMA_V2,
} as const;

type Tables = typeof DB_METADATA["tables"][keyof typeof DB_METADATA["tables"]];

export function ensureCreated() {
  return openDB(DB_METADATA.name, DB_METADATA.currentVersion, {
    upgrade: migrate,
  });
}

export async function fetchTableBy(
  tableName: Tables,
  index: string,
  searchTerm: string
) {
  const db = await openDB(DB_METADATA.name);

  return db
    .transaction(tableName, "readonly")
    .objectStore(tableName)
    .index(index)
    .get(searchTerm);
}

export async function fetchAll(tableName: Tables) {
  const db = await openDB(DB_METADATA.name);
  return db.transaction(tableName).objectStore(tableName).getAll();
}
