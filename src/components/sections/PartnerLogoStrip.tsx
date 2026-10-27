import React from "react";
import Image from "next/image";

export default function PartnerLogoStrip() {
  const bankLogos = [
    {
      name: "State Bank of India",
      src: "/banks/sbi.svg",
      alt: "SBI Logo",
      width: 140,
      height: 44,
      scaleClass: "h-8 sm:h-9 w-auto",
    },
    {
      name: "HDFC Bank",
      src: "/banks/hdfc.svg",
      alt: "HDFC Bank Logo",
      width: 170,
      height: 38,
      scaleClass: "h-7 sm:h-8 w-auto",
    },
    {
      name: "ICICI Bank",
      src: "/banks/icici.svg",
      alt: "ICICI Bank Logo",
      width: 165,
      height: 42,
      scaleClass: "h-8 sm:h-9 w-auto",
    },
    {
      name: "Axis Bank",
      src: "/banks/axis.svg",
      alt: "Axis Bank Logo",
      width: 165,
      height: 42,
      scaleClass: "h-8 sm:h-9 w-auto",
    },
    {
      name: "Kotak Mahindra Bank",
      src: "/banks/kotak.svg",
      alt: "Kotak Mahindra Bank Logo",
      width: 150,
      height: 44,
      scaleClass: "h-8 sm:h-9 w-auto",
    },
    {
      name: "Bajaj Finserv",
      src: "/banks/bajaj.svg",
      alt: "Bajaj Finserv Logo",
      width: 160,
      height: 44,
      scaleClass: "h-8 sm:h-9 w-auto",
    },
    {
      name: "LIC Housing Finance",
      src: "/banks/lichfl.svg",
      alt: "LIC Housing Finance Logo",
      width: 175,
      height: 46,
      scaleClass: "h-9 sm:h-10 w-auto",
    },
  ];

  return (
    <section className="py-16 bg-[#F8FAFC] border-b border-[#DCE8F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <h2 className="font-heading text-xl sm:text-2xl font-extrabold text-[#0B3666] tracking-tight">
            Our Banking &amp; NBFC Partners
          </h2>
          <p className="text-xs text-[#576F84] mt-1.5 font-medium">
            We work with leading Banks and NBFCs to bring you the best financial solutions.
          </p>
        </div>

        {/* Clean Logo Box Row with large, prominent, official SVG logos */}
        <div className="flex flex-wrap items-center justify-center gap-3.5 sm:gap-5">
          {bankLogos.map((bank, index) => (
            <div
              key={index}
              className="bg-white px-5 py-3 rounded-xl border border-[#DCE8F0] shadow-2xs hover:shadow-md hover:border-[#008272]/50 transition-all flex items-center justify-center min-h-[60px] min-w-[140px] sm:min-w-[160px]"
            >
              <Image
                src={bank.src}
                alt={bank.alt}
                width={bank.width}
                height={bank.height}
                className={`${bank.scaleClass} object-contain transition-transform hover:scale-105 duration-200`}
                priority
              />
            </div>
          ))}

          {/* and more badge */}
          <div className="flex items-center justify-center px-3 py-2 text-xs text-[#576F84] italic font-semibold">
            and more...
          </div>
        </div>
      </div>
    </section>
  );
}
