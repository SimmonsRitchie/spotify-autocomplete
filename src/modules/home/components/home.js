import React, { useEffect, useState, useReducer } from "react";
import axios from "axios";
import fetchReducer from "../reducers/fetchReducer";
import fetchHits from "../api/fetchHits";
import Results from "./results";
import ScrollNav from "./scroll-nav";
import Layout from "./layout";


const Home = ({ authToken }) => {
  const [{ hits, hasError, isLoading }, dispatch] = useReducer(fetchReducer, {
    hits: null,
    isLoading: false,
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
    <Layout>
      <div className="w-full max-w-5xl flex flex-col gap-7 justify-center items-center">
        <h1 className="font-bold text-gray-60 text-4xl">Tune Finder</h1>
        <input
          className="shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline sm:w-96"
          type="text"
          placeholder="Search for a song, artist or album"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
        />
        {hits && !isLoading && <ScrollNav />}
        <Results hits={hits} isLoading={isLoading} hasError={hasError} />
      </div>
    </Layout>
  );
};

export default Home;
