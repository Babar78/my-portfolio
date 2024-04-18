import React from "react";
import ExperienceTimeline from "../../components/experienceTimeline/ExperienceTimeline";
import ExperienceTimelineVertical from "../../components/experienceTimeline/ExperienceTimelineVertical";

// To Scroll to this Element on NavbarButton Click
import { Element } from "react-scroll";

const workExperienceWeb = [
  {
    id: 1,
    jobTitle: "Technical Development Specialist",
    company: "Total School Solutions",
    location: "4751 Mangels Blvd, Fairfield, CA 94534, United States",
    workStatus: "Full-Time",
    jobDescription:
      "Responsible for uploading, managing, and editing courses on WordPress website, ensuring a seamless user experience.",
    date: "Jun 2023 - Present",
    position: "center",
  },
  {
    id: 2,
    jobTitle: "Front End Developer",
    company: "Bilty",
    location: "National Science and Technology Park, NUST, Islamabad",
    workStatus: "Full-Time",
    jobDescription:
      "As a MERN stack developer, I worked extensively with React.js and related technologies to build and maintain web applications.",
    date: "Jun 2023 - Present",
    position: "top-center",
  },
  {
    id: 3,
    jobTitle: "Front-end Developer",
    company: "Bilty",
    location: "National Science and Technology Park, NUST, Islamabad",
    workStatus: "Full-Time",
    jobDescription:
      "Created NFTs for their startup Mobile Application that the users can mint by playing more and more game and earning their special coins.",
    date: "Jul 2022 - Sep 2022",
    position: "bottom-left",
  },
];
const workExperienceGraphics = [
  {
    id: 1,
    jobTitle: "Senior Graphic Designer",
    company: "Total School Solutions",
    location: "4751 Mangels Blvd, Fairfield, CA 94534, United States",
    workStatus: "Full-Time",
    jobDescription:
      "Crafted captivating social media posts & engaging video animations, driving increased user engagement with visually appealing content.",
    date: "Nov 2022 - Jun 2023",
    position: "center",
  },
  {
    id: 2,
    jobTitle: "Front End Developer",
    company: "Bilty",
    location: "National Science and Technology Park, NUST, Islamabad",
    workStatus: "Full-Time",
    jobDescription:
      "As a MERN stack developer, I worked extensively with React.js and related technologies to build and maintain web applications.",
    date: "Jun 2023 - Present",
    position: "top-center",
  },
  {
    id: 3,
    jobTitle: "NFT Designer",
    company: "Gameotivity",
    location: "National Science and Technology Park, NUST, Islamabad",
    workStatus: "Full-Time",
    jobDescription:
      "Created NFTs for their startup Mobile Application that the users can mint by playing more and more game and earning their special coins.",
    date: "Jul 2022 - Sep 2022",
    position: "bottom-left",
  },
];
function WorkExperienceSection() {

  return (
    <Element name="workExperience" id="Work Experience">
      <section className="workExperienceSection">
        <div className="w-screen md:h-[800px] h-[100%] md:py-[100px] py-[50px]">
          <h1 className="fz-64 text-[#b91813] text-center">Work Experience</h1>
          <div className="content_container md:flex hidden justify-center gap-5 items-center">
            <div className="w-[50%]">
              {
                // map through workExperienceWeb array and render ExperienceTimeline component
                workExperienceWeb.map((item) => (
                  <ExperienceTimeline
                    key={item.id}
                    jobTitle={item.jobTitle}
                    company={item.company}
                    location={item.location}
                    workStatus={item.workStatus}
                    jobDescription={item.jobDescription}
                    date={item.date}
                    position={item.position}
                  />
                ))
              }
            </div>
            <div className="w-[50%]">
              {
                // map through workExperienceWeb array and render ExperienceTimeline component
                workExperienceGraphics.map((item) => (
                  <ExperienceTimeline
                    key={item.id}
                    jobTitle={item.jobTitle}
                    company={item.company}
                    location={item.location}
                    workStatus={item.workStatus}
                    jobDescription={item.jobDescription}
                    date={item.date}
                    position={item.position}
                  />
                ))
              }
            </div>
          </div>
          <div className="content_container md:hidden">
            <div className="h-[450px] w-full my-5 relative">
              {
                // map through workExperienceWeb array and render ExperienceTimeline component
                workExperienceWeb.map((item) => (
                  <ExperienceTimelineVertical
                    key={item.id}
                    jobTitle={item.jobTitle}
                    company={item.company}
                    location={item.location}
                    workStatus={item.workStatus}
                    date={item.date}
                    position={item.position}
                  />
                ))
              }
            </div>
            <div className="h-[450px] w-full mt-5 relative">
              {
                // map through workExperienceWeb array and render ExperienceTimeline component
                workExperienceGraphics.map((item) => (
                  <ExperienceTimelineVertical
                    key={item.id}
                    jobTitle={item.jobTitle}
                    company={item.company}
                    location={item.location}
                    workStatus={item.workStatus}
                    date={item.date}
                    position={item.position}
                  />
                ))
              }
            </div>
          </div>
        </div>
      </section>
    </Element>
  );
}

export default WorkExperienceSection;
