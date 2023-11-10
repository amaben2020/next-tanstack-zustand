"use client";
import bearStore from "@/store/bearsStore";

type TBearsZustandState = {
  bears: number;
  increasePopulation: () => void;
  decreasePopulation: () => void;
};
export default function Home() {
  const bears = bearStore((state) => state);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {/* <Todo /> */}
      {/* <PostList /> */}
      {/* <TodoForm /> */}

      {/* <Form /> */}

      {bears?.bears}
      <button onClick={bears.increasePopulation}>+</button>
      <button onClick={bears.decreasePopulation}>-</button>
    </main>
  );
}
