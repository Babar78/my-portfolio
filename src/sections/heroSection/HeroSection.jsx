import React from "react";
import Navbar from "../../components/navbar/Navbar";
import bgPic from "../../assets/images/heroPic.png";
import HeroSectionText from "../../components/heroSectionText/HeroSectionText";
import CustomButton from "../../components/customButton/CustomButton";
import SocialMediaSidebar from "../../components/socialMediaSidebar/SocialMediaSidebar";

function heroSection() {
  return (
    <section className={`heroSection `}>
      <div className="main_container">
        <div className={`content_container relative`} style={{
          backgroundImage: `url(${bgPic})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}>
          <Navbar />
          <div className="absolute top-[40%] left-0 px-[20px]">
            <HeroSectionText />
            <CustomButton label={`Download My CV`} icon={"download"}/>
          </div>
          <SocialMediaSidebar />
        </div>
      </div>
    </section>
  );
}

export default heroSection;
