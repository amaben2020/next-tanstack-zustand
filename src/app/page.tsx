"use client";
import Toggle from "@/components/elements/toggle/Toggle";
import { useCombinedStore } from "@/store";
import useBearStore from "@/store/bearsStore";
import useCartStore from "@/store/cartStore";
import todoStore from "@/store/todoStore";
import { useEffect, useId, useState } from "react";
import { products } from "./data/product";

type TBearsZustandState = {
  bears: number;
  increasePopulation: () => void;
  decreasePopulation: () => void;
};
export default function Home() {
  const bears = useBearStore((state) => state);
  const todos = todoStore((state) => state);
  const [title, setTitle] = useState("");
  const [isCompleted, setIsCompleted] = useState(false);
  const [cartItemQty, setCartItemQty] = useState(1);
  const id = useId();

  const cart = useCartStore((state) => state);

  const pokemon = useCombinedStore((state) => state);

  useEffect(() => {
    pokemon.fetchPokemon();
  }, [pokemon.fetchPokemon]);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {/* <Todo /> */}
      {/* <PostList /> */}
      {/* <TodoForm /> */}

      {/* <Form /> */}

      <Toggle />

      {JSON.stringify(pokemon.pokemon)}

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
          className="border my-3 px-5 py-3 bg-white text-black"
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

      {JSON.stringify(cart.cart)}

      {products.map((p) => {
        return (
          <div key={p.id}>
            <p>{p.title}</p>
            <p>${p.price}</p>
            <p>{p.quantity}</p>

            <button onClick={() => cart.addToCart(p)}>Add to cart</button>
            <button onClick={() => cart.deleteFromCart(p.id)}>
              Delete From cart
            </button>

            <button
              className="p-4 bg-white text-black"
              onClick={() => setCartItemQty((p) => p + 1)}
            >
              +
            </button>
            <button
              className="p-4 bg-white text-black"
              onClick={() =>
                setCartItemQty((p) => {
                  if (p === 0) {
                    return 0;
                  }
                  return p - 1;
                })
              }
            >
              -
            </button>
            {Number(cartItemQty)}

            <button onClick={() => cart.editCartItem(p.id, cartItemQty)}>
              {" "}
              Edit Cart{" "}
            </button>
          </div>
        );
      })}
    </main>
  );
}
