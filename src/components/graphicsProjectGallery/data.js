import nlcLogo from "../../assets/images/personalProjects/ff.svg";
import bdsLogo from "../../assets/images/personalProjects/bds.svg";
import nfcLogo from "../../assets/images/personalProjects/bilty.svg";

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

// Relative Path to Company Logos
const companyLogos = require.context(
  "../../assets/images/personalProjects/graphicsProjects/company-logos",
  false, // set to false to not search subdirectories
  /\.(jpg|jpeg|png|svg)$/ // specify the file extensions you want to include
);

// Extract compantLogo names from paths
const companyLogoNames = companyLogos.keys().map((image) => {
  const matches = image.match(/\/([^/]+)\.\w+$/); // Extracts the name between the last '/' and '.' in the filename
  return matches ? matches[1] : null;
});

// Create an object with logo names as keys and images as values
const companyLogosList = companyLogoNames.reduce((acc, name, index) => {
  if (name) {
    acc[name] = companyLogos.keys()[index];
  }
  return acc;
}, {});

// Relative Path to Social Media Posts of National Literaly Circle
const nlcSocialMeidaPosts = require.context(
  "../../assets/images/personalProjects/graphicsProjects/projectCategories/social_media_posts/nlc",
  false, // set to false to not search subdirectories
  /\.(jpg|jpeg|png|svg)$/ // specify the file extensions you want to include
);

// Import All Social Media Posts of National Literaly  Circle and store them in an array
const nlcSocialMeidaPostsList = nlcSocialMeidaPosts
  .keys()
  .map((image) => nlcSocialMeidaPosts(image));

// Relative Path to Social Media Posts of Total School Solutions
const tssSocialMeidaPosts = require.context(
  "../../assets/images/personalProjects/graphicsProjects/projectCategories/social_media_posts/tss",
  false, // set to false to not search subdirectories
  /\.(jpg|jpeg|png|svg)$/ // specify the file extensions you want to include
);

// Import All Social Media Posts of Total School Solutions and store them in an array
const tssSocialMeidaPostsList = tssSocialMeidaPosts
  .keys()
  .map((image) => tssSocialMeidaPosts(image));

// map the whole TSS Social Media Posts array to create an array of objects
// const SocialMeidaPostsData = nlcSocialMeidaPostsList.map((image, index) => {
//   return {
//     key: index,
//     src: image,
//     companyName: "Total School Solutions",
//     position: "Designer",
//     category: "Social Media Post",
//     companyLogoImg: companyLogos(companyLogosList["nlc"]),
//   };
// });

const SocialMeidaPostsData = [
    ...nlcSocialMeidaPostsList,
    ...tssSocialMeidaPostsList,
  ].map((image, index) => {
    let companyName, companyLogoName, companyPosition;
  
    // Check if the image is from NLC or TSS based on its inclusion in the arrays
    if (nlcSocialMeidaPostsList.includes(image)) {
      companyName = "National Literary Circle";
      companyPosition = "Director Graphics";
      companyLogoName = "nlc";
    } else if (tssSocialMeidaPostsList.includes(image)) {
      companyName = "Total School Solutions";
      companyPosition = "Graphic Designer";
      companyLogoName = "tss";
    }
  
    return {
      key: index,
      src: image,
      companyName,
      position: companyPosition,
      category: "Social Media Post",
      companyLogoImg: companyLogos(companyLogosList[companyLogoName]),
    };
  });
  
  export { SocialMeidaPostsData };
