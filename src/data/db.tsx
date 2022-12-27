import { openDB } from "idb";
import { migrate } from "./migrations/migrator";
import { IAppDbSchema_0 } from "./migrations/initial-seed";

export const DB_METADATA = {
  name: "SIMPLE_MOA_DB_PRIMARY",
  currentVersion: 2,
} as const;

export function ensureCreated() {
  return openDB(DB_METADATA.name, DB_METADATA.currentVersion, {
    upgrade: migrate,
  });
}

export type AppDbSchema = IAppDbSchema_0;
