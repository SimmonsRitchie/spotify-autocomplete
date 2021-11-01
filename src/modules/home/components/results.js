import React from "react";
import ResultsList from "./results-list";

const Results = ({ hits }) => {
  if (!hits || hits.length === 0) {
    return <div>No results</div>;
  }
  console.log("results:", hits);
  //TODO: add pagination
  //TODO: add albums, tracks
  //TODO: display each item as specifications require
  //TODO: open a sidebar or modal to display meta information
  return (
    <div className="w-full flex flex-col gap-7">
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
