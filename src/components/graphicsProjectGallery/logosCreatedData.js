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
const nlclogosCreated = require.context(
  "../../assets/images/personalProjects/graphicsProjects/projectCategories/logos/nlc",
  false, // set to false to not search subdirectories
  /\.(jpg|jpeg|png|svg)$/ // specify the file extensions you want to include
);

// Import All Social Media Posts of National Literaly  Circle and store them in an array
const nlclogosCreatedList = nlclogosCreated
  .keys()
  .map((image) => nlclogosCreated(image));

// Relative Path to Social Media Posts of Total School Solutions
const tsslogosCreated = require.context(
  "../../assets/images/personalProjects/graphicsProjects/projectCategories/logos/tss",
  false, // set to false to not search subdirectories
  /\.(jpg|jpeg|png|svg)$/ // specify the file extensions you want to include
);

// Import All Social Media Posts of Total School Solutions and store them in an array
const tsslogosCreatedList = tsslogosCreated
  .keys()
  .map((image) => tsslogosCreated(image));

// Relative Path to Social Media Posts of National Literaly Festival 3.0
const nlf3logosCreated = require.context(
  "../../assets/images/personalProjects/graphicsProjects/projectCategories/logos/nlf3",
  false, // set to false to not search subdirectories
  /\.(jpg|jpeg|png|svg)$/ // specify the file extensions you want to include
);

// Import All Social Media Posts of National Literaly Festival 3.0 and store them in an array
const nlf3logosCreatedList = nlf3logosCreated
  .keys()
  .map((image) => nlf3logosCreated(image));

// Relative Path to Social Media Posts of National Literaly Festival 4.0
const nlf4logosCreated = require.context(
  "../../assets/images/personalProjects/graphicsProjects/projectCategories/logos/nlf4",
  false, // set to false to not search subdirectories
  /\.(jpg|jpeg|png|svg)$/ // specify the file extensions you want to include
);

// Import All Social Media Posts of National Literaly Festival 4.0 and store them in an array
const nlf4logosCreatedList = nlf4logosCreated
  .keys()
  .map((image) => nlf4logosCreated(image));

// Relative Path to Social Media Posts of NUST Fitness Club
const nfclogosCreated = require.context(
  "../../assets/images/personalProjects/graphicsProjects/projectCategories/logos/nfc",
  false, // set to false to not search subdirectories
  /\.(jpg|jpeg|png|svg)$/ // specify the file extensions you want to include
);

// Import All Social Media Posts of NUST Fitness Club and store them in an array
const nfclogosCreatedList = nfclogosCreated
  .keys()
  .map((image) => nfclogosCreated(image));

// Relative Path to Social Media Posts of NUST Digital Club
const ndclogosCreated = require.context(
  "../../assets/images/personalProjects/graphicsProjects/projectCategories/logos/ndc",
  false, // set to false to not search subdirectories
  /\.(jpg|jpeg|png|svg)$/ // specify the file extensions you want to include
);

// Import All Social Media Posts of NUST Digital Club and store them in an array
const ndclogosCreatedList = ndclogosCreated
  .keys()
  .map((image) => ndclogosCreated(image));

// Relative Path to Social Media Posts of NIMUN
const nimunlogosCreated = require.context(
  "../../assets/images/personalProjects/graphicsProjects/projectCategories/logos/nimun",
  false, // set to false to not search subdirectories
  /\.(jpg|jpeg|png|svg)$/ // specify the file extensions you want to include
);

// Import All Social Media Posts of NIMUN and store them in an array
const nimunlogosCreatedList = nimunlogosCreated
  .keys()
  .map((image) => nimunlogosCreated(image));

// Combine all the lists of images into one array
const combinedArray = [
  ...nlclogosCreatedList,
  ...tsslogosCreatedList,
  ...nlf3logosCreatedList,
  ...nlf4logosCreatedList,
  ...nfclogosCreatedList,
  ...ndclogosCreatedList,
  ...nimunlogosCreatedList,
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
const logosCreatedData = randomizedArray.map((image, index) => {
  let companyName, companyLogoName, companyPosition;

  // Check if the image is from NLC or TSS based on its inclusion in the arrays
  if (nlclogosCreatedList.includes(image)) {
    companyName = "National Literary Circle";
    companyPosition = "Director Graphics";
    companyLogoName = "nlc";
  } else if (tsslogosCreatedList.includes(image)) {
    companyName = "Total School Solutions";
    companyPosition = "Graphic Designer";
    companyLogoName = "tss";
  }
  // Check if the image is from NLF 3.0 or NLF 4.0 based on its inclusion in the arrays
  else if (nlf3logosCreatedList.includes(image)) {
    companyName = "National Literary Festival 3.0";
    companyPosition = "Executive Graphics";
    companyLogoName = "nlf3";
  } else if (nlf4logosCreatedList.includes(image)) {
    companyName = "National Literary Festival 4.0";
    companyPosition = "Deputy Director Graphics";
    companyLogoName = "nlf4";
  }
  // Check if the image is from NUST Fitness Club or NUST Digital Club based on its inclusion in the arrays
  else if (nfclogosCreatedList.includes(image)) {
    companyName = "NUST Fitness Club";
    companyPosition = "Press Secretary";
    companyLogoName = "nfc";
  } else if (ndclogosCreatedList.includes(image)) {
    companyName = "NUST Digital Club";
    companyPosition = "Director Graphics";
    companyLogoName = "ndc";
  }
  // Check if the image is from NIMUN based on its inclusion in the arrays
  else if (nimunlogosCreatedList.includes(image)) {
    companyName = "NUST International Model United Nations";
    companyPosition = "Executive Graphics";
    companyLogoName = "nimun";
  }

  return {
    key: index,
    src: image,
    companyName,
    position: companyPosition,
    category: "Logo Design",
    companyLogoImg: companyLogos(companyLogosList[companyLogoName]),
  };
});

export { logosCreatedData };
