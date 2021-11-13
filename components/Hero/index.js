import React from "react";
import Button from "./Button";

const index = () => {
  return (
    <section>
      <div className="container flex my-12 min-h-[600px] items-center">
        <div className="w-[50%] text-primary-dark dark:text-white transition-all">
          <h2 className="text-5xl font-bold leading-[4rem]">
            Hi, I’m a <span className="text-primary-light">Frontend</span>{" "}
            Developer based on Bandung
          </h2>
          <p className="text-lg my-8 opacity-60">
            Hi, i’m Jason a freelancer web designer from Bandung. I help brands
            turn their ideas high quality products
          </p>
          <Button>Hire me</Button>
        </div>
        <div className="w-[50%] flex justify-end">
          <img src="/assets/profile-picture.png" alt="profile picture" />
        </div>
      </div>
    </section>
  );
};

export default index;
