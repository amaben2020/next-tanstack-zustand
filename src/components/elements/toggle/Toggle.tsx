"use client";
import { useCallback, useEffect, useState } from "react";

const Toggle = () => {
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
        background: isOn ? "red" : "white",
        height: "100vh",
        width: "70vw",
      }}
    >
      Toggle
      <button
        onClick={handleToggle}
        className="rounded-full border p-10 bg-black text-white"
      >
        {isOn ? "Off" : "On"}
      </button>
      <input
        className="p-10 border border-black w-2/3 text-black"
        type="text"
        onChange={(e) => setTitle(e.target.value)}
      />
    </div>
  );
};

export default Toggle;
