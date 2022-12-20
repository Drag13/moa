import { IDBPDatabase, IDBPTransaction } from "idb";
import { createLogsScheme, fulfillLogsData } from "./migration.new-logs.v2";
import { createAmmoScheme, fulfillAmmoData } from "./seed";

const schemaMigrations = [createLogsScheme, createAmmoScheme];
const dataMigrations = [fulfillAmmoData, fulfillLogsData];

export async function migrate(
  database: IDBPDatabase<unknown>,
  oldVersion: number,
  _newVersion: number | null,
  _transaction: IDBPTransaction<unknown, string[], "versionchange">,
  _event: IDBVersionChangeEvent
) {
  console.log("tet");

  // get all relevant migrations
  const relevantMigrations = schemaMigrations.slice(oldVersion);

  //wait until all schemas created
  await Promise.all(relevantMigrations.map((m) => m(database)));

  // fulfill data
  for (const updateData of dataMigrations) {
    await updateData(database);
  }
}
