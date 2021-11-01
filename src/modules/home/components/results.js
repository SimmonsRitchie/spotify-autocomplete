import React from "react";
import ResultsList from "./results-list";

const Results = ({ hits }) => {
  if (!hits || hits.length === 0) {
    return <div>No results</div>;
  }
  console.log('results:', hits);
  //TODO: add pagination
  //TODO: add albums, tracks
  //TODO: display each item as specifications require
  //TODO: open a sidebar or modal to display meta information
  return (
    <div className="w-full">
      <ResultsList items={hits.artists.items} initialNext={hits.artists.next} label="Artists" />
    </div>
  );
};

export default Results;
