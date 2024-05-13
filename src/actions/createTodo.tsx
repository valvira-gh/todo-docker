"use server";
import { resolve } from "path";
import { db } from "@/db";

export const createTodo = async (formData: FormData) => {
  await new Promise((resolve) => setTimeout(resolve, 250));

  const task = formData.get("task") as string;

  if (!task) {
    throw new Error("Task cannot be empty");
  }

  const todo = await db.todo.create({
    data: {
      task,
      createdAt: new Date(), // Add the createdAt property with the current date
    },
  });
};
