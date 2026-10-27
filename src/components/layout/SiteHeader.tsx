"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Location, ChevronDown } from "@/components/ui/Iconly";
import { SohumBrandMark } from "@/components/ui/SohumBrandMark";


export default function SiteHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-[#DCE8F0] shadow-2xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Exact Logo and Tagline as shown in screenshot */}
          <Link href="/" className="hover:opacity-95 transition">
            <SohumBrandMark />
          </Link>

          {/* Desktop Navigation with refined Google Font styling */}
          <nav className="hidden lg:flex items-center gap-8 text-[15px] font-semibold text-[#192b45]">
            <Link
              href="/"
              className={`pb-1 transition-colors ${
                pathname === "/"
                  ? "text-[#0B3666] border-b-2 border-[#008272] font-bold"
                  : "hover:text-[#008272]"
              }`}
            >
              Home
            </Link>

            <div className="relative group py-2">
              <Link
                href="/investments"
                className="flex items-center gap-1.5 hover:text-[#008272] transition-colors"
              >
                <span>Investments</span>
                <span className="text-[#576F84] group-hover:rotate-180 transition-transform inline-flex">
                  <ChevronDown set="light" primaryColor="currentColor" size={14} />
                </span>
              </Link>
              <div className="absolute top-full left-0 hidden group-hover:block w-52 bg-white border border-[#DCE8F0] rounded-xl shadow-lg p-2 z-50">
                <Link href="/investments#mutual-funds" className="block px-3 py-2 text-sm font-medium rounded-lg hover:bg-slate-50 hover:text-[#008272]">
                  Mutual Funds
                </Link>
                <Link href="/investments#stocks" className="block px-3 py-2 text-sm font-medium rounded-lg hover:bg-slate-50 hover:text-[#008272]">
                  Stocks & Equities
                </Link>
                <Link href="/investments#insurance" className="block px-3 py-2 text-sm font-medium rounded-lg hover:bg-slate-50 hover:text-[#008272]">
                  Insurance Plans
                </Link>
              </div>
            </div>

            <div className="relative group py-2">
              <Link
                href="/loans"
                className="flex items-center gap-1.5 hover:text-[#008272] transition-colors"
              >
                <span>Loans</span>
                <span className="text-[#576F84] group-hover:rotate-180 transition-transform inline-flex">
                  <ChevronDown set="light" primaryColor="currentColor" size={14} />
                </span>
              </Link>
              <div className="absolute top-full left-0 hidden group-hover:block w-56 bg-white border border-[#DCE8F0] rounded-xl shadow-lg p-2 z-50">
                <Link href="/loans#home-loan" className="block px-3 py-2 text-sm font-medium rounded-lg hover:bg-slate-50 hover:text-[#008272]">
                  Home Loan
                </Link>
                <Link href="/loans#lap" className="block px-3 py-2 text-sm font-medium rounded-lg hover:bg-slate-50 hover:text-[#008272]">
                  Loan Against Property (LAP)
                </Link>
                <Link href="/loans#vehicle-loan" className="block px-3 py-2 text-sm font-medium rounded-lg hover:bg-slate-50 hover:text-[#008272]">
                  Vehicle Loan
                </Link>
                <Link href="/loans#business-loan" className="block px-3 py-2 text-sm font-medium rounded-lg hover:bg-slate-50 hover:text-[#008272]">
                  Business Loan
                </Link>
                <Link href="/loans#project-financing" className="block px-3 py-2 text-sm font-medium rounded-lg hover:bg-slate-50 hover:text-[#008272]">
                  Project Financing
                </Link>
                <Link href="/loans#personal-loan" className="block px-3 py-2 text-sm font-medium rounded-lg hover:bg-slate-50 hover:text-[#008272]">
                  Personal Loan
                </Link>
                <Link href="/loans#education-loan" className="block px-3 py-2 text-sm font-medium rounded-lg hover:bg-slate-50 hover:text-[#008272]">
                  Education Loan
                </Link>
              </div>
            </div>

            <Link
              href="/emi-calculator"
              className={`hover:text-[#008272] transition-colors ${
                pathname === "/emi-calculator" ? "text-[#0B3666] border-b-2 border-[#008272] font-bold" : ""
              }`}
            >
              EMI Calculator
            </Link>

            <Link
              href="/about"
              className={`hover:text-[#008272] transition-colors ${
                pathname === "/about" ? "text-[#0B3666] border-b-2 border-[#008272] font-bold" : ""
              }`}
            >
              About Us
            </Link>

            <Link
              href="/contact"
              className={`hover:text-[#008272] transition-colors ${
                pathname === "/contact" ? "text-[#0B3666] border-b-2 border-[#008272] font-bold" : ""
              }`}
            >
              Contact
            </Link>
          </nav>

          {/* Right Header Area: Location badge + Get Started button as in reference */}
          <div className="hidden md:flex items-center gap-6">
            <div className="flex items-center gap-2.5 text-left">
              <div className="w-8 h-8 rounded-full bg-[#E8F3FA] flex items-center justify-center shrink-0">
                <Location set="bold" primaryColor="#0B3666" size={18} />
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-bold text-[#0B3666] leading-tight">
                  Noida, Uttar Pradesh
                </span>
                <span className="text-xs text-[#576F84] leading-tight mt-0.5 font-medium">
                  A Fintech Company
                </span>
              </div>
            </div>

            <Link
              href="/contact"
              className="bg-[#0B3666] hover:bg-[#052342] text-white text-[15px] font-bold px-7 py-2.5 rounded-full shadow-xs hover:shadow transition"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile hamburger button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-slate-700 hover:text-[#0B3666] hover:bg-slate-100 transition"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? (
              <svg className="w-6 h-6 stroke-current stroke-2 fill-none" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6 stroke-current stroke-2 fill-none" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>

        </div>
      </div>

      {/* Mobile drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-[#DCE8F0] px-4 pt-3 pb-6 shadow-xl animate-in fade-in duration-200">
          <div className="flex flex-col gap-2 text-sm font-semibold">
            <Link
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg text-slate-800 hover:bg-[#E8F3FA]"
            >
              Home
            </Link>
            <Link
              href="/investments"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg text-slate-800 hover:bg-[#E8F3FA]"
            >
              Investments
            </Link>
            <Link
              href="/loans"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg text-slate-800 hover:bg-[#E8F3FA]"
            >
              Loans
            </Link>
            <Link
              href="/emi-calculator"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg text-slate-800 hover:bg-[#E8F3FA]"
            >
              EMI Calculator
            </Link>
            <Link
              href="/about"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg text-slate-800 hover:bg-[#E8F3FA]"
            >
              About Us
            </Link>
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg text-slate-800 hover:bg-[#E8F3FA]"
            >
              Contact
            </Link>

            <div className="pt-3 border-t border-[#DCE8F0] mt-2 flex flex-col gap-3">
              <div className="flex items-center gap-2 px-3 text-xs text-[#576F84]">
                <Location set="bold" primaryColor="#0B3666" size={16} />
                <span>Noida, Uttar Pradesh (A Fintech Company)</span>
              </div>
              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center bg-[#0B3666] text-white font-bold py-2.5 rounded-full shadow-sm text-sm"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
