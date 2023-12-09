import React from "react";
import CustomDropDown from "../customDropDown/CustomDropDown";
import MansoryPicturesGrid from "../mansoryPicturesGrid/MansoryPicturesGrid";

import { SocialMeidaPostsData } from "./data";

function GraphicsProjectGallery() {
  // Implement Filter Functionality
  const [filteredImages, setFilteredImages] = React.useState("All Images");

  return (
    <div className="w-full max-w-[1170px] mt-5 m-auto px-[20px]">
      <div className="filterImagesButton flex justify-end">
        <CustomDropDown setFilteredImages={setFilteredImages} />
      </div>
      <div className="min-h-[450px] max-h-[550px] mt-4 overflow-auto p-4 border-slate-500 border rounded-lg">
        <MansoryPicturesGrid
          imagesData={SocialMeidaPostsData}
          selectedImageCategory={filteredImages}
        />
      </div>
    </div>
  );
}

export default GraphicsProjectGallery;
