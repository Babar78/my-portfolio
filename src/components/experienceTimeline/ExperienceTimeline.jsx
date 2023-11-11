import React, { useState, useRef } from "react";

function ExperienceTimeline({
  position,
  date,
  jobTitle,
  company,
  location,
  jobDescription,
}) {
  const [showDetail, setShowDetail] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const timeoutRef = useRef(null);

  const handleFocus = () => {
    setIsHovered(true);
    timeoutRef.current = setTimeout(() => {
      setShowDetail(true);
    }, 200);
  };

  const handleBlur = () => {
    setIsHovered(false);
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setShowDetail(false);
  };

  return (
    <>
      <div className="w-full relative">
        <div
          className={`border-l-[1px] border-white h-[150px] transition-all ease-in-out duration-300 hover:h-[250px] text-white px-2 absolute flex flex-col ${
            position === "center" && "left-0 bottom-0 rounded-bl-[20px]"
          } ${
            position === "top-center" &&
            "left-[55%] bottom-[25px] rounded-bl-[20px] justify-start h-[125px] hover:h-[225px]"
          } ${
            position === "bottom-left" &&
            "left-0 top-[5px] rounded-tl-[20px] justify-end"
          }`}
          onMouseEnter={handleFocus}
          onMouseLeave={handleBlur}
        >
          <div
            className={`info ${
              position === "center" ? "w-[24.306vw]" : "w-full"
            }`}
          >
            <h5>{jobTitle}</h5>
            <p className="fz-12 text-gray-500">{company}</p>
            <p className="fz-10 text-gray-500">{location}</p>
            <p className="fz-10 text-gray-500">{date}</p>
            {showDetail && (
              <div
                className={`lg:mt-10 mt-5 max-w-[350px] overflow-visible ${
                  showDetail === false
                    ? "hidden"
                    : "opacity-0 transition-all duration-150 opacity-100"
                }`}
              >
                <p className="fz-12 text-gray-500">{jobDescription}</p>
              </div>
            )}
          </div>
        </div>
        <div
          className={`h-[20px] rounded-full absolute bottom-0  ${
            position === "center" && "left-0 bottom-0 w-full bg-gray-700"
          } ${position === "bottom-left" && "left-0 top-[5px] w-[50px] bg-gray-600"} ${
            position === "top-center" && "left-[55%] bottom-[25px] w-[100px] bg-slate-500"
          }`}
        ></div>
      </div>
    </>
  );
}

export default ExperienceTimeline;
