import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import {
  IconHeroWealth,
  IconHeroFinancialSecurity,
  IconHeroTrustedPartnerships,
  IconHeroCustomerFirst,
} from "@/components/ui/OriginalIcons";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden min-h-[580px] lg:min-h-[640px] flex items-center border-b border-[#DCE8F0]">
      {/* 
        Full background image extension:
        Hero coins & city skyline image spans the entire hero container, positioned right,
        with a tailored gradient mask on the left so copy is razor-sharp legible.
      */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero-coins.jpg"
          alt="Financial solutions background"
          fill
          priority
          className="object-cover object-right md:object-[78%_center] opacity-95"
        />
        {/*
          Gradient overlay mask:
          Left side is #E8F3FA / #F2F8FC matching the branding and fading to transparent towards the right
          so the hand, plant sprouts and coins emerge seamlessly into the background!
        */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#E8F3FA] via-[#E8F3FA]/90 md:via-[#E8F3FA]/80 lg:via-[#E8F3FA]/70 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-white/80 via-transparent to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-20 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Column (7 cols): Content over seamlessly blended background */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-[56px] font-extrabold text-[#0B3666] tracking-tight leading-[1.12]">
              Financial Solutions<br />
              for a Brighter Tomorrow
            </h1>

            <div className="text-base sm:text-lg font-bold text-[#0B3666] tracking-wide font-heading">
              Invest &nbsp;|&nbsp; Grow &nbsp;|&nbsp; Achieve
            </div>

            <p className="text-sm sm:text-base text-[#192b45] font-medium leading-relaxed max-w-xl">
              Sohum Fintech Solutions LLP is a Noida based fintech company helping individuals and businesses build a secure financial future through smart investments and easy access to loans.
            </p>

            {/* 4 Feature Badges with exact clean teal icons in rounded glassmorphic boxes */}
            <div className="grid grid-cols-4 gap-3 max-w-lg pt-2 pb-1">
              <div className="flex flex-col items-center text-center p-2.5 rounded-xl bg-white/90 backdrop-blur-md border border-[#DCE8F0] shadow-2xs hover:shadow-xs transition">
                <div className="w-10 h-10 rounded-lg bg-[#E6F5F2] flex items-center justify-center mb-1.5">
                  <IconHeroWealth className="w-6 h-6" />
                </div>
                <span className="text-[11px] font-semibold text-[#192b45] leading-tight">
                  Wealth<br />Creation
                </span>
              </div>

              <div className="flex flex-col items-center text-center p-2.5 rounded-xl bg-white/90 backdrop-blur-md border border-[#DCE8F0] shadow-2xs hover:shadow-xs transition">
                <div className="w-10 h-10 rounded-lg bg-[#E6F5F2] flex items-center justify-center mb-1.5">
                  <IconHeroFinancialSecurity className="w-6 h-6" />
                </div>
                <span className="text-[11px] font-semibold text-[#192b45] leading-tight">
                  Financial<br />Security
                </span>
              </div>

              <div className="flex flex-col items-center text-center p-2.5 rounded-xl bg-white/90 backdrop-blur-md border border-[#DCE8F0] shadow-2xs hover:shadow-xs transition">
                <div className="w-10 h-10 rounded-lg bg-[#E6F5F2] flex items-center justify-center mb-1.5">
                  <IconHeroTrustedPartnerships className="w-6 h-6" />
                </div>
                <span className="text-[11px] font-semibold text-[#192b45] leading-tight">
                  Trusted<br />Partnerships
                </span>
              </div>

              <div className="flex flex-col items-center text-center p-2.5 rounded-xl bg-white/90 backdrop-blur-md border border-[#DCE8F0] shadow-2xs hover:shadow-xs transition">
                <div className="w-10 h-10 rounded-lg bg-[#E6F5F2] flex items-center justify-center mb-1.5">
                  <IconHeroCustomerFirst className="w-6 h-6" />
                </div>
                <span className="text-[11px] font-semibold text-[#192b45] leading-tight">
                  Customer<br />First
                </span>
              </div>
            </div>

            {/* CTA Button matching screenshot */}
            <div className="pt-2">
              <Link
                href="/loans"
                className="inline-flex items-center gap-2.5 bg-[#0B3666] hover:bg-[#052342] text-white font-bold px-7 py-3 rounded-full shadow-md hover:shadow-lg transition active:scale-95 text-sm"
              >
                <span>Explore Our Services</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Right Column (5 cols): Floating script card over the extended coin background */}
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
