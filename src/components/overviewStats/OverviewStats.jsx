import React from "react";

function OverviewStats() {
  return (
    <div className="flex flex-row sm:my-0 my-10 justify-between">
      <div className="stats__content sm:basis-4/12 basis-[28%]">
        <div className="stats__number">
          <h1 className="fz-48  sm:text-start text-center">2+</h1>
        </div>
        <div className="stats__text sm:text-start text-center">
          <p>Years of Experience</p>
        </div>
      </div>
      <div className="stats__content sm:basis-4/12 basis-[28%] justify-center flex">
        <div>
          <div className="stats__number">
            <h1 className="fz-48 sm:text-start text-center">100+</h1>
          </div>
          <div className="stats__text sm:text-start text-center">
            <p>Projects Completed</p>
          </div>
        </div>
      </div>
      <div className="stats__content sm:basis-4/12 basis-[28%] sm:justify-end justify-center flex">
        <div>
          <div className="stats__number">
            <h1 className="fz-48 sm:text-start text-center">114</h1>
          </div>
          <div className="stats__text sm:text-start text-center">
            <p>Happy Customers</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OverviewStats;
