import { create } from "zustand";
import { devtools } from "zustand/middleware";
// set is a function that returns an object
type TTodo = {
  id: number;
  title: string;
  completed: boolean;
};
type TTodos = {
  todos: TTodo[];
  addTodo: (todo: TTodo) => void;
  editTodo: (todo: TTodo, id: number) => void;
  deleteTodo: (id: number) => void;
};

const todoStore = create<TTodos>()(
  devtools(
    // persist(
    (set) => ({
      todos: [],
      addTodo: (todo: TTodo) =>
        set((state: TTodos) => ({
          todos: [...state.todos, todo],
        })),
      editTodo: (todo: TTodo, id: number) =>
        set((state: TTodos) => {
          const updatedTodo = state.todos.map((t) => {
            if (t.id == id) {
              return {
                id: todo.id,
                title: todo.title,
                completed: todo.completed,
              };
            } else {
              return { ...t };
            }
          });

          return {
            todos: updatedTodo,
          };
        }),

      deleteTodo: (id: number) =>
        set((state) => {
          const filteredTodo = state.todos.filter((todo) => todo.id !== id);

          return {
            todos: filteredTodo,
          };
        }),
    }),
    { name: "todoStore" },
    // ),
  ),
);

export default todoStore;
