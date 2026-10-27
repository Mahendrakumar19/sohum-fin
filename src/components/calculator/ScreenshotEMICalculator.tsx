"use client";

import React, { useState, useMemo } from "react";
import {
  Home,
  User,
  Buy,
  Work,
  Chart as CalcIcon,
} from "@/components/ui/Iconly";
import { calculateEMI, formatINR } from "@/lib/emi";

export default function ScreenshotEMICalculator() {
  const [activeTab, setActiveTab] = useState<"home" | "personal" | "vehicle" | "business">("home");

  // Inputs matching screenshot
  const [loanAmount, setLoanAmount] = useState<number>(5000000); // ₹ 50,00,000
  const [tenureYears, setTenureYears] = useState<number>(20);
  const [interestRate, setInterestRate] = useState<number>(8.5);

  const handleTabChange = (tab: "home" | "personal" | "vehicle" | "business") => {
    setActiveTab(tab);
    if (tab === "home") {
      setLoanAmount(5000000);
      setTenureYears(20);
      setInterestRate(8.5);
    } else if (tab === "personal") {
      setLoanAmount(500000);
      setTenureYears(3);
      setInterestRate(11.5);
    } else if (tab === "vehicle") {
      setLoanAmount(1000000);
      setTenureYears(5);
      setInterestRate(9.0);
    } else if (tab === "business") {
      setLoanAmount(2500000);
      setTenureYears(4);
      setInterestRate(13.0);
    }
  };

  const results = useMemo(() => {
    return calculateEMI(loanAmount, interestRate, tenureYears);
  }, [loanAmount, interestRate, tenureYears]);

  return (
    <div className="w-full rounded-2xl overflow-hidden shadow-xl border border-slate-200">
      <div className="grid grid-cols-1 lg:grid-cols-12">
        {/* Left Navy Panel (4 cols) */}
        <div className="lg:col-span-4 bg-[#0B3766] p-8 sm:p-10 text-white flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-3.5 mb-3">
              <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center">
                <CalcIcon set="bulk" primaryColor="#ffffff" size={26} />
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight font-heading">EMI Calculator</h3>
            </div>

            <p className="text-base font-bold text-emerald-300 mb-4">
              Plan better. Borrow smarter.
            </p>

            <p className="text-sm text-slate-200 leading-relaxed font-normal">
              Use our easy-to-use EMI calculator to estimate your monthly payments based on current market interest rates. Get accurate results and plan your finances with confidence.
            </p>
          </div>
        </div>

        {/* Right White Form & Results Panel (8 cols) */}
        <div className="lg:col-span-8 bg-white p-6 sm:p-8 flex flex-col justify-between">
          <div>
            {/* Tabs matching screenshot */}
            <div className="flex flex-wrap items-center border-b border-slate-200 mb-6 gap-3 sm:gap-6">
              <button
                onClick={() => handleTabChange("home")}
                className={`flex items-center gap-2 pb-3 text-sm sm:text-[15px] font-bold transition-all relative ${
                  activeTab === "home"
                    ? "text-[#0B3766] border-b-2 border-[#0B3766]"
                    : "text-slate-500 hover:text-slate-800"
                }`}
              >
                <Home set="bulk" primaryColor="#0B3766" size={18} />
                <span>Home Loan</span>
              </button>

              <button
                onClick={() => handleTabChange("personal")}
                className={`flex items-center gap-2 pb-3 text-sm sm:text-[15px] font-bold transition-all relative ${
                  activeTab === "personal"
                    ? "text-[#0B3766] border-b-2 border-[#0B3766]"
                    : "text-slate-500 hover:text-slate-800"
                }`}
              >
                <User set="bulk" primaryColor="#0B3766" size={18} />
                <span>Personal Loan</span>
              </button>

              <button
                onClick={() => handleTabChange("vehicle")}
                className={`flex items-center gap-2 pb-3 text-sm sm:text-[15px] font-bold transition-all relative ${
                  activeTab === "vehicle"
                    ? "text-[#0B3766] border-b-2 border-[#0B3766]"
                    : "text-slate-500 hover:text-slate-800"
                }`}
              >
                <Buy set="bulk" primaryColor="#0B3766" size={18} />
                <span>Vehicle Loan</span>
              </button>

              <button
                onClick={() => handleTabChange("business")}
                className={`flex items-center gap-2 pb-3 text-sm sm:text-[15px] font-bold transition-all relative ${
                  activeTab === "business"
                    ? "text-[#0B3766] border-b-2 border-[#0B3766]"
                    : "text-slate-500 hover:text-slate-800"
                }`}
              >
                <Work set="bulk" primaryColor="#0B3766" size={18} />
                <span>Business Loan</span>
              </button>
            </div>

            {/* Inputs 3-columns grid matching screenshot */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-5">
              <div>
                <label className="block text-[13px] font-bold text-slate-700 mb-1.5">
                  Loan Amount (₹)
                </label>
                <div className="relative flex items-center">
                  <input
                    type="text"
                    value={`₹ ${loanAmount.toLocaleString("en-IN")}`}
                    onChange={(e) => {
                      const cleanNum = Number(e.target.value.replace(/[^0-9]/g, ""));
                      if (!isNaN(cleanNum)) setLoanAmount(cleanNum);
                    }}
                    className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-lg text-sm font-bold text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#0B3666]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[13px] font-bold text-slate-700 mb-1.5">
                  Loan Tenure (Years)
                </label>
                <input
                  type="number"
                  value={tenureYears}
                  onChange={(e) => setTenureYears(Number(e.target.value))}
                  className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-lg text-sm font-bold text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#0B3666]"
                />
              </div>

              <div>
                <label className="block text-[13px] font-bold text-slate-700 mb-1.5">
                  Interest Rate (% p.a.)
                </label>
                <input
                  type="number"
                  step="0.1"
                  value={interestRate}
                  onChange={(e) => setInterestRate(Number(e.target.value))}
                  className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-lg text-sm font-bold text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#0B3666]"
                />
              </div>
            </div>

            {/* Blue Calculate EMI CTA Bar */}
            <div className="mb-6">
              <button
                type="button"
                className="w-full py-3 bg-[#0B3666] hover:bg-[#06284B] text-white text-[15px] font-bold rounded-lg shadow-sm transition"
              >
                Calculate EMI
              </button>
            </div>

            {/* 3 Result Columns matching recommendation */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-2 py-4 border-t border-slate-100 text-center">
              <div className="bg-slate-50/70 sm:bg-transparent p-3 sm:p-0 rounded-xl">
                <span className="text-[13px] text-slate-500 font-semibold block">
                  Monthly EMI
                </span>
                <span className="font-numbers text-2xl sm:text-[30px] font-extrabold text-[#0B3666] mt-1 block tracking-tight">
                  {formatINR(results.monthlyEmi)}
                </span>
              </div>

              <div className="bg-slate-50/70 sm:bg-transparent p-3 sm:p-0 rounded-xl">
                <span className="text-[13px] text-slate-500 font-semibold block">
                  Total Interest
                </span>
                <span className="font-numbers text-2xl sm:text-[30px] font-extrabold text-slate-800 mt-1 block tracking-tight">
                  {formatINR(results.totalInterest)}
                </span>
              </div>

              <div className="bg-slate-50/70 sm:bg-transparent p-3 sm:p-0 rounded-xl">
                <span className="text-[13px] text-slate-500 font-semibold block">
                  Total Amount Payable
                </span>
                <span className="font-numbers text-2xl sm:text-[30px] font-extrabold text-slate-800 mt-1 block tracking-tight">
                  {formatINR(results.totalPayment)}
                </span>
              </div>
            </div>

          </div>

          <p className="text-xs text-slate-400 text-center mt-3 pt-2 border-t border-slate-100 font-normal">
            * Interest rates are indicative and based on current market trends. Actual rates may vary.
          </p>
        </div>
      </div>
    </div>
  );
}
