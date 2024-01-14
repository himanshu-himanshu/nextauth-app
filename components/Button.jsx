import React from "react";
import { TbUserCheck } from "react-icons/tb";
import { FiUserPlus } from "react-icons/fi";

const Button = ({ title }) => {
  return (
    <button className="primary-btn" type="submit">
      {title}
      {title === "Login" ? (
        <TbUserCheck className="ml-2" />
      ) : title === "Register" ? (
        <FiUserPlus className="ml-2" />
      ) : (
        ""
      )}
    </button>
  );
};

export default Button;
