"use client";
import { createTodo } from "@/actions/createTodo";
import { SubmitButton } from "./SubmitButton";

const AddTodo: React.FC = () => {
  return (
    <form action={createTodo} className="flex flex-col items-center">
      <input
        type="text"
        name="task"
        placeholder="Add a new task"
        className="border-2 border-sky-500 p-2 rounded-lg my-1 mx-2"
      />
      <SubmitButton label="Add Todo" loading="Adding..." />
    </form>
  );
};

export default AddTodo;
