import React from "react";
import bgPic from "../../assets/images/heroPic.png";
import HeroSectionText from "../../components/heroSectionText/HeroSectionText";
import CustomButton from "../../components/customButton/CustomButton";
import SocialMediaSidebar from "../../components/socialMediaSidebar/SocialMediaSidebar";

import CVPDF from "../../assets/cvPDF/Muhammad_Babar_CV.pdf"


function HeroSection() {
  return (
    <section className={`heroSection`}>
      <div className="main_container">
        <div className={`content_container relative`} style={{
          backgroundImage: `url(${bgPic})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}>
          
          <div className="absolute top-[40%] left-0 px-[20px]">
            <HeroSectionText />
            <CustomButton label={`Download My CV`} icon={"download"} downloadPdf={true} pdfFile={CVPDF}/>
          </div>
          <SocialMediaSidebar />
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
