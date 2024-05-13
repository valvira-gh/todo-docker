import { createTodo } from "@/actions/createTodo";

const AddTodo: React.FC = () => {
  return (
    <form action={createTodo} className="flex flex-col items-center">
      <input
        type="text"
        name="task"
        placeholder="Add a new task"
        className="border-2 border-sky-500 p-2 rounded-lg my-1 mx-2"
      />
      <button
        type="submit"
        className="bg-sky-500 text-white p-2 rounded-lg mt-2"
      >
        Add Task
      </button>
    </form>
  );
};

export default AddTodo;
