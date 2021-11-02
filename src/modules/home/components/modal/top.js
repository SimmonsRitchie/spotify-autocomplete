import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons/faTimes";
import { DATATYPE_STYLES_LOOKUP } from "../../api/contants";

const Top = ({ imgSrc, title, handleCloseClick, dataType }) => {
  const { labelSingular, buttonDark } = DATATYPE_STYLES_LOOKUP[dataType];
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
          <div
            className={`rounded shadow-sm text-xs font-bold uppercase inline-block py-1 px-3 mb-2 text-gray-900 ${buttonDark}`}
          >
            {labelSingular}
          </div>
          <h3 className="text-gray-50 font-bold text-3xl">{title}</h3>
        </div>
      </div>
    </div>
  );
};

Top.propTypes = {
  imgSrc: PropTypes.string,
  title: PropTypes.string.isRequired,
  handleCloseClick: PropTypes.func.isRequired,
  dataType: PropTypes.string.isRequired,
};

export default Top;
