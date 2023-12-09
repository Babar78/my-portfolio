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
const nlcbrouchers = require.context(
  "../../assets/images/personalProjects/graphicsProjects/projectCategories/brouchers/nlc",
  false, // set to false to not search subdirectories
  /\.(jpg|jpeg|png|svg)$/ // specify the file extensions you want to include
);

// Import All Social Media Posts of National Literaly  Circle and store them in an array
const nlcbrouchersList = nlcbrouchers
  .keys()
  .map((image) => nlcbrouchers(image));

// Relative Path to Social Media Posts of Total School Solutions
const tssbrouchers = require.context(
  "../../assets/images/personalProjects/graphicsProjects/projectCategories/brouchers/tss",
  false, // set to false to not search subdirectories
  /\.(jpg|jpeg|png|svg)$/ // specify the file extensions you want to include
);

// Import All Social Media Posts of Total School Solutions and store them in an array
const tssbrouchersList = tssbrouchers
  .keys()
  .map((image) => tssbrouchers(image));

// Relative Path to Social Media Posts of National Literaly Festival 3.0
const nlf3brouchers = require.context(
  "../../assets/images/personalProjects/graphicsProjects/projectCategories/brouchers/nlf3",
  false, // set to false to not search subdirectories
  /\.(jpg|jpeg|png|svg)$/ // specify the file extensions you want to include
);

// Import All Social Media Posts of National Literaly Festival 3.0 and store them in an array
const nlf3brouchersList = nlf3brouchers
  .keys()
  .map((image) => nlf3brouchers(image));

// Relative Path to Social Media Posts of National Literaly Festival 4.0
const nlf4brouchers = require.context(
  "../../assets/images/personalProjects/graphicsProjects/projectCategories/brouchers/nlf4",
  false, // set to false to not search subdirectories
  /\.(jpg|jpeg|png|svg)$/ // specify the file extensions you want to include
);

// Import All Social Media Posts of National Literaly Festival 4.0 and store them in an array
const nlf4brouchersList = nlf4brouchers
  .keys()
  .map((image) => nlf4brouchers(image));

// Relative Path to Social Media Posts of NUST Fitness Club
const nfcbrouchers = require.context(
  "../../assets/images/personalProjects/graphicsProjects/projectCategories/brouchers/nfc",
  false, // set to false to not search subdirectories
  /\.(jpg|jpeg|png|svg)$/ // specify the file extensions you want to include
);

// Import All Social Media Posts of NUST Fitness Club and store them in an array
const nfcbrouchersList = nfcbrouchers
  .keys()
  .map((image) => nfcbrouchers(image));

// Relative Path to Social Media Posts of NUST Digital Club
const ndcbrouchers = require.context(
  "../../assets/images/personalProjects/graphicsProjects/projectCategories/brouchers/ndc",
  false, // set to false to not search subdirectories
  /\.(jpg|jpeg|png|svg)$/ // specify the file extensions you want to include
);

// Import All Social Media Posts of NUST Digital Club and store them in an array
const ndcbrouchersList = ndcbrouchers
  .keys()
  .map((image) => ndcbrouchers(image));

// Relative Path to Social Media Posts of NIMUN
const nimunbrouchers = require.context(
  "../../assets/images/personalProjects/graphicsProjects/projectCategories/brouchers/nimun",
  false, // set to false to not search subdirectories
  /\.(jpg|jpeg|png|svg)$/ // specify the file extensions you want to include
);

// Import All Social Media Posts of NIMUN and store them in an array
const nimunbrouchersList = nimunbrouchers
  .keys()
  .map((image) => nimunbrouchers(image));

// Combine all the lists of images into one array
const combinedArray = [
  ...nlcbrouchersList,
  ...tssbrouchersList,
  ...nlf3brouchersList,
  ...nlf4brouchersList,
  ...nfcbrouchersList,
  ...ndcbrouchersList,
  ...nimunbrouchersList,
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
const brouchersData = randomizedArray.map((image, index) => {
  let companyName, companyLogoName, companyPosition;

  // Check if the image is from NLC or TSS based on its inclusion in the arrays
  if (nlcbrouchersList.includes(image)) {
    companyName = "National Literary Circle";
    companyPosition = "Director Graphics";
    companyLogoName = "nlc";
  } else if (tssbrouchersList.includes(image)) {
    companyName = "Total School Solutions";
    companyPosition = "Graphic Designer";
    companyLogoName = "tss";
  }
  // Check if the image is from NLF 3.0 or NLF 4.0 based on its inclusion in the arrays
  else if (nlf3brouchersList.includes(image)) {
    companyName = "National Literary Festival 3.0";
    companyPosition = "Executive Graphics";
    companyLogoName = "nlf3";
  } else if (nlf4brouchersList.includes(image)) {
    companyName = "National Literary Festival 4.0";
    companyPosition = "Deputy Director Graphics";
    companyLogoName = "nlf4";
  }
  // Check if the image is from NUST Fitness Club or NUST Digital Club based on its inclusion in the arrays
  else if (nfcbrouchersList.includes(image)) {
    companyName = "NUST Fitness Club";
    companyPosition = "Press Secretary";
    companyLogoName = "nfc";
  } else if (ndcbrouchersList.includes(image)) {
    companyName = "NUST Digital Club";
    companyPosition = "Director Graphics";
    companyLogoName = "ndc";
  }
  // Check if the image is from NIMUN based on its inclusion in the arrays
  else if (nimunbrouchersList.includes(image)) {
    companyName = "NUST International Model United Nations";
    companyPosition = "Executive Graphics";
    companyLogoName = "nimun";
  }

  return {
    key: index,
    src: image,
    companyName,
    position: companyPosition,
    category: "Broucher",
    companyLogoImg: companyLogos(companyLogosList[companyLogoName]),
  };
});

export { brouchersData };
