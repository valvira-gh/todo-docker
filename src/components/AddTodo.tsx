"use client";
import { createTodo } from "@/lib/actions";
import { SubmitButton } from "./SubmitButton";
import { useFormState } from "react-dom";

const AddTodo: React.FC = () => {
  const [formState, action] = useFormState(createTodo, {
    message: "",
  });

  return (
    <form action={action} className="flex flex-col items-center">
      <input
        type="text"
        name="task"
        placeholder="Add a new task"
        className="border-2 border-sky-500 p-2 rounded-lg my-1 mx-2"
      />
      <SubmitButton label="Add Todo" loading="Adding..." />

      <span className="font-bold">{formState.message}</span>
    </form>
  );
};

export default AddTodo;
