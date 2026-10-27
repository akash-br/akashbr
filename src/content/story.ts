/** Career story, told in chapters. Dates and facts from the CV. */
export type Chapter = {
  period: string;
  place: string;
  role: string;
  org: string;
  title: string;
  body: string[];
  tags: string[];
};

export const chapters: Chapter[] = [
  {
    period: "2011 – 2012 · 2014 – 2015",
    place: "Karnataka, India",
    role: "Web Developer",
    org: "WebNock",
    title: "I started on the builder’s side of the table.",
    body: [
      "Alongside my Computer Science degree at VTU, I built responsive websites and content-managed solutions with Drupal, HTML and JavaScript — and looked after the hosting, performance and security that came with them.",
      "The real job, though, was turning what a customer said they wanted into something reusable. That habit stuck.",
    ],
    tags: ["Drupal", "HTML", "JavaScript"],
  },
  {
    period: "2015 – 2017",
    place: "Rouen, France · Karnataka, India · Dingolfing, Germany",
    role: "M.Sc & M.E, then Software Developer Intern",
    org: "Esigelec · MIT · BMW AG",
    title: "Two master’s degrees, three countries, one automotive focus.",
    body: [
      "I completed a Master of Science at Esigelec and a Master of Engineering at MIT, both in Automotive Embedded Systems.",
      "As an intern at BMW I designed a quality-management portal with real-time KPI retrieval (APEX, Oracle, PL/SQL) and modernised the QCockpit reporting tools into a real-time application on Java EE and PostgreSQL. I also analysed the requirements and designed the application architecture.",
    ],
    tags: ["Oracle APEX", "PL/SQL", "Java EE", "PostgreSQL"],
  },
  {
    period: "2017 – 2024",
    place: "Dingolfing, Germany",
    role: "IT Quality Specialist",
    org: "BMW AG",
    title: "Seven years of making enterprise reporting dependable.",
    body: [
      "I built and maintained SAP BusinessObjects universes, automated report generation for pre-series and series processes, developed and supported around 5,500 report instances a day.",
      "I rolled out an Oracle APEX application to 2,000+ users across international plants, coordinated offshore development teams, and contributed to proofs of concept on Palantir Foundry and Amazon QuickSight.",
      "When thousands of people rely on your reports, you get very serious about where the numbers come from.",
    ],
    tags: ["SAP BusinessObjects", "Oracle", "Palantir Foundry", "Amazon QuickSight"],
  },
  {
    period: "2024 – today",
    place: "Munich, Germany",
    role: "Digitalisation Specialist",
    org: "BMW AG · Indirect Purchasing",
    title: "Now I sit between procurement and AI — on purpose.",
    body: [
      "I coordinate AI enablement in BMW Indirect Purchasing: finding the use cases worth building, translating purchasing requirements into AI-ready scenarios and acceptance criteria, and validating what comes back.",
      "I also model the data underneath — Celonis Knowledge Models, Meta Objects from CBW queries for the Supplier Profiler — and automate the quality checks that keep it honest.",
    ],
    tags: ["LLM Evaluation", "Celonis", "SAP CBW", "Python", "Power BI"],
  },
];

export const education = [
  {
    degree: "M.Sc in Automotive Embedded Systems",
    school: "Esigelec",
    place: "Rouen, France",
    period: "2015 – 2017",
  },
  {
    degree: "M.E in Automotive Embedded Systems",
    school: "MIT",
    place: "Karnataka, India",
    period: "2015 – 2017",
  },
  {
    degree: "B.E in Computer Science",
    school: "VTU",
    place: "Karnataka, India",
    period: "2009 – 2014",
  },
];
