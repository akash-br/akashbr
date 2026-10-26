/** "What I actually do" — each card is problem → approach → outcome. */
export type Capability = {
  id: string;
  name: string;
  oneLiner: string;
  problem: string;
  approach: string;
  outcome: string;
};

export const capabilities: Capability[] = [
  {
    id: "translate",
    name: "Business-to-AI translation",
    oneLiner: "I turn “can AI help with this?” into something an AI team can build.",
    problem:
      "Procurement teams know their pain points; AI teams know their models. Without a translator, both wait for the other to go first.",
    approach:
      "I identify processes suited to AI, gather stakeholder requirements, and rewrite them as functional use cases, evaluation criteria and acceptance criteria.",
    outcome:
      "Use cases that are prioritised, buildable and owned by the business — not just a wishlist.",
  },
  {
    id: "validate",
    name: "AI & LLM validation",
    oneLiner: "I test AI the way the business will actually use it.",
    problem: "A demo that impresses is not the same as an answer people can rely on.",
    approach:
      "I design business-driven LLM evaluation with Golden Questions, realistic procurement scenarios and measurable success criteria — then feed structured findings back to the AI engineers.",
    outcome: "More reliable model outputs and a clear, shared definition of “good enough to ship”.",
  },
  {
    id: "data",
    name: "Enterprise data & BI",
    oneLiner: "I make the data underneath the dashboard trustworthy.",
    problem:
      "Reports disagree, logic lives in people’s heads, and every new request starts from scratch.",
    approach:
      "I codify business logic in Celonis Knowledge Models, build Meta Objects from SAP CBW queries, standardise query definitions, and design reporting in BusinessObjects and Power BI.",
    outcome: "Faster data delivery and analysis everyone can repeat — and agree on.",
  },
  {
    id: "quality",
    name: "Data quality automation",
    oneLiner: "When manual testing stops scaling, I write the tool.",
    problem: "Large purchasing datasets across many systems are impossible to check by hand.",
    approach:
      "Python scripts and a standalone validation app, automated regression checks, Power BI quality monitoring, and standardised Jira/X-Ray test governance.",
    outcome: "Testing effort reduced from days to hours, across 18 capturing systems.",
  },
  {
    id: "procurement",
    name: "Indirect procurement know-how",
    oneLiner: "I speak Purchasing — supplier profiles, spend, process and all.",
    problem: "Technology built without domain context solves the wrong problem very efficiently.",
    approach:
      "I bring procurement domain expertise — supplier profiling, procurement analytics, purchasing-process optimisation — into design, testing and rollout.",
    outcome: "Solutions that fit how buyers actually work, so they get used.",
  },
  {
    id: "delivery",
    name: "Delivery & adoption",
    oneLiner: "Shipping is halfway. Adoption is the other half.",
    problem: "Good solutions quietly die when nobody shows people how they help.",
    approach:
      "Roadmap and prioritisation input, offshore team coordination, international rollouts, demos, feedback sessions and end-user training.",
    outcome: "Tools that reach real users — like an application used by 2,000+ people across plants.",
  },
];
