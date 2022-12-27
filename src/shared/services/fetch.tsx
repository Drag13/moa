import { openDB } from "idb";
import { AppDbSchema, DB_METADATA } from "../../data/db";
import { AmmoDto, LogEntryDto } from "../../data/migrations/initial-seed";

export async function fetchAmmoById<T>(
  id: string,
  mapper: (dto: AmmoDto) => T
) {
  const db = await openDB<AppDbSchema>(DB_METADATA.name);
  const ammos = await db
    .transaction("ammos", "readonly")
    .objectStore("ammos")
    .index("id")
    .get(id);

  return ammos ? mapper(ammos) : null;
}

export async function fetchAllAmmos<T>(mapper: (dto: AmmoDto) => T) {
  const db = await openDB<AppDbSchema>(DB_METADATA.name);
  const ammos = await db
    .transaction("ammos", "readonly")
    .objectStore("ammos")
    .getAll();

  return ammos.map(mapper);
}

export async function fetchLogs<T>(mapper: (dto: LogEntryDto[]) => T) {
  const db = await openDB<AppDbSchema>(DB_METADATA.name);
  const logs = await db
    .transaction("logs", "readonly")
    .objectStore("logs")
    .getAll();

  return mapper(logs);
}
