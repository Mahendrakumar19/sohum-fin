import type { Metadata } from "next";
import { COMPANY_CONTACT, TRUST_DIFFERENTIATORS } from "@/content/siteData";
import { ShieldCheck, Target, Users, Landmark, Award } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Us | Sohum Fintech Solutions LLP",
  description:
    "Learn about Sohum Fintech Solutions LLP, our mission, values, and client-centric approach to loan facilitation and wealth guidance in India.",
};

export default function AboutPage() {
  return (
    <div className="py-12 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-[#168653]">
            About Our Company
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-[#0B3766] tracking-tight">
            Empowering Financial Independence
          </h1>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Sohum Fintech Solutions LLP was established with a singular objective: to bring clarity, speed, and objective guidance to the loan borrowing and wealth accumulation process for retail and enterprise clients.
          </p>
        </div>
      </div>

      {/* Core Values / Vision */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-[#EFF7FC] p-8 rounded-3xl border border-[#D8E5EE]">
            <div className="w-12 h-12 rounded-2xl bg-white text-[#0B3766] flex items-center justify-center mb-5 shadow-xs">
              <Target className="w-6 h-6 text-[#168653]" />
            </div>
            <h3 className="text-xl font-bold text-[#0B3766] mb-3">Our Mission</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              To deliver tailored credit and investment options with total transparency, ensuring borrowers find optimal terms without tedious paperwork or hidden charges.
            </p>
          </div>

          <div className="bg-[#EFF7FC] p-8 rounded-3xl border border-[#D8E5EE]">
            <div className="w-12 h-12 rounded-2xl bg-white text-[#0B3766] flex items-center justify-center mb-5 shadow-xs">
              <ShieldCheck className="w-6 h-6 text-[#168653]" />
            </div>
            <h3 className="text-xl font-bold text-[#0B3766] mb-3">Integrity First</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              We never recommend loans or investment products that do not serve our clients&apos; genuine best interests. Our advisory prioritizes sustainable affordability.
            </p>
          </div>

          <div className="bg-[#EFF7FC] p-8 rounded-3xl border border-[#D8E5EE]">
            <div className="w-12 h-12 rounded-2xl bg-white text-[#0B3766] flex items-center justify-center mb-5 shadow-xs">
              <Landmark className="w-6 h-6 text-[#168653]" />
            </div>
            <h3 className="text-xl font-bold text-[#0B3766] mb-3">Robust Partnerships</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              By working alongside premier Indian public and private sector banks and reputable NBFCs, we offer extensive choices under one unified roof.
            </p>
          </div>
        </div>
      </div>

      {/* Differentiators */}
      <div className="bg-slate-50 py-16 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl font-extrabold text-[#0B3766]">Why Borrowers Rely On Us</h2>
            <p className="text-sm text-slate-500 mt-2">
              From application pre-screening to doorstep assistance, experience hassle-free financing.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {TRUST_DIFFERENTIATORS.map((diff, index) => (
              <div key={index} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs">
                <h4 className="font-bold text-[#0B3766] text-base mb-2">{diff.title}</h4>
                <p className="text-xs text-slate-600 leading-relaxed">{diff.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Corporate Details */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center space-y-6">
        <h3 className="text-2xl font-bold text-[#0B3766]">Corporate Office</h3>
        <p className="text-slate-600 text-sm max-w-md mx-auto">
          {COMPANY_CONTACT.name}<br />
          {COMPANY_CONTACT.location}<br />
          Helpline: {COMPANY_CONTACT.phone} | Email: {COMPANY_CONTACT.email}
        </p>

        <div className="pt-4">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-[#168653] hover:bg-[#126b42] text-white font-bold px-7 py-3 rounded-xl shadow-md transition"
          >
            <span>Connect with Our Team</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
