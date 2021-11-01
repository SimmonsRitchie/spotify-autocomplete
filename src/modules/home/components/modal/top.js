import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons/faTimes";

const DATA_TYPE_LABEL = {
  "artists": "Artist",
  "albums": "Album",
  "tracks": "Song",
}

const Top = ({ imgSrc, title, handleCloseClick, dataType }) => {
  return (
    <div
      style={{
        backgroundImage: imgSrc,
      }}
      className="h-60 sm:h-72 relative rounded-t-md  bg-cover bg-top "
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
        <div>
          <div className="rounded shadow-sm text-sm font-bold uppercase inline-block py-1.5 px-3 mb-2 bg-purple-700 text-purple-100">{DATA_TYPE_LABEL[dataType]}</div>
          <h3 className="text-gray-50 font-bold text-3xl">{title}</h3>
        </div>
      </div>
    </div>
  );
};

export default Top;
