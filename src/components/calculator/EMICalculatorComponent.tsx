"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import {
  LOAN_TYPES,
  calculateEMI,
  formatINR,
  formatINRCompact,
  LoanTypeConfig,
} from "@/lib/emi";
import {
  Calculator,
  Info,
  ArrowRight,
  RotateCcw,
  Sparkles,
  PieChart as PieIcon,
  HelpCircle,
} from "lucide-react";

interface EMICalculatorProps {
  initialLoanTypeId?: string;
  showNavigationCTA?: boolean;
}

export default function EMICalculatorComponent({
  initialLoanTypeId = "home-loan",
  showNavigationCTA = true,
}: EMICalculatorProps) {
  const [selectedTypeId, setSelectedTypeId] = useState(initialLoanTypeId);

  const selectedConfig = useMemo<LoanTypeConfig>(() => {
    return (
      LOAN_TYPES.find((item) => item.id === selectedTypeId) || LOAN_TYPES[0]
    );
  }, [selectedTypeId]);

  // Form states initialized from preset
  const [amount, setAmount] = useState<number>(selectedConfig.defaultAmount);
  const [rate, setRate] = useState<number>(selectedConfig.defaultRate);
  const [tenureYears, setTenureYears] = useState<number>(
    selectedConfig.defaultTenureYears
  );

  // Switch presets cleanly
  const handleSelectLoanType = (loanType: LoanTypeConfig) => {
    setSelectedTypeId(loanType.id);
    setAmount(loanType.defaultAmount);
    setRate(loanType.defaultRate);
    setTenureYears(loanType.defaultTenureYears);
  };

  const handleReset = () => {
    setAmount(selectedConfig.defaultAmount);
    setRate(selectedConfig.defaultRate);
    setTenureYears(selectedConfig.defaultTenureYears);
  };

  // Live calculation
  const emiResult = useMemo(() => {
    return calculateEMI(amount, rate, tenureYears);
  }, [amount, rate, tenureYears]);

  return (
    <div className="w-full bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden">
      {/* Top Banner & Category Tabs */}
      <div className="bg-gradient-to-r from-[#06284B] to-[#0B3766] p-6 text-white">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-5">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#168653]/30 border border-[#168653] flex items-center justify-center text-white">
              <Calculator className="w-5 h-5 text-[#2ecc71]" />
            </div>
            <div>
              <h2 className="text-xl font-bold tracking-tight">Interactive EMI Calculator</h2>
              <p className="text-xs text-slate-300">
                Accurate reducing-balance estimation for your loan planning
              </p>
            </div>
          </div>
          <button
            onClick={handleReset}
            className="self-start sm:self-auto inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-slate-200 transition"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Reset Defaults</span>
          </button>
        </div>

        {/* Loan Type Selector Pills */}
        <div className="flex flex-wrap gap-2 pt-1">
          {LOAN_TYPES.map((type) => {
            const isActive = type.id === selectedTypeId;
            return (
              <button
                key={type.id}
                onClick={() => handleSelectLoanType(type)}
                className={`text-xs font-semibold px-3.5 py-1.5 rounded-full transition-all duration-150 ${
                  isActive
                    ? "bg-[#168653] text-white shadow-md font-bold"
                    : "bg-white/10 text-slate-200 hover:bg-white/20"
                }`}
              >
                {type.name}
              </button>
            );
          })}
        </div>
      </div>

      {/* Main Grid: Inputs (Left) & Results Summary (Right) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 divide-y lg:divide-y-0 lg:divide-x divide-slate-200">
        {/* Controls Column */}
        <div className="lg:col-span-7 p-6 sm:p-8 space-y-7 bg-slate-50/50">
          {/* Amount Slider */}
          <div>
            <div className="flex justify-between items-center mb-2">
              <label className="text-sm font-bold text-slate-700 flex items-center gap-1.5">
                <span>Loan Amount</span>
                <span className="text-xs font-normal text-slate-500">
                  ({formatINRCompact(selectedConfig.minAmount)} - {formatINRCompact(selectedConfig.maxAmount)})
                </span>
              </label>
              <div className="relative">
                <input
                  type="number"
                  value={amount}
                  onChange={(e) => setAmount(Number(e.target.value))}
                  min={selectedConfig.minAmount}
                  max={selectedConfig.maxAmount}
                  step={selectedConfig.stepAmount}
                  className="w-36 text-right font-bold text-[#0B3766] px-3 py-1 bg-white border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#168653] text-sm"
                />
              </div>
            </div>
            <input
              type="range"
              min={selectedConfig.minAmount}
              max={selectedConfig.maxAmount}
              step={selectedConfig.stepAmount}
              value={amount}
              onChange={(e) => setAmount(Number(e.target.value))}
              className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer"
            />
            <div className="flex justify-between text-[11px] text-slate-500 mt-1.5 font-medium">
              <span>{formatINRCompact(selectedConfig.minAmount)}</span>
              <span className="text-[#168653] font-semibold">{formatINR(amount)}</span>
              <span>{formatINRCompact(selectedConfig.maxAmount)}</span>
            </div>
          </div>

          {/* Interest Rate Slider */}
          <div>
            <div className="flex justify-between items-center mb-2">
              <label className="text-sm font-bold text-slate-700 flex items-center gap-1.5">
                <span>Interest Rate (% p.a.)</span>
                <span className="text-xs font-normal text-slate-500">
                  ({selectedConfig.minRate}% - {selectedConfig.maxRate}%)
                </span>
              </label>
              <div className="relative flex items-center">
                <input
                  type="number"
                  step="0.05"
                  value={rate}
                  onChange={(e) => setRate(Number(e.target.value))}
                  min={selectedConfig.minRate}
                  max={selectedConfig.maxRate}
                  className="w-24 text-right font-bold text-[#0B3766] px-3 py-1 bg-white border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#168653] text-sm"
                />
                <span className="ml-1 text-sm font-bold text-slate-600">%</span>
              </div>
            </div>
            <input
              type="range"
              min={selectedConfig.minRate}
              max={selectedConfig.maxRate}
              step={selectedConfig.stepRate}
              value={rate}
              onChange={(e) => setRate(Number(e.target.value))}
              className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer"
            />
            <div className="flex justify-between text-[11px] text-slate-500 mt-1.5 font-medium">
              <span>{selectedConfig.minRate}%</span>
              <span className="text-[#168653] font-semibold">{rate}% p.a.</span>
              <span>{selectedConfig.maxRate}%</span>
            </div>
          </div>

          {/* Tenure Slider */}
          <div>
            <div className="flex justify-between items-center mb-2">
              <label className="text-sm font-bold text-slate-700 flex items-center gap-1.5">
                <span>Loan Tenure (Years)</span>
                <span className="text-xs font-normal text-slate-500">
                  ({selectedConfig.minTenureYears} - {selectedConfig.maxTenureYears} Years)
                </span>
              </label>
              <div className="relative flex items-center">
                <input
                  type="number"
                  value={tenureYears}
                  onChange={(e) => setTenureYears(Number(e.target.value))}
                  min={selectedConfig.minTenureYears}
                  max={selectedConfig.maxTenureYears}
                  className="w-20 text-right font-bold text-[#0B3766] px-3 py-1 bg-white border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#168653] text-sm"
                />
                <span className="ml-1 text-sm font-bold text-slate-600">Yrs</span>
              </div>
            </div>
            <input
              type="range"
              min={selectedConfig.minTenureYears}
              max={selectedConfig.maxTenureYears}
              step={1}
              value={tenureYears}
              onChange={(e) => setTenureYears(Number(e.target.value))}
              className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer"
            />
            <div className="flex justify-between text-[11px] text-slate-500 mt-1.5 font-medium">
              <span>{selectedConfig.minTenureYears} Year</span>
              <span className="text-[#168653] font-semibold">
                {tenureYears} Years ({tenureYears * 12} Months)
              </span>
              <span>{selectedConfig.maxTenureYears} Years</span>
            </div>
          </div>

          <div className="bg-[#EFF7FC] p-3.5 rounded-xl border border-[#D8E5EE] text-xs text-[#18334D] flex items-start gap-2.5">
            <Info className="w-4 h-4 text-[#0B3766] shrink-0 mt-0.5" />
            <p>
              Selected: <strong className="text-[#0B3766]">{selectedConfig.name}</strong>. {selectedConfig.shortDesc}
            </p>
          </div>
        </div>

        {/* Results & Breakdown Column */}
        <div className="lg:col-span-5 p-6 sm:p-8 flex flex-col justify-between bg-white">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block mb-1">
              Estimated Monthly Outflow
            </span>
            <div className="bg-gradient-to-br from-[#EFF7FC] to-white p-5 rounded-2xl border border-[#D8E5EE] shadow-sm mb-6">
              <span className="text-xs font-semibold text-[#0B3766]">Monthly EMI</span>
              <div className="text-3xl sm:text-4xl font-extrabold text-[#0B3766] mt-1 tracking-tight">
                {formatINR(emiResult.monthlyEmi)}
              </div>
              <span className="text-[11px] text-slate-500 mt-0.5 block">
                for {tenureYears * 12} monthly instalments
              </span>
            </div>

            {/* Split Breakdown */}
            <div className="space-y-3 mb-6">
              <div className="flex justify-between items-center text-sm py-1.5 border-b border-slate-100">
                <span className="text-slate-600 flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-[#0B3766]"></span>
                  Principal Amount
                </span>
                <span className="font-bold text-slate-800">{formatINR(amount)}</span>
              </div>

              <div className="flex justify-between items-center text-sm py-1.5 border-b border-slate-100">
                <span className="text-slate-600 flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-[#168653]"></span>
                  Total Interest Payable
                </span>
                <span className="font-bold text-[#168653]">
                  {formatINR(emiResult.totalInterest)}
                </span>
              </div>

              <div className="flex justify-between items-center text-sm py-1.5 border-b border-slate-100">
                <span className="text-slate-800 font-semibold">Total Amount Payable</span>
                <span className="font-extrabold text-slate-900">
                  {formatINR(emiResult.totalPayment)}
                </span>
              </div>
            </div>

            {/* Visual ratio bar */}
            <div className="space-y-1.5 mb-6">
              <div className="flex justify-between text-xs text-slate-500 font-medium">
                <span>Principal: {emiResult.principalPercentage}%</span>
                <span>Interest: {emiResult.interestPercentage}%</span>
              </div>
              <div className="h-3 w-full bg-slate-100 rounded-full overflow-hidden flex shadow-inner">
                <div
                  className="bg-[#0B3766] transition-all duration-300"
                  style={{ width: `${emiResult.principalPercentage}%` }}
                  title={`Principal: ${emiResult.principalPercentage}%`}
                />
                <div
                  className="bg-[#168653] transition-all duration-300"
                  style={{ width: `${emiResult.interestPercentage}%` }}
                  title={`Interest: ${emiResult.interestPercentage}%`}
                />
              </div>
            </div>
          </div>

          <div>
            {/* CTA to Apply */}
            {showNavigationCTA && (
              <Link
                href={`/contact?service=${selectedTypeId}&amount=${amount}`}
                className="w-full inline-flex items-center justify-center gap-2 bg-[#168653] hover:bg-[#126b42] text-white font-bold py-3 px-4 rounded-xl shadow-md hover:shadow-lg transition-all duration-200 text-sm active:scale-98"
              >
                <span>Enquire For This Loan</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            )}

            <p className="text-[10px] text-slate-400 mt-3 text-center leading-relaxed">
              * Indicative calculation only based on reducing balance method. Actual lender loan sanctions depend on borrower eligibility, credit score, processing fees & lender terms.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
