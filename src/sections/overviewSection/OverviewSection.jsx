import React from "react";
import CustomButton from "../../components/customButton/CustomButton";
import OverviewStats from "../../components/overviewStats/OverviewStats";

import CVPDF from "../../assets/cvPDF/Resume_Muhammad_Babar.pdf";

// To Scroll to this Element on NavbarButton Click
import { Element } from "react-scroll";

function OverviewSection() {
  return (
    <Element name="aboutme" id="About Me">
      <section className="overviewSection" >
        <div className="overview_outer_container">
          <div className="overview_content_container max-w-[1440px] px-[20px] m-auto flex flex-col md:gap-[150px] gap-20">
            <div className="pt-[100px]">
              <p className="text-[#b91813] fz-32 uppercase">
                Introduction
              </p>
              <h1 className="fz-64 sm:mt-10 mt-5">Overview</h1>
              <p className="text-lg md:w-[55%] w-100 mb-10 mt-5 sm:text-justify text-left">
                Driven by a desire to build innovative, cutting-edge software
                solutions, I'm a software engineer with a proven ability to write
                clean and efficient code. Whether working on web development
                projects or mobile applications, I'm committed to delivering results
                that meet and exceed expectations. I'm a quick learner and
                collaborate closely with clients to create efficient, scalable, and
                user-friendly solutions that solve real-world problems. Let's work
                together to bring your ideas to life!
              </p>
              <CustomButton
                label={`Download My CV`}
                icon={"download"}
                downloadPdf={true}
                pdfFile={CVPDF}
              />
            </div>
            <div
              className="w-full sm:px-[20px]"
              style={{
                boxSizing: "border-box",
              }}
            >
              <OverviewStats />
            </div>
          </div>
        </div>
      </section>
    </Element>
  );
}

export default OverviewSection;
