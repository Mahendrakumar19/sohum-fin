import React from "react";
import {
  IconWhyPartnerships,
  IconWhyExpertGuidance,
  IconWhyFastProcess,
  IconWhyTransparent,
  IconWhyLocalPresence,
} from "@/components/ui/WhyUsIcons";

export default function WhyChooseUsSection() {
  const items = [
    {
      title: "Trusted Partnerships",
      desc: "Tie-ups with leading Banks and NBFCs",
      icon: IconWhyPartnerships,
    },
    {
      title: "Expert Guidance",
      desc: "Personalized financial advice",
      icon: IconWhyExpertGuidance,
    },
    {
      title: "Quick & Hassle-Free Process",
      desc: "Minimal documentation, faster approvals",
      icon: IconWhyFastProcess,
    },
    {
      title: "Transparent & Fair",
      desc: "No hidden charges, complete clarity",
      icon: IconWhyTransparent,
    },
    {
      title: "Local Presence",
      desc: "Based in Noida, serving across India",
      icon: IconWhyLocalPresence,
    },
  ];

  return (
    <section className="py-16 bg-white border-b border-[#DCE8F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="font-heading text-2xl sm:text-3xl font-extrabold text-[#0B3666] tracking-tight">
            Why Choose Sohum Fintech Solutions LLP?
          </h2>
        </div>

        {/* 5 items in a single responsive row with teal stroke icons as in screenshot */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 text-center">
          {items.map((item, index) => {
            const Icon = item.icon;
            return (
              <div key={index} className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-2xl bg-[#E6F5F2] flex items-center justify-center mb-3">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="font-heading text-sm font-bold text-[#0B3666] mb-1">
                  {item.title}
                </h3>
                <p className="text-xs text-[#576F84] leading-tight font-medium max-w-[170px]">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
