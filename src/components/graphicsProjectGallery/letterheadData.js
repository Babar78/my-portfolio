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
const nlcletterhead = require.context(
  "../../assets/images/personalProjects/graphicsProjects/projectCategories/letterhead/nlc",
  false, // set to false to not search subdirectories
  /\.(jpg|jpeg|png|svg)$/ // specify the file extensions you want to include
);

// Import All Social Media Posts of National Literaly  Circle and store them in an array
const nlcletterheadList = nlcletterhead
  .keys()
  .map((image) => nlcletterhead(image));

// Relative Path to Social Media Posts of Total School Solutions
const tssletterhead = require.context(
  "../../assets/images/personalProjects/graphicsProjects/projectCategories/letterhead/tss",
  false, // set to false to not search subdirectories
  /\.(jpg|jpeg|png|svg)$/ // specify the file extensions you want to include
);

// Import All Social Media Posts of Total School Solutions and store them in an array
const tssletterheadList = tssletterhead
  .keys()
  .map((image) => tssletterhead(image));

// Relative Path to Social Media Posts of National Literaly Festival 3.0
const nlf3letterhead = require.context(
  "../../assets/images/personalProjects/graphicsProjects/projectCategories/letterhead/nlf3",
  false, // set to false to not search subdirectories
  /\.(jpg|jpeg|png|svg)$/ // specify the file extensions you want to include
);

// Import All Social Media Posts of National Literaly Festival 3.0 and store them in an array
const nlf3letterheadList = nlf3letterhead
  .keys()
  .map((image) => nlf3letterhead(image));

// Relative Path to Social Media Posts of National Literaly Festival 4.0
const nlf4letterhead = require.context(
  "../../assets/images/personalProjects/graphicsProjects/projectCategories/letterhead/nlf4",
  false, // set to false to not search subdirectories
  /\.(jpg|jpeg|png|svg)$/ // specify the file extensions you want to include
);

// Import All Social Media Posts of National Literaly Festival 4.0 and store them in an array
const nlf4letterheadList = nlf4letterhead
  .keys()
  .map((image) => nlf4letterhead(image));

// Relative Path to Social Media Posts of NUST Fitness Club
const nfcletterhead = require.context(
  "../../assets/images/personalProjects/graphicsProjects/projectCategories/letterhead/nfc",
  false, // set to false to not search subdirectories
  /\.(jpg|jpeg|png|svg)$/ // specify the file extensions you want to include
);

// Import All Social Media Posts of NUST Fitness Club and store them in an array
const nfcletterheadList = nfcletterhead
  .keys()
  .map((image) => nfcletterhead(image));

// Relative Path to Social Media Posts of NUST Digital Club
const ndcletterhead = require.context(
  "../../assets/images/personalProjects/graphicsProjects/projectCategories/letterhead/ndc",
  false, // set to false to not search subdirectories
  /\.(jpg|jpeg|png|svg)$/ // specify the file extensions you want to include
);

// Import All Social Media Posts of NUST Digital Club and store them in an array
const ndcletterheadList = ndcletterhead
  .keys()
  .map((image) => ndcletterhead(image));

// Relative Path to Social Media Posts of NIMUN
const nimunletterhead = require.context(
  "../../assets/images/personalProjects/graphicsProjects/projectCategories/letterhead/nimun",
  false, // set to false to not search subdirectories
  /\.(jpg|jpeg|png|svg)$/ // specify the file extensions you want to include
);

// Import All Social Media Posts of NIMUN and store them in an array
const nimunletterheadList = nimunletterhead
  .keys()
  .map((image) => nimunletterhead(image));

// Combine all the lists of images into one array
const combinedArray = [
  ...nlcletterheadList,
  ...tssletterheadList,
  ...nlf3letterheadList,
  ...nlf4letterheadList,
  ...nfcletterheadList,
  ...ndcletterheadList,
  ...nimunletterheadList,
];

// Function to shuffle array items randomly
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

// Shuffle the combined array
const randomizedArray = shuffleArray(combinedArray);

// Map over the randomized array
const letterheadData = randomizedArray.map((image, index) => {
  let companyName, companyLogoName, companyPosition;

  // Check if the image is from NLC or TSS based on its inclusion in the arrays
  if (nlcletterheadList.includes(image)) {
    companyName = "National Literary Circle";
    companyPosition = "Director Graphics";
    companyLogoName = "nlc";
  } else if (tssletterheadList.includes(image)) {
    companyName = "Total School Solutions";
    companyPosition = "Graphic Designer";
    companyLogoName = "tss";
  }
  // Check if the image is from NLF 3.0 or NLF 4.0 based on its inclusion in the arrays
  else if (nlf3letterheadList.includes(image)) {
    companyName = "National Literary Festival 3.0";
    companyPosition = "Executive Graphics";
    companyLogoName = "nlf3";
  } else if (nlf4letterheadList.includes(image)) {
    companyName = "National Literary Festival 4.0";
    companyPosition = "Deputy Director Graphics";
    companyLogoName = "nlf4";
  }
  // Check if the image is from NUST Fitness Club or NUST Digital Club based on its inclusion in the arrays
  else if (nfcletterheadList.includes(image)) {
    companyName = "NUST Fitness Club";
    companyPosition = "Press Secretary";
    companyLogoName = "nfc";
  } else if (ndcletterheadList.includes(image)) {
    companyName = "NUST Digital Club";
    companyPosition = "Director Graphics";
    companyLogoName = "ndc";
  }
  // Check if the image is from NIMUN based on its inclusion in the arrays
  else if (nimunletterheadList.includes(image)) {
    companyName = "NUST International Model United Nations";
    companyPosition = "Executive Graphics";
    companyLogoName = "nimun";
  }

  return {
    key: index,
    src: image,
    companyName,
    position: companyPosition,
    category: "Letterhead",
    companyLogoImg: companyLogos(companyLogosList[companyLogoName]),
  };
});

export { letterheadData };
