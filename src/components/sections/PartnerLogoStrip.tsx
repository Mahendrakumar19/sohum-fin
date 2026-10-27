import React from "react";
import Image from "next/image";

export default function PartnerLogoStrip() {
  const partners = [
    {
      name: "State Bank of India",
      src: "/banks/sbi.svg",
      alt: "SBI Logo",
      width: 130,
      height: 38,
      className: "h-7 sm:h-8 w-auto max-w-[110px]",
    },
    {
      name: "HDFC Bank",
      src: "/banks/hdfc.svg",
      alt: "HDFC Bank Logo",
      width: 140,
      height: 34,
      className: "h-6 sm:h-7 w-auto max-w-[125px]",
    },
    {
      name: "ICICI Bank",
      src: "/banks/icici.svg",
      alt: "ICICI Bank Logo",
      width: 140,
      height: 36,
      className: "h-6 sm:h-7 w-auto max-w-[120px]",
    },
    {
      name: "Axis Bank",
      src: "/banks/axis.svg",
      alt: "Axis Bank Logo",
      width: 140,
      height: 36,
      className: "h-6 sm:h-7 w-auto max-w-[120px]",
    },
    {
      name: "Kotak Mahindra Bank",
      src: "/banks/kotak.svg",
      alt: "Kotak Bank Logo",
      width: 130,
      height: 38,
      className: "h-6 sm:h-7 w-auto max-w-[110px]",
    },
    {
      name: "Bajaj Finserv",
      src: "/banks/bajaj.svg",
      alt: "Bajaj Finserv Logo",
      width: 140,
      height: 38,
      className: "h-6 sm:h-7 w-auto max-w-[125px]",
    },
    {
      name: "LIC Housing Finance",
      src: "/banks/lichfl.svg",
      alt: "LIC HFL Logo",
      width: 150,
      height: 40,
      className: "h-7 sm:h-8 w-auto max-w-[130px]",
    },
  ];

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

        {/* Clean Logo Row featuring official brand vectors */}
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="bg-white px-4 py-2.5 rounded-lg border border-[#DCE8F0] shadow-2xs hover:shadow-xs hover:border-[#008272]/40 transition flex items-center justify-center min-h-[46px] min-w-[110px] sm:min-w-[130px]"
            >
              <Image
                src={partner.src}
                alt={partner.alt}
                width={partner.width}
                height={partner.height}
                className={`${partner.className} object-contain transition-transform hover:scale-105 duration-150`}
                priority
              />
            </div>
          ))}

          {/* and more badge */}
          <span className="text-xs text-[#576F84] italic px-2 font-medium">and more...</span>
        </div>
      </div>
    </section>
  );
}

