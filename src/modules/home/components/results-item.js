import React from "react";
import PropTypes from 'prop-types';

const ResultsItem = ({ title, img, handleClick }) => {
  return (
    <div className="flex gap-4 items-center" >
      {img ? (
        <img className="w-12 h-12 cursor-pointer" src={img.url} alt={title} onClick={handleClick} />
      ) : (
        <div className="w-12 h-12 bg-gray-300 cursor-pointer flex-shrink-0" onClick={handleClick} />
      )}
      <h5 className="text-sm cursor-pointer" onClick={handleClick}>{title}</h5>
    </div>
  );
};

ResultsItem.propTypes = {
  title: PropTypes.string.isRequired,
  img: PropTypes.shape({
    url: PropTypes.string
  }),
  handleClick: PropTypes.func.isRequired
};


export default ResultsItem;
