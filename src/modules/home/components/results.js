import React from "react";
import ResultsList from "./results-list";

const Results = ({ hits }) => {
  if (!hits || hits.length === 0) {
    return <div>No results</div>;
  }
  console.log("results:", hits);
  return (
    <div className="w-full flex flex-col gap-7 max-w-5xl">
      <ResultsList
        initialHits={hits}
        label="Artists"
        dataType={"artists"}
      />
      <ResultsList
      initialHits={hits}
        label="Albums"
        dataType={"albums"}
      />
      <ResultsList
      initialHits={hits}
      label="Tracks"
      dataType={"tracks"}
    />
    </div>
  );
};

export default Results;
