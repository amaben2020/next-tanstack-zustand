import { TAction } from "@/app/(pages)/unsplash/page";
import { Dispatch, useEffect, useState } from "react";

type TSearch = {
  dispatch: Dispatch<TAction>;
  value: string;
};

const Search = ({ dispatch, value }: TSearch) => {
  const [text, setText] = useState("");

  const handleChange = (text: string) => {
    setText(text);
  };

  useEffect(() => {
    let timer: any = null;

    timer = setTimeout(() => {
      if (text) {
        dispatch({ type: "SET_QUERY", payload: text });
      }
      return () => clearTimeout(timer);
    }, 3000);
  }, [dispatch, text]);

  return (
    <input
      type="search"
      className="text-black p-3 rounded-lg"
      value={text}
      onChange={(e) => handleChange(e.target.value)}
    />
  );
};

export default Search;
