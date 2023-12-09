import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";

import htmlIcon from "../../assets/images/personalProjects/webProjects/technologies/html.svg";
import cssIcon from "../../assets/images/personalProjects/webProjects/technologies/css.svg";
import jsIcon from "../../assets/images/personalProjects/webProjects/technologies/js.svg";
import reactIcon from "../../assets/images/personalProjects/webProjects/technologies/react.svg";
import nodeIcon from "../../assets/images/personalProjects/webProjects/technologies/node.svg";
import reduxIcon from "../../assets/images/personalProjects/webProjects/technologies/redux.svg";
import mongoIcon from "../../assets/images/personalProjects/webProjects/technologies/mongo.svg";
import cloudinaryIcon from "../../assets/images/personalProjects/webProjects/technologies/cloudinary.svg";
import bootstrapIcon from "../../assets/images/personalProjects/webProjects/technologies/bootstrap.svg";
import tailwindIcon from "../../assets/images/personalProjects/webProjects/technologies/tailwind.svg";
import mysqlIcon from "../../assets/images/personalProjects/webProjects/technologies/mysql.svg";

function WebDevProjectCard({
  projectLogo,
  projectTitle,
  techStack,
  company,
  projectDescription,
  date,
}) {
  // Map technology names to their corresponding icons
  const technologyIcons = {
    html: htmlIcon,
    css: cssIcon,
    js: jsIcon,
    react: reactIcon,
    node: nodeIcon,
    redux: reduxIcon,
    mongo: mongoIcon,
    cloudinary: cloudinaryIcon,
    bootstrap: bootstrapIcon,
    tailwind: tailwindIcon,
    mysql: mysqlIcon,
  };

  return (
    <div className="w-full max-w-[1170px] mt-16 h-full min-h-[450px] relative bg-gradient-to-br p-5 flex flex-col justify-between">
      <div className="topDiv">
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
            <h3>{projectTitle}</h3>
            <p className="font-bold text-[16px] text-[#A6A6A6]">{company}</p>
          </div>
        </div>
        <p
          className="mt-[25px] text-[14px] text-gray-400"
          style={{ whiteSpace: "pre-line" }}
        >
          {projectDescription}
        </p>
      </div>
      <div className="bottomDiv w-[100%]">
        <div className="technologiesDiv my-8">
          <h4 className="text-gray-300">Technologies Used</h4>
          <div className="flex flex-wrap my-5 gap-8 items-center">
            {techStack.map((technology, index) => (
              <div key={index} className="md:max-w-[150px]">
                <img
                  key={index}
                  src={technologyIcons[technology]} // Use the mapped icon for each technology
                  alt={`${technology} icon`}
                  className="technologyStackImage"
                  style={{
                    maxHeight: "60px",
                    objectFit: "contain",
                  }}
                />
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-row justify-between items-end">
          <p className="text-[14px] text-gray-600">{date}</p>
          <button className="btn bg-white text-black text-[14px] rounded-[5px] w-fit h-fit px-2 py-1 flex items-center gap-[5px] fz-12">
            <span>
              <GitHubIcon />
            </span>
            Get Source Code
          </button>
        </div>
      </div>
    </div>
  );
}

export default WebDevProjectCard;
