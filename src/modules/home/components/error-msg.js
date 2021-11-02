import React from "react";

const ErrorMsg = () => {
  return (
    <div className="max-w-sm w-full shadow-sm bg-red-200 text-sm py-8 px-4 rounded text-red-900  text-center">
      <p className="pb-4">Whoops! Sorry, something went wrong.</p>
      <p>Try again later.</p>
    </div>
  );
};

export default ErrorMsg;
