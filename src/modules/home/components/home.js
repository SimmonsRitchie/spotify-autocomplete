import React, { useEffect, useState, useReducer } from "react";
import axios from "axios";
import fetchReducer from "../reducers/fetchReducer";
import fetchHits from "../api/fetchHits";
import Results from "./results";
import ScrollNav from "./scroll-nav";
import Layout from "./layout";
import Hed from "./hed";
import PropTypes from 'prop-types';

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
      <div className="w-full max-w-5xl flex flex-col gap-12 justify-center items-center">
        <Hed />
        <div className="flex flex-col items-center gap-7 w-full">
          <input
            className="shadow appearance-none border rounded-lg w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline sm:w-96"
            type="text"
            placeholder="Search for a song, artist or album"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
          />
          {hits && !isLoading && !hasError && <ScrollNav />}
        </div>
        <Results hits={hits} isLoading={isLoading} hasError={hasError} />
      </div>
    </Layout>
  );
};

Home.propTypes = {
  authToken: PropTypes.string.isRequired,
};

export default Home;
