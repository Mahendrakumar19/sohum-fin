import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import {
  IconInvestMutualFunds,
  IconInvestStocks,
  IconInvestInsurance,
} from "@/components/ui/OriginalIcons";

export default function InvestmentsSection() {
  return (
    <section id="investments" className="py-16 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Heading and intro button */}
          <div className="lg:col-span-4 space-y-4">
            <h2 className="text-3xl font-extrabold text-[#0B3766] tracking-tight">
              Investments
            </h2>
            <h3 className="text-base font-bold text-slate-800">
              Build wealth, secure your future
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed max-w-sm">
              We help you make informed investment decisions with trusted products and expert guidance.
            </p>
            <div className="pt-2">
              <Link
                href="/investments"
                className="inline-flex items-center gap-2 text-xs font-bold text-[#0B3766] border border-[#0B3766] hover:bg-[#0B3766] hover:text-white px-5 py-2.5 rounded-full transition duration-200"
              >
                <span>Know More</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* Right Column: 3 Cards matching exact screenshot layout */}
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-3 gap-5">
            {/* Mutual Funds */}
            <div className="bg-[#F7FAFC] hover:bg-white rounded-2xl p-6 border border-slate-200/80 shadow-xs hover:shadow-lg transition-all duration-200 flex flex-col justify-between group">
              <div>
                <div className="w-11 h-11 rounded-xl bg-emerald-50 flex items-center justify-center mb-4">
                  <IconInvestMutualFunds className="w-7 h-7" />
                </div>
                <h4 className="text-base font-bold text-[#0B3766] mb-2 group-hover:text-[#168653] transition">
                  Mutual Funds
                </h4>
                <p className="text-xs text-slate-500 leading-relaxed mb-6">
                  Systematic. Disciplined.<br />Wealth Creation.
                </p>
              </div>
              <Link
                href="/investments#mutual-funds"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0B3766] group-hover:text-[#168653] transition"
              >
                <span>Explore MF</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Stocks */}
            <div className="bg-[#F7FAFC] hover:bg-white rounded-2xl p-6 border border-slate-200/80 shadow-xs hover:shadow-lg transition-all duration-200 flex flex-col justify-between group">
              <div>
                <div className="w-11 h-11 rounded-xl bg-emerald-50 flex items-center justify-center mb-4">
                  <IconInvestStocks className="w-7 h-7" />
                </div>
                <h4 className="text-base font-bold text-[#0B3766] mb-2 group-hover:text-[#168653] transition">
                  Stocks
                </h4>
                <p className="text-xs text-slate-500 leading-relaxed mb-6">
                  Participate in growth<br />of India&apos;s top companies.
                </p>
              </div>
              <Link
                href="/investments#stocks"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0B3766] group-hover:text-[#168653] transition"
              >
                <span>Explore Stocks</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Insurance */}
            <div className="bg-[#F7FAFC] hover:bg-white rounded-2xl p-6 border border-slate-200/80 shadow-xs hover:shadow-lg transition-all duration-200 flex flex-col justify-between group">
              <div>
                <div className="w-11 h-11 rounded-xl bg-emerald-50 flex items-center justify-center mb-4">
                  <IconInvestInsurance className="w-7 h-7" />
                </div>
                <h4 className="text-base font-bold text-[#0B3766] mb-2 group-hover:text-[#168653] transition">
                  Insurance
                </h4>
                <p className="text-xs text-slate-500 leading-relaxed mb-6">
                  Protect what matters<br />most in life.
                </p>
              </div>
              <Link
                href="/investments#insurance"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0B3766] group-hover:text-[#168653] transition"
              >
                <span>Explore Insurance</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
