import React from "react";

const Overlay = ({ setModalData, children }) => {
  return (
    <div
      className="fixed bg-opacity-60 inset-0 bg-gray-500 flex flex-col justify-center items-center z-10"
      onClick={() => setModalData(null)}
    >
      {children}
    </div>
  );
};

export default Overlay;
