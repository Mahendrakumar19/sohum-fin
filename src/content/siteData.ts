export interface ServiceItem {
  id: string;
  title: string;
  category: "investment" | "loan";
  shortDesc: string;
  fullDesc: string;
  iconName: string;
  keyFeatures: string[];
  disclaimer?: string;
  typicalRate?: string;
  badge?: string;
}

export const INVESTMENT_SERVICES: ServiceItem[] = [
  {
    id: "mutual-funds",
    title: "Mutual Funds",
    category: "investment",
    shortDesc: "Explore systematic wealth accumulation through diverse equity, debt, and hybrid mutual fund portfolios.",
    fullDesc: "Explore mutual fund options and learn how different investment approaches may fit your long-term and short-term life goals. We provide curated research and disciplined portfolio guidance.",
    iconName: "TrendingUp",
    keyFeatures: [
      "SIP & Lumpsum Options",
      "Goal-based portfolio construction",
      "Tax saving (ELSS) schemes",
      "Regular portfolio rebalancing",
    ],
    disclaimer: "Investments are subject to market risks; read all scheme-related documents carefully.",
    badge: "Wealth Building",
  },
  {
    id: "stocks",
    title: "Stocks & Equities",
    category: "investment",
    shortDesc: "Learn about equity-market opportunities, direct share trading, and disciplined risk-managed strategies.",
    fullDesc: "Learn about equity-market opportunities and the risks associated with investing in direct shares. Our insights assist you in understanding company fundamentals and macro trends.",
    iconName: "BarChart3",
    keyFeatures: [
      "Dematerialized account guidance",
      "Fundamental & technical insights",
      "Long-term blue-chip strategies",
      "Risk assessment & sector allocation",
    ],
    disclaimer: "Securities trading carries capital risk. Historical returns do not guarantee future performance.",
    badge: "Direct Equity",
  },
  {
    id: "insurance",
    title: "Insurance Solutions",
    category: "investment",
    shortDesc: "Protect your family's future, health, and enterprise with comprehensive coverage solutions.",
    fullDesc: "Explore protection products designed for different life stages and corporate needs. Product availability and advice are tailored with licensed insurance partner institutions.",
    iconName: "ShieldCheck",
    keyFeatures: [
      "Term Life Protection",
      "Comprehensive Health & Critical Illness",
      "Keyman & Business Protection",
      "Child education & pension security",
    ],
    disclaimer: "Insurance is the subject matter of solicitation. Terms and coverage depend on insurer underwriting.",
    badge: "Protection First",
  },
];

