"use client";
import bearStore from "@/store/bearsStore";
import todoStore from "@/store/todoStore";

type TBearsZustandState = {
  bears: number;
  increasePopulation: () => void;
  decreasePopulation: () => void;
};
export default function Home() {
  const bears = bearStore((state) => state);
  const todos = todoStore((state) => state);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {/* <Todo /> */}
      {/* <PostList /> */}
      {/* <TodoForm /> */}

      {/* <Form /> */}

      {bears?.bears}
      <button onClick={bears.increasePopulation}>+</button>
      <button onClick={bears.decreasePopulation}>-</button>

      {todos.todos.map((todo) => (
        <div key={todo.title}>{todo.title}</div>
      ))}

      <div className="my-10 rounded-lg border">
        <input type="text" />
        <button
          onClick={() =>
            todos.addTodo({
              id: 1,
              title: "algo Uzor",
              completed: true,
            })
          }
        >
          Add Todo
        </button>
      </div>
    </main>
  );
}
