import React from "react";
import PropTypes from "prop-types";
import getItemImg from "../../api/getItemImg";
import BodyAlbum from "./body-album";
import BodyArtist from "./body-artist";
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
  const itemImg = getItemImg(modalData, dataType, "medium");
  const imgSrc = itemImg && `url(${itemImg.url})`;
  const RENDER_BODY_ENUM = {
    albums: <BodyAlbum data={modalData} />,
    artists: <BodyArtist data={modalData} />,
    tracks: <BodyTrack data={modalData} />,
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
          <div
            style={{
              height: "250px",
            }}
            className="p-4 w-full"
          >
            {RENDER_BODY_ENUM[dataType]}
          </div>
        </div>
      </div>
    </Overlay>
  );
};

Modal.propTypes = {
  modalData: PropTypes.object,
  setModalData: PropTypes.func,
  dataType: PropTypes.string,
};

export default Modal;
