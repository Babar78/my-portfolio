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
const nlceventTicket = require.context(
  "../../assets/images/personalProjects/graphicsProjects/projectCategories/event_ticket/nlc",
  false, // set to false to not search subdirectories
  /\.(jpg|jpeg|png|svg)$/ // specify the file extensions you want to include
);

// Import All Social Media Posts of National Literaly  Circle and store them in an array
const nlceventTicketList = nlceventTicket
  .keys()
  .map((image) => nlceventTicket(image));

// Relative Path to Social Media Posts of Total School Solutions
const tsseventTicket = require.context(
  "../../assets/images/personalProjects/graphicsProjects/projectCategories/event_ticket/tss",
  false, // set to false to not search subdirectories
  /\.(jpg|jpeg|png|svg)$/ // specify the file extensions you want to include
);

// Import All Social Media Posts of Total School Solutions and store them in an array
const tsseventTicketList = tsseventTicket
  .keys()
  .map((image) => tsseventTicket(image));

// Relative Path to Social Media Posts of National Literaly Festival 3.0
const nlf3eventTicket = require.context(
  "../../assets/images/personalProjects/graphicsProjects/projectCategories/event_ticket/nlf3",
  false, // set to false to not search subdirectories
  /\.(jpg|jpeg|png|svg)$/ // specify the file extensions you want to include
);

// Import All Social Media Posts of National Literaly Festival 3.0 and store them in an array
const nlf3eventTicketList = nlf3eventTicket
  .keys()
  .map((image) => nlf3eventTicket(image));

// Relative Path to Social Media Posts of National Literaly Festival 4.0
const nlf4eventTicket = require.context(
  "../../assets/images/personalProjects/graphicsProjects/projectCategories/event_ticket/nlf4",
  false, // set to false to not search subdirectories
  /\.(jpg|jpeg|png|svg)$/ // specify the file extensions you want to include
);

// Import All Social Media Posts of National Literaly Festival 4.0 and store them in an array
const nlf4eventTicketList = nlf4eventTicket
  .keys()
  .map((image) => nlf4eventTicket(image));

// Relative Path to Social Media Posts of NUST Fitness Club
const nfceventTicket = require.context(
  "../../assets/images/personalProjects/graphicsProjects/projectCategories/event_ticket/nfc",
  false, // set to false to not search subdirectories
  /\.(jpg|jpeg|png|svg)$/ // specify the file extensions you want to include
);

// Import All Social Media Posts of NUST Fitness Club and store them in an array
const nfceventTicketList = nfceventTicket
  .keys()
  .map((image) => nfceventTicket(image));

// Relative Path to Social Media Posts of NUST Digital Club
const ndceventTicket = require.context(
  "../../assets/images/personalProjects/graphicsProjects/projectCategories/event_ticket/ndc",
  false, // set to false to not search subdirectories
  /\.(jpg|jpeg|png|svg)$/ // specify the file extensions you want to include
);

// Import All Social Media Posts of NUST Digital Club and store them in an array
const ndceventTicketList = ndceventTicket
  .keys()
  .map((image) => ndceventTicket(image));

// Relative Path to Social Media Posts of NIMUN
const nimuneventTicket = require.context(
  "../../assets/images/personalProjects/graphicsProjects/projectCategories/event_ticket/nimun",
  false, // set to false to not search subdirectories
  /\.(jpg|jpeg|png|svg)$/ // specify the file extensions you want to include
);

// Import All Social Media Posts of NIMUN and store them in an array
const nimuneventTicketList = nimuneventTicket
  .keys()
  .map((image) => nimuneventTicket(image));

// Combine all the lists of images into one array
const combinedArray = [
  ...nlceventTicketList,
  ...tsseventTicketList,
  ...nlf3eventTicketList,
  ...nlf4eventTicketList,
  ...nfceventTicketList,
  ...ndceventTicketList,
  ...nimuneventTicketList,
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
const eventTicketData = randomizedArray.map((image, index) => {
  let companyName, companyLogoName, companyPosition;

  // Check if the image is from NLC or TSS based on its inclusion in the arrays
  if (nlceventTicketList.includes(image)) {
    companyName = "National Literary Circle";
    companyPosition = "Director Graphics";
    companyLogoName = "nlc";
  } else if (tsseventTicketList.includes(image)) {
    companyName = "Total School Solutions";
    companyPosition = "Graphic Designer";
    companyLogoName = "tss";
  }
  // Check if the image is from NLF 3.0 or NLF 4.0 based on its inclusion in the arrays
  else if (nlf3eventTicketList.includes(image)) {
    companyName = "National Literary Festival 3.0";
    companyPosition = "Executive Graphics";
    companyLogoName = "nlf3";
  } else if (nlf4eventTicketList.includes(image)) {
    companyName = "National Literary Festival 4.0";
    companyPosition = "Deputy Director Graphics";
    companyLogoName = "nlf4";
  }
  // Check if the image is from NUST Fitness Club or NUST Digital Club based on its inclusion in the arrays
  else if (nfceventTicketList.includes(image)) {
    companyName = "NUST Fitness Club";
    companyPosition = "Press Secretary";
    companyLogoName = "nfc";
  } else if (ndceventTicketList.includes(image)) {
    companyName = "NUST Digital Club";
    companyPosition = "Director Graphics";
    companyLogoName = "ndc";
  }
  // Check if the image is from NIMUN based on its inclusion in the arrays
  else if (nimuneventTicketList.includes(image)) {
    companyName = "NUST International Model United Nations";
    companyPosition = "Executive Graphics";
    companyLogoName = "nimun";
  }

  return {
    key: index,
    src: image,
    companyName,
    position: companyPosition,
    category: "Event Ticket",
    companyLogoImg: companyLogos(companyLogosList[companyLogoName]),
  };
});

export { eventTicketData };
