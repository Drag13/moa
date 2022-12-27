import { openDB } from "idb";
import { AppDbSchema, DB_METADATA } from "../db";
import { LogEntryDto } from "../migrations/initial-seed";

export async function fetchLogs<T>(mapper: (dto: LogEntryDto[]) => T) {
  const db = await openDB<AppDbSchema>(DB_METADATA.name);
  const logs = await db
    .transaction("logs", "readonly")
    .objectStore("logs")
    .getAll();

  return mapper(logs);
}
