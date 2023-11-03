import React from "react";

// To Scroll to this Element on NavbarButton Click
import { Element } from "react-scroll";

const workExperience = [
  {
    id: 1,
    jobTitle: "Technical Development Specialist",
    company: "Total School Solutions",
    location: "4751 Mangels Blvd, Fairfield, CA 94534, United States",
    jobDescription:
      "Responsible for uploading, managing, and editing courses on WordPress website, ensuring a seamless user experience.",
    date: "Jun 2023 - Present",
  },
  {
    id: 2,
    jobTitle: "Senior Graphic Designer",
    company: "Total School Solutions",
    location: "4751 Mangels Blvd, Fairfield, CA 94534, United States",
    jobDescription:
      "Crafted captivating social media posts & engaging video animations, driving increased user engagement with visually appealing content.",
    date: "Nov 2022 - Jun 2023",
  },
  {
    id: 3,
    jobTitle: "Front End Developer",
    company: "Bilty",
    location: "National Science and Technology Park, NUST, Islamabad",
    jobDescription:
      "As a MERN stack developer, I worked extensively with React.js and related technologies to build and maintain web applications.",
    date: "Jun 2023 - Present",
  },
  {
    id: 4,
    jobTitle: "NFT Designer",
    company: "Gameotivity",
    location: "National Science and Technology Park, NUST, Islamabad",
    jobDescription:
      "Created NFTs for their startup Mobile Application that the users can mint by playing more and more game and earning their special coins.",
    date: "Jul 2022 - Sep 2022",
  },
  {
    id: 4,
    jobTitle: "NFT Designer",
    company: "Gameotivity",
    location: "National Science and Technology Park, NUST, Islamabad",
    jobDescription:
      "Created NFTs for their startup Mobile Application that the users can mint by playing more and more game and earning their special coins.",
    date: "Jul 2022 - Sep 2022",
  },
];

function WorkExperienceSection() {
  return (
    <Element name="workExperience">
      <section className="workExperienceSection">
        <div className="main_container py-[100px]">
          <h1 className="fz-64 text-[#b91813] text-center">Work Experience</h1>
          <div className="content_container">
            <div className="pt-[50px]"></div>
          </div>
        </div>
      </section>
    </Element>
  );
}

export default WorkExperienceSection;
