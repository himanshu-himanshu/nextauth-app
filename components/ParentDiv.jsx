import React from "react";

const ParentDiv = ({ children }) => {
  return (
    <div className="w-[100%] bg-gradient-to-r from-rose-100 to-teal-100 relative min-h-screen flex justify-center items-center">
      <div className="md:bg-white w-full max-w-xl flex justify-center items-center flex-col lg:space-y-2">
        {children}
      </div>
    </div>
  );
};

export default ParentDiv;
