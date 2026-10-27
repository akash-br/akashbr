/**
 * Profile & contact details.
 * Edit these values to update the site. Everything here comes from the CV.
 *
 * Deliberately NOT shown on the site: phone number, nationality, gender.
 */
export const profile = {
  name: "Akash Ballenahalli Ramegowda",
  shortName: "Akash",
  initials: "AB",
  role: "Digitalisation Specialist",
  employer: "BMW AG",
  location: "Munich, Germany",
  photo: `${import.meta.env.BASE_URL}img/akash.webp`,

  email: "Akash91oct@gmail.com",
  linkedin: "https://www.linkedin.com/in/akash-br/",

  /**
   * PLACEHOLDER — no GitHub profile is listed in the CV.
   * Add your URL here (e.g. "https://github.com/your-handle") and a GitHub
   * button appears automatically in the contact section. Leave empty to hide.
   */
  github: "",

  /**
   * To replace the CV: drop a new PDF into /public/cv/ and update this path.
   * Note: the current PDF includes a phone number — swap in a version without
   * it if you prefer not to share that publicly.
   */
  cvUrl: `${import.meta.env.BASE_URL}cv/Akash_Ballenahalli_Ramegowda_Curriculum_Vitae.pdf`,

  languages: ["English", "German"],
} as const;

/** Headline numbers. The first two come from my own account of the AI use case; the rest are stated in the CV. */
export const impactStats = [
  {
    value: "3 months → 15 min",
    unit: "",
    label: "development time for an AI use case in Indirect Purchasing (previously 3 months at minimum)",
  },
  {
    value: "~€100,000",
    unit: "saved",
    label: "estimated savings from that AI use case, now rolling out across the area",
  },
  {
    value: "9+",
    unit: "years",
    label: "at BMW across enterprise data, reporting & AI enablement",
  },
  {
    value: "~5,500",
    unit: "reports / day",
    label: "developed SAP BusinessObjects report and supported in operation",
  },
  {
    value: "2,000+",
    unit: "users",
    label: "on an Oracle APEX application rolled out to 17 technologies across international plants",
  },
  {
    value: "Days → hours",
    unit: "",
    label: "testing effort after automating data validation with Python",
  },
  {
    value: "18",
    unit: "systems",
    label: "capturing systems covered by the validation I executed",
  },
  {
    value: "70%",
    unit: "faster",
    label: "report-development turnaround after streamlining the process",
  },
] as const;
