import React from "react";

export default function PartnerLogoStrip() {
  return (
    <section className="py-14 bg-[#F8FAFC] border-b border-[#DCE8F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-8">
          <h2 className="font-heading text-xl sm:text-2xl font-extrabold text-[#0B3666] tracking-tight">
            Our Banking &amp; NBFC Partners
          </h2>
          <p className="text-xs text-[#576F84] mt-1 font-medium">
            We work with leading Banks and NBFCs to bring you the best financial solutions.
          </p>
        </div>

        {/* Clean Logo Box Row matching reference screenshot layout */}
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
          {/* SBI */}
          <div className="bg-white px-5 py-3 rounded-lg border border-[#DCE8F0] flex items-center gap-2 shadow-2xs hover:shadow-xs transition">
            <div className="w-5 h-5 rounded-full bg-[#0082c6] flex items-center justify-center text-white text-[10px] font-black">
              ●
            </div>
            <span className="font-extrabold text-sm text-[#002f6c] tracking-wider">SBI</span>
          </div>

          {/* HDFC */}
          <div className="bg-white px-5 py-3 rounded-lg border border-[#DCE8F0] flex items-center gap-2 shadow-2xs hover:shadow-xs transition">
            <div className="w-4 h-4 bg-[#004c8f] border border-red-600 flex items-center justify-center text-[8px] text-white font-bold">
              +
            </div>
            <span className="font-black text-sm text-[#004c8f] tracking-tight">HDFC BANK</span>
          </div>

          {/* ICICI */}
          <div className="bg-white px-5 py-3 rounded-lg border border-[#DCE8F0] flex items-center gap-2 shadow-2xs hover:shadow-xs transition">
            <span className="text-base text-[#f37e20] font-black">i</span>
            <span className="font-extrabold text-sm text-[#a81c20] tracking-tight">ICICI Bank</span>
          </div>

          {/* AXIS */}
          <div className="bg-white px-5 py-3 rounded-lg border border-[#DCE8F0] flex items-center gap-2 shadow-2xs hover:shadow-xs transition">
            <span className="text-base font-black text-[#97144d]">▲</span>
            <span className="font-extrabold text-sm text-[#97144d] tracking-wider">AXIS BANK</span>
          </div>

          {/* KOTAK */}
          <div className="bg-white px-5 py-3 rounded-lg border border-[#DCE8F0] flex items-center gap-1.5 shadow-2xs hover:shadow-xs transition">
            <div className="w-4 h-4 rounded-full bg-red-600 flex items-center justify-center text-[9px] text-white font-bold">
              ∞
            </div>
            <span className="font-black text-sm text-[#003366] tracking-tight">kotak</span>
          </div>

          {/* BAJAJ FINSERV */}
          <div className="bg-white px-5 py-3 rounded-lg border border-[#DCE8F0] flex items-center gap-2 shadow-2xs hover:shadow-xs transition">
            <div className="w-4 h-4 rounded bg-[#0072bc] flex items-center justify-center text-[10px] text-white font-black">
              B
            </div>
            <span className="font-extrabold text-xs text-[#0072bc] tracking-wider">BAJAJ FINSERV</span>
          </div>

          {/* LIC HFL */}
          <div className="bg-white px-4 py-2.5 rounded-lg border border-[#DCE8F0] flex items-center gap-2 shadow-2xs hover:shadow-xs transition">
            <div className="w-5 h-5 rounded-full bg-amber-400 flex items-center justify-center text-[9px] font-bold text-slate-900">
              🪔
            </div>
            <div className="flex flex-col text-left">
              <span className="font-black text-xs text-[#005a9c] leading-none">LIC HFL</span>
              <span className="text-[7px] font-semibold text-slate-500 leading-none mt-0.5">HOUSING FINANCE LTD</span>
            </div>
          </div>

          {/* and more */}
          <span className="text-xs text-[#576F84] italic px-2 font-medium">and more...</span>
        </div>
      </div>
    </section>
  );
}
