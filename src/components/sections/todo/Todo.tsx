"use client";
import Input from "@/components/elements/todo/Input";
import { ChangeEvent, useState } from "react";
import DataFetch from "../data/DataFetch";

const Todo = () => {
  const [title, setTitle] = useState("");
  const [title2, setTitle2] = useState("");
  const [mode, setMode] = useState("");
  const [todos, setTodos] = useState(["algo"]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) =>
    setTitle(e.target.value);

  const handleUpdate = (e: ChangeEvent<HTMLInputElement>) =>
    setTitle2(e.target.value);

  const addTodo = (todo: string) => {
    setTodos((p) => [...p, todo]);
  };

  const deleteTodo = (id: number) => {
    console.log(id);
    const updated = todos.filter((_, i) => i !== id);

    setTodos(updated);
  };

  const updateTodo = (id: number, title: string) => {
    setTodos((p: string[]) => {
      const updated = [...p];

      updated[id] = title;

      return updated;
    });
  };

  return (
    <div>
      <Input handleChange={handleChange} value={title} />
      <button onClick={() => addTodo(title)}>Add</button>
      <div className="p-5 rounded-lg border my-6">
        <h3>TODOS</h3>

        {todos.length > 0
          ? todos?.map((todo, i) => (
              <p key={todo}>
                {todo} <button onClick={() => deleteTodo(i)}>❌</button>{" "}
                <button
                  onClick={() => {
                    updateTodo(i, title2);
                    setMode("UPDATE");
                  }}
                >
                  ✍🏿
                </button>
                {mode === "UPDATE" && (
                  <Input handleChange={handleUpdate} value={title} />
                )}
              </p>
            ))
          : null}
      </div>

      <DataFetch />
    </div>
  );
};

export default Todo;
