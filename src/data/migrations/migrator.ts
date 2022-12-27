import { IDBPDatabase, IDBPTransaction } from "idb";
import { createInitialSchema } from "./initial-seed";

// const schemaMigrations = [createInitialSchema];
// const dataMigrations = [fulfillInitialData];

export async function migrate(
  database: IDBPDatabase<unknown>,
  oldVersion: number,
  _newVersion: number | null,
  _transaction: IDBPTransaction<unknown, string[], "versionchange">,
  _event: IDBVersionChangeEvent
) {
  // get all relevant migrations
  // const schemas = schemaMigrations.slice(oldVersion);
  // const data = dataMigrations.slice(oldVersion);

  await createInitialSchema(database);

  //wait until all schemas created
  //await Promise.all(schemas.map((m) => m(database)));
  // await Promise.all(data.map((migrate) => migrate(database)));
}
