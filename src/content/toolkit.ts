/**
 * Toolkit — grouped exactly as in the CV's Digital Skills section.
 * `where` is optional evidence from the work history; leave it out if a
 * skill is listed in the CV without a specific project attached.
 */
export type Tool = { name: string; where?: string };
export type ToolGroup = { id: string; label: string; blurb: string; tools: Tool[] };

export const toolkit: ToolGroup[] = [
  {
    id: "ai-data",
    label: "AI & Data",
    blurb: "Making AI and enterprise data useful for the business.",
    tools: [
      { name: "LLM Evaluation", where: "Golden Questions & procurement scenarios to validate AI outputs" },
      { name: "AI Use Case Design", where: "Defining and prioritising AI use cases for Indirect Purchasing" },
      { name: "Foundation Models" },
      { name: "Data Governance", where: "Governance for Palantir Foundry dashboard data" },
      { name: "Knowledge Modeling", where: "Celonis Knowledge Models for business logic & master data" },
      { name: "AI Testing", where: "Validation methodologies for AI-enabled applications" },
      { name: "Supplier Analytics", where: "Meta Objects for the Supplier Profiler (MaBon)" },
      { name: "Enterprise Data" },
    ],
  },
  {
    id: "delivery",
    label: "AI Delivery",
    blurb: "Getting from idea to something people use.",
    tools: [
      { name: "Stakeholder Management", where: "Interface between procurement and AI development teams" },
      { name: "Requirements Engineering", where: "Purchasing requirements → AI-ready scenarios" },
      { name: "Test Strategy", where: "Test strategies for AI & analytics across enterprise systems" },
      { name: "Acceptance Criteria", where: "Acceptance criteria for AI use cases and analytics solutions" },
      { name: "Cross-functional Collaboration", where: "AI developers, data scientists, product teams, offshore teams" },
    ],
  },
  {
    id: "sap",
    label: "SAP & Enterprise",
    blurb: "The systems where the data actually lives.",
    tools: [
      { name: "SAP CBW", where: "Meta Objects from CBW queries; CBW-to-dashboard alignment" },
      { name: "SAP BusinessObjects / IDT", where: "BO universes incl. IPSQ; ~5,500 report instances/day" },
      { name: "Oracle", where: "Automated threshold-value extraction from Oracle Database" },
      { name: "SRM" },
      { name: "Coupa" },
    ],
  },
  {
    id: "analytics",
    label: "Analytics & Platforms",
    blurb: "Where data becomes something you can look at — and act on.",
    tools: [
      { name: "Power BI", where: "Data-quality and validation monitoring dashboards" },
      { name: "Celonis", where: "Knowledge Models for reliable analysis preparation" },
      { name: "Palantir Foundry", where: "Near-real-time interactive dashboards (PoC)" },
      { name: "Amazon QuickSight", where: "Threshold-based anomaly alerts (PoC)" },
      { name: "Tableau" },
      { name: "AWS" },
    ],
  },
  {
    id: "dev",
    label: "Development",
    blurb: "Enough hands-on depth to know what I’m asking engineers for.",
    tools: [
      { name: "Python", where: "Standalone validation app & automated regression checks" },
      { name: "SQL" },
      { name: "PL/SQL", where: "PL/SQL plugins for a quality-management portal" },
      { name: "Oracle APEX", where: "Application rolled out to 2,000+ users" },
      { name: "PostgreSQL", where: "QCockpit modernisation" },
      { name: "HTML" },
      { name: "CSS" },
      { name: "JavaScript" },
      { name: "Java EE", where: "QCockpit real-time application on GlassFish" },
    ],
  },
];
