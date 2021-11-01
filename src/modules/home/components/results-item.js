import React from "react";

const ResultsItem = ({ title, img }) => {
  return (
    <div className="flex gap-4 items-center">
      {img ? (
        <img className="w-12 h-12" src={img.url} alt={title} />
      ) : (
        <div className="w-12 h-12 bg-gray-300" />
      )}
      <h5 className="text-sm">{title}</h5>
    </div>
  );
};

export default ResultsItem;
