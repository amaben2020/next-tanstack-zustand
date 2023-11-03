"use client";

import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { useState } from "react";

interface Todo {
  id: number;
  title: string;
}

const TodoForm = () => {
  const [title, setTitle] = useState("");

  const addTodoPromise = async (todo: any) => {
    return await axios.post("https://jsonplaceholder.typicode.com/todos", todo);
  };

  const addTodo = useMutation({
    mutationFn: async (todo: Todo) => {
      return await addTodoPromise(todo);
    },
  });

  return (
    <div>
      {addTodo.isSuccess ? (
        <div className="text-green-500">Todo added!</div>
      ) : null}
      {addTodo.status === "pending" ? <div>Sending.....</div> : null}
      {addTodo.isError ? (
        <div className="text-red-500">Something went wrong</div>
      ) : null}
      <form
        onSubmit={(e) => {
          e.preventDefault();

          addTodo.mutate({
            title,
            id: 2,
          });
        }}
      >
        <input
          type="text"
          className="text-black"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <button type="submit"> Add</button>
      </form>
    </div>
  );
};

export default TodoForm;
