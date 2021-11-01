import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons/faTimes";

const Top = ({ imgSrc, title, handleCloseClick }) => {
  return (
    <div
      style={{
        backgroundImage: imgSrc,
      }}
      className="h-60 sm:h-72 relative rounded-t-md  bg-cover bg-center "
    >
      <div className="absolute inset-0 bg-black opacity-50" />
      <div className="flex flex-col absolute inset-4 justify-between">
        <div className="w-full flex items-end justify-end mb-2 ">
          <FontAwesomeIcon
            icon={faTimes}
            className="text-2xl text-gray-200 text-opacity-60 cursor-pointer "
            onClick={handleCloseClick}
          />
        </div>
        <h3 className="text-gray-50 font-bold text-3xl">{title}</h3>
      </div>
    </div>
  );
};

export default Top;
