import React from "react";

const Button = ({ children }) => {
  return (
    <button className="py-3 px-12 rounded-full bg-primary-dark text-white hover:bg-opacity-80 transition-all">
      {children}
    </button>
  );
};

export default Button;
