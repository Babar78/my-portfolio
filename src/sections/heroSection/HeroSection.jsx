import React from "react";
import bgPic from "../../assets/images/heroPic.png";
import HeroSectionText from "../../components/heroSectionText/HeroSectionText";
import CustomButton from "../../components/customButton/CustomButton";
import SocialMediaSidebar from "../../components/socialMediaSidebar/SocialMediaSidebar";

import CVPDF from "../../assets/cvPDF/Resume_Muhammad_Babar.pdf";

// To Scroll to this Element on NavbarButton Click
import { Element } from "react-scroll";

function HeroSection() {
  return (
    <Element name="dashboard" id="Dashboard">
      <section className={`heroSection`}>
        <div
          className="main_container heroSection_container"
          style={{
            backgroundImage: `url(${bgPic})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className={`content_container relative`}>
            <div className="absolute top-[40%] left-0 px-[20px]">
              <HeroSectionText />
              <CustomButton
                label={`Download My CV`}
                icon={"download"}
                downloadPdf={true}
              />
            </div>
            <SocialMediaSidebar />
          </div>
        </div>
      </section>
    </Element>
  );
}

export default HeroSection;
