import React from "react";

const ErrorMsg = () => {
  return (
    <div className="max-w-sm w-full bg-red-800 shadow py-6 px-4 rounded text-white  text-center">
      <p className="pb-4">Whoops! Sorry, something went wrong.</p>

      <p>Try again later</p>
    </div>
  );
};

export default ErrorMsg;
