import { create } from "zustand";
// set is a function that returns an object
type TTodo = {
  id: string | number;
  title: string;
  completed: boolean;
};
type TTodos = { todos: TTodo[]; addTodo: (todo: TTodo) => void };

const todoStore = create<TTodos>()((set) => ({
  todos: [],
  addTodo: (todo: TTodo) =>
    set((state: TTodos) => ({
      todos: [...state.todos, todo],
    })),
}));

export default todoStore;
