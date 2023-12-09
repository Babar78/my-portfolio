import { SocialMeidaPostsData } from "./SocialMeidaPostsData";
import { logosCreatedData } from "./logosCreatedData";
import { brouchersData } from "./brouchersData";
import { appreciationCertificatesData } from "./appreciationCertificatesData";
import { brandwallData } from "./brandwallData";
import { eventTicketData } from "./eventTicketData";
import { letterheadData } from "./letterheadData";
import { merchData } from "./merchData";

// Combine all the arrays
const imagesData = [
  ...SocialMeidaPostsData,
  ...logosCreatedData,
  ...brandwallData,
  ...merchData,
  ...brouchersData,
  ...letterheadData,
  ...appreciationCertificatesData,
  ...eventTicketData,
];

export { imagesData };
