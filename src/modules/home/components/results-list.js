import React, { useReducer, useContext, useState } from "react";
import ResultsItem from "./results-item";
import fetchMoreReducer from "../reducers/fetchMoreReducer.js";
import { AuthContext } from "../context/auth-context";
import fetchMoreHits from "../api/fetchMoreHits";
import Modal from "./modal";
import getItemImg from "../api/getItemImg";
import ErrorMsg from "./error-msg";
import ResultsListContainer from "./results-list-container";

const ResultsList = ({ initialHits, dataType }) => {
  const { authToken } = useContext(AuthContext);
  const [modalData, setModalData] = useState();

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
    setModalData(item);
  };

  if (hasError) {
    return (
      <ResultsListContainer dataType={dataType}>
        <ErrorMsg />
      </ResultsListContainer>
    );
  }

  if (hits.length === 0) {
    return (
      <ResultsListContainer dataType={dataType} >
       <span className="text-gray-500">No results found</span>
      </ResultsListContainer>
    )
  }

  return (
    <ResultsListContainer dataType={dataType} >
      <div className="mb-5 gap-3 grid grid-cols-1 sm:grid-cols-3">
        {hits &&
          hits.map((item, idx) => {
            const { id, name } = item;
            const itemImg = getItemImg(item, dataType);
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
        <div className="w-full flex justify-center mt-10">
          <button
            className="bg-red-500 hover:bg-red-600 text-gray-50 font-semibold text-sm px-8 py-2 rounded-r-full rounded-l-full uppercase "
            onClick={loadMore}
          >
            {isLoading ? "loading..." : "More results"}
          </button>
        </div>
      )}
      <Modal
      modalData={modalData}
      setModalData={setModalData}
      dataType={dataType}
    />
    </ResultsListContainer>
  );
};

export default ResultsList;
