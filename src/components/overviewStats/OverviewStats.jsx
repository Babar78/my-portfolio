import React, { useState, useEffect } from "react";
import CountUp from "react-countup";

function OverviewStats() {
  const [isCounting, setIsCounting] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100; // 100px offset

      // Determine the active section based on the scroll position
      const element = document.getElementById("About Me");
      if (element) {
        const sectionTop = element.offsetTop;
        const sectionBottom = sectionTop + element.clientHeight - 500; // 500px offset from bottom of section so that about half of section is scrolled to change active button (when scrolling upwards)
        if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
          setIsCounting(true);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="flex flex-row sm:my-0 my-10 justify-between">
      <div className="stats__content sm:basis-4/12 basis-[28%]">
        <div className="stats__number">
          <h1 className="fz-48  sm:text-start text-center">
            <CountUp start={0} end={2} duration={2.5} suffix="+">
              {({ countUpRef, start }) => (
                <div>
                  <span ref={countUpRef} />
                  {isCounting && start()}
                </div>
              )}
            </CountUp>
          </h1>
        </div>
        <div className="stats__text sm:text-start text-center">
          <p>Years of Experience</p>
        </div>
      </div>
      <div className="stats__content sm:basis-4/12 basis-[28%] justify-center flex">
        <div>
          <div className="stats__number">
            <h1 className="fz-48 sm:text-start text-center">
              <CountUp start={0} end={100} duration={2.5} suffix="+">
                {({ countUpRef, start }) => (
                  <div>
                    <span ref={countUpRef} />
                    {isCounting && start()}
                  </div>
                )}
              </CountUp>
            </h1>
          </div>
          <div className="stats__text sm:text-start text-center">
            <p>Projects Completed</p>
          </div>
        </div>
      </div>
      <div className="stats__content sm:basis-4/12 basis-[28%] sm:justify-end justify-center flex">
        <div>
          <div className="stats__number">
            <h1 className="fz-48 sm:text-start text-center">
              <CountUp start={0} end={10} duration={2.5} suffix="+">
                {({ countUpRef, start }) => (
                  <div>
                    <span ref={countUpRef} />
                    {isCounting && start()}
                  </div>
                )}
              </CountUp>
            </h1>
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
