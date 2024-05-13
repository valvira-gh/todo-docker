import AddTodo from "@/components/AddTodo";
import TodoList from "@/components/TodoList";

const Home = () => {
  return (
    <main className="flex flex-col items-center ">
      <div className=" flex flex-col items-center  p-4 rounded-lg">
        <h1 className="text-3xl text-sky-600 font-bold m-4"> Todo App</h1>
        <AddTodo />

        <div className="border-b-2 border-sky-500 w-1/2 my-4"></div>
        <h3 className="text-2xl text-sky-600 font-bold m-4">Tasks</h3>
        <TodoList />
      </div>
    </main>
  );
};

export default Home;
