import React from "react";
import PropTypes from 'prop-types';

const Layout = ({ children }) => {
  return (
    <div className="w-full min-h-screen flex flex-col justify-start items-center bg-indigo-300 bg-gradient-to-t from-purple-600 to-indigo-600 px-4 py-12">
      {children}
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
