"use client";
import todoStore from "@/store/todoStore";
import { useCallback, useEffect, useState } from "react";

const Toggle = () => {
  const todos = todoStore((state) => state.todos);
  const [isOn, setIsOn] = useState(false);
  const [title, setTitle] = useState("");
  const handleToggle = useCallback(() => {
    setIsOn((p) => !p);
  }, []);

  useEffect(() => {
    if (typeof window !== undefined) {
      window.document.title = title;
    }
  }, [title]);

  return (
    <div
      style={{
        // background: isOn ? "red" : "white",
        height: "10vh",
        width: "70vw",
      }}
    >
      Toggle
      {JSON.stringify(todos)}
    </div>
  );
};

export default Toggle;
