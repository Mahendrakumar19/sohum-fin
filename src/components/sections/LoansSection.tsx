import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import {
  IconLoanHome,
  IconLoanLAP,
  IconLoanVehicle,
  IconLoanBusiness,
  IconLoanProjectFinancing,
  IconLoanPersonal,
  IconLoanEducation,
} from "@/components/ui/OriginalIcons";

export default function LoansSection() {
  return (
    <section id="loans" className="py-16 bg-[#F7FAFC] border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column */}
          <div className="lg:col-span-4 space-y-4">
            <h2 className="text-3xl font-extrabold text-[#0B3766] tracking-tight">
              Loans
            </h2>
            <h3 className="text-base font-bold text-slate-800">
              Your Dreams. Our Support.
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed max-w-sm">
              As a leading DSA, we have tie-ups with top Banks and NBFCs to help you get the right loan at the best rates, with minimal paperwork and quick processing.
            </p>
            <div className="pt-2">
              <Link
                href="/loans"
                className="inline-flex items-center gap-2 text-xs font-bold text-[#0B3766] border border-[#0B3766] hover:bg-[#0B3766] hover:text-white px-5 py-2.5 rounded-full transition duration-200"
              >
                <span>Explore Loan Options</span>
                <ArrowRight className="w-3.5 h-3.5" />
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
                className="bg-white p-5 rounded-2xl border border-slate-200/90 shadow-2xs hover:shadow-md hover:border-[#168653]/60 transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-teal-50 flex items-center justify-center mb-3 group-hover:scale-105 transition-transform">
                    <IconLoanHome className="w-6 h-6" />
                  </div>
                  <h4 className="text-sm font-bold text-[#0B3766] group-hover:text-[#168653] transition">
                    Home Loan
                  </h4>
                  <p className="text-xs text-slate-500 mt-1">
                    Build your dream home
                  </p>
                </div>
              </Link>

              {/* LAP */}
              <Link
                href="/loans#lap"
                className="bg-white p-5 rounded-2xl border border-slate-200/90 shadow-2xs hover:shadow-md hover:border-[#168653]/60 transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-teal-50 flex items-center justify-center mb-3 group-hover:scale-105 transition-transform">
                    <IconLoanLAP className="w-6 h-6" />
                  </div>
                  <h4 className="text-sm font-bold text-[#0B3766] group-hover:text-[#168653] transition">
                    LAP (Loan Against Property)
                  </h4>
                  <p className="text-xs text-slate-500 mt-1">
                    Unlock the value of your assets
                  </p>
                </div>
              </Link>

              {/* Vehicle Loan */}
              <Link
                href="/loans#vehicle-loan"
                className="bg-white p-5 rounded-2xl border border-slate-200/90 shadow-2xs hover:shadow-md hover:border-[#168653]/60 transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-teal-50 flex items-center justify-center mb-3 group-hover:scale-105 transition-transform">
                    <IconLoanVehicle className="w-6 h-6" />
                  </div>
                  <h4 className="text-sm font-bold text-[#0B3766] group-hover:text-[#168653] transition">
                    Vehicle Loan
                  </h4>
                  <p className="text-xs text-slate-500 mt-1">
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
                className="bg-white p-4 rounded-2xl border border-slate-200/90 shadow-2xs hover:shadow-md hover:border-[#168653]/60 transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="w-9 h-9 rounded-xl bg-teal-50 flex items-center justify-center mb-2.5 group-hover:scale-105 transition-transform">
                    <IconLoanBusiness className="w-5 h-5" />
                  </div>
                  <h4 className="text-xs font-bold text-[#0B3766] group-hover:text-[#168653] transition">
                    Business Loan
                  </h4>
                  <p className="text-[11px] text-slate-500 mt-0.5">
                    Grow your business
                  </p>
                </div>
              </Link>

              {/* Project Financing */}
              <Link
                href="/loans#project-financing"
                className="bg-white p-4 rounded-2xl border border-slate-200/90 shadow-2xs hover:shadow-md hover:border-[#168653]/60 transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="w-9 h-9 rounded-xl bg-teal-50 flex items-center justify-center mb-2.5 group-hover:scale-105 transition-transform">
                    <IconLoanProjectFinancing className="w-5 h-5" />
                  </div>
                  <h4 className="text-xs font-bold text-[#0B3766] group-hover:text-[#168653] transition">
                    Project Financing
                  </h4>
                  <p className="text-[11px] text-slate-500 mt-0.5">
                    Powering big ideas
                  </p>
                </div>
              </Link>

              {/* Personal Loan */}
              <Link
                href="/loans#personal-loan"
                className="bg-white p-4 rounded-2xl border border-slate-200/90 shadow-2xs hover:shadow-md hover:border-[#168653]/60 transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="w-9 h-9 rounded-xl bg-teal-50 flex items-center justify-center mb-2.5 group-hover:scale-105 transition-transform">
                    <IconLoanPersonal className="w-5 h-5" />
                  </div>
                  <h4 className="text-xs font-bold text-[#0B3766] group-hover:text-[#168653] transition">
                    Personal Loan
                  </h4>
                  <p className="text-[11px] text-slate-500 mt-0.5">
                    For your personal needs
                  </p>
                </div>
              </Link>

              {/* Education Loan */}
              <Link
                href="/loans#education-loan"
                className="bg-white p-4 rounded-2xl border border-slate-200/90 shadow-2xs hover:shadow-md hover:border-[#168653]/60 transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="w-9 h-9 rounded-xl bg-teal-50 flex items-center justify-center mb-2.5 group-hover:scale-105 transition-transform">
                    <IconLoanEducation className="w-5 h-5" />
                  </div>
                  <h4 className="text-xs font-bold text-[#0B3766] group-hover:text-[#168653] transition">
                    Education Loan
                  </h4>
                  <p className="text-[11px] text-slate-500 mt-0.5">
                    Invest in your future
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
