import React, { useState } from "react";
import { useSpring, animated } from "react-spring";
import GitHubIcon from "@mui/icons-material/GitHub";

function ProjectCard({
  projectLogo,
  projectTitle,
  company,
  projectDescription,
  date,
}) {
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
        <div className="flex gap-2">
          <div
            className={`w-[50px] h-[50px] p-2 rounded-full flex justify-center items-center`}
          >
            <img
              src={projectLogo}
              alt="projectLogo"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "contain",
              }}
              loading="lazy"
            />
          </div>
          <div>
            <p className="text-[20px] font-black">{projectTitle}</p>
            <p className="font-bold text-[16px] text-[#A6A6A6]">{company}</p>
          </div>
        </div>
        <ul className="mt-[25px] text-[12px] list-disc ps-4 text-[#FFFFFF]">
          {projectDescription.map((item) => (
            <li>{item}</li>
          ))}
        </ul>
      </div>
      <div className="flex flex-row justify-between items-end">
        <p className="text-[10px] text-[#a6a6a6]">{date}</p>
        <button className="btn bg-white text-black text-[14px] rounded-[5px] w-fit h-fit px-2 py-1 flex items-center gap-[5px] fz-12">
          <span>
            <GitHubIcon />
          </span>
          Source Code
        </button>
      </div>
    </animated.div>
  );
}

export default ProjectCard;
