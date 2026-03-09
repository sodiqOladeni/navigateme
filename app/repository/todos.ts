import { getDb } from "../database/db";

export type TodoRow = {
  id: number;
  title: string;
  created_at: number;
};

export async function listTodos(): Promise<TodoRow[]> {
  const db = await getDb();
  return db.getAllAsync<TodoRow>(
    "select * from todos order by created_at desc;"
  );
}

export async function addTodo(title: string): Promise<void> {
  const db = await getDb();

  await db.runAsync(
    "insert into todos (title, created_at) values (?, ?);",
    [title, Date.now()]
  );
}

export async function deleteTodo(id: number): Promise<void> {
  const db = await getDb();
  await db.runAsync("delete from todos WHERE id = ?;", [id]);
}
