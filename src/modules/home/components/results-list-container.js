import React from "react";
import { DATATYPE_STYLES_LOOKUP } from "../api/contants";

const ResultsListContainer = ({ children, dataType }) => {
  return (
    <div id={dataType} className="w-full bg-blue-100 rounded px-6 py-5 flex flex-col">
      <h6 className="inline-block font-maven text-gray-900 rounded font-semibold mb-6 text-3xl sm:text-4xl">
        {DATATYPE_STYLES_LOOKUP[dataType].labelPlural}
      </h6>
      {children}
    </div>
  );
};
export default ResultsListContainer;
