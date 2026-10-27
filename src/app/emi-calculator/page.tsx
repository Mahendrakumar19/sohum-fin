import type { Metadata } from "next";
import EMICalculatorComponent from "@/components/calculator/EMICalculatorComponent";
import { HelpCircle, Calculator, Info } from "lucide-react";

export const metadata: Metadata = {
  title: "EMI Calculator | Sohum Fintech Solutions LLP",
  description:
    "Accurately calculate monthly EMI, total interest, and complete repayment for home, personal, business, LAP, and vehicle loans with interactive sliders.",
};

export default function EMICalculatorPage() {
  return (
    <div className="py-12 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#168653]/10 text-[#168653] text-xs font-bold">
            <Calculator className="w-3.5 h-3.5" />
            <span>Financial Planning Suite</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-[#0B3766] tracking-tight">
            Comprehensive EMI Calculator
          </h1>
          <p className="text-base text-slate-600">
            Use our reducing-balance formula tool to determine monthly loan commitments, compare tenure variations, and inspect interest proportions.
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <EMICalculatorComponent initialLoanTypeId="home-loan" />
      </div>

      {/* Educational FAQ Section on EMI */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <h2 className="text-2xl font-bold text-[#0B3766] mb-6 flex items-center gap-2">
          <HelpCircle className="w-5 h-5 text-[#168653]" />
          <span>Understanding EMI & Calculation Formula</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-slate-600">
          <div className="bg-white p-6 rounded-2xl border border-slate-200">
            <h3 className="font-bold text-slate-800 text-base mb-2">
              What is an EMI?
            </h3>
            <p className="leading-relaxed text-xs sm:text-sm">
              Equated Monthly Instalment (EMI) is a fixed payment amount made by a borrower to a lender at a specified calendar date each month. EMIs apply to both interest and principal each month so that over a specified number of years, the loan is paid off in full.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200">
            <h3 className="font-bold text-slate-800 text-base mb-2">
              The Standard Formula Used
            </h3>
            <p className="font-mono text-xs bg-slate-50 p-2.5 rounded border border-slate-200 text-[#0B3766] mb-2">
              EMI = [P x R x (1+R)^N] / [(1+R)^N - 1]
            </p>
            <p className="text-xs text-slate-500 leading-relaxed">
              Where <strong>P</strong> is Principal loan amount, <strong>R</strong> is the monthly interest rate (Annual rate / 12 / 100), and <strong>N</strong> is tenure in months.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200">
            <h3 className="font-bold text-slate-800 text-base mb-2">
              How Tenure Impacts Total Interest
            </h3>
            <p className="leading-relaxed text-xs sm:text-sm">
              A longer tenure reduces your monthly EMI burden but significantly increases the cumulative interest paid across the life of the loan. A shorter tenure lowers overall interest outgo.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200">
            <h3 className="font-bold text-slate-800 text-base mb-2">
              Important Loan Disclaimer
            </h3>
            <p className="leading-relaxed text-xs text-slate-500">
              The calculations shown here are estimates for illustration. Final interest rates and EMI numbers depend on lender sanction letters, borrower credit scores, processing charges, GST, and statutory stamp duty.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
