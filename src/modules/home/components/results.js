import React from "react";
import ErrorMsg from "./error-msg";
import ResultsList from "./results-list";
import ResultsSkeleton from "./results-skeleton";

const Results = ({ hits, hasError, isLoading, query }) => {
  if (hasError) {
    return <ErrorMsg />;
  }
  if (isLoading) {
    return <ResultsSkeleton />;
  }
  if (!hits) {
    return null;
  }
  return (
    <div className="w-full flex flex-col gap-7">
      <ResultsList initialHits={hits}  dataType={"artists"} />
      <ResultsList initialHits={hits}  dataType={"albums"} />
      <ResultsList initialHits={hits}  dataType={"tracks"} />
    </div>
  );
};

export default Results;
