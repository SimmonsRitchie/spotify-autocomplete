import React from "react";

const Modal = () => {
  return (
    <div className="fixed bg-opacity-40 inset-0 bg-gray-100 flex flex-col justify-center items-center">
      <div className="bg-red-200">Modal</div>
      <div className="bg-red-200">close modal</div>
    </div>
  );
};

export default Modal;
