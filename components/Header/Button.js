import React from "react";

const Button = ({ children }) => {
  return (
    <button className="text-lg font-semibold text-primary-dark dark:text-white transition-all">
      {children}
    </button>
  );
};

export default Button;
