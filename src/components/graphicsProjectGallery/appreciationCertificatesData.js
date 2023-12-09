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
const nlcappreciationCertificates = require.context(
  "../../assets/images/personalProjects/graphicsProjects/projectCategories/appreciation_certificates/nlc",
  false, // set to false to not search subdirectories
  /\.(jpg|jpeg|png|svg)$/ // specify the file extensions you want to include
);

// Import All Social Media Posts of National Literaly  Circle and store them in an array
const nlcappreciationCertificatesList = nlcappreciationCertificates
  .keys()
  .map((image) => nlcappreciationCertificates(image));

// Relative Path to Social Media Posts of Total School Solutions
const tssappreciationCertificates = require.context(
  "../../assets/images/personalProjects/graphicsProjects/projectCategories/appreciation_certificates/tss",
  false, // set to false to not search subdirectories
  /\.(jpg|jpeg|png|svg)$/ // specify the file extensions you want to include
);

// Import All Social Media Posts of Total School Solutions and store them in an array
const tssappreciationCertificatesList = tssappreciationCertificates
  .keys()
  .map((image) => tssappreciationCertificates(image));

// Relative Path to Social Media Posts of National Literaly Festival 3.0
const nlf3appreciationCertificates = require.context(
  "../../assets/images/personalProjects/graphicsProjects/projectCategories/appreciation_certificates/nlf3",
  false, // set to false to not search subdirectories
  /\.(jpg|jpeg|png|svg)$/ // specify the file extensions you want to include
);

// Import All Social Media Posts of National Literaly Festival 3.0 and store them in an array
const nlf3appreciationCertificatesList = nlf3appreciationCertificates
  .keys()
  .map((image) => nlf3appreciationCertificates(image));

// Relative Path to Social Media Posts of National Literaly Festival 4.0
const nlf4appreciationCertificates = require.context(
  "../../assets/images/personalProjects/graphicsProjects/projectCategories/appreciation_certificates/nlf4",
  false, // set to false to not search subdirectories
  /\.(jpg|jpeg|png|svg)$/ // specify the file extensions you want to include
);

// Import All Social Media Posts of National Literaly Festival 4.0 and store them in an array
const nlf4appreciationCertificatesList = nlf4appreciationCertificates
  .keys()
  .map((image) => nlf4appreciationCertificates(image));

// Relative Path to Social Media Posts of NUST Fitness Club
const nfcappreciationCertificates = require.context(
  "../../assets/images/personalProjects/graphicsProjects/projectCategories/appreciation_certificates/nfc",
  false, // set to false to not search subdirectories
  /\.(jpg|jpeg|png|svg)$/ // specify the file extensions you want to include
);

// Import All Social Media Posts of NUST Fitness Club and store them in an array
const nfcappreciationCertificatesList = nfcappreciationCertificates
  .keys()
  .map((image) => nfcappreciationCertificates(image));

// Relative Path to Social Media Posts of NUST Digital Club
const ndcappreciationCertificates = require.context(
  "../../assets/images/personalProjects/graphicsProjects/projectCategories/appreciation_certificates/ndc",
  false, // set to false to not search subdirectories
  /\.(jpg|jpeg|png|svg)$/ // specify the file extensions you want to include
);

// Import All Social Media Posts of NUST Digital Club and store them in an array
const ndcappreciationCertificatesList = ndcappreciationCertificates
  .keys()
  .map((image) => ndcappreciationCertificates(image));

// Relative Path to Social Media Posts of NIMUN
const nimunappreciationCertificates = require.context(
  "../../assets/images/personalProjects/graphicsProjects/projectCategories/appreciation_certificates/nimun",
  false, // set to false to not search subdirectories
  /\.(jpg|jpeg|png|svg)$/ // specify the file extensions you want to include
);

// Import All Social Media Posts of NIMUN and store them in an array
const nimunappreciationCertificatesList = nimunappreciationCertificates
  .keys()
  .map((image) => nimunappreciationCertificates(image));

// Combine all the lists of images into one array
const combinedArray = [
  ...nlcappreciationCertificatesList,
  ...tssappreciationCertificatesList,
  ...nlf3appreciationCertificatesList,
  ...nlf4appreciationCertificatesList,
  ...nfcappreciationCertificatesList,
  ...ndcappreciationCertificatesList,
  ...nimunappreciationCertificatesList,
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
const appreciationCertificatesData = randomizedArray.map((image, index) => {
  let companyName, companyLogoName, companyPosition;

  // Check if the image is from NLC or TSS based on its inclusion in the arrays
  if (nlcappreciationCertificatesList.includes(image)) {
    companyName = "National Literary Circle";
    companyPosition = "Director Graphics";
    companyLogoName = "nlc";
  } else if (tssappreciationCertificatesList.includes(image)) {
    companyName = "Total School Solutions";
    companyPosition = "Graphic Designer";
    companyLogoName = "tss";
  }
  // Check if the image is from NLF 3.0 or NLF 4.0 based on its inclusion in the arrays
  else if (nlf3appreciationCertificatesList.includes(image)) {
    companyName = "National Literary Festival 3.0";
    companyPosition = "Executive Graphics";
    companyLogoName = "nlf3";
  } else if (nlf4appreciationCertificatesList.includes(image)) {
    companyName = "National Literary Festival 4.0";
    companyPosition = "Deputy Director Graphics";
    companyLogoName = "nlf4";
  }
  // Check if the image is from NUST Fitness Club or NUST Digital Club based on its inclusion in the arrays
  else if (nfcappreciationCertificatesList.includes(image)) {
    companyName = "NUST Fitness Club";
    companyPosition = "Press Secretary";
    companyLogoName = "nfc";
  } else if (ndcappreciationCertificatesList.includes(image)) {
    companyName = "NUST Digital Club";
    companyPosition = "Director Graphics";
    companyLogoName = "ndc";
  }
  // Check if the image is from NIMUN based on its inclusion in the arrays
  else if (nimunappreciationCertificatesList.includes(image)) {
    companyName = "NUST International Model United Nations";
    companyPosition = "Executive Graphics";
    companyLogoName = "nimun";
  }

  return {
    key: index,
    src: image,
    companyName,
    position: companyPosition,
    category: "Appreciation Certificate",
    companyLogoImg: companyLogos(companyLogosList[companyLogoName]),
  };
});

export { appreciationCertificatesData };
