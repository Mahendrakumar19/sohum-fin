import type { Metadata } from "next";
import LoansSection from "@/components/sections/LoansSection";
import EMICalculatorComponent from "@/components/calculator/EMICalculatorComponent";
import ContactForm from "@/components/forms/ContactForm";
import { TickSquare } from "@/components/ui/Iconly";

export const metadata: Metadata = {
  title: "Loan Options | Sohum Fintech Solutions LLP",
  description:
    "Explore home, personal, vehicle, business, education and other loan categories. Eligibility, competitive rates, and seamless processing with top banks.",
};

export default function LoansPage() {
  return (
    <div className="py-12 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="bg-gradient-to-r from-[#06284B] to-[#0B3766] rounded-3xl p-8 sm:p-12 text-white shadow-xl">
          <span className="text-xs font-bold uppercase tracking-widest text-[#008272]">
            Comprehensive Credit Portfolio
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight mt-2 mb-4">
            Customized Loan Solutions
          </h1>
          <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed">
            Whether purchasing your dream property, funding corporate expansion, or meeting unexpected personal obligations, we match your profile with suitable institutional lenders.
          </p>

          <div className="flex flex-wrap gap-4 mt-6 text-xs text-slate-200">
            <span className="flex items-center gap-1.5 bg-white/10 px-3 py-1.5 rounded-full">
              <TickSquare set="bulk" primaryColor="#008272" size={16} /> Zero Consultation Fees
            </span>
            <span className="flex items-center gap-1.5 bg-white/10 px-3 py-1.5 rounded-full">
              <TickSquare set="bulk" primaryColor="#008272" size={16} /> Multi-Bank Rate Comparisons
            </span>
            <span className="flex items-center gap-1.5 bg-white/10 px-3 py-1.5 rounded-full">
              <TickSquare set="bulk" primaryColor="#008272" size={16} /> Complete Paperwork Guidance
            </span>
          </div>
        </div>
      </div>


      <LoansSection />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="mb-10 text-center">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B3766]">
            Calculate Your Desired Loan EMI
          </h2>
          <p className="text-sm text-slate-600 mt-1">
            Test different amounts and tenures before submitting your application.
          </p>
        </div>
        <EMICalculatorComponent initialLoanTypeId="home-loan" />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-[#0B3766]">Quick Eligibility Check</h2>
          <p className="text-xs text-slate-500 mt-1">
            Submit your profile details for an initial assessment without impacting your credit score.
          </p>
        </div>
        <ContactForm />
      </div>
    </div>
  );
}
