import React, { useEffect, useState, useReducer, useRef } from "react";
// import { requestAuthorization } from "../api/auth";
// import search from "../api/search";
import axios from "axios";

function fetchReducer(state, action) {
  switch (action.type) {
    case "FETCH_START":
      return {
        ...state,
        isLoading: true,
        hasError: false,
      };
    case "FETCH_SUCCESS":
      return {
        ...state,
        isLoading: false,
        hasError: false,
        hits: action.payload,
      };
    case "FETCH_FAILURE":
      return {
        ...state,
        isLoading: false,
        hasError: true,
      };
    default:
      throw new Error();
  }
}

async function fetchHits(query, dispatch, cancelToken) {
  dispatch({ type: "FETCH_START" });
  try {
    const result = await axios(
      `https://hn.algolia.com/api/v1/search?query=${query}`,
      {
        cancelToken,
      }
    );
    dispatch({ type: "FETCH_SUCCESS", payload: result.data.hits });
  } catch (err) {
    console.error(err);
    axios.isCancel(err) || dispatch({ type: "FETCH_FAILURE" });
  }
}

function App() {
  // const [authToken, setAuthToken] = useState();
  const [{ hits, hasError, isLoading }, dispatch] = useReducer(fetchReducer, {
    hits: [],
    isLoading: true,
    hasError: false,
  });
  const [query, setQuery] = useState("react");

  useEffect(() => {
    const { cancel, token } = axios.CancelToken.source();
    const timeOutId = setTimeout(() => fetchHits(query, dispatch, token), 500);
    return () => cancel("No longer latest query") || clearTimeout(timeOutId);
  }, [query]);

  // if (!authToken) {
  //   return <div>Connecting to Spotify API...</div>;
  // }
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
        <div>Loading ...</div>
      ) : (
        <ul>
          {hits.map((item) => (
            <li key={item.objectID}>
              <a href={item.url}>{item.title}</a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;
