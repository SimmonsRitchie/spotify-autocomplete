import React, { useEffect, useState, useReducer } from "react";
import axios from "axios";
import fetchReducer from "../reducers/fetchReducer";
import fetchHits from "../api/fetchHits";
import Results from "./results";

const Home = ({ authToken }) => {
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
  return (
    <div className="w-full flex flex-col h-full gap-7 px-4 py-6 justify-center items-center">
      <h1 className="font-bold text-2xl">Spotify Search</h1>
      <input
        className="shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline sm:w-96"
        type="text"
        placeholder="Search for a song, artist or album"
        value={query}
        onChange={(event) => setQuery(event.target.value)}
      />
      {hasError && <div>Something went wrong ...</div>}
      {isLoading ? <div>Loading results...</div> : <Results hits={hits} />}
    </div>
  );
};

export default Home;
