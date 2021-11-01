import React from "react";

const ResultsItem = ({ title, img }) => {
  return (
    <li>
      <div className="flex w-full gap-4 items-center">
        {img ? (
          <img className="w-20 h-20" src={img.url} alt={title} />
        ) : (
          <div className="w-20 h-20 bg-gray-300" />
        )}
        <h5>{title}</h5>
      </div>
    </li>
  );
};

export default ResultsItem;
