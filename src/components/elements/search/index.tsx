import { TAction } from "@/app/(pages)/unsplash/page";
import { Dispatch } from "react";

type TSearch = {
  dispatch: Dispatch<TAction>;
  value: string;
};

const Search = ({ dispatch, value }: TSearch) => {
  return (
    <input
      type="search"
      className="text-black p-3 rounded-lg"
      value={value}
      onChange={(e) => dispatch({ type: "SET_QUERY", payload: e.target.value })}
    />
  );
};

export default Search;
