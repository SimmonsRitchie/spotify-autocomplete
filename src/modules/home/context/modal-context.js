import React, { createContext, useState } from 'react'
import PropTypes from 'prop-types'

export const ModalContext = createContext()

const ModalContextProvider = ({ children }) => {
const [modalData, setModalData] = useState()

  return (
    <ModalContext.Provider
      value={{
        setModalData,
        modalData,
      }}
    >
      {children}
    </ModalContext.Provider>
  )
}

ModalContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
}

export default ModalContextProvider
