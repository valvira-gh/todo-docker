"use server";
import { db } from "@/db";
import { Todo } from "@prisma/client";
import { revalidatePath } from "next/cache";
import { z } from "zod";

// Read all todos from the database
export const getTodos = async (): Promise<Todo[]> => {
  await new Promise((resolve) => setTimeout(resolve, 250));
  const todos = await db.todo.findMany();
  return todos;
};

// Write a new todo to the database

// Define a schema for the form data using zod
const createTodoSchema = z.object({
  task: z.string().min(1).max(100),
});

type FormState = {
  message: string;
};

export const createTodo = async (formState: FormState, formData: FormData) => {
  await new Promise((resolve) => setTimeout(resolve, 250));

  try {
    const { task } = createTodoSchema.parse({
      task: formData.get("task"),
    });

    const newTodo = await db.todo.create({
      data: {
        task,
        createdAt: new Date(), // Add the createdAt property with the current date
      },
    });
  } catch (error) {
    return {
      message: "An error occurred while creating the todo. Please try again.",
    };
  }

  revalidatePath("/");

  return {
    message: "Todo created successfully!",
  };
};
