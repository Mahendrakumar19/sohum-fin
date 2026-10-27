import React from "react";
import Link from "next/link";
import {
  Home,
  Document,
  Buy,
  Work,
  Activity,
  User,
  Bookmark,
  ArrowRight,
} from "@/components/ui/Iconly";

export default function LoansSection() {
  return (
    <section id="loans" className="py-16 bg-[#F7FAFC] border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column */}
          <div className="lg:col-span-4 space-y-4">
            <h2 className="font-heading text-[32px] sm:text-[38px] font-extrabold text-[#0B3666] tracking-tight leading-tight">
              Loans
            </h2>
            <h3 className="font-heading text-lg sm:text-xl font-bold text-slate-800">
              Your Dreams. Our Support.
            </h3>
            <p className="text-base text-slate-600 leading-relaxed max-w-sm">
              As a leading DSA, we have tie-ups with top Banks and NBFCs to help you get the right loan at the best rates, with minimal paperwork and quick processing.
            </p>

            <div className="pt-2">
              <Link
                href="/loans"
                className="inline-flex items-center gap-2 text-sm font-bold text-[#0B3666] border-2 border-[#0B3666] hover:bg-[#0B3666] hover:text-white px-6 py-2.5 rounded-full transition duration-200"
              >
                <span>Explore Loan Options</span>
                <ArrowRight set="light" primaryColor="currentColor" size={16} />
              </Link>
            </div>
          </div>

          {/* Right Column: 7 Loan Cards arranged in 2 rows as in screenshot */}
          <div className="lg:col-span-8 space-y-4">
            {/* Row 1: Home Loan, LAP, Vehicle Loan (3 cards) */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {/* Home Loan */}
              <Link
                href="/loans#home-loan"
                className="bg-white p-5 rounded-2xl border border-slate-200/90 shadow-2xs hover:shadow-md hover:border-[#008272]/60 transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="w-11 h-11 rounded-xl bg-teal-50 flex items-center justify-center mb-3 group-hover:scale-105 transition-transform">
                    <Home set="bulk" primaryColor="#008272" size={26} />
                  </div>
                  <h4 className="text-[15px] sm:text-base font-bold text-[#0B3666] group-hover:text-[#008272] transition leading-snug">
                    Home Loan
                  </h4>
                  <p className="text-[13px] text-slate-500 mt-1 font-normal">
                    Build your dream home
                  </p>
                </div>
              </Link>

              {/* LAP */}
              <Link
                href="/loans#lap"
                className="bg-white p-5 rounded-2xl border border-slate-200/90 shadow-2xs hover:shadow-md hover:border-[#008272]/60 transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="w-11 h-11 rounded-xl bg-teal-50 flex items-center justify-center mb-3 group-hover:scale-105 transition-transform">
                    <Document set="bulk" primaryColor="#008272" size={26} />
                  </div>
                  <h4 className="text-[15px] sm:text-base font-bold text-[#0B3666] group-hover:text-[#008272] transition leading-snug">
                    LAP (Loan Against Property)
                  </h4>
                  <p className="text-[13px] text-slate-500 mt-1 font-normal">
                    Unlock the value of your assets
                  </p>
                </div>
              </Link>

              {/* Vehicle Loan */}
              <Link
                href="/loans#vehicle-loan"
                className="bg-white p-5 rounded-2xl border border-slate-200/90 shadow-2xs hover:shadow-md hover:border-[#008272]/60 transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="w-11 h-11 rounded-xl bg-teal-50 flex items-center justify-center mb-3 group-hover:scale-105 transition-transform">
                    <Buy set="bulk" primaryColor="#008272" size={26} />
                  </div>
                  <h4 className="text-[15px] sm:text-base font-bold text-[#0B3666] group-hover:text-[#008272] transition leading-snug">
                    Vehicle Loan
                  </h4>
                  <p className="text-[13px] text-slate-500 mt-1 font-normal">
                    Drive your dreams
                  </p>
                </div>
              </Link>
            </div>

            {/* Row 2: Business Loan, Project Financing, Personal Loan, Education Loan (4 cards) */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {/* Business Loan */}
              <Link
                href="/loans#business-loan"
                className="bg-white p-4 sm:p-4.5 rounded-2xl border border-slate-200/90 shadow-2xs hover:shadow-md hover:border-[#008272]/60 transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-teal-50 flex items-center justify-center mb-2.5 group-hover:scale-105 transition-transform">
                    <Work set="bulk" primaryColor="#008272" size={22} />
                  </div>
                  <h4 className="text-[13.5px] sm:text-sm font-bold text-[#0B3666] group-hover:text-[#008272] transition leading-snug">
                    Business Loan
                  </h4>
                  <p className="text-xs text-slate-500 mt-0.5 font-normal">
                    Grow your business
                  </p>
                </div>
              </Link>

              {/* Project Financing */}
              <Link
                href="/loans#project-financing"
                className="bg-white p-4 sm:p-4.5 rounded-2xl border border-slate-200/90 shadow-2xs hover:shadow-md hover:border-[#008272]/60 transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-teal-50 flex items-center justify-center mb-2.5 group-hover:scale-105 transition-transform">
                    <Activity set="bulk" primaryColor="#008272" size={22} />
                  </div>
                  <h4 className="text-[13.5px] sm:text-sm font-bold text-[#0B3666] group-hover:text-[#008272] transition leading-snug">
                    Project Financing
                  </h4>
                  <p className="text-xs text-slate-500 mt-0.5 font-normal">
                    Powering big ideas
                  </p>
                </div>
              </Link>

              {/* Personal Loan */}
              <Link
                href="/loans#personal-loan"
                className="bg-white p-4 sm:p-4.5 rounded-2xl border border-slate-200/90 shadow-2xs hover:shadow-md hover:border-[#008272]/60 transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-teal-50 flex items-center justify-center mb-2.5 group-hover:scale-105 transition-transform">
                    <User set="bulk" primaryColor="#008272" size={22} />
                  </div>
                  <h4 className="text-[13.5px] sm:text-sm font-bold text-[#0B3666] group-hover:text-[#008272] transition leading-snug">
                    Personal Loan
                  </h4>
                  <p className="text-xs text-slate-500 mt-0.5 font-normal">
                    For personal needs
                  </p>
                </div>
              </Link>

              {/* Education Loan */}
              <Link
                href="/loans#education-loan"
                className="bg-white p-4 sm:p-4.5 rounded-2xl border border-slate-200/90 shadow-2xs hover:shadow-md hover:border-[#008272]/60 transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-teal-50 flex items-center justify-center mb-2.5 group-hover:scale-105 transition-transform">
                    <Bookmark set="bulk" primaryColor="#008272" size={22} />
                  </div>
                  <h4 className="text-[13.5px] sm:text-sm font-bold text-[#0B3666] group-hover:text-[#008272] transition leading-snug">
                    Education Loan
                  </h4>
                  <p className="text-xs text-slate-500 mt-0.5 font-normal">
                    Invest in future
                  </p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

