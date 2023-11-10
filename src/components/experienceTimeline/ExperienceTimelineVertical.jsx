import React, { useState, useRef } from "react";

function ExperienceTimelineVertical({
  position,
  date,
  jobTitle,
  company,
  location,
}) {
  return (
    <>
      <div className={`w-full h-[450px] relative`}>
        <div
          className={`border-white text-white w-3/2 py-1 px-1 absolute ${
            position === "center"
              ? "left-[50%]"
              : position === "top-center"
              ? "left-[57%] top-[-55%]"
              : position === "bottom-left"
              ? "sm:right-[54%] right-[52%] top-[-130%]"
              : ""
          }`}
        >
          <div
            className={`info ${
              position === "bottom-left" ? "text-right pe-5" : "ps-5"
            }`}
          >
            <h5>{jobTitle}</h5>
            <p className="fz-12 text-gray-500">{company}</p>
            <p className="fz-10 text-gray-500">{location}</p>
            <p className="fz-10 text-gray-500">{date}</p>
          </div>
        </div>
        <div
          className={`w-[20px] rounded-full  absolute z-[100]  ${
            position === "center"
              ? "left-[50%] h-[450px] bg-gray-500"
              : position === "top-center"
              ? "left-[57%] top-[-55%] h-[125px] bg-gray-600"
              : position === "bottom-left"
              ? "left-[43%] top-[-130%] h-[125px] bg-gray-700"
              : ""
          }`}
        ></div>
      </div>
    </>
  );
}

export default ExperienceTimelineVertical;
