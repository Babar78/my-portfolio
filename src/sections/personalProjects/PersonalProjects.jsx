import React, { useState } from "react";
import WebDevProjectCard from "../../components/webProjectCard/WebProjectCard";
import GraphicsProjectGallery from "../../components/graphicsProjectGallery/GraphicsProjectGallery";

// Importing Images
import projectLogo1 from "../../assets/images/personalProjects/webProjects/company-logos/ff.svg";
import projectLogo2 from "../../assets/images/personalProjects/webProjects/company-logos/bds.svg";
import projectLogo3 from "../../assets/images/personalProjects/webProjects/company-logos/eCart.png";
import projectLogo4 from "../../assets/images/personalProjects/webProjects/company-logos/tripify.png";
import projectLogo5 from "../../assets/images/personalProjects/webProjects/company-logos/bilty.svg";
import projectLogo6 from "../../assets/images/personalProjects/webProjects/company-logos/concierge.svg";
import projectLogo7 from "../../assets/images/personalProjects/webProjects/company-logos/jalwal.svg";
import projectLogo8 from "../../assets/images/personalProjects/webProjects/company-logos/chitral_steel.png";
import projectLogo9 from "../../assets/images/personalProjects/webProjects/company-logos/bits.svg";
import projectLogo10 from "../../assets/images/personalProjects/webProjects/company-logos/enigma.svg";
import projectLogo11 from "../../assets/images/personalProjects/webProjects/company-logos/homyz.svg";
import projectLogo12 from "../../assets/images/personalProjects/webProjects/company-logos/hilink.svg";
import projectLogo13 from "../../assets/images/personalProjects/webProjects/company-logos/taskTrek.svg";

// To Scroll to this Element on NavbarButton Click
import { Element } from "react-scroll";
import CustomToggleButton from "../../components/customToggleButton/CustomToggleButton";
import Carousel from "../../components/swiperJS/SwiperJS";

