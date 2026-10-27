import type { Metadata } from "next";
import InvestmentsSection from "@/components/sections/InvestmentsSection";
import ContactForm from "@/components/forms/ContactForm";
import { TrendingUp, ShieldAlert, CheckCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Investment & Wealth Guidance | Sohum Fintech Solutions LLP",
  description:
    "Explore mutual funds, stock market insights, and protection insurance. Long-term wealth creation strategies guided by licensed financial frameworks.",
};

export default function InvestmentsPage() {
  return (
    <div className="py-12 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="bg-gradient-to-r from-[#0B3766] to-[#06284B] rounded-3xl p-8 sm:p-12 text-white shadow-xl">
          <span className="text-xs font-bold uppercase tracking-widest text-[#168653]">
            Disciplined Wealth Management
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight mt-2 mb-4">
            Investments & Protection
          </h1>
          <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed">
            From systematic SIP investments to risk-hedged equity strategies and comprehensive family protection, we help guide your financial journey with objective discipline.
          </p>

          <div className="mt-6 p-4 rounded-xl bg-white/10 border border-white/15 max-w-2xl text-xs text-slate-200 flex items-start gap-3">
            <ShieldAlert className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
            <span>
              <strong>Regulatory Advisory Note:</strong> Investments are subject to market fluctuations. Scheme selection should be aligned with your personal risk tolerance and time horizon.
            </span>
          </div>
        </div>
      </div>

      <InvestmentsSection />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-[#0B3766]">Schedule an Investment Consultation</h2>
          <p className="text-xs text-slate-500 mt-1">
            Connect with a relationship manager to review your current portfolio and upcoming life milestones.
          </p>
        </div>
        <ContactForm preselectedService="mutual-funds" />
      </div>
    </div>
  );
}
