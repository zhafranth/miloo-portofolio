import React from "react";

const index = () => {
  return (
    <section>
      <div className="container mt-12 flex gap-x-8 justify-center flex-wrap">
        <div className="w-[500px] h-[180px] bg-white dark:bg-opacity-30 rounded-xl shadow-xl p-8 mb-8 transform hover:scale-105 transition-all cursor-default">
          <div className="flex items-center gap-x-6">
            <img src="/assets/skills-1.png" alt="code" />
            <h5 className="text-2xl text-primary-dark dark:text-white font-bold">
              Code
            </h5>
          </div>
          <p className="text-lg opacity-30 dark:text-white dark:opacity-70">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore
            rerum adipisci necessitatibus.
          </p>
        </div>
        <div className="w-[500px] h-[180px] bg-white dark:bg-opacity-30 rounded-xl shadow-xl p-8 mb-8 transform hover:scale-105 transition-all cursor-default">
          <div className="flex items-center gap-x-6">
            <img src="/assets/skills-2.png" alt="code" />
            <h5 className="text-2xl text-primary-dark dark:text-white font-bold">
              Data Analytics
            </h5>
          </div>
          <p className="text-lg opacity-30 dark:text-white dark:opacity-70">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore
            rerum adipisci necessitatibus.
          </p>
        </div>
        <div className="w-[500px] h-[180px] bg-white dark:bg-opacity-30 rounded-xl shadow-xl p-8 mb-8 transform hover:scale-105 transition-all cursor-default">
          <div className="flex items-center gap-x-6">
            <img src="/assets/skills-3.png" alt="code" />
            <h5 className="text-2xl text-primary-dark dark:text-white font-bold">
              Copywriting
            </h5>
          </div>
          <p className="text-lg opacity-30 dark:text-white dark:opacity-70">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore
            rerum adipisci necessitatibus.
          </p>
        </div>
        <div className="w-[500px] h-[180px] bg-white dark:bg-opacity-30 rounded-xl shadow-xl p-8 mb-8 transform hover:scale-105 transition-all cursor-default">
          <div className="flex items-center gap-x-6">
            <img src="/assets/skills-4.png" alt="code" />
            <h5 className="text-2xl text-primary-dark dark:text-white font-bold">
              Design
            </h5>
          </div>
          <p className="text-lg opacity-30 dark:text-white dark:opacity-70">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore
            rerum adipisci necessitatibus.
          </p>
        </div>
      </div>
    </section>
  );
};

export default index;
