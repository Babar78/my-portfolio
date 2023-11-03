import React, { useState, useEffect } from "react";
import { Disclosure } from "@headlessui/react";
import SubjectRoundedIcon from "@mui/icons-material/SubjectRounded";
import CancelRoundedIcon from "@mui/icons-material/CancelRounded";
import logo from "../../assets/images/logo/logo-Large.png";
import NavButton from "../navButton/NavButton";

function Navbar() {
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
                  <NavButton label="Dashboard" active="true" />
                  <NavButton label="About Me" active="false" />
                  <NavButton label="Skills" active="false" />
                  <NavButton label="Work Experience" active="false" />
                  <NavButton label="Projects" active="false" />
                  <NavButton label="Services" active="false" />
                  <NavButton label="Testimonials" active="false" />
                  <NavButton label="Contact" active="false" />
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="xl:hidden bg-gradient-to-tr from-[#000000] to-[#212121ce]">
            <div className="space-y-1 px-2 pb-3 pt-2">
              <NavButton label="Dashboard" active="true" />
              <NavButton label="About Me" active="false" />
              <NavButton label="Skills" active="false" />
              <NavButton label="Work Experience" active="false" />
              <NavButton label="Projects" active="false" />
              <NavButton label="Services" active="false" />
              <NavButton label="Testimonials" active="false" />
              <NavButton label="Contact" active="false" />
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}

export default Navbar;
