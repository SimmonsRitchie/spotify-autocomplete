import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons/faChevronLeft";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons/faChevronRight";

const Pagination = ({ data, nextPage, prevPage }) => {
  const { totalItemCount, itemCount, prevUrl, nextUrl, offset } = data;
  const disabledStyles = "opacity-30";
  const itemsEnd = offset + itemCount;
  return (
    <div className="flex gap-4 justify-end w-full text-sm">
      <div className="text-gray-500">
        {offset}-{itemsEnd} of {totalItemCount}
      </div>
      <div className="flex gap-4 text-gray-700">
        {" "}
        <button
          className={`${!prevUrl ? disabledStyles : "hover:text-gray-500"} `}
          onClick={prevPage}
          disabled={!prevUrl}
        >
          <FontAwesomeIcon icon={faChevronLeft} />
        </button>
        <button
          className={`${!nextUrl ? disabledStyles : "hover:text-gray-500"}`}
          onClick={nextPage}
          disabled={!nextUrl}
        >
          <FontAwesomeIcon icon={faChevronRight} />
        </button>
      </div>
    </div>
  );
};

Pagination.propTypes = {
  data: PropTypes.shape({
    nextUrl: PropTypes.string,
    prevUrl: PropTypes.string,
    limit: PropTypes.number,
    totalItemCount: PropTypes.number,
    itemCount: PropTypes.number,
  }).isRequired,
  nextPage: PropTypes.func.isRequired,
  prevPage: PropTypes.func.isRequired,
};

export default Pagination;
