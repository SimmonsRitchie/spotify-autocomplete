import React from "react";
import getItemImg from "../../api/getItemImg";
import BodyAlbum from "./body-album";
import BodyTrack from "./body-track";
import Overlay from "./overlay";
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

  const itemImg = getItemImg(modalData, dataType);
  console.log("modal itemImg", itemImg);
  const imgSrc = itemImg && `url(${itemImg.url})`;
  const RENDER_BODY_ENUM = {
    albums: <BodyAlbum coreData={modalData} />,
    artists: <BodyTrack coreData={modalData} />,
    tracks: <div>Tracks!</div>,
  };
  return (
    <Overlay setModalData={setModalData}>
      <div className="w-full p-3 flex items-center justify-center">
        <div
          className="bg-gray-200 w-full sm:w-96 shadow-lg"
          onClick={(e) => e.stopPropagation()}
        >
          <Top
            dataType={dataType}
            imgSrc={imgSrc}
            title={modalData.name}
            handleCloseClick={handleCloseClick}
          />
          <div className="p-4">{RENDER_BODY_ENUM[dataType]}</div>
        </div>
      </div>
    </Overlay>
  );
};

export default Modal;
