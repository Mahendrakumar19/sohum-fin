import React from "react";
import {
  TwoUsers,
  Discovery,
  TimeCircle,
  ShieldDone,
  Location,
} from "@/components/ui/Iconly";

export default function WhyChooseUsSection() {
  const items = [
    {
      title: "Trusted Partnerships",
      desc: "Tie-ups with leading Banks and NBFCs",
      icon: (props: any) => <TwoUsers set="bulk" primaryColor="#008272" size={24} {...props} />,
    },
    {
      title: "Expert Guidance",
      desc: "Personalized financial advice",
      icon: (props: any) => <Discovery set="bulk" primaryColor="#008272" size={24} {...props} />,
    },
    {
      title: "Quick & Hassle-Free Process",
      desc: "Minimal documentation, faster approvals",
      icon: (props: any) => <TimeCircle set="bulk" primaryColor="#008272" size={24} {...props} />,
    },
    {
      title: "Transparent & Fair",
      desc: "No hidden charges, complete clarity",
      icon: (props: any) => <ShieldDone set="bulk" primaryColor="#008272" size={24} {...props} />,
    },
    {
      title: "Local Presence",
      desc: "Based in Noida, serving across India",
      icon: (props: any) => <Location set="bulk" primaryColor="#008272" size={24} {...props} />,
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
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 sm:gap-8 text-center items-start">
          {items.map((item, index) => {
            const Icon = item.icon;
            return (
              <div key={index} className="flex flex-col items-center">
                <div className="w-14 h-14 rounded-2xl bg-[#E6F5F2] flex items-center justify-center mb-3.5 shadow-2xs">
                  <Icon className="w-7 h-7" />
                </div>
                <h3 className="font-heading text-[15px] sm:text-base font-bold text-[#0B3666] mb-1.5 leading-snug">
                  {item.title}
                </h3>
                <p className="text-[13px] sm:text-sm text-[#576F84] leading-relaxed font-normal max-w-[190px]">
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