const webDevProjects = [
  {
    id: 1,
    projectLogo: projectLogo9,
    projectTitle: "Blockchain Based Interbank Transaction System",
    techStack: ["mongo","expressJs", "react", "node", "redux", "tailwind", "mui", "chartJs", "solidity"],
    company: "FYP",
    projectDescription:
      "BITS (Blockchain Interbank Transaction Solution) is a blockchain-based platform designed to revolutionize cross-border money transfers. By leveraging blockchain technology, BITS addresses high costs, prolonged processing times, and lack of transparency in traditional banking. It offers seamless integration with existing systems and a user-friendly interface, ensuring secure, efficient, and transparent transactions. BITS caters to international students, expatriates, SMEs, and multinational corporations, providing faster, cheaper, and more reliable remittance services.",
    date: "May 12, 2024",
    repositoryLink: "#",
    websiteLink: "#",
    repositoryStatus: "private",
  },
  {
    id: 2,
    projectLogo: projectLogo10,
    projectTitle: "Enigma",
    techStack: ["react", "tailwind", "redux"],
    company: "Freelance Project",
    projectDescription:
      "Enigma is developing a very unique proprietary hardware encryption platform along with a US provisional patent submission leveraging both artificial intelligence in the PKI distribution life cycle and blockchain to secure and manage the lifecycle of the product.",
    date: "Apr 16, 2024",
    repositoryLink: "",
    websiteLink: "https://enigmakey.io/",
    repositoryStatus: "private",
  },
  {
    id: 3,
    projectLogo: projectLogo11,
    projectTitle: "Homyz",
    techStack: ["mongo", "expressJs", "react", "node", "mui", "tailwind"],
    company: "Semester Project",
    projectDescription:
      "A cutting-edge real estate platform that offers users a seamless experience to book property visits and explore potential homes. By integrating advanced search filters and virtual tours, it streamlines the home-buying process, making it easier for users to find their ideal property.",
    date: "Mar 17, 2024",
    repositoryLink: "",
    websiteLink: "https://homyz-mern.vercel.app/",
    repositoryStatus: "private",
  },
  {
    id: 4,
    projectLogo: projectLogo12,
    projectTitle: "HiLink",
    techStack: ["nextJS", "mongo", "tailwind", "mui"],
    company: "Personal Project",
    projectDescription:
      "HiLink is an innovative camping travel app designed to ignite the spirit of adventure in every outdoor enthusiast. Developed using NEXT JS, it offers a seamless and intuitive frontend experience, bringing a world of camping destinations right to your fingertips.",
    date: "Apr 02, 2024",
    repositoryLink: "https://github.com/Babar78/Camping_Travel_app",
    websiteLink: "https://camping-travel-app.vercel.app/",
    repositoryStatus: "public",
  },
  {
    id: 5,
    projectLogo: projectLogo13,
    projectTitle: "TaskTrek",
    techStack: ["nextJS", "mongo", "tailwind", "mui", "chartJs"],
    company: "Personal Project",
    projectDescription:
      "TaskTrek is a modern todo web app featuring a unique and contemporary design. It allows users to sign up and log in to manage their tasks efficiently. Users can add, edit, and delete tasks, all of which are securely stored in a MongoDB database. TaskTrek offers an intuitive interface, making task management seamless and enjoyable.",
    date: "Apr 21, 2024",
    repositoryLink: "https://github.com/Babar78/TODO_Web_App",
    websiteLink: "",
    repositoryStatus: "public",
  },
  {
    id: 6,
    projectLogo: projectLogo3,
    projectTitle: "eCart",
    techStack: ["mongo", "react", "node", "redux", "cloudinary", "bootstrap"],
    company: "Semester Project",
    projectDescription:
      "eCart is a sleek e-commerce platform offering a curated selection of clothing, shoes, and more. Built with React and Tailwind CSS, the user interface is modern and intuitive. Powered by Express.js and Node.js on the back-end, and utilizing MongoDB for data storage, eCart ensures a secure and efficient shopping experience. Explore and shop seamlessly with eCart - where style meets simplicity.",
    date: "Feb 27, 2023",
    repositoryLink: "https://github.com/Babar78/eCart",
    websiteLink: "",
    repositoryStatus: "public",
  },
  {
    id: 7,
    projectLogo: projectLogo4,
    projectTitle: "Tripify",
    techStack: ["mongo", "react", "node", "tailwind"],
    company: "Semester Project",
    projectDescription:
      "Tripify is a dynamic tourism website designed to cater to the needs of avid travelers. Crafted as a semester project, Tripify seamlessly blends form and function.\n\nThe front-end, developed with React and Tailwind CSS, offers an engaging and user-friendly interface. On the back-end, Express.js and Node.js work in tandem to ensure a robust system. MongoDB serves as the backbone, storing and managing data efficiently. Discover the world with ease using Tripify - where exploration meets innovation.",
    date: "Dec 27, 2023",
    repositoryLink: "https://github.com/abdulmoiez876/Web-Engineering-Project",
    websiteLink: "",
    repositoryStatus: "public",
  },
  {
    id: 8,
    projectLogo: projectLogo1,
    projectTitle: "Faisal Movers",
    techStack: ["html", "css", "js", "bootstrap"],
    company: "Bilty",
    projectDescription:
      "Faisal Movers, a prominent player in Pakistan's transportation sector, stands as a flagship venture under the esteemed Faisal Group. Renowned for its extensive operations, Faisal Group extends its influence across diverse industries, including fertilizer division, urban and public transportation, logistics, KCS, and fertilization division.\n\nAs the designer of their website, I crafted a platform that not only represents Faisal Movers but also serves as a comprehensive source of information about the entire Faisal Group and its various subsidiaries. The website encapsulates the essence of Faisal Group's multifaceted presence, providing insights into its significant contributions across different sectors.",
    date: "Oct 27, 2023",
    repositoryLink: "",
    websiteLink: "https://faisalmoversgroup.com/",
    repositoryStatus: "private",
  },
  {
    id: 9,
    projectLogo: projectLogo2,
    projectTitle: "Business Debt Settelments",
    techStack: ["html", "css", "js", "bootstrap"],
    company: "Bilty",
    projectDescription:
      "BDS is a US based company which provides specialized service to assists individuals in navigating and resolving their financial challenges through effective debt settlement strategies. I designed this website during my Internship at Bilty for a US based client.\n\nThe project involved the creation of a responsive website, characterized by a contemporary and user-friendly interface. Employing advanced technologies and innovative design, the platform not only enhances user experience but also serves as a comprehensive resource for individuals seeking professional assistance in managing and settling their debts.",
    date: "Oct 05, 2023",
    repositoryLink: "",
    websiteLink: "https://businessdebtsettlements.com/",
    repositoryStatus: "private",
  },
  {
    id: 10,
    projectLogo: projectLogo5,
    projectTitle: "Bilty Dispatch",
    techStack: ["html", "css", "js", "bootstrap"],
    company: "Bilty",
    projectDescription:
      "Bilty US, a project executed for Bilty, introduces BILTY Dispatch—a dedicated solution for efficient truck dispatching within the U.S. logistics sector. This endeavor focuses on streamlining dispatch operations, optimizing fleet performance, and providing real-time visibility in the transportation industry.\n\nThe responsive website is a testament to successful design and implementation, featuring a contemporary and intuitive user interface. Leveraging cutting-edge technologies and creative design, the platform not only enhances user experience and engagement but also achieves seamless integration of multimedia content and dynamic elements, creating a captivating online presence for BILTY Dispatch.",
    date: "Sep 30, 2023",
    repositoryLink: "",
    websiteLink: "https://bilty.us/",
    repositoryStatus: "private",
  },
  {
    id: 11,
    projectLogo: projectLogo6,
    projectTitle: "Concierge",
    techStack: ["html", "css", "js", "bootstrap"],
    company: "Bilty",
    projectDescription:
      "Concierge, a project developed for Bilty, represents a startup endeavor with a vision to provide users with a more convenient solution for ride booking and related services. The project involved the successful design and implementation of a responsive website featuring a modern and intuitive user interface",
    date: "Jul 10, 2023",
    repositoryLink: "",
    websiteLink: "https://concierge.com.pk/",
    repositoryStatus: "private",
  },
  {
    id: 12,
    projectLogo: projectLogo7,
    projectTitle: "Jalwal",
    techStack: ["html", "css", "js", "bootstrap"],
    company: "Bilty",
    projectDescription:
      "Jalwal, a project undertaken for Bilty, serves as a dynamic online platform for a Pakistan-based recruitment firm. \n\nSpecializing in talent acquisition, Jalwal required a responsive website with a modern and intuitive user interface. The project successfully achieved this goal by leveraging cutting-edge technologies and implementing creative design strategies to enhance user experience and engagement.",
    date: "Aug 09, 2023",
    repositoryLink: "",
    websiteLink: "https://jalwal.com/",
    repositoryStatus: "private",
  },
  {
    id: 13,
    projectLogo: projectLogo8,
    projectTitle: "Chitral Steel",
    techStack: ["html", "css", "js", "bootstrap"],
    company: "Bilty",
    projectDescription:
      "Chitral Steel, a local shop based in Chitral, envisioned a modern online presence to showcase their products and facilitate customer engagement. The project, titled 'Chitral Steel,' involved the successful design and implementation of a responsive single-page website. Leveraging a tech stack comprising HTML, CSS, JavaScript, and Bootstrap, the website achieved a contemporary and intuitive user interface. By employing cutting-edge technologies and creative design strategies, the project enhanced user experience and engagement.",
    date: "Oct 31, 2023",
    repositoryLink: "",
    websiteLink: "https://steel.erponix.com/",
    repositoryStatus: "private",
  },
];

