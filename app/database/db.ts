import * as SQLite from "expo-sqlite"

const DB_NAME = "navigateme.db"

let db: Promise<SQLite.SQLiteDatabase> | null = null

export function getDb() {
    if(!db){
        db = SQLite.openDatabaseAsync(DB_NAME)
    }
    return db;
}

export async function createOrMigrateDbIfNeeded() {
    const db = await getDb();

    await db.execAsync(`
    PRAGMA journal_mode = WAL;
  `);

  const row = await db.getFirstAsync<{ user_version: number }>(
    "PRAGMA user_version;"
  );

  const currentVersion = row?.user_version ?? 0;
  const targetVersion = 1;

  if (currentVersion >= targetVersion) return;

  // Migration v1: create todos table
  await db.withTransactionAsync(async () => {
    await db.execAsync(`
      CREATE TABLE IF NOT EXISTS todos (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        title TEXT NOT NULL,
        created_at INTEGER NOT NULL
      );
      CREATE INDEX IF NOT EXISTS idx_todos_created_at ON todos(created_at);
    `);

    await db.execAsync(`PRAGMA user_version = ${targetVersion};`);
  });
}