import React from "react";
import { DATATYPE_STYLES_LOOKUP } from "../api/contants";
import { scrollToTarget } from "../api/scrollToTarget";

const ScrollNav = () => {
  return (
    <div className="flex gap-6">
      {Object.keys(DATATYPE_STYLES_LOOKUP).map((key) => {
        const { buttonDark, buttonDarkHover, labelPlural } =
          DATATYPE_STYLES_LOOKUP[key];
        return (
          <button
            onClick={() => scrollToTarget(`#${key}`)}
            key={key}
            className={`shadow text-sm font-maven font-semibold text-gray-50 rounded-r-full rounded-l-full w-20 py-2 ${buttonDark} hover:${buttonDarkHover}`}
          >
            {labelPlural}
          </button>
        );
      })}
    </div>
  );
};

export default ScrollNav;
