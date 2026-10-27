/**
 * Ideas / Blog — unpublished DRAFTS. These are opinion pieces grounded in my
 * field, not accounts of specific events. Edit freely; set `status` to
 * "published" once a piece goes live.
 */
export type Idea = {
  slug: string;
  title: string;
  dek: string;
  topic: string;
  readMins: number;
  status: "draft" | "idea" | "published";
  body: string[];
};

export const ideas: Idea[] = [
  {
    slug: "useful-dashboards",
    title: "A useful dashboard ends a conversation. A beautiful one starts three.",
    dek: "What separates a dashboard people act on from one they admire and close.",
    topic: "Analytics",
    readMins: 3,
    status: "published",
    body: [
      "Most dashboards don’t fail because they’re ugly. They fail because nobody agreed what decision they were meant to support.",
      "A useful dashboard answers a specific question for a specific person, at the moment they need to decide something. If you can’t name that person and that decision, you’re not designing a dashboard — you’re designing a screensaver.",
      "Three tests I’d apply before building one. First: what will someone do differently after looking at it? Second: does everyone agree where every number comes from, and would they get the same result querying the source? Third: what happens when a value crosses a threshold — does anyone find out without opening the dashboard at all?",
      "That last one matters more than it sounds. Often the most valuable thing a reporting setup can do is tell you when to look, rather than asking you to look all the time.",
      "Beauty helps. Trust, relevance and timing help more.",
    ],
  },
  {
    slug: "ai-beyond-hype",
    title: "Where AI creates business value — once the demo is over",
    dek: "Notes on Golden Questions, acceptance criteria, and why evaluation is a business job.",
    topic: "AI",
    readMins: 4,
    status: "published",
    body: [
      "Every AI demo is impressive. That’s what demos are for. The real question is what happens on the hundredth question, asked by someone who wasn’t in the demo.",
      "That’s why I think evaluation belongs to the business, not just to the engineers. Engineers can measure whether a model behaves consistently. Only the people doing the work can say whether an answer is actually right for their process.",
      "A practical way to bridge that: Golden Questions. A curated set of real questions from the domain, each with what a good answer must contain, and clear success criteria. Run them before launch, run them after every change, and turn the failures into structured feedback rather than vague disappointment.",
      "Where does the value come from, then? Usually from the unglamorous middle of a process — finding, summarising, checking, comparing — where a reliable assistant saves real time. Not from replacing judgement, but from giving people more time to use it.",
      "Hype asks “what can AI do?”. Value asks “what should this process do better, and how will we know?”",
    ],
  },
  {
    slug: "transformation-is-people",
    title: "Digital transformation is a people project with a technology budget",
    dek: "Why requirements, demos and feedback loops matter as much as the platform.",
    topic: "Transformation",
    readMins: 3,
    status: "published",
    body: [
      "It’s tempting to measure transformation by what was deployed. The more honest metric is what changed in how people work.",
      "Technology teams and business teams usually want the same outcome. They just describe it in different languages — one in features and data models, the other in pain points and deadlines. A surprising amount of transformation work is translation.",
      "Good translation looks like: use cases phrased in business terms, acceptance criteria both sides signed up to, early demos with real data, and feedback sessions where people are allowed to say “this doesn’t fit how I work” — and are taken seriously.",
      "None of that is glamorous. All of it decides whether the new system becomes the way work gets done, or the thing people work around.",
    ],
  },
  {
    slug: "procurement-data",
    title: "Procurement decisions are only as good as the supplier data behind them",
    dek: "Data quality isn’t a back-office concern when every sourcing call depends on it.",
    topic: "Procurement",
    readMins: 3,
    status: "published",
    body: [
      "Procurement runs on information: who the supplier is, what we spend with them, how that spend is classified, and how all of it connects across systems.",
      "When that data is inconsistent, every downstream thing inherits the problem — the supplier profile, the analytics, and now the AI assistant answering questions about both.",
      "Two things help more than another report. One: codify the business logic and master-data relationships once, in a model everyone uses, instead of rebuilding them in every analysis. Two: automate data validation, so checking quality across many source systems is something that runs routinely rather than something someone heroically does by hand.",
      "Better data doesn’t make decisions for buyers. It makes their decisions faster to reach and easier to defend.",
    ],
  },
];
