import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import ProjectCard from "../../components/projectCard/ProjectCard";
import ProjectCarousel from "../../components/projectCarousel/ProjectCarousel";

// Importing Images
import projectLogo1 from "../../assets/images/personalProjects/ff.svg";
import projectLogo2 from "../../assets/images/personalProjects/bds.svg";
import projectLogo3 from "../../assets/images/personalProjects/eCart.png";
import projectLogo4 from "../../assets/images/personalProjects/tripify.png";
import projectLogo5 from "../../assets/images/personalProjects/bilty.svg";
import projectLogo6 from "../../assets/images/personalProjects/concierge.svg";
import projectLogo7 from "../../assets/images/personalProjects/jalwal.svg";
import projectLogo8 from "../../assets/images/personalProjects/chitral_steel.png";

const personalProjects = [
  {
    id: 1,
    projectLogo: projectLogo1,
    projectTitle: "Faisal Movers",
    company: "Bilty",
    projectDescription: [
      "Successfully designed and implemented a responsive single-page website with a modern and intuitive user interface.",
      "Utilized cutting-edge technologies and creative design to enhance user experience and engagement.",
      " Achieved seamless integration of multimedia content and dynamic elements for a captivating online presence.",
    ],
    date: "Oct 27, 2023",
  },
  {
    id: 2,
    projectLogo: projectLogo2,
    projectTitle: "Business Debt Settelments",
    company: "Bilty",
    projectDescription: [
      "Successfully designed and implemented a responsive single-page website with a modern and intuitive user interface.",
      "Utilized cutting-edge technologies and creative design to enhance user experience and engagement.",
      " Achieved seamless integration of multimedia content and dynamic elements for a captivating online presence.",
    ],
    date: "Oct 05, 2023",
  },
  {
    id: 3,
    projectLogo: projectLogo3,
    projectTitle: "eCart",
    company: "Semester Project",
    projectDescription: [
      "e-Commerce website where users can explore and buy clothes, shoes etc.",
      "Front-end using React and Tailwind.",
      "Back-end using Express Js and Node Js.",
      "Database used was MongoDB.",
    ],
    date: "Feb 27, 2023",
  },
  {
    id: 4,
    projectLogo: projectLogo4,
    projectTitle: "Tripify",
    company: "Semester Project",
    projectDescription: [
      "A tourism website which is a great facility for the tourism enthusiasts.",
      "Front-end using React and Tailwind.",
      "Back-end using Express Js and Node Js.",
      "Database used was MongoDB.",
    ],
    date: "Dec 27, 2023",
  },
  {
    id: 5,
    projectLogo: projectLogo5,
    projectTitle: "Bilty US",
    company: "Bilty",
    projectDescription: [
      "Successfully designed and implemented a responsive single-page website with a modern and intuitive user interface.",
      "Utilized cutting-edge technologies and creative design to enhance user experience and engagement.",
      " Achieved seamless integration of multimedia content and dynamic elements for a captivating online presence.",
    ],
    date: "Sep 30, 2023",
  },
  {
    id: 6,
    projectLogo: projectLogo6,
    projectTitle: "Concierge",
    company: "Bilty",
    projectDescription: [
      "Successfully designed and implemented a responsive single-page website with a modern and intuitive user interface.",
      "Utilized cutting-edge technologies and creative design to enhance user experience and engagement.",
      " Achieved seamless integration of multimedia content and dynamic elements for a captivating online presence.",
    ],
    date: "Jul 10, 2023",
  },
  {
    id: 7,
    projectLogo: projectLogo7,
    projectTitle: "Jalwal",
    company: "Bilty",
    projectDescription: [
      "Successfully designed and implemented a responsive single-page website with a modern and intuitive user interface.",
      "Utilized cutting-edge technologies and creative design to enhance user experience and engagement.",
      " Achieved seamless integration of multimedia content and dynamic elements for a captivating online presence.",
    ],
    date: "Aug 09, 2023",
  },
  {
    id: 8,
    projectLogo: projectLogo8,
    projectTitle: "Chitral Steel",
    company: "Bilty",
    projectDescription: [
      "Successfully designed and implemented a responsive single-page website with a modern and intuitive user interface.",
      "Utilized cutting-edge technologies and creative design to enhance user experience and engagement.",
      " Achieved seamless integration of multimedia content and dynamic elements for a captivating online presence.",
    ],
    date: "Oct 31, 2023",
  },
];

function PersonalProjects() {
  let cards = [
    {
      key: uuidv4(),
      content: <ProjectCard {...personalProjects[0]} />,
    },
    {
      key: uuidv4(),
      content: <ProjectCard {...personalProjects[1]} />,
    },
    {
      key: uuidv4(),
      content: <ProjectCard {...personalProjects[2]} />,
    },
    {
      key: uuidv4(),
      content: <ProjectCard {...personalProjects[3]} />,
    },
    {
      key: uuidv4(),
      content: <ProjectCard {...personalProjects[4]} />,
    },
    {
      key: uuidv4(),
      content: <ProjectCard {...personalProjects[5]} />,
    },
    {
      key: uuidv4(),
      content: <ProjectCard {...personalProjects[6]} />,
    },
    {
      key: uuidv4(),
      content: <ProjectCard {...personalProjects[7]} />,
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
    <section className="persnalProjects">
      <div className="main_container py-[100px]">
        <h1 className="fz-64 text-[#b91813] text-center">Personal Projects</h1>
        <div className="content_container">
          <div className="pt-[50px]">
            <ProjectCarousel
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

export default PersonalProjects;
