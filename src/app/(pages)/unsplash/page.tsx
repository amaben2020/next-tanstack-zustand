//@ts-nocheck
"use client";
import Search from "@/components/elements/search";
import axios from "axios";
import Image from "next/image";
import { Reducer, useCallback, useEffect, useReducer } from "react";
import useSWR from "swr";

console.log(process.env.UNSPLASH_ACCESS_KEY);
type TMode = "idle" | "loading" | "error";

type TInitialState = {
  images: any[];
  query: string;
  total_pages: number;
  page: number;
  mode: TMode;
};

type TAction =
  | { type: "SET_QUERY"; payload: string }
  | { type: "SET_MODE"; payload: TMode }
  | { type: "NEXT_PAGE" }
  | { type: "SET_IMAGES"; payload: { images: any[]; total_pages: number } };

const Unsplash = () => {
  const INITIAL_STATE = {
    images: [],
    query: "",
    total_pages: 1,
    page: 1,
    mode: "loading",
  };

  const reducer = (state: TInitialState, action: TAction) => {
    switch (action.type) {
      case "SET_QUERY": {
        return {
          ...INITIAL_STATE,
          query: action.payload,
        };
      }
      case "SET_MODE": {
        return {
          ...state,
          mode: action.payload,
        };
      }
      case "NEXT_PAGE": {
        return {
          ...state,
          page: state.page + 1,
        };
      }
      case "SET_IMAGES": {
        console.log(action.payload);
        const { images, total_pages } = action.payload;
        const newImages = [...state.images, ...images];
        const mode = !newImages.length ? "no-results" : "idle";
        return { ...state, images: newImages, total_pages, mode };
      }
      default: {
        return state;
      }
    }
  };

  const [state, dispatch] = useReducer<Reducer<TInitialState, TAction>>(
    reducer,
    INITIAL_STATE,
  );

  console.log("STATE", state);

  console.log(state?.query);

  const baseURL = `https://api.unsplash.com/search/photos?client_id=vCRa8wxs48KESXSylxE84-WoUzK6l8YwpKCdVVfLiBI&page=${state.page}&query=${state.query}`;

  const fetchImages = useCallback(async () => {
    const response = await axios.get(baseURL);
    return response.data;
  }, [baseURL]);

  const {
    data: images,
    isLoading,
    error,
    isValidating,
  } = useSWR("images", fetchImages);

  const TOTAL_PAGES = images?.total_pages;
  const IMAGE_RESULTS = images?.results;
  console.log(IMAGE_RESULTS);

  useEffect(() => {
    if (isLoading) {
      dispatch({
        type: "SET_MODE",
        payload: "loading",
      });
    }
    if (TOTAL_PAGES) {
      dispatch({
        type: "SET_IMAGES",
        payload: { images: IMAGE_RESULTS, total_pages: TOTAL_PAGES },
      });
      dispatch({
        type: "SET_MODE",
        payload: "idle",
      });
    }

    if (error) {
      dispatch({
        type: "SET_MODE",
        payload: "error",
      });
    }
  }, [IMAGE_RESULTS, TOTAL_PAGES, error, isLoading]);

  console.log(state.page);

  useEffect(() => {
    fetchImages();
  }, [fetchImages]);

  return (
    <div>
      Unsplash
      <div>
        <h3 className="text-white"> Query: {state.query} </h3>

        <Search dispatch={dispatch} value={state.query} />
      </div>
      <button
        className="p-4 border rounded-lg my-6"
        onClick={() => dispatch({ type: "NEXT_PAGE" })}
      >
        Handle Next
      </button>
      {state?.images.map((res) => (
        <>
          <Image src={res.urls.regular} width={200} height={100} alt="" />
        </>
      ))}
    </div>
  );
};

export default Unsplash;
