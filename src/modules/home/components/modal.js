import React from "react";

const Modal = ({ modalData, setModalData }) => {
  if (!modalData) {
    return null;
  }
  return (
    <div
      className="fixed bg-opacity-40 inset-0 bg-gray-100 flex flex-col justify-center items-center z-10"
      onClick={() => setModalData(null)}
    >
      <div
        className="bg-red-200 w-80 z-20"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="w-full flex items-end justify-end">
          <button
            className="bg-red-800 text-white"
            onClick={(e) => {
              setModalData(null);
            }}
          >
            close
          </button>
        </div>
        Modal
      </div>
    </div>
  );
};

export default Modal;
