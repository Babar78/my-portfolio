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
const nlcbrandwall = require.context(
  "../../assets/images/personalProjects/graphicsProjects/projectCategories/brandwall/nlc",
  false, // set to false to not search subdirectories
  /\.(jpg|jpeg|png|svg)$/ // specify the file extensions you want to include
);

// Import All Social Media Posts of National Literaly  Circle and store them in an array
const nlcbrandwallList = nlcbrandwall
  .keys()
  .map((image) => nlcbrandwall(image));

// Relative Path to Social Media Posts of Total School Solutions
const tssbrandwall = require.context(
  "../../assets/images/personalProjects/graphicsProjects/projectCategories/brandwall/tss",
  false, // set to false to not search subdirectories
  /\.(jpg|jpeg|png|svg)$/ // specify the file extensions you want to include
);

// Import All Social Media Posts of Total School Solutions and store them in an array
const tssbrandwallList = tssbrandwall
  .keys()
  .map((image) => tssbrandwall(image));

// Relative Path to Social Media Posts of National Literaly Festival 3.0
const nlf3brandwall = require.context(
  "../../assets/images/personalProjects/graphicsProjects/projectCategories/brandwall/nlf3",
  false, // set to false to not search subdirectories
  /\.(jpg|jpeg|png|svg)$/ // specify the file extensions you want to include
);

// Import All Social Media Posts of National Literaly Festival 3.0 and store them in an array
const nlf3brandwallList = nlf3brandwall
  .keys()
  .map((image) => nlf3brandwall(image));

// Relative Path to Social Media Posts of National Literaly Festival 4.0
const nlf4brandwall = require.context(
  "../../assets/images/personalProjects/graphicsProjects/projectCategories/brandwall/nlf4",
  false, // set to false to not search subdirectories
  /\.(jpg|jpeg|png|svg)$/ // specify the file extensions you want to include
);

// Import All Social Media Posts of National Literaly Festival 4.0 and store them in an array
const nlf4brandwallList = nlf4brandwall
  .keys()
  .map((image) => nlf4brandwall(image));

// Relative Path to Social Media Posts of NUST Fitness Club
const nfcbrandwall = require.context(
  "../../assets/images/personalProjects/graphicsProjects/projectCategories/brandwall/nfc",
  false, // set to false to not search subdirectories
  /\.(jpg|jpeg|png|svg)$/ // specify the file extensions you want to include
);

// Import All Social Media Posts of NUST Fitness Club and store them in an array
const nfcbrandwallList = nfcbrandwall
  .keys()
  .map((image) => nfcbrandwall(image));

// Relative Path to Social Media Posts of NUST Digital Club
const ndcbrandwall = require.context(
  "../../assets/images/personalProjects/graphicsProjects/projectCategories/brandwall/ndc",
  false, // set to false to not search subdirectories
  /\.(jpg|jpeg|png|svg)$/ // specify the file extensions you want to include
);

// Import All Social Media Posts of NUST Digital Club and store them in an array
const ndcbrandwallList = ndcbrandwall
  .keys()
  .map((image) => ndcbrandwall(image));

// Relative Path to Social Media Posts of NIMUN
const nimunbrandwall = require.context(
  "../../assets/images/personalProjects/graphicsProjects/projectCategories/brandwall/nimun",
  false, // set to false to not search subdirectories
  /\.(jpg|jpeg|png|svg)$/ // specify the file extensions you want to include
);

// Import All Social Media Posts of NIMUN and store them in an array
const nimunbrandwallList = nimunbrandwall
  .keys()
  .map((image) => nimunbrandwall(image));

// Combine all the lists of images into one array
const combinedArray = [
  ...nlcbrandwallList,
  ...tssbrandwallList,
  ...nlf3brandwallList,
  ...nlf4brandwallList,
  ...nfcbrandwallList,
  ...ndcbrandwallList,
  ...nimunbrandwallList,
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
const brandwallData = randomizedArray.map((image, index) => {
  let companyName, companyLogoName, companyPosition;

  // Check if the image is from NLC or TSS based on its inclusion in the arrays
  if (nlcbrandwallList.includes(image)) {
    companyName = "National Literary Circle";
    companyPosition = "Director Graphics";
    companyLogoName = "nlc";
  } else if (tssbrandwallList.includes(image)) {
    companyName = "Total School Solutions";
    companyPosition = "Graphic Designer";
    companyLogoName = "tss";
  }
  // Check if the image is from NLF 3.0 or NLF 4.0 based on its inclusion in the arrays
  else if (nlf3brandwallList.includes(image)) {
    companyName = "National Literary Festival 3.0";
    companyPosition = "Executive Graphics";
    companyLogoName = "nlf3";
  } else if (nlf4brandwallList.includes(image)) {
    companyName = "National Literary Festival 4.0";
    companyPosition = "Deputy Director Graphics";
    companyLogoName = "nlf4";
  }
  // Check if the image is from NUST Fitness Club or NUST Digital Club based on its inclusion in the arrays
  else if (nfcbrandwallList.includes(image)) {
    companyName = "NUST Fitness Club";
    companyPosition = "Press Secretary";
    companyLogoName = "nfc";
  } else if (ndcbrandwallList.includes(image)) {
    companyName = "NUST Digital Club";
    companyPosition = "Director Graphics";
    companyLogoName = "ndc";
  }
  // Check if the image is from NIMUN based on its inclusion in the arrays
  else if (nimunbrandwallList.includes(image)) {
    companyName = "NUST International Model United Nations";
    companyPosition = "Executive Graphics";
    companyLogoName = "nimun";
  }

  return {
    key: index,
    src: image,
    companyName,
    position: companyPosition,
    category: "Brandwall",
    companyLogoImg: companyLogos(companyLogosList[companyLogoName]),
  };
});

export { brandwallData };
