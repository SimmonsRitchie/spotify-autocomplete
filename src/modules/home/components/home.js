import React, { useEffect, useState, useReducer } from "react";
import axios from "axios";
import fetchReducer from "../reducers/fetchReducer";
import fetchHits from "../api/fetchHits";
import Results from "./results";

const Home = ({ authToken }) => {
  console.log("Home authToken", authToken);
  const [{ hits, hasError, isLoading }, dispatch] = useReducer(fetchReducer, {
    hits: [],
    isLoading: true,
    hasError: false,
  });
  const [query, setQuery] = useState("");


  useEffect(() => {
    const { cancel, token } = axios.CancelToken.source();
    const timeOutId = setTimeout(
      () => fetchHits(query, authToken, dispatch, token),
      500
    );
    return () => cancel("No longer latest query") || clearTimeout(timeOutId);
  }, [query, authToken]);
  console.log("hits", hits);
  return (
    <div className="w-full flex flex-col h-full gap-7 px-4 py-6 justify-center items-center">
      <input
        className="border rounded border-gray-800"
        type="text"
        value={query}
        onChange={(event) => setQuery(event.target.value)}
      />
      {hasError && <div>Something went wrong ...</div>}
      {isLoading ? (
        <div>Loading results...</div>
      ) : <Results hits={hits} />}
    </div>
  );
};

export default Home;