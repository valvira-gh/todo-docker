import { db } from "@/db";
import { getTodos, handleDone } from "@/lib/actions";

const TodoList: React.FC = async () => {
  const todos = await getTodos();

  return (
    <ul className="flex flex-col items-center">
      {todos.map((todo) => (
        <li
          key={todo.id}
          className="text-xl bg-sky-200 text-teal-600 font-bold m-2 border-2 border-sky-500 p-2 rounded-lg"
        >
          {todo.task}
          <span className="text-md text-red-600 text-bold ml-2">X</span>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
