import React from "react";
import bgPic from "../../assets/images/Skills_bg.jpg";
import LinearProgressBar from "../../components/linearProgressBar/LinearProgressBar";
import CircularProgressBar from "../../components/circularProgressBar/CircularProgressBar";

// To Scroll to this Element on NavbarButton Click
import { Element } from "react-scroll";

function SkillsSection() {
  return (
    <Element name="skills" id="Skills">
      <section className="skillsSection">
        <div
          className="outer_container md:py-[100px] py-[50px]"
          style={{
            backgroundImage: `url(${bgPic})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="content_container">
            <h1 className="fz-64 text-center text-[#b91813]">Skills</h1>
            <div className="grid sm:grid-cols-3 gap-10 sm:px-4 py-10">
              <div className="basis-1/3">
                <LinearProgressBar label={"HTML"} percentage={90} />
              </div>
              <div className="basis-1/3">
                <LinearProgressBar label={"MongoDB"} percentage={65} />
              </div>
              <div className="basis-1/3">
                <LinearProgressBar label={"UI/UX Design"} percentage={70} />
              </div>
              <div className="basis-1/3">
                <LinearProgressBar label={"CSS"} percentage={65} />
              </div>
              <div className="basis-1/3">
                <LinearProgressBar label={"Express JS"} percentage={25} />
              </div>
              <div className="basis-1/3">
                <LinearProgressBar
                  label={"Adobe Illustrator"}
                  percentage={95}
                />
              </div>
              <div className="basis-1/3">
                <LinearProgressBar label={"Javascript"} percentage={95} />
              </div>
              <div className="basis-1/3">
                <LinearProgressBar label={"React Js"} percentage={90} />
              </div>
              <div className="basis-1/3">
                <LinearProgressBar label={"Adobe Photoshop"} percentage={80} />
              </div>
              <div className="basis-1/3">
                <LinearProgressBar label={"Tailwind"} percentage={95} />
              </div>
              <div className="basis-1/3">
                <LinearProgressBar label={"Node Js"} percentage={45} />
              </div>
              <div className="basis-1/3">
                <LinearProgressBar
                  label={"Adobe After Effects"}
                  percentage={50}
                />
              </div>
              <div className="basis-1/3">
                <LinearProgressBar label={"Bootstrap"} percentage={95} />
              </div>
              <div className="basis-1/3">
                <LinearProgressBar label={"Wordpress"} percentage={50} />
              </div>
              <div className="basis-1/3">
                <LinearProgressBar
                  label={"Adobe Premier Pro"}
                  percentage={50}
                />
              </div>
            </div>
            <div className="grid grid-cols-3 gap-10 py-5 sm:px-4">
              <CircularProgressBar label={"Urdu"} percentage={100} />
              <CircularProgressBar label={"English"} percentage={70} />
              <CircularProgressBar label={"German"} percentage={20} />
            </div>
          </div>
        </div>
      </section>
    </Element>
  );
}

export default SkillsSection;
