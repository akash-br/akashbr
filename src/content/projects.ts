/**
 * Selected work. Wording reflects my actual role:
 * "coordinated / supported / collaborated" where the CV says so,
 * "built / developed" only where the CV says I built it.
 */
export type ProjectCategory = "AI & enablement" | "Data & quality" | "Reporting & BI";

export type Project = {
  id: string;
  title: string;
  kicker: string;
  category: ProjectCategory;
  context: string;
  period: string;
  headline?: { value: string; label: string };
  problem: string;
  role: string;
  contributions: string[];
  tools: string[];
  stakeholders?: string[];
  outcome: string;
};

export const projects: Project[] = [
  {
    id: "ai-use-case-rollout",
    title: "From a three-month build to fifteen minutes",
    kicker: "AI use case, rolled out across the area",
    category: "AI & enablement",
    context: "BMW AG · Indirect Purchasing",
    period: "2024 – today",
    headline: { value: "~€100k", label: "estimated savings, with rollout across the area under way" },
    problem:
      "Developing this kind of solution used to take at least three months. That was too slow and too costly to repeat across every team that could benefit.",
    role: "I worked between procurement stakeholders and the AI development team to shape the use case, check the results against business needs and drive adoption.",
    contributions: [
      "Reduced development time from a minimum of 3 months to 15 minutes",
      "Saved around €100,000 through the AI-based approach",
      "Rolling the use case out across the whole area",
      "Backed adoption with demonstrations, feedback sessions and continuous business engagement",
    ],
    tools: ["AI Use Case Design", "LLM Evaluation", "Acceptance Criteria", "Stakeholder Management"],
    stakeholders: ["AI developers", "Data scientists", "Product teams", "Procurement stakeholders"],
    outcome:
      "A use case that went from a three-month effort to a 15-minute one, saved about €100,000, and is now spreading across the area.",
  },
  {
    id: "golden-questions",
    title: "Teaching an LLM to speak Purchasing",
    kicker: "Business-driven LLM evaluation",
    category: "AI & enablement",
    context: "BMW AG · Indirect Purchasing",
    period: "2024 – today",
    problem:
      "AI-generated answers in procurement need to be right in a procurement sense — not just fluent. The team needed a way to judge model output against real business expectations.",
    role: "I designed and executed the business-side evaluation and acted as the feedback loop to the AI engineers.",
    contributions: [
      "Built an evaluation approach around Golden Questions and realistic procurement scenarios",
      "Defined measurable success criteria to validate AI-generated outputs",
      "Delivered structured feedback to AI engineers to improve model reliability",
      "Established validation methodologies and QA processes for AI-enabled applications",
    ],
    tools: ["LLM Evaluation", "Foundation Models", "AI Testing", "Acceptance Criteria"],
    stakeholders: ["AI developers", "Data scientists", "Product teams", "Procurement stakeholders"],
    outcome:
      "A repeatable, business-owned way to decide whether an AI answer is trustworthy — and concrete input that helped engineers make it more so.",
  },
  {
    id: "ai-roadmap",
    title: "From “could AI do this?” to a prioritised roadmap",
    kicker: "AI enablement & stakeholder management",
    category: "AI & enablement",
    context: "BMW AG · Indirect Purchasing transformation programme",
    period: "2024 – today",
    problem:
      "Plenty of enthusiasm for AI, but use cases needed to be identified, shaped and prioritised — and the business needed to actually adopt what was built.",
    role: "I coordinate AI enablement initiatives and serve as the interface between procurement stakeholders and AI development teams.",
    contributions: [
      "Identified business processes suited to AI adoption and gathered stakeholder requirements",
      "Translated purchasing requirements into functional use cases, AI-ready scenarios and acceptance criteria",
      "Contributed to prioritisation and roadmap discussions for AI use cases",
      "Supported model validation and provided domain expertise through design, testing and rollout",
      "Promoted adoption through demonstrations, feedback sessions and continuous business engagement",
    ],
    tools: ["AI Use Case Design", "Requirements Engineering", "Stakeholder Management"],
    stakeholders: ["Procurement stakeholders", "AI development teams", "Product teams"],
    outcome:
      "AI use cases grounded in real purchasing needs, with business acceptance built in from the start rather than bolted on at the end.",
  },
  {
    id: "validation-app",
    title: "When manual testing stopped being an option",
    kicker: "Automated data validation",
    category: "Data & quality",
    context: "BMW AG · Indirect Purchasing",
    period: "2024 – today",
    headline: { value: "Days → hours", label: "testing effort" },
    problem:
      "Indirect Purchasing datasets had become too large to validate by hand — yet dashboards and AI depend on that data being right.",
    role: "I developed the Python scripts and a standalone Python application, and set up the quality processes around them.",
    contributions: [
      "Implemented automated validation and regression checks",
      "Executed validation across 18 capturing systems",
      "Built Power BI dashboards to monitor validation results and data quality, aligning CBW data with dashboard outputs",
      "Standardised Jira/X-Ray test cases and governance for traceability and coverage",
      "Defined test strategies, acceptance criteria and traceability frameworks across enterprise systems",
    ],
    tools: ["Python", "Power BI", "SAP CBW", "Jira / X-Ray"],
    outcome:
      "Testing effort reduced from days to hours, with traceable test artifacts and a quality-management process for data integrity.",
  },
  {
    id: "supplier-data",
    title: "Making supplier data answer back",
    kicker: "Enterprise data & knowledge modelling",
    category: "Data & quality",
    context: "BMW AG · Supplier Profiler (MaBon)",
    period: "2024 – today",
    problem:
      "Supplier profiling and analysis depend on business logic and master-data relationships that were hard to query consistently.",
    role: "I created the data models and query standards that analysis is built on.",
    contributions: [
      "Created Celonis Knowledge Models to codify business logic and master-data relationships",
      "Created Meta Objects from CBW queries for supplier profiling and advanced querying in the Supplier Profiler (MaBon)",
      "Implemented Query Enablement and Query Definitions to standardise reporting requirements",
    ],
    tools: ["Celonis", "SAP CBW", "Knowledge Modeling", "Supplier Analytics"],
    outcome: "More reliable analysis preparation, standardised reporting requirements and faster data delivery.",
  },
  {
    id: "bo-reporting",
    title: "The reporting engine behind ~5,500 reports a day",
    kicker: "SAP BusinessObjects & enterprise reporting",
    category: "Reporting & BI",
    context: "BMW AG · Dingolfing",
    period: "2017 – 2024",
    headline: { value: "20%", label: "faster report turnaround" },
    problem:
      "High-volume enterprise reporting has to be fast, secure and correct — for pre-series and series processes alike.",
    role: "I developed and maintained the BO universes, automated reporting, and coordinated offshore teams.",
    contributions: [
      "Developed and maintained complex BO universes in IDT, including the IPSQ reporting universe",
      "Automated threshold-value extraction from Oracle Database and report generation",
      "Optimised reports and universes for high volume, with security and access controls",
      "Streamlined report development and coordinated offshore teams for development and deployment",
      "Provided operational support for ~5,500 report instances per day, plus end-user training",
    ],
    tools: ["SAP BusinessObjects / IDT", "Oracle", "SQL"],
    stakeholders: ["Offshore development teams", "Business end users"],
    outcome:
      "Report-development turnaround reduced by 20%, with dependable reporting at enterprise scale.",
  },
  {
    id: "apex-rollout",
    title: "One application, 17 technologies, 2,000+ users",
    kicker: "International Oracle APEX rollout",
    category: "Reporting & BI",
    context: "BMW AG · International plants",
    period: "2017 – 2024",
    headline: { value: "2,000+", label: "users across plants" },
    problem: "A single application had to work for many technologies and plants in different countries.",
    role: "I managed the international deployment and kept it running.",
    contributions: [
      "Rolled out the application to 17 technologies and more than 2,000 users",
      "Managed deployment, maintenance, upgrades and troubleshooting across international plants",
    ],
    tools: ["Oracle APEX", "Oracle", "PL/SQL"],
    outcome: "A shared application in daily use across international plants.",
  },
  {
    id: "pocs",
    title: "Two proofs of concept about seeing change sooner",
    kicker: "Palantir Foundry & Amazon QuickSight",
    category: "Reporting & BI",
    context: "BMW AG · Dingolfing",
    period: "2017 – 2024",
    problem:
      "Could newer analytics platforms deliver near-real-time insight — and flag what matters without someone watching a screen?",
    role: "I contributed to both proofs of concept.",
    contributions: [
      "Developed near-real-time interactive dashboards for a Palantir Foundry PoC",
      "Implemented data-governance practices for the data powering those dashboards",
      "Implemented threshold-based alerts in Amazon QuickSight to highlight significant changes and anomalies",
      "Validated the performance and accuracy of predictive models against business requirements, using SAP BO result sets and Cloud Data Hub data",
    ],
    tools: ["Palantir Foundry", "Amazon QuickSight", "AWS", "SAP BusinessObjects"],
    outcome:
      "Practical evaluation of modern analytics platforms — and recognition for consistently delivering high-quality reports that exceeded stakeholder expectations.",
  },
];
