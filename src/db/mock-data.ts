export type TodoType = {
  id: number;
  task: string;
  completed: boolean;
};

export const todos: TodoType[] = [
  {
    id: 1,
    task: "Buy groceries",
    completed: false,
  },
  {
    id: 2,
    task: "Do laundry",
    completed: false,
  },
  {
    id: 3,
    task: "Clean the house",
    completed: false,
  },
];
