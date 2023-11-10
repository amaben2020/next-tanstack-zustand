"use client";
import bearStore from "@/store/bearsStore";
import todoStore from "@/store/todoStore";
import { useId, useState } from "react";

type TBearsZustandState = {
  bears: number;
  increasePopulation: () => void;
  decreasePopulation: () => void;
};
export default function Home() {
  const bears = bearStore((state) => state);
  const todos = todoStore((state) => state);
  const [title, setTitle] = useState("");
  const [isCompleted, setIsCompleted] = useState(false);
  const id = useId();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {/* <Todo /> */}
      {/* <PostList /> */}
      {/* <TodoForm /> */}

      {/* <Form /> */}

      {bears?.bears}
      <button onClick={bears.increasePopulation}>+</button>
      <button onClick={bears.decreasePopulation}>-</button>

      {JSON.stringify(todos?.todos)}

      {todos?.todos?.map((todo) => (
        <div key={todo.title}>
          {todo.title}
          {todo.id} {"  "}
          <button
            className="mx-4 border px-5 py-2"
            onClick={() =>
              todos.editTodo(
                {
                  id: todo.id,
                  title,
                  completed: isCompleted,
                },
                todo.id,
              )
            }
          >
            Edit TODO
          </button>
          <button
            className="mx-4 border px-5 py-2"
            onClick={() => todos.deleteTodo(todo.id)}
          >
            Delete TODO
          </button>
        </div>
      ))}

      <div className="my-10 rounded-lg border">
        <input
          type="text"
          className="text-black"
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="checkbox"
          checked={isCompleted}
          onChange={(e) => setIsCompleted(e.target.checked)}
        />
        <button
          onClick={() =>
            todos.addTodo({
              id: Math.random(),
              title,
              completed: isCompleted,
            })
          }
        >
          Add Todo
        </button>
      </div>
    </main>
  );
}
