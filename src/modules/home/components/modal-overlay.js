import React from 'react';


const ModalOverlay = ({setModalData, children}) => {
    return (     <div
        className="fixed bg-opacity-40 inset-0 bg-gray-100 flex flex-col justify-center items-center z-10"
        onClick={() => setModalData(null)}
      >
      {children}
      </div>
      );
}
 
export default ModalOverlay;