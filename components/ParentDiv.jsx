import React from "react";

const ParentDiv = ({ children }) => {
  return (
    <div className="w-[100%] font-Josefin bg-gradient-to-r from-rose-100 to-teal-100 relative min-h-screen flex justify-center items-center">
      <div className="md:bg-white w-full max-w-xl flex justify-center items-center flex-col space-y-1 lg:space-y-2 pt-4 md:pt-8">
        {children}
      </div>
    </div>
  );
};

export default ParentDiv;
