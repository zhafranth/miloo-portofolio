import React from "react";
import Button from "./Button";
import DarkModeButton from "./DarkModeButton";

const index = ({ toggle, mode }) => {
  return (
    <div className="w-100 h-20 bg-transparent flex">
      <div className="container flex items-center my-auto">
        {/* Logo */}
        <div className="w-[40px] h-[40px] mr-auto">
          <img src="/assets/Logo.svg" alt="logo" className="object-cover" />
        </div>

        {/* Menu Button */}
        <div className="flex items-center gap-x-6">
          <Button>About</Button>
          <Button>Skills</Button>
          <Button>Portofolio</Button>
          <Button>Contact</Button>
          <DarkModeButton toggle={toggle} mode={mode} />
        </div>
      </div>
    </div>
  );
};

export default index;
