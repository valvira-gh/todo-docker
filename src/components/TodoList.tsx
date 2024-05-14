import { db } from "@/db";
import { getTodos } from "@/lib/actions";

const TodoList: React.FC = async () => {
  const todos = await getTodos();

  return (
    <ul className="flex flex-col items-center">
      {todos.map((todo) => (
        <li key={todo.id} className="text-xl text-sky-600 font-bold m-2">
          {todo.task}
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
