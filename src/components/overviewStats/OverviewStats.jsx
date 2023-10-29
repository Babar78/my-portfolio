import React from "react";

function OverviewStats() {
  return (
    <div className="flex flex-row sm:my-0 my-10">
      <div className="stats__content basis-4/12">
        <div className="stats__number">
          <h1 className="fz-48">2+</h1>
        </div>
        <div className="stats__text">
          <p>Years of Experience</p>
        </div>
      </div>
      <div className="stats__content basis-4/12 justify-center flex">
        <div>
          <div className="stats__number">
            <h1 className="fz-48">100+</h1>
          </div>
          <div className="stats__text">
            <p>Projects Completed</p>
          </div>
        </div>
      </div>
      <div className="stats__content basis-4/12 justify-end flex">
        <div>
          <div className="stats__number">
            <h1 className="fz-48">114</h1>
          </div>
          <div className="stats__text">
            <p>Happy Customers</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OverviewStats;