export const LOAN_SERVICES: ServiceItem[] = [
  {
    id: "home-loan",
    title: "Home Loan",
    category: "loan",
    shortDesc: "Financing solutions for purchasing new flats, ready houses, or building on your own residential plot.",
    fullDesc: "Turn homeownership dreams into reality. We coordinate with leading banking partners to help you secure competitive interest rates and flexible tenures up to 30 years.",
    iconName: "Home",
    keyFeatures: ["Tenure up to 30 Years", "Minimal Documentation", "Balance Transfer Facility", "Top-up Loan Options"],
    typicalRate: "Starting 8.40% p.a.",
    badge: "Most Popular",
  },
  {
    id: "lap",
    title: "Loan Against Property (LAP)",
    category: "loan",
    shortDesc: "Monetize the market equity in your commercial or residential property for high-volume liquidity.",
    fullDesc: "Leverage your existing real estate asset to unlock capital for major business expansion, debt consolidation, or higher education expenses at lower borrowing costs than personal loans.",
    iconName: "Building2",
    keyFeatures: ["High Loan Value (up to 70% LTV)", "Flexible Long Tenures", "Residential & Commercial Collateral", "Overdraft Facility Available"],
    typicalRate: "Starting 9.25% p.a.",
    badge: "High Value",
  },
  {
    id: "business-loan",
    title: "Business Loan",
    category: "loan",
    shortDesc: "Fuel business expansion, manage working capital cycles, or acquire modern machinery and technology.",
    fullDesc: "Designed for SMEs, MSMEs, and growing enterprises. We facilitate collateral-free and structured business loans to support your company's scale and operational agility.",
    iconName: "Briefcase",
    keyFeatures: ["Collateral-free options up to ₹50L", "Working Capital / Term Loans", "Fast processing cycles", "Flexible repayment tenures"],
    typicalRate: "Starting 11.50% p.a.",
    badge: "SME & MSME",
  },
  {
    id: "vehicle-loan",
    title: "Vehicle Loan",
    category: "loan",
    shortDesc: "Finance your personal 4-wheeler, commercial vehicle, or luxury car with quick sanctions.",
    fullDesc: "Drive home your selected car with customized auto financing. Enjoy up to 100% on-road funding options with partnered leading private and nationalized banks.",
    iconName: "Car",
    keyFeatures: ["Up to 100% on-road funding", "Tenures up to 7 years", "Quick digital sanctions", "Pre-approved customer offers"],
    typicalRate: "Starting 8.75% p.a.",
    badge: "Quick Disbursal",
  },
  {
    id: "personal-loan",
    title: "Personal Loan",
    category: "loan",
    shortDesc: "Collateral-free immediate financing for emergency medical, travel, wedding, or home renovation needs.",
    fullDesc: "Unsecured personal loans with transparent fee structures. Get rapid eligibility assessment and transparent assistance with leading banking institutions.",
    iconName: "UserCheck",
    keyFeatures: ["Zero collateral requirement", "Disbursal in 24-48 hours", "Tenures from 1 to 5 years", "Completely paperless process"],
    typicalRate: "Starting 10.75% p.a.",
    badge: "Instant Need",
  },
  {
    id: "project-financing",
    title: "Project Financing",
    category: "loan",
    shortDesc: "Comprehensive financial structuring for manufacturing plants, commercial projects, and infrastructure.",
    fullDesc: "High-ticket structured funding for large industrial, hospitality, healthcare, or infrastructure ventures. We prepare appraisal dossiers and guide syndication with banks and NBFCs.",
    iconName: "Compass",
    keyFeatures: ["Project Appraisal & Syndication", "Debt & Mezzanine Financing", "Consortium Lending Guidance", "Structured moratorium terms"],
    typicalRate: "Custom Structured",
    badge: "Corporate",
  },
  {
    id: "education-loan",
    title: "Education Loan",
    category: "loan",
    shortDesc: "Enable admissions into premier Indian institutes and top international universities with ease.",
    fullDesc: "Finance tuition fees, living expenses, travel, and laptops for overseas or domestic courses. Special concessions for girl students and government interest-subsidy schemes.",
    iconName: "GraduationCap",
    keyFeatures: ["Coverage for 100% of education costs", "Tax benefit under Sec 80E", "Moratorium until course completion", "No collateral for select premier colleges"],
    typicalRate: "Starting 8.85% p.a.",
    badge: "Student First",
  },
];

export const TRUST_DIFFERENTIATORS = [
  {
    title: "Trusted Partnerships",
    desc: "Direct coordination with India's top-tier banks and reputable NBFCs ensures optimal rates and smooth processing.",
    icon: "Handshake",
  },
  {
    title: "Expert Guidance",
    desc: "Seasoned financial professionals assess your profile to suggest suitable lending products and investment strategies.",
    icon: "Award",
  },
  {
    title: "Quick & Hassle-Free Process",
    desc: "From initial documentation guidance to final approval, we eliminate red tape and expedite disbursement timelines.",
    icon: "Zap",
  },
  {
    title: "Transparent & Fair",
    desc: "Zero hidden charges, straightforward explanations of interest terms, processing fees, and foreclosure conditions.",
    icon: "ShieldAlert",
  },
  {
    title: "Local Presence & Support",
    desc: "Accessible relationship managers based in NCR (Noida, UP) providing personalized in-person and digital support.",
    icon: "MapPin",
  },
];

export const PARTNERS_LIST = [
  { name: "State Bank of India", short: "SBI", type: "Public Sector Bank" },
  { name: "HDFC Bank", short: "HDFC Bank", type: "Private Bank" },
  { name: "ICICI Bank", short: "ICICI Bank", type: "Private Bank" },
  { name: "Axis Bank", short: "Axis Bank", type: "Private Bank" },
  { name: "Kotak Mahindra Bank", short: "Kotak", type: "Private Bank" },
  { name: "Bajaj Finserv", short: "Bajaj Finserv", type: "NBFC" },
  { name: "LIC Housing Finance", short: "LIC HFL", type: "Housing Finance" },
];

export const COMPANY_CONTACT = {
  name: "Sohum Fintech Solutions LLP",
  tagline: "Your Goals | Our Expertise",
  headline: "Financial Solutions for a Brighter Tomorrow",
  phone: "+91 9650 123 456",
  email: "info@sohumfintech.in",
  location: "Noida, Uttar Pradesh, India",
  hours: "Monday - Saturday: 9:30 AM - 6:30 PM",
  whatsapp: "+919650123456",
};
