import React, { useState } from "react";
import { useSpring, animated } from "react-spring";

function ExperienceCard({ jobTitle, company, location, jobDescription, date }) {
  const [show, setShown] = useState(false);

  const props3 = useSpring({
    opacity: 1,
    transform: show ? "scale(1.03)" : "scale(1)",
    boxShadow: show
      ? "0 20px 25px rgb(0 0 0 / 25%)"
      : "0 2px 10px rgb(0 0 0 / 8%)",
  });
  return (
    <animated.div
      style={props3}
      onMouseEnter={() => setShown(true)}
      onMouseLeave={() => setShown(false)}
      className="sm:w-[305px] w-[275px]  h-[375px] bg-gradient-to-br from-[#000000] to-[#2121218c] rounded-[10px] shadow-md p-4 border-b-2 border-[#B91813] flex flex-col justify-between"
    >
      <div>
        <p className="text-[20px] font-black">{jobTitle}</p>
        <p className="font-bold text-[16px] text-[#A6A6A6]">{company}</p>
        <span className="text-[12px] text-[#A6A6A6] ">{location}</span>
        <ul className="mt-[25px] text-[14px] list-disc ps-4 text-[#FFFFFF]">
          <li>{jobDescription}</li>
        </ul>
      </div>
      <div className="flex flex-row justify-between items-end">
        <p className="text-[10px] text-[#a6a6a6]">{date}</p>
        <button className="btn border-[#ffffff4d] bg-[#b91813] border-2 text-white text-[14px] rounded-[5px] w-[100px] h-[30px]">
          View Details
        </button>
      </div>
    </animated.div>
  );
}

export default ExperienceCard;
