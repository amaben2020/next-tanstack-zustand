"use client";
import Search from "@/components/elements/search";
import axios from "axios";
import { useEffect, useReducer, useState } from "react";

const baseURL = `https://api.unsplash.com/search/photos?client_id=vCRa8wxs48KESXSylxE84-WoUzK6l8YwpKCdVVfLiBI&page=1&query=office`;

console.log(process.env.UNSPLASH_ACCESS_KEY);

const Unsplash = () => {
  const [data, setData] = useState([]);

  type TInitialState = {
    images: Array<string>;
    query: string;
    total_pages: number;
  };

  type TAction = {
    type: "SET_QUERY";
    payload: {
      query: string;
    };
  };

  const INITIAL_STATE: TInitialState = {
    images: [],
    query: "",
    total_pages: 1,
  };

  const reducer = (state: TInitialState, action: TAction) => {
    console.log(state);

    switch (action.type) {
      case "SET_QUERY": {
        return {
          ...state,
          query: action.payload,
        };
      }
      default: {
        return state;
      }
    }
  };
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);

  console.log(state);

  const fetchImages = async () => {
    const response = await axios.get(baseURL);
    setData(response.data);
  };

  useEffect(() => {
    fetchImages();
  }, []);

  console.log(data);
  return (
    <div>
      Unsplash
      <div>
        <Search />
      </div>
    </div>
  );
};

export default Unsplash;