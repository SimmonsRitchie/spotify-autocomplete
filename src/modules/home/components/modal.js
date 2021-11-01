import React from "react";
import ModalOverlay from "./modal-overlay";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons/faTimes";

const Modal = ({ modalData, setModalData }) => {
  if (!modalData) {
    return null;
  }
  console.log("modalData", modalData);
  return (
    <ModalOverlay setModalData={setModalData}>
      <div
        className="bg-gray-200 w-80 z-20 p-3"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="w-full flex items-end justify-end mb-2">
          <FontAwesomeIcon
            icon={faTimes}
            className="text-lg text-gray-500 cursor-pointer "
            onClick={(e) => {
              setModalData(null);
            }}
          />
        </div>
        Modal
      </div>
    </ModalOverlay>
  );
};

export default Modal;
