"use client";

import React, { useState, useMemo } from "react";
import {
  Home,
  User,
  Car,
  Briefcase,
  Calculator as CalcIcon,
} from "lucide-react";
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
              <div className="w-11 h-11 rounded-xl bg-white/10 flex items-center justify-center">
                <CalcIcon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold tracking-tight">EMI Calculator</h3>
            </div>

            <p className="text-sm font-semibold text-emerald-300 mb-4">
              Plan better. Borrow smarter.
            </p>

            <p className="text-xs text-slate-200 leading-relaxed">
              Use our easy-to-use EMI calculator to estimate your monthly payments based on current market interest rates. Get accurate results and plan your finances with confidence.
            </p>
          </div>
        </div>

        {/* Right White Form & Results Panel (8 cols) */}
        <div className="lg:col-span-8 bg-white p-6 sm:p-8 flex flex-col justify-between">
          <div>
            {/* Tabs matching screenshot */}
            <div className="flex flex-wrap items-center border-b border-slate-200 mb-6 gap-2 sm:gap-6">
              <button
                onClick={() => handleTabChange("home")}
                className={`flex items-center gap-2 pb-3 text-xs sm:text-sm font-bold transition-all relative ${
                  activeTab === "home"
                    ? "text-[#0B3766] border-b-2 border-[#0B3766]"
                    : "text-slate-500 hover:text-slate-800"
                }`}
              >
                <Home className="w-4 h-4 text-[#0B3766]" />
                <span>Home Loan</span>
              </button>

              <button
                onClick={() => handleTabChange("personal")}
                className={`flex items-center gap-2 pb-3 text-xs sm:text-sm font-bold transition-all relative ${
                  activeTab === "personal"
                    ? "text-[#0B3766] border-b-2 border-[#0B3766]"
                    : "text-slate-500 hover:text-slate-800"
                }`}
              >
                <User className="w-4 h-4 text-[#0B3766]" />
                <span>Personal Loan</span>
              </button>

              <button
                onClick={() => handleTabChange("vehicle")}
                className={`flex items-center gap-2 pb-3 text-xs sm:text-sm font-bold transition-all relative ${
                  activeTab === "vehicle"
                    ? "text-[#0B3766] border-b-2 border-[#0B3766]"
                    : "text-slate-500 hover:text-slate-800"
                }`}
              >
                <Car className="w-4 h-4 text-[#0B3766]" />
                <span>Vehicle Loan</span>
              </button>

              <button
                onClick={() => handleTabChange("business")}
                className={`flex items-center gap-2 pb-3 text-xs sm:text-sm font-bold transition-all relative ${
                  activeTab === "business"
                    ? "text-[#0B3766] border-b-2 border-[#0B3766]"
                    : "text-slate-500 hover:text-slate-800"
                }`}
              >
                <Briefcase className="w-4 h-4 text-[#0B3766]" />
                <span>Business Loan</span>
              </button>
            </div>

            {/* Inputs 3-columns grid matching screenshot */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-5">
              <div>
                <label className="block text-[11px] font-bold text-slate-700 mb-1">
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
                    className="w-full px-3 py-2 bg-slate-50 border border-slate-300 rounded-lg text-xs font-semibold text-slate-800 focus:outline-none focus:ring-1 focus:ring-[#0B3766]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-bold text-slate-700 mb-1">
                  Loan Tenure (Years)
                </label>
                <input
                  type="number"
                  value={tenureYears}
                  onChange={(e) => setTenureYears(Number(e.target.value))}
                  className="w-full px-3 py-2 bg-slate-50 border border-slate-300 rounded-lg text-xs font-semibold text-slate-800 focus:outline-none focus:ring-1 focus:ring-[#0B3766]"
                />
              </div>

              <div>
                <label className="block text-[11px] font-bold text-slate-700 mb-1">
                  Interest Rate (% p.a.)
                </label>
                <input
                  type="number"
                  step="0.1"
                  value={interestRate}
                  onChange={(e) => setInterestRate(Number(e.target.value))}
                  className="w-full px-3 py-2 bg-slate-50 border border-slate-300 rounded-lg text-xs font-semibold text-slate-800 focus:outline-none focus:ring-1 focus:ring-[#0B3766]"
                />
              </div>
            </div>

            {/* Blue Calculate EMI CTA Bar */}
            <div className="mb-6">
              <button
                type="button"
                className="w-full py-2.5 bg-[#0B3766] hover:bg-[#06284B] text-white text-xs font-bold rounded-lg shadow-sm transition"
              >
                Calculate EMI
              </button>
            </div>

            {/* 3 Result Columns matching screenshot */}
            <div className="grid grid-cols-3 gap-2 py-4 border-t border-slate-100 text-center">
              <div>
                <span className="text-[11px] text-slate-500 font-medium block">
                  Monthly EMI
                </span>
                <span className="text-base sm:text-xl font-extrabold text-[#0B3766] mt-0.5 block">
                  {formatINR(results.monthlyEmi)}
                </span>
              </div>

              <div>
                <span className="text-[11px] text-slate-500 font-medium block">
                  Total Interest
                </span>
                <span className="text-base sm:text-xl font-extrabold text-slate-800 mt-0.5 block">
                  {formatINR(results.totalInterest)}
                </span>
              </div>

              <div>
                <span className="text-[11px] text-slate-500 font-medium block">
                  Total Amount Payable
                </span>
                <span className="text-base sm:text-xl font-extrabold text-slate-800 mt-0.5 block">
                  {formatINR(results.totalPayment)}
                </span>
              </div>
            </div>
          </div>

          <p className="text-[10px] text-slate-400 text-center mt-3 pt-2 border-t border-slate-100">
            * Interest rates are indicative and based on current market trends. Actual rates may vary.
          </p>
        </div>
      </div>
    </div>
  );
}
