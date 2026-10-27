import Link from "next/link";
import { Wallet, Chart, ShieldDone, ArrowRight } from "@/components/ui/Iconly";

export default function InvestmentsSection() {
  return (
    <section id="investments" className="py-16 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Heading and intro button */}
          <div className="lg:col-span-4 space-y-4">
            <h2 className="font-heading text-[32px] sm:text-[38px] font-extrabold text-[#0B3666] tracking-tight leading-tight">
              Investments
            </h2>
            <h3 className="font-heading text-lg sm:text-xl font-bold text-slate-800">
              Build wealth, secure your future
            </h3>
            <p className="text-base text-slate-600 leading-relaxed max-w-sm">
              We help you make informed investment decisions with trusted products and expert guidance.
            </p>

            <div className="pt-2">
              <Link
                href="/investments"
                className="inline-flex items-center gap-2 text-sm font-bold text-[#0B3666] border-2 border-[#0B3666] hover:bg-[#0B3666] hover:text-white px-6 py-2.5 rounded-full transition duration-200"
              >
                <span>Know More</span>
                <ArrowRight set="light" primaryColor="currentColor" size={16} />
              </Link>
            </div>
          </div>

          {/* Right Column: 3 Cards matching exact layout */}
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-3 gap-5">
            {/* Mutual Funds */}
            <div className="bg-[#F7FAFC] hover:bg-white rounded-2xl p-6 sm:p-7 border border-slate-200/90 shadow-2xs hover:shadow-lg transition-all duration-200 flex flex-col justify-between group">
              <div>
                <div className="w-12 h-12 rounded-xl bg-emerald-50 flex items-center justify-center mb-4">
                  <Wallet set="bulk" primaryColor="#008272" size={28} />
                </div>
                <h4 className="text-[17px] font-bold text-[#0B3666] mb-2 group-hover:text-[#008272] transition">
                  Mutual Funds
                </h4>
                <p className="text-[13.5px] text-slate-600 leading-relaxed mb-6 font-normal">
                  Systematic. Disciplined.<br />Wealth Creation.
                </p>
              </div>
              <Link
                href="/investments#mutual-funds"
                className="inline-flex items-center gap-1.5 text-sm font-bold text-[#0B3666] group-hover:text-[#008272] transition"
              >
                <span>Explore MF</span>
                <ArrowRight set="light" primaryColor="currentColor" size={16} />
              </Link>
            </div>

            {/* Stocks */}
            <div className="bg-[#F7FAFC] hover:bg-white rounded-2xl p-6 sm:p-7 border border-slate-200/90 shadow-2xs hover:shadow-lg transition-all duration-200 flex flex-col justify-between group">
              <div>
                <div className="w-12 h-12 rounded-xl bg-emerald-50 flex items-center justify-center mb-4">
                  <Chart set="bulk" primaryColor="#008272" size={28} />
                </div>
                <h4 className="text-[17px] font-bold text-[#0B3666] mb-2 group-hover:text-[#008272] transition">
                  Stocks
                </h4>
                <p className="text-[13.5px] text-slate-600 leading-relaxed mb-6 font-normal">
                  Participate in growth<br />of India&apos;s top companies.
                </p>
              </div>
              <Link
                href="/investments#stocks"
                className="inline-flex items-center gap-1.5 text-sm font-bold text-[#0B3666] group-hover:text-[#008272] transition"
              >
                <span>Explore Stocks</span>
                <ArrowRight set="light" primaryColor="currentColor" size={16} />
              </Link>
            </div>

            {/* Insurance */}
            <div className="bg-[#F7FAFC] hover:bg-white rounded-2xl p-6 sm:p-7 border border-slate-200/90 shadow-2xs hover:shadow-lg transition-all duration-200 flex flex-col justify-between group">
              <div>
                <div className="w-12 h-12 rounded-xl bg-emerald-50 flex items-center justify-center mb-4">
                  <ShieldDone set="bulk" primaryColor="#008272" size={28} />
                </div>
                <h4 className="text-[17px] font-bold text-[#0B3666] mb-2 group-hover:text-[#008272] transition">
                  Insurance
                </h4>
                <p className="text-[13.5px] text-slate-600 leading-relaxed mb-6 font-normal">
                  Protect what matters<br />most in life.
                </p>
              </div>
              <Link
                href="/investments#insurance"
                className="inline-flex items-center gap-1.5 text-sm font-bold text-[#0B3666] group-hover:text-[#008272] transition"
              >
                <span>Explore Insurance</span>
                <ArrowRight set="light" primaryColor="currentColor" size={16} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

