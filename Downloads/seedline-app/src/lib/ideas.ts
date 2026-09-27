export type IdeaNeed =
  | "Looking for Feedback"
  | "Seeking Co-founder"
  | "Investor Ready";

export type IdeaCategory =
  | "AI"
  | "Climate"
  | "FinTech"
  | "DevTools"
  | "Health"
  | "Consumer";

export type Idea = {
  id: string;
  title: string;
  hook: string;
  problem: string;
  solution: string;
  category: IdeaCategory;
  need: IdeaNeed;
  founder: string;
  role: string;
  location: string;
  stage: string;
  intro: string;
  likes: number;
  comments: number;
  matches: number;
  urgency: string;
};

export const categories: Array<IdeaCategory> = [
  "AI",
  "Climate",
  "FinTech",
  "DevTools",
  "Health",
  "Consumer",
];

export const needOptions: Array<IdeaNeed> = [
  "Looking for Feedback",
  "Seeking Co-founder",
  "Investor Ready",
];

export const ideas: Idea[] = [
  {
    id: "mosaic-ops",
    title: "Mosaic Ops",
    hook: "AI that turns enterprise chaos into a single operating rhythm.",
    problem:
      "Operations teams drown in fragmented app data, recurring incidents, and decision lag. Most tools surface dashboards — none help teams act on them.",
    solution:
      "We build an AI command layer that correlates live operational signals, recommends next steps, and automates routine incident responses for growing companies.",
    category: "AI",
    need: "Looking for Feedback",
    founder: "Ari Chen",
    role: "Former platform engineer",
    location: "New York, US",
    stage: "Prototype",
    intro:
      "We’re designing a lighter-weight AI ops brain for lean SaaS teams before they need a full enterprise stack.",
    likes: 128,
    comments: 34,
    matches: 9,
    urgency: "Open to design critique and early workflow feedback",
  },
  {
    id: "coastline-grid",
    title: "Coastline Grid",
    hook: "Climate infrastructure inventory for coastal cities, built for local teams.",
    problem:
      "Cities can’t prioritize resilience decisions because infrastructure data is scattered across agencies, contractors, and legacy documents.",
    solution:
      "A shared map-based system that centralizes climate risk data and flags the highest-value interventions for cities and insurers.",
    category: "Climate",
    need: "Seeking Co-founder",
    founder: "Leah Romero",
    role: "Urban systems researcher",
    location: "Barcelona, ES",
    stage: "Research phase",
    intro:
      "I’ve validated the need with municipal partners and am looking for a product-minded co-founder to shape the first pilot.",
    likes: 94,
    comments: 19,
    matches: 6,
    urgency: "Looking for a technical co-founder and public-sector pilot partner",
  },
  {
    id: "ledger-loop",
    title: "Ledger Loop",
    hook: "The fastest way to turn small business cash flow into credit-ready data.",
    problem:
      "Small businesses are underserved by banks, and most modern lenders still rely on stale, manual financial snapshots.",
    solution:
      "A lightweight financial data layer that ingests transaction behavior and turns it into a dynamic risk profile for financing decisions.",
    category: "FinTech",
    need: "Investor Ready",
    founder: "Nikita Shah",
    role: "Operator and fintech operator",
    location: "London, UK",
    stage: "Pilot with 3 SMB partners",
    intro:
      "We have early traction in the UK and are now validating the best distribution channel for a credit-focused B2B future.",
    likes: 214,
    comments: 51,
    matches: 17,
    urgency: "Seeking pre-seed partners and strategic financial operators",
  },
  {
    id: "patch-note",
    title: "Patch Note",
    hook: "A collaborative changelog for product teams without the ceremony of product ops.",
    problem:
      "Teams ship work in fragmented systems, and the “what happened” narrative gets lost before customers or internal stakeholders can act on it.",
    solution:
      "A simple publishing workspace where product, engineering, and support teams post structured updates that automatically tailor to each audience.",
    category: "DevTools",
    need: "Looking for Feedback",
    founder: "Theo Park",
    role: "PM turned product designer",
    location: "Seoul, KR",
    stage: "MVP in use",
    intro:
      "We’re testing whether product teams actually want a better narrative layer on top of their existing shipping systems.",
    likes: 176,
    comments: 41,
    matches: 12,
    urgency: "Open to feedback on onboarding and team workflows",
  },
  {
    id: "atlas-care",
    title: "Atlas Care",
    hook: "A navigator for patient follow-up after hospital discharge.",
    problem:
      "Many care gaps happen after discharge because patients receive instructions but little ongoing support or visibility for care teams.",
    solution:
      "A patient-facing coordination layer that helps families track appointments, medication steps, and symptom changes with clinician oversight.",
    category: "Health",
    need: "Seeking Co-founder",
    founder: "Mina Alvarez",
    role: "Clinical operations lead",
    location: "Austin, US",
    stage: "Pilot concept",
    intro:
      "We’ve spoken with care coordinators and early adopters who want a lower-friction layer to reduce readmissions.",
    likes: 88,
    comments: 27,
    matches: 8,
    urgency: "Looking for a product engineer and care delivery expert",
  },
  {
    id: "signal-bloom",
    title: "Signal Bloom",
    hook: "A creator-native marketplace for early beta products and cultural demand.",
    problem:
      "Creators often discover valuable products too late, while early-stage teams lack a way to reach high-intent communities before launch.",
    solution:
      "A product discovery network that lets creators test, share, and monetize early access in a way that feels native to their audience.",
    category: "Consumer",
    need: "Looking for Feedback",
    founder: "Jules Martin",
    role: "Community builder",
    location: "Paris, FR",
    stage: "Waitlist",
    intro:
      "The concept is stronger if it feels more like a cultural network than a marketplace, and we want to hear from people who build communities.",
    likes: 143,
    comments: 36,
    matches: 11,
    urgency: "Testing demand, community UX, and incentive models",
  },
];
