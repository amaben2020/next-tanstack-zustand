"use client";
import { useQuery } from "@tanstack/react-query";
import { fetchPosts } from "./promises/fetchPosts";

const DataFetch = () => {
  // Queries
  const { data, isLoading } = useQuery({
    queryKey: ["posts"],
    queryFn: fetchPosts,
  });

  return (
    <div>
      DataFetch
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {data?.map((todo: { id: number; title: string }) => (
            <li key={todo.id}>{todo.title}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default DataFetch;
