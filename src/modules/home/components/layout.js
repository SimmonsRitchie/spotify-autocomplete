import React from 'react';


const Layout = ({children}) => {
    return (
        <div className="w-full min-h-screen flex flex-col justify-start items-center bg-indigo-300 px-4 py-6">
        {children}
        </div>
      );
}
 
export default Layout;