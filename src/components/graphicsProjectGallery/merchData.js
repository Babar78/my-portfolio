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
const nlcmerch = require.context(
  "../../assets/images/personalProjects/graphicsProjects/projectCategories/merch/nlc",
  false, // set to false to not search subdirectories
  /\.(jpg|jpeg|png|svg)$/ // specify the file extensions you want to include
);

// Import All Social Media Posts of National Literaly  Circle and store them in an array
const nlcmerchList = nlcmerch.keys().map((image) => nlcmerch(image));

// Relative Path to Social Media Posts of Total School Solutions
const tssmerch = require.context(
  "../../assets/images/personalProjects/graphicsProjects/projectCategories/merch/tss",
  false, // set to false to not search subdirectories
  /\.(jpg|jpeg|png|svg)$/ // specify the file extensions you want to include
);

// Import All Social Media Posts of Total School Solutions and store them in an array
const tssmerchList = tssmerch.keys().map((image) => tssmerch(image));

// Relative Path to Social Media Posts of National Literaly Festival 3.0
const nlf3merch = require.context(
  "../../assets/images/personalProjects/graphicsProjects/projectCategories/merch/nlf3",
  false, // set to false to not search subdirectories
  /\.(jpg|jpeg|png|svg)$/ // specify the file extensions you want to include
);

// Import All Social Media Posts of National Literaly Festival 3.0 and store them in an array
const nlf3merchList = nlf3merch.keys().map((image) => nlf3merch(image));

// Relative Path to Social Media Posts of National Literaly Festival 4.0
const nlf4merch = require.context(
  "../../assets/images/personalProjects/graphicsProjects/projectCategories/merch/nlf4",
  false, // set to false to not search subdirectories
  /\.(jpg|jpeg|png|svg)$/ // specify the file extensions you want to include
);

// Import All Social Media Posts of National Literaly Festival 4.0 and store them in an array
const nlf4merchList = nlf4merch.keys().map((image) => nlf4merch(image));

// Relative Path to Social Media Posts of NUST Fitness Club
const nfcmerch = require.context(
  "../../assets/images/personalProjects/graphicsProjects/projectCategories/merch/nfc",
  false, // set to false to not search subdirectories
  /\.(jpg|jpeg|png|svg)$/ // specify the file extensions you want to include
);

// Import All Social Media Posts of NUST Fitness Club and store them in an array
const nfcmerchList = nfcmerch.keys().map((image) => nfcmerch(image));

// Relative Path to Social Media Posts of NUST Digital Club
const ndcmerch = require.context(
  "../../assets/images/personalProjects/graphicsProjects/projectCategories/merch/ndc",
  false, // set to false to not search subdirectories
  /\.(jpg|jpeg|png|svg)$/ // specify the file extensions you want to include
);

// Import All Social Media Posts of NUST Digital Club and store them in an array
const ndcmerchList = ndcmerch.keys().map((image) => ndcmerch(image));

// Relative Path to Social Media Posts of NIMUN
const nimunmerch = require.context(
  "../../assets/images/personalProjects/graphicsProjects/projectCategories/merch/nimun",
  false, // set to false to not search subdirectories
  /\.(jpg|jpeg|png|svg)$/ // specify the file extensions you want to include
);

// Import All Social Media Posts of NIMUN and store them in an array
const nimunmerchList = nimunmerch.keys().map((image) => nimunmerch(image));

// Combine all the lists of images into one array
const combinedArray = [
  ...nlcmerchList,
  ...tssmerchList,
  ...nlf3merchList,
  ...nlf4merchList,
  ...nfcmerchList,
  ...ndcmerchList,
  ...nimunmerchList,
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
const merchData = randomizedArray.map((image, index) => {
  let companyName, companyLogoName, companyPosition;

  // Check if the image is from NLC or TSS based on its inclusion in the arrays
  if (nlcmerchList.includes(image)) {
    companyName = "National Literary Circle";
    companyPosition = "Director Graphics";
    companyLogoName = "nlc";
  } else if (tssmerchList.includes(image)) {
    companyName = "Total School Solutions";
    companyPosition = "Graphic Designer";
    companyLogoName = "tss";
  }
  // Check if the image is from NLF 3.0 or NLF 4.0 based on its inclusion in the arrays
  else if (nlf3merchList.includes(image)) {
    companyName = "National Literary Festival 3.0";
    companyPosition = "Executive Graphics";
    companyLogoName = "nlf3";
  } else if (nlf4merchList.includes(image)) {
    companyName = "National Literary Festival 4.0";
    companyPosition = "Deputy Director Graphics";
    companyLogoName = "nlf4";
  }
  // Check if the image is from NUST Fitness Club or NUST Digital Club based on its inclusion in the arrays
  else if (nfcmerchList.includes(image)) {
    companyName = "NUST Fitness Club";
    companyPosition = "Press Secretary";
    companyLogoName = "nfc";
  } else if (ndcmerchList.includes(image)) {
    companyName = "NUST Digital Club";
    companyPosition = "Director Graphics";
    companyLogoName = "ndc";
  }
  // Check if the image is from NIMUN based on its inclusion in the arrays
  else if (nimunmerchList.includes(image)) {
    companyName = "NUST International Model United Nations";
    companyPosition = "Executive Graphics";
    companyLogoName = "nimun";
  }

  return {
    key: index,
    src: image,
    companyName,
    position: companyPosition,
    category: "Merchandise",
    companyLogoImg: companyLogos(companyLogosList[companyLogoName]),
  };
});

export { merchData };
