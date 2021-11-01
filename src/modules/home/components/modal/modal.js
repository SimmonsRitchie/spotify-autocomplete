import React from "react";
import ModalOverlay from "./modal-overlay";
import Top from "./top";

const Modal = ({ modalData, setModalData, dataType }) => {
  if (!modalData) {
    return null;
  }
  const handleCloseClick = () => {
    setModalData(null);
  };
  console.log("modalData", modalData);
  console.log("dataType", dataType);
  const imgSrc =
    modalData.images && modalData.images.length > 0
      ? `url(${modalData.images[0].url})`
      : undefined;
  return (
    <ModalOverlay setModalData={setModalData}>
      <div className="w-full p-3 flex items-center justify-center">
        <div
          className="bg-gray-200 w-full sm:w-96 shadow-lg"
          onClick={(e) => e.stopPropagation()}
        >
          <Top
            imgSrc={imgSrc}
            title={modalData.name}
            handleCloseClick={handleCloseClick}
          />
          <div className="p-4">modal</div>
        </div>
      </div>
    </ModalOverlay>
  );
};

export default Modal;
