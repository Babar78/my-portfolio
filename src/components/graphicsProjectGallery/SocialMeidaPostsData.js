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

// Relative Path to Social Media Posts of National Literaly Festival 3.0
const nlf3SocialMeidaPosts = require.context(
  "../../assets/images/personalProjects/graphicsProjects/projectCategories/social_media_posts/nlf3",
  false, // set to false to not search subdirectories
  /\.(jpg|jpeg|png|svg)$/ // specify the file extensions you want to include
);

// Import All Social Media Posts of National Literaly Festival 3.0 and store them in an array
const nlf3SocialMeidaPostsList = nlf3SocialMeidaPosts
  .keys()
  .map((image) => nlf3SocialMeidaPosts(image));

// Relative Path to Social Media Posts of National Literaly Festival 4.0
const nlf4SocialMeidaPosts = require.context(
  "../../assets/images/personalProjects/graphicsProjects/projectCategories/social_media_posts/nlf4",
  false, // set to false to not search subdirectories
  /\.(jpg|jpeg|png|svg)$/ // specify the file extensions you want to include
);

// Import All Social Media Posts of National Literaly Festival 4.0 and store them in an array
const nlf4SocialMeidaPostsList = nlf4SocialMeidaPosts
  .keys()
  .map((image) => nlf4SocialMeidaPosts(image));

// Relative Path to Social Media Posts of NUST Fitness Club
const nfcSocialMeidaPosts = require.context(
  "../../assets/images/personalProjects/graphicsProjects/projectCategories/social_media_posts/nfc",
  false, // set to false to not search subdirectories
  /\.(jpg|jpeg|png|svg)$/ // specify the file extensions you want to include
);

// Import All Social Media Posts of NUST Fitness Club and store them in an array
const nfcSocialMeidaPostsList = nfcSocialMeidaPosts
  .keys()
  .map((image) => nfcSocialMeidaPosts(image));

// Relative Path to Social Media Posts of NUST Digital Club
const ndcSocialMeidaPosts = require.context(
  "../../assets/images/personalProjects/graphicsProjects/projectCategories/social_media_posts/ndc",
  false, // set to false to not search subdirectories
  /\.(jpg|jpeg|png|svg)$/ // specify the file extensions you want to include
);

// Import All Social Media Posts of NUST Digital Club and store them in an array
const ndcSocialMeidaPostsList = ndcSocialMeidaPosts
  .keys()
  .map((image) => ndcSocialMeidaPosts(image));

// Relative Path to Social Media Posts of NIMUN
const nimunSocialMeidaPosts = require.context(
  "../../assets/images/personalProjects/graphicsProjects/projectCategories/social_media_posts/nimun",
  false, // set to false to not search subdirectories
  /\.(jpg|jpeg|png|svg)$/ // specify the file extensions you want to include
);

// Import All Social Media Posts of NIMUN and store them in an array
const nimunSocialMeidaPostsList = nimunSocialMeidaPosts
  .keys()
  .map((image) => nimunSocialMeidaPosts(image));

// Combine all the lists of images into one array
const combinedArray = [
  ...nlcSocialMeidaPostsList,
  ...tssSocialMeidaPostsList,
  ...nlf3SocialMeidaPostsList,
  ...nlf4SocialMeidaPostsList,
  ...nfcSocialMeidaPostsList,
  ...ndcSocialMeidaPostsList,
  ...nimunSocialMeidaPostsList,
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
const SocialMeidaPostsData = randomizedArray.map((image, index) => {
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
  // Check if the image is from NLF 3.0 or NLF 4.0 based on its inclusion in the arrays
  else if (nlf3SocialMeidaPostsList.includes(image)) {
    companyName = "National Literary Festival 3.0";
    companyPosition = "Executive Graphics";
    companyLogoName = "nlf3";
  } else if (nlf4SocialMeidaPostsList.includes(image)) {
    companyName = "National Literary Festival 4.0";
    companyPosition = "Deputy Director Graphics";
    companyLogoName = "nlf4";
  }
  // Check if the image is from NUST Fitness Club or NUST Digital Club based on its inclusion in the arrays
  else if (nfcSocialMeidaPostsList.includes(image)) {
    companyName = "NUST Fitness Club";
    companyPosition = "Press Secretary";
    companyLogoName = "nfc";
  } else if (ndcSocialMeidaPostsList.includes(image)) {
    companyName = "NUST Digital Club";
    companyPosition = "Director Graphics";
    companyLogoName = "ndc";
  }
  // Check if the image is from NIMUN based on its inclusion in the arrays
  else if (nimunSocialMeidaPostsList.includes(image)) {
    companyName = "NUST International Model United Nations";
    companyPosition = "Executive Graphics";
    companyLogoName = "nimun";
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
