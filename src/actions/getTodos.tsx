"use server";
import { db } from "@/db";
import { Todo } from "@prisma/client";

export const getTodos = async (): Promise<Todo[]> => {
  await new Promise((resolve) => setTimeout(resolve, 250));
  const todos = await db.todo.findMany();
  return todos;
};
