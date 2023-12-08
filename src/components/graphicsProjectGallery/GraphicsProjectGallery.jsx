import React from "react";
import CustomDropDown from "../customDropDown/CustomDropDown";
import MansoryPicturesGrid from "../mansoryPicturesGrid/MansoryPicturesGrid";

import img1 from "../../assets/images/services/graphicDesign.png";
import img2 from "../../assets/images/services/ui.png";
import img3 from "../../assets/images/services/webDev.png";
import img4 from "../../assets/images/services/webDev.png";
import img5 from "../../assets/images/services/ui.png";
import img6 from "../../assets/images/services/graphicDesign.png";
import img7 from "../../assets/images/services/graphicDesign.png";
import img8 from "../../assets/images/services/graphicDesign.png";
import img9 from "../../assets/images/services/graphicDesign.png";
import img10 from "../../assets/images/services/graphicDesign.png";

const imagesData = [
  {
    src: img1,
    companyName: "Company A",
    position: "Designer",
    category: "Graphic Design",
  },

  {
    src: img2,
    companyName: "Company B",
    position: "Designer",
    category: "UI/UX Design",
  },

  {
    src: img3,
    companyName: "Company C",
    position: "Designer",
    category: "Web Development",
  },

  {
    src: img4,
    companyName: "Company D",
    position: "Designer",
    category: "Web Development",
  },

  {
    src: img5,
    companyName: "Company E",
    position: "Designer",
    category: "UI/UX Design",
  },

  {
    src: img6,
    companyName: "Company F",
    position: "Designer",
    category: "Graphic Design",
  },

  {
    src: img7,
    companyName: "Company G",
    position: "Designer",
    category: "Graphic Design",
  },

  {
    src: img8,
    companyName: "Company H",
    position: "Designer",
    category: "Graphic Design",
  },

  {
    src: img9,
    companyName: "Company I",
    position: "Designer",
    category: "Graphic Design",
  },

  {
    src: img10,
    companyName: "Company J",
    position: "Designer",
    category: "Graphic Design",
  },
];

function GraphicsProjectGallery() {
  return (
    <div className="w-full max-w-[1170px] mt-5 m-auto px-[20px]">
      <div className="filterImagesButton flex justify-end">
        <CustomDropDown />
      </div>
      <div className="min-h-[450px] max-h-[550px] mt-4 overflow-auto p-4 border-slate-500 border rounded-lg">
        <MansoryPicturesGrid imagesData={imagesData} />
      </div>
    </div>
  );
}

export default GraphicsProjectGallery;
