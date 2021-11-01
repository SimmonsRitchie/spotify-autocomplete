import React, { useReducer, useContext, useEffect } from "react";
import ResultsItem from "./results-item";
import fetchMoreReducer from "../reducers/fetchMoreReducer.js";
import { AuthContext } from "../context/auth-context";
import fetchMoreHits from "../api/fetchMoreHits";

const ResultsList = ({ items, label, initialNext }) => {
  const { authToken } = useContext(AuthContext);

  const [{ hits, hasError, isLoading, next }, dispatch] = useReducer(
    fetchMoreReducer,
    {
      hits: items,
      isLoading: false,
      hasError: false,
      next: initialNext,
    }
  );
  console.log("results list, items", items);
  const loadMore = () => {
    fetchMoreHits(next, "artists", authToken, dispatch);
  };

  if (hasError) {
    return <div>Something went wrong ...</div>;
  }
  return (
    <div className="w-full bg-blue-100 rounded">
      <div className="uppercase font-semibold mb-4">{label}</div>
      <ul className="mb-2 space-y-4">
        {hits &&
          hits.map((item) => {
            const {id, name, images} = item;
            let itemImg
            if (images && images.length > 0) {
              itemImg = images[1] || images[0]
            }
            return <ResultsItem key={id} title={name} img={itemImg} />;
          })}
      </ul>
      {next && (
        <button
          className="bg-red-200 p-3 rounded uppercase "
          onClick={loadMore}
        >
          {isLoading ? "loading..." : "Load more"}
        </button>
      )}
    </div>
  );
};

export default ResultsList;
