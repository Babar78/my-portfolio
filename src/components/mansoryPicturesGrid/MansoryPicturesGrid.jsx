import React from "react";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Masonry from "@mui/lab/Masonry";

const Item = styled(Paper)(({ theme, imgSrc }) => ({
  position: "relative",
  background: `url(${imgSrc})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  ...theme.typography.body2,
  padding: theme.spacing(0.5),
  textAlign: "center",
  color: theme.palette.text.secondary,
  overflow: "hidden",
  "&::before": {
    content: '""',
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: "rgba(0, 0, 0, 0.3)",
    transition: "background 0.3s",
  },
  "&:hover::before": {
    background: "rgba(0, 0, 0, 0.5)", // Adjust the opacity as needed
  },
}));

function MansoryPicturesGrid({ imagesData, selectedImageCategory }) {
  // Function to generate random heights with a minimum value
  const generateRandomHeight = (min) => {
    return Math.max(Math.floor(Math.random() * 120) + min, min);
  };
  const generateRandomHeights = (count, minHeight) => {
    return Array.from({ length: count }, () => generateRandomHeight(minHeight));
  };
  const heights = generateRandomHeights(imagesData.length, 150);

  //   Responsive breakpoints
  const [breakpointCols, setBreakpointCols] = React.useState(4);

  React.useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1280) {
        setBreakpointCols(4);
      } else if (window.innerWidth >= 960) {
        setBreakpointCols(3);
      } else if (window.innerWidth >= 600) {
        setBreakpointCols(2);
      } else {
        setBreakpointCols(1);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  //   Show Images based on the selected Category
  const [filteredImagesData, setFilteredImagesData] = React.useState([]);

  React.useEffect(() => {
    // If selectedImageCategory is "All Images," set filtered data to all images
    // Otherwise, filter images based on the selected category
    const filteredImageItems =
      selectedImageCategory === "All Images"
        ? imagesData
        : imagesData.filter(
            (imageItem) => imageItem.category === selectedImageCategory
          );
    setFilteredImagesData(filteredImageItems);
  }, [imagesData, selectedImageCategory]);

  return (
    <Box>
      <Masonry columns={breakpointCols} spacing={2}>
        {filteredImagesData.map((imageItem, index) => (
          <Item
            key={index}
            sx={{ height: heights[index], padding: "0 !important" }}
            imgSrc={imageItem.src}
            className="relative flex items-end pictureItem cursor-pointer"
          >
            <div className="textDetailDiv w-full flex items-center text-white bg-gradient-to-t from-[rgba(0,0,0,0.8)] to-[#0000001a]">
              <div className="flex gap-2 items-center">
                <div className="flex items-center justify-center w-[30px] h-[30px] rounded-full">
                  <img
                    src={imageItem.companyLogoImg}
                    alt="company logo"
                    className="w-[30px] h-[30px]"
                  />
                </div>
                <div className="text-start">
                  <p className="text-[14px] m-0 p-0">{imageItem.companyName}</p>
                  <span className="text-[10px] m-0 p-0 text-slate-400">
                    {imageItem.position}
                  </span>
                </div>
              </div>
            </div>
          </Item>
        ))}
      </Masonry>
    </Box>
  );
}

export default MansoryPicturesGrid;
