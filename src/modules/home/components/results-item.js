import React from "react";

const ResultsItem = ({ title, img, handleClick }) => {
  return (
    <div className="flex gap-4 items-center" >
      {img ? (
        <img className="w-12 h-12 cursor-pointer" src={img.url} alt={title} onClick={handleClick} />
      ) : (
        <div className="w-12 h-12 bg-gray-300 cursor-pointer" onClick={handleClick} />
      )}
      <h5 className="text-sm cursor-pointer" onClick={handleClick}>{title}</h5>
    </div>
  );
};

export default ResultsItem;
