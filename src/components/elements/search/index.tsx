import { TAction } from "@/app/(pages)/unsplash/page";
import { Dispatch } from "react";

type TSearch = {
  dispatch: () => Dispatch<TAction>;
};

const Search = ({ dispatch }: TSearch) => {
  return <input type="search" />;
};

export default Search;
