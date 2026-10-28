import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Graph, ShieldDone, TwoUsers, Heart, ArrowRight } from "@/components/ui/Iconly";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden min-h-[540px] lg:min-h-[580px] flex items-center border-b border-[#DCE8F0] bg-gradient-to-r from-[#EAF3FA] via-[#F1F7FC] to-[#EAF3FA]">
      {/* 
        Background Image container:
        - Absolute right-anchored in the hero (from center to right: w-full md:w-[60%] lg:w-[50%])
        - Max-width of 720px so the hand and coin stacks stay at an elegant, natural, medium size
        - Smooth gradient fades seamlessly merge it into the background on the left and edges
      */}
      <div className="absolute right-0 top-0 bottom-0 w-full md:w-[60%] lg:w-[52%] max-w-[720px] z-0 select-none pointer-events-none overflow-hidden">
        <Image
          src="/hero-coins.jpg"
          alt="Financial solutions background"
          fill
          priority
          sizes="(max-width: 768px) 100vw, 720px"
          className="object-cover object-right md:object-[85%_center]"
        />
        {/* Soft edge-feathering gradients to blend naturally into the hero background */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#EAF3FA] via-[#EAF3FA]/80 md:via-[#EAF3FA]/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#EAF3FA]/90 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#EAF3FA]/60 via-transparent to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Column (7 cols): Content over clear, uncluttered background */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-[56px] font-extrabold text-[#0B3666] tracking-tight leading-[1.12]">
              Financial Solutions<br />
              for a Brighter Tomorrow
            </h1>

            <div className="text-base sm:text-lg font-bold text-[#0B3666] tracking-wide font-heading">
              Invest &nbsp;|&nbsp; Grow &nbsp;|&nbsp; Achieve
            </div>

            <p className="text-base sm:text-lg text-[#192b45] font-normal leading-relaxed max-w-xl">
              Sohum Fintech Solutions LLP is a Noida based fintech company helping individuals and businesses build a secure financial future through smart investments and easy access to loans.
            </p>

            {/* 4 Feature Badges with clean Iconly icons in rounded glassmorphic boxes */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3.5 max-w-xl pt-2 pb-1">
              <div className="flex flex-col items-center text-center p-3.5 rounded-xl bg-white/95 backdrop-blur-md border border-[#DCE8F0] shadow-2xs hover:shadow-xs transition">
                <div className="w-11 h-11 rounded-xl bg-[#E6F5F2] flex items-center justify-center mb-2">
                  <Graph set="bulk" primaryColor="#008272" size={24} />
                </div>
                <span className="text-[13px] font-bold text-[#192b45] leading-tight">
                  Wealth<br />Creation
                </span>
              </div>

              <div className="flex flex-col items-center text-center p-3.5 rounded-xl bg-white/95 backdrop-blur-md border border-[#DCE8F0] shadow-2xs hover:shadow-xs transition">
                <div className="w-11 h-11 rounded-xl bg-[#E6F5F2] flex items-center justify-center mb-2">
                  <ShieldDone set="bulk" primaryColor="#008272" size={24} />
                </div>
                <span className="text-[13px] font-bold text-[#192b45] leading-tight">
                  Financial<br />Security
                </span>
              </div>

              <div className="flex flex-col items-center text-center p-3.5 rounded-xl bg-white/95 backdrop-blur-md border border-[#DCE8F0] shadow-2xs hover:shadow-xs transition">
                <div className="w-11 h-11 rounded-xl bg-[#E6F5F2] flex items-center justify-center mb-2">
                  <TwoUsers set="bulk" primaryColor="#008272" size={24} />
                </div>
                <span className="text-[13px] font-bold text-[#192b45] leading-tight">
                  Trusted<br />Partnerships
                </span>
              </div>

              <div className="flex flex-col items-center text-center p-3.5 rounded-xl bg-white/95 backdrop-blur-md border border-[#DCE8F0] shadow-2xs hover:shadow-xs transition">
                <div className="w-11 h-11 rounded-xl bg-[#E6F5F2] flex items-center justify-center mb-2">
                  <Heart set="bulk" primaryColor="#008272" size={24} />
                </div>
                <span className="text-[13px] font-bold text-[#192b45] leading-tight">
                  Customer<br />First
                </span>
              </div>
            </div>

            {/* CTA Button matching recommendation */}
            <div className="pt-2">
              <Link
                href="/loans"
                className="inline-flex items-center gap-2.5 bg-[#0B3666] hover:bg-[#052342] text-white font-bold px-8 py-3.5 rounded-full shadow-md hover:shadow-lg transition active:scale-95 text-[15px]"
              >
                <span>Explore Our Services</span>
                <ArrowRight set="light" primaryColor="#ffffff" size={16} />
              </Link>
            </div>

          </div>

          {/* Right Column (5 cols): Floating script card over the visual area */}
          <div className="lg:col-span-5 relative flex justify-end">
            <div className="bg-white/95 backdrop-blur-md px-6 py-4 rounded-2xl shadow-xl border border-[#DCE8F0] max-w-xs transform rotate-1 mt-6 lg:mt-0">
              <p className="font-serif italic text-base sm:text-lg font-extrabold text-[#0B3666] leading-snug text-right">
                Your Financial<br />
                <span className="text-[#008272] not-italic font-sans font-bold">Wellbeing</span><br />
                <span className="text-xs font-sans not-italic font-semibold text-[#576F84]">
                  is Our Priority
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
