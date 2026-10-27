import React from "react";

export function SohumLogo({ className = "w-11 h-11", dark = false }: { className?: string; dark?: boolean }) {
  return (
    <svg viewBox="0 0 100 120" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      {/* Upper loop in Exact Teal / Turquoise Green */}
      <path
        d="M26 48 C24 30, 36 12, 58 10 C72 8, 86 18, 88 32 C90 46, 78 56, 64 64 L44 76 C36 82, 32 90, 34 98 C36 106, 48 112, 60 110 C72 108, 80 98, 82 90"
        stroke="#008272"
        strokeWidth="14"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Lower Deep Navy Ribbon intertwining and folding upward */}
      <path
        d="M74 24 C64 16, 50 14, 38 20 C26 28, 22 42, 26 54 L44 68 C58 78, 68 86, 68 96 C68 108, 56 116, 42 114 C28 112, 18 100, 18 88"
        stroke={dark ? "#ffffff" : "#0B3666"}
        strokeWidth="13"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function SohumBrandMark({ dark = false }: { dark?: boolean }) {
  return (
    <div className="flex items-center gap-2.5">
      <SohumLogo className="w-11 h-11 shrink-0" dark={dark} />
      <div className="flex flex-col text-left">
        <span className={`font-heading font-extrabold text-[27px] tracking-tight leading-none ${dark ? "text-white" : "text-[#0B3666]"}`}>
          Sohum
        </span>
        <span className={`text-[11px] font-bold tracking-tight leading-tight mt-0.5 ${dark ? "text-slate-100" : "text-[#052342]"}`}>
          Fintech Solutions LLP
        </span>
        <span className={`text-[9px] font-medium tracking-wide ${dark ? "text-emerald-300" : "text-[#576F84]"}`}>
          Your Goals &nbsp;|&nbsp; Our Expertise
        </span>
      </div>
    </div>
  );
}
