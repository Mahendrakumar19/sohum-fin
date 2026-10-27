export interface LoanTypeConfig {
  id: string;
  name: string;
  shortDesc: string;
  minAmount: number;
  maxAmount: number;
  defaultAmount: number;
  stepAmount: number;
  minRate: number;
  maxRate: number;
  defaultRate: number;
  stepRate: number;
  minTenureYears: number;
  maxTenureYears: number;
  defaultTenureYears: number;
}

export const LOAN_TYPES: LoanTypeConfig[] = [
  {
    id: "home-loan",
    name: "Home Loan",
    shortDesc: "Finance for purchasing or constructing your dream home at competitive interest rates.",
    minAmount: 500000,
    maxAmount: 50000000,
    defaultAmount: 3500000,
    stepAmount: 100000,
    minRate: 7.5,
    maxRate: 15.0,
    defaultRate: 8.5,
    stepRate: 0.1,
    minTenureYears: 1,
    maxTenureYears: 30,
    defaultTenureYears: 20,
  },
  {
    id: "lap",
    name: "Loan Against Property (LAP)",
    shortDesc: "Unlock the hidden value of your commercial or residential property for high-ticket capital.",
    minAmount: 1000000,
    maxAmount: 75000000,
    defaultAmount: 5000000,
    stepAmount: 200000,
    minRate: 8.5,
    maxRate: 16.0,
    defaultRate: 9.5,
    stepRate: 0.1,
    minTenureYears: 1,
    maxTenureYears: 20,
    defaultTenureYears: 15,
  },
  {
    id: "business-loan",
    name: "Business Loan",
    shortDesc: "Working capital, expansion funds, or machinery financing tailored for growing enterprises.",
    minAmount: 200000,
    maxAmount: 20000000,
    defaultAmount: 2500000,
    stepAmount: 100000,
    minRate: 11.0,
    maxRate: 24.0,
    defaultRate: 13.5,
    stepRate: 0.25,
    minTenureYears: 1,
    maxTenureYears: 7,
    defaultTenureYears: 4,
  },
  {
    id: "vehicle-loan",
    name: "Vehicle Loan",
    shortDesc: "Drive home your new 4-wheeler or commercial fleet with flexible repayment options.",
    minAmount: 100000,
    maxAmount: 10000000,
    defaultAmount: 900000,
    stepAmount: 50000,
    minRate: 8.0,
    maxRate: 15.0,
    defaultRate: 9.25,
    stepRate: 0.25,
    minTenureYears: 1,
    maxTenureYears: 7,
    defaultTenureYears: 5,
  },
  {
    id: "personal-loan",
    name: "Personal Loan",
    shortDesc: "Quick collateral-free funds for medical emergencies, weddings, travel, or consolidation.",
    minAmount: 50000,
    maxAmount: 4000000,
    defaultAmount: 500000,
    stepAmount: 25000,
    minRate: 10.5,
    maxRate: 24.0,
    defaultRate: 12.0,
    stepRate: 0.25,
    minTenureYears: 1,
    maxTenureYears: 5,
    defaultTenureYears: 3,
  },
  {
    id: "project-financing",
    name: "Project Financing",
    shortDesc: "Structured funding solutions for industrial setups, infrastructure, and commercial ventures.",
    minAmount: 5000000,
    maxAmount: 250000000,
    defaultAmount: 20000000,
    stepAmount: 1000000,
    minRate: 9.0,
    maxRate: 18.0,
    defaultRate: 10.5,
    stepRate: 0.25,
    minTenureYears: 2,
    maxTenureYears: 15,
    defaultTenureYears: 7,
  },
  {
    id: "education-loan",
    name: "Education Loan",
    shortDesc: "Fuel ambitious global & domestic higher education with flexible student-friendly tenures.",
    minAmount: 200000,
    maxAmount: 15000000,
    defaultAmount: 1500000,
    stepAmount: 100000,
    minRate: 8.5,
    maxRate: 14.5,
    defaultRate: 9.75,
    stepRate: 0.25,
    minTenureYears: 1,
    maxTenureYears: 15,
    defaultTenureYears: 8,
  },
];

export interface EMIResult {
  monthlyEmi: number;
  totalInterest: number;
  totalPayment: number;
  principalPercentage: number;
  interestPercentage: number;
}

/**
 * Calculates standard reducing balance EMI:
 * For r > 0: EMI = P * r * (1+r)^n / ((1+r)^n - 1)
 * For r = 0: EMI = P / n
 *
 * @param principal Loan principal amount in INR
 * @param annualRatePercentage Annual interest rate in percent (e.g., 8.5)
 * @param tenureYears Number of years
 */
export function calculateEMI(
  principal: number,
  annualRatePercentage: number,
  tenureYears: number
): EMIResult {
  const p = Math.max(0, principal);
  const n = Math.max(1, Math.round(tenureYears * 12));
  const r = annualRatePercentage / 12 / 100;

  let emi = 0;
  if (r === 0 || p === 0) {
    emi = p / n;
  } else {
    const factor = Math.pow(1 + r, n);
    emi = (p * r * factor) / (factor - 1);
  }

  const roundedEmi = Math.round(emi);
  const totalPayment = roundedEmi * n;
  const totalInterest = Math.max(0, totalPayment - p);

  const principalRatio = totalPayment > 0 ? (p / totalPayment) * 100 : 100;
  const interestRatio = totalPayment > 0 ? (totalInterest / totalPayment) * 100 : 0;

  return {
    monthlyEmi: roundedEmi,
    totalInterest,
    totalPayment,
    principalPercentage: Math.round(principalRatio * 10) / 10,
    interestPercentage: Math.round(interestRatio * 10) / 10,
  };
}

/**
 * Format Indian Rupee currency (e.g. ₹ 35,00,000)
 */
export function formatINR(amount: number): string {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(Math.round(amount));
}

/**
 * Compact Indian Lakhs / Crores string for display
 */
export function formatINRCompact(amount: number): string {
  if (amount >= 10000000) {
    return `₹${(amount / 10000000).toFixed(amount % 10000000 === 0 ? 0 : 2)} Cr`;
  }
  if (amount >= 100000) {
    return `₹${(amount / 100000).toFixed(amount % 100000 === 0 ? 0 : 2)} Lakh`;
  }
  return formatINR(amount);
}
