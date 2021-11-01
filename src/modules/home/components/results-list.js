import React, { useReducer, useContext } from "react";
import ResultsItem from "./results-item";
import fetchMoreReducer from "../reducers/fetchMoreReducer.js";
import { AuthContext } from "../context/auth-context";
import fetchMoreHits from "../api/fetchMoreHits";
import { ModalContext } from "../context/modal-context";
import Modal from "./modal";

const ResultsList = ({ initialHits, label, dataType }) => {
  const { authToken } = useContext(AuthContext);
  const { modalData, setModalData } = useContext(ModalContext);

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
  const displayInfo = (item) => {
    console.log("display info:");
    console.log(item);
    setModalData(item);
  };

  if (hasError) {
    return <div>Something went wrong ...</div>;
  }
  return (
    <div className="w-full bg-blue-100 rounded p-4">
      {modalData && <Modal />}
      <h6 className="uppercase font-semibold mb-4">{label}</h6>
      <div className="mb-5 gap-3 grid grid-cols-1 sm:grid-cols-3">
        {hits &&
          hits.map((item, idx) => {
            const { id, name, images } = item;
            let itemImg;
            if (images && images.length > 0) {
              itemImg = images[1] || images[0];
            }
            if (dataType === "tracks" && item.album && item.album.images) {
              itemImg = item.album.images[1] || item.album.images[0];
            }
            return (
              <ResultsItem
                // use index in key to handle occasions where the same item is
                // returned multiple times
                key={`${dataType}-${name}-${id}-${idx}`}
                title={name}
                img={itemImg}
                handleClick={() => displayInfo(item)}
              />
            );
          })}
      </div>
      {next && (
        <button
          className="bg-blue-800 text-white font-semibold text-sm px-3 py-1.5 rounded uppercase "
          onClick={loadMore}
        >
          {isLoading ? "loading..." : "Load more"}
        </button>
      )}
    </div>
  );
};

// {modalData && <div className="relative">
// <div className="bg-gray-200 absolute inset-0 w-full h-full">Modal</div>
// </div>}

export default ResultsList;
