import React from "react";
import ResultsList from "./results-list";
import ResultsSkeleton from "./results-skeleton";

const Results = ({ hits, hasError, isLoading }) => {
  if (hasError) {
    return <p>Something went wrong.</p>;
  }
  if (isLoading) {
    return (
      <ResultsSkeleton />
    );
  }
  if (!hits || hits.length === 0) {
    return <div>No results</div>;
  }
  return (
    <div className="w-full flex flex-col gap-7">
      <ResultsList initialHits={hits} label="Artists" dataType={"artists"} />
      <ResultsList initialHits={hits} label="Albums" dataType={"albums"} />
      <ResultsList initialHits={hits} label="Tracks" dataType={"tracks"} />
    </div>
  );
};

export default Results;
