import React, { createContext } from "react";
import PropTypes from "prop-types";

export const AuthContext = createContext();

const AuthContextProvider = ({ children, authToken }) => {
  return (
    <AuthContext.Provider
      value={{
        authToken,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

AuthContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
  authToken: PropTypes.string.isRequired,
};

export default AuthContextProvider;
