import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
// set is a function that returns an object
type TTodo = {
  id: string | number;
  title: string;
  completed: boolean;
};
type TTodos = { todos: TTodo[]; addTodo: (todo: TTodo) => void };

const todoStore = create<TTodos>()(
  devtools(
    persist(
      (set) => ({
        todos: [],
        addTodo: (todo: TTodo) =>
          set((state: TTodos) => ({
            todos: [...state.todos, todo],
          })),
      }),
      { name: "todoStore" },
    ),
  ),
);

export default todoStore;
