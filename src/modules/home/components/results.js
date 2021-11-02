import React from "react";
import PropTypes from "prop-types";
import ErrorMsg from "./error-msg";
import ResultsList from "./results-list";
import ResultsSkeleton from "./results-skeleton";


const Results = ({ hits, hasError, isLoading }) => {
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

Results.propTypes = {
  hits: PropTypes.shape({
    artists: PropTypes.objectOf(PropTypes.any),
    albums: PropTypes.objectOf(PropTypes.any),
    tracks: PropTypes.objectOf(PropTypes.any)
  }),
  hasError: PropTypes.bool.isRequired,
  isLoading: PropTypes.bool.isRequired
}

export default Results;
