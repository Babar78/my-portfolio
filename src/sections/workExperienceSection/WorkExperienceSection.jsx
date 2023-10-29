import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import ExperienceCard from "../../components/experienceCard/ExperienceCard";
import ExperienceCarousel from "../../components/experienceCarousel/ExperienceCarousel";

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
  let cards = [
    {
      key: uuidv4(),
      content: <ExperienceCard {...workExperience[0]} />,
    },
    {
      key: uuidv4(),
      content: <ExperienceCard {...workExperience[1]} />,
    },
    {
      key: uuidv4(),
      content: <ExperienceCard {...workExperience[2]} />,
    },
    {
      key: uuidv4(),
      content: <ExperienceCard {...workExperience[3]} />,
    },
    {
      key: uuidv4(),
      content: <ExperienceCard {...workExperience[4]} />,
    },
  ];

  // State to store the offset value of Carousel so that the cards are centered on smaller screens also
  const [offset, setOffset] = useState(200); // Default offset value

  useEffect(() => {
    // Function to update the offset based on screen width
    const updateOffset = () => {
      const screenWidth = window.innerWidth;
      if (screenWidth < 576) {
        setOffset(1); // Set offset to 1 if the screen width is less than 576px
      } else {
        setOffset(200); // Set the default offset value if the screen width is 576px or more
      }
    };

    // Initial update
    updateOffset();
    // Add a resize event listener to update the offset on window resize
    window.addEventListener("resize", updateOffset);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", updateOffset);
    };
  }, []); // Run this effect only once when the component mounts

  return (
    <section className="workExperienceSection">
      <div className="main_container py-[100px]">
        <h1 className="fz-64 text-[#b91813] text-center">Work Experience</h1>
        <div className="content_container">
          <div className="pt-[50px]">
            <ExperienceCarousel
              cards={cards}
              height="500px"
              width="100%"
              margin="auto"
              offset={offset}
              showArrows={true}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default WorkExperienceSection;
