import React from "react";
import HeroSection from "@/components/sections/HeroSection";
import InvestmentsSection from "@/components/sections/InvestmentsSection";
import LoansSection from "@/components/sections/LoansSection";
import ScreenshotEMICalculator from "@/components/calculator/ScreenshotEMICalculator";
import WhyChooseUsSection from "@/components/sections/WhyChooseUsSection";
import PartnerLogoStrip from "@/components/sections/PartnerLogoStrip";

export default function HomePage() {
  return (
    <div className="flex flex-col">
      {/* 1. Hero Section with Growth Plant & Coins Visual */}
      <HeroSection />

      {/* 2. Investments Section */}
      <InvestmentsSection />

      {/* 3. Loans Section */}
      <LoansSection />

      {/* 4. EMI Calculator matching exact screenshot layout */}
      <section id="emi-calculator" className="py-16 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScreenshotEMICalculator />
        </div>
      </section>

      {/* 5. Why Choose Sohum Fintech Solutions LLP? */}
      <WhyChooseUsSection />

      {/* 6. Our Banking & NBFC Partners */}
      <PartnerLogoStrip />
    </div>
  );
}
