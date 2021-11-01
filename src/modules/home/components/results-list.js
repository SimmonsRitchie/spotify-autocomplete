import React, { useReducer, useContext } from "react";
import ResultsItem from "./results-item";
import fetchMoreReducer from "../reducers/fetchMoreReducer.js";
import { AuthContext } from "../context/auth-context";
import fetchMoreHits from "../api/fetchMoreHits";

const ResultsList = ({ initialHits, label, dataType }) => {
  const { authToken } = useContext(AuthContext);

  const [{ hits, hasError, isLoading, next }, dispatch] = useReducer(
    fetchMoreReducer,
    {
      hits: initialHits[dataType].items,
      isLoading: false,
      hasError: false,
      next: initialHits[dataType].next,
    }
  );
  const loadMore = () => {
    fetchMoreHits(next, dataType, authToken, dispatch);
  };

  if (hasError) {
    return <div>Something went wrong ...</div>;
  }
  return (
    <div className="w-full bg-blue-100 rounded p-4">
      <h6 className="uppercase font-semibold mb-4">{label}</h6>
      <ul className="mb-5 space-y-4">
        {hits &&
          hits.map((item) => {
            const {id, name, images} = item;
            let itemImg
            if (images && images.length > 0) {
              itemImg = images[1] || images[0]
            }
            if (dataType === "tracks" && item.album && item.album.images) {
              itemImg = item.album.images[1] || item.album.images[0]
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
