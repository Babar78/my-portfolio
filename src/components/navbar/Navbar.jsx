import React, { useState, useEffect } from "react";
import { Disclosure } from "@headlessui/react";
import SubjectRoundedIcon from "@mui/icons-material/SubjectRounded";
import CancelRoundedIcon from "@mui/icons-material/CancelRounded";
import logo from "../../assets/images/logo/logo-Large.png";
import NavButton from "../navButton/NavButton";

import { Link, scroller } from "react-scroll";

function Navbar(props) {
  // Change navbar background color on scroll
  const [bgColor, setBgColor] = useState("bg-transparent");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const threshold = 300;

      if (scrollPosition > threshold) {
        setBgColor("bg-gradient-to-tr from-[#000000] to-[#212121bf]");
      } else {
        setBgColor("bg-transparent");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Scroll to Respective Section on Navbar Button Click
  // Function to scroll to a section
  const scrollToSection = (sectionName) => {
    scroller.scrollTo(sectionName, {
      duration: 800,
      delay: 0,
      smooth: "easeInOutQuart",
    });
  };

  // Change bgColor of Active Button
  const [activeButton, setActiveButton] = useState("Dashboard");

  const changeActiveButton = (buttonName) => {
    setActiveButton(buttonName);
  };

  // Change active button to Scroll when goToTop button is clicked
  useEffect(() => {
    setActiveButton("Dashboard");
  }, [props.dashboardActive]);

  // Change active button with Scrolling the website
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100; // 100px offset

      // Determine the active section based on the scroll position
      const sections = [
        "Dashboard",
        "About Me",
        "Skills",
        "Work Experience",
        "Projects",
        "Services",
        "Testimonials",
        "Contact",
      ];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const sectionTop = element.offsetTop;
          const sectionBottom = sectionTop + element.clientHeight - 500; // 500px offset from bottom of section so that about half of section is scrolled to change active button (when scrolling upwards)
          if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
            setActiveButton(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Disclosure
      as="nav"
      className={`${bgColor} py-4 fixed top-0 z-[10] w-full`}
    >
      {({ open }) => (
        <>
          <div className="mx-auto content_container ">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center xl:hidden">
                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-[#19191b] hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <CancelRoundedIcon
                      className="block h-6 w-6"
                      sx={{ fontSize: "1.5rem" }}
                      aria-hidden="true"
                    />
                  ) : (
                    <SubjectRoundedIcon
                      className="block h-6 w-6"
                      sx={{ fontSize: "2rem" }}
                      aria-hidden="true"
                    />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center xl:items-stretch xl:justify-start">
                <div className="flex flex-shrink-0 items-center">
                  <img
                    className="md:h-16 sm:h-14 h-12 w-auto"
                    src={logo}
                    alt="Bartistry Logo"
                  />
                </div>
              </div>
              <div className="hidden xl:ml-6 xl:block">
                <div className="flex space-x-2">
                  <Link
                    to="dashboard"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={800}
                    onClick={() => {
                      scrollToSection("dashboard");
                      changeActiveButton("Dashboard");
                    }}
                  >
                    <NavButton
                      label="Dashboard"
                      active={activeButton === "Dashboard" ? "true" : "false"}
                    />
                  </Link>
                  <Link
                    to="aboutme"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={800}
                    onClick={() => {
                      scrollToSection("aboutme");
                      changeActiveButton("About Me");
                    }}
                  >
                    <NavButton
                      label="About Me"
                      active={activeButton === "About Me" ? "true" : "false"}
                    />
                  </Link>

                  <Link
                    to="skills"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={800}
                    onClick={() => {
                      scrollToSection("skills");
                      changeActiveButton("Skills");
                    }}
                  >
                    <NavButton
                      label="Skills"
                      active={activeButton === "Skills" ? "true" : "false"}
                    />
                  </Link>
                  <Link
                    to="workExperience"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={800}
                    onClick={() => {
                      scrollToSection("workExperience");
                      changeActiveButton("Work Experience");
                    }}
                  >
                    <NavButton
                      label="Work Experience"
                      active={
                        activeButton === "Work Experience" ? "true" : "false"
                      }
                    />
                  </Link>

                  <Link
                    to="projects"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={800}
                    onClick={() => {
                      scrollToSection("projects");
                      changeActiveButton("Projects");
                    }}
                  >
                    <NavButton
                      label="Projects"
                      active={activeButton === "Projects" ? "true" : "false"}
                    />
                  </Link>

                  <Link
                    to="services"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={800}
                    onClick={() => {
                      scrollToSection("services");
                      changeActiveButton("Services");
                    }}
                  >
                    <NavButton
                      label="Services"
                      active={activeButton === "Services" ? "true" : "false"}
                    />
                  </Link>

                  <Link
                    to="testimonials"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={800}
                    onClick={() => {
                      scrollToSection("testimonials");
                      changeActiveButton("Testimonials");
                    }}
                  >
                    <NavButton
                      label="Testimonials"
                      active={
                        activeButton === "Testimonials" ? "true" : "false"
                      }
                    />
                  </Link>
                  <Link
                    to="contact"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={800}
                    onClick={() => {
                      scrollToSection("contact");
                      changeActiveButton("Contact");
                    }}
                  >
                    <NavButton
                      label="Contact"
                      active={activeButton === "Contact" ? "true" : "false"}
                    />
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="xl:hidden bg-gradient-to-tr from-[#000000] to-[#212121ce]">
            <div className="space-y-1 px-2 pb-3 pt-2">
              <Link
                to="dashboard"
                spy={true}
                smooth={true}
                offset={-100}
                duration={800}
                onClick={() => {
                  scrollToSection("dashboard");
                  changeActiveButton("Dashboard");
                }}
              >
                <NavButton
                  label="Dashboard"
                  active={activeButton === "Dashboard" ? "true" : "false"}
                />
              </Link>
              <Link
                to="aboutme"
                spy={true}
                smooth={true}
                offset={-100}
                duration={800}
                onClick={() => {
                  scrollToSection("aboutme");
                  changeActiveButton("About Me");
                }}
              >
                <NavButton
                  label="About Me"
                  active={activeButton === "About Me" ? "true" : "false"}
                />
              </Link>

              <Link
                to="skills"
                spy={true}
                smooth={true}
                offset={-100}
                duration={800}
                onClick={() => {
                  scrollToSection("skills");
                  changeActiveButton("Skills");
                }}
              >
                <NavButton
                  label="Skills"
                  active={activeButton === "Skills" ? "true" : "false"}
                />
              </Link>
              <Link
                to="workExperience"
                spy={true}
                smooth={true}
                offset={-100}
                duration={800}
                onClick={() => {
                  scrollToSection("workExperience");
                  changeActiveButton("Work Experience");
                }}
              >
                <NavButton
                  label="Work Experience"
                  active={activeButton === "Work Experience" ? "true" : "false"}
                />
              </Link>

              <Link
                to="projects"
                spy={true}
                smooth={true}
                offset={-100}
                duration={800}
                onClick={() => {
                  scrollToSection("projects");
                  changeActiveButton("Projects");
                }}
              >
                <NavButton
                  label="Projects"
                  active={activeButton === "Projects" ? "true" : "false"}
                />
              </Link>

              <Link
                to="services"
                spy={true}
                smooth={true}
                offset={-100}
                duration={800}
                onClick={() => {
                  scrollToSection("services");
                  changeActiveButton("Services");
                }}
              >
                <NavButton
                  label="Services"
                  active={activeButton === "Services" ? "true" : "false"}
                />
              </Link>

              <Link
                to="testimonials"
                spy={true}
                smooth={true}
                offset={-100}
                duration={800}
                onClick={() => {
                  scrollToSection("testimonials");
                  changeActiveButton("Testimonials");
                }}
              >
                <NavButton
                  label="Testimonials"
                  active={activeButton === "Testimonials" ? "true" : "false"}
                />
              </Link>
              <Link
                to="contact"
                spy={true}
                smooth={true}
                offset={-100}
                duration={800}
                onClick={() => {
                  scrollToSection("contact");
                  changeActiveButton("Contact");
                }}
              >
                <NavButton
                  label="Contact"
                  active={activeButton === "Contact" ? "true" : "false"}
                />
              </Link>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}

export default Navbar;