function PersonalProjects() {
  const slideItems = webDevProjects.map((project) => ({
    id: project.id,

    content: (
      <WebDevProjectCard
        projectLogo={project.projectLogo}
        projectTitle={project.projectTitle}
        techStack={project.techStack}
        company={project.company}
        projectDescription={project.projectDescription}
        date={project.date}
        repositoryLink={project.repositoryLink}
        websiteLink={project.websiteLink}
        repositoryStatus={project.repositoryStatus}
      />
    ),
  }));

  //   Use States to save how many items to show on screen w.r.t screen size

  const [slidesPerView, setSlidesPerView] = useState(1); // Default slides per view value
  const [spaceBetween, setSpaceBetween] = useState(20); // Default space between slides value

  // Rendering the category based on toggle button
  const [isActiveCategory, setActiveCategory] = useState("webDev");

  return (
    <Element name="projects" id="Projects">
      <section className="persnalProjects">
        <div className="outer_container md:py-0 py-[50px]">
          <h1 className="fz-64 text-[#b91813] text-center">
            Personal Projects
          </h1>
          <div className="pt-[50px]">
            <div className="toggleButton flex justify-center">
              <CustomToggleButton setToggle={setActiveCategory} />
            </div>
          </div>
          <div className="content_container">
            {isActiveCategory == "webDev" ? (
              <div>
                <Carousel
                  slideItems={slideItems}
                  slidesPerView={slidesPerView}
                  spaceBetween={spaceBetween}
                />
              </div>
            ) : (
              <div className="graphicProjectGalleryDiv">
                <GraphicsProjectGallery />
              </div>
            )}
          </div>
        </div>
      </section>
    </Element>
  );
}

export default PersonalProjects;
