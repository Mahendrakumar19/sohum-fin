"use client";

import React from "react";
import Link from "next/link";
import { Call, Message, Location } from "@/components/ui/Iconly";
import { SohumBrandMark } from "@/components/ui/SohumBrandMark";

export default function SiteFooter() {
  return (
    <footer className="bg-[#0B3766] text-white pt-12 pb-6 border-t border-[#06284B]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pb-10 border-b border-white/10">
          {/* Col 1: Brand & Logo */}
          <div className="space-y-3">
            <SohumBrandMark dark={true} />
          </div>

          {/* Col 2: Quick Links */}
          <div>
            <h4 className="text-[13.5px] font-bold uppercase tracking-wider text-slate-100 mb-3.5">
              Quick Links
            </h4>
            <div className="grid grid-cols-2 gap-2 text-sm text-slate-200">
              <div className="space-y-2.5">
                <Link href="/" className="block hover:text-white transition">Home</Link>
                <Link href="/investments" className="block hover:text-white transition">Investments</Link>
                <Link href="/loans" className="block hover:text-white transition">Loans</Link>
                <Link href="/emi-calculator" className="block hover:text-white transition">EMI Calculator</Link>
              </div>
              <div className="space-y-2.5">
                <Link href="/about" className="block hover:text-white transition">About Us</Link>
                <Link href="/contact" className="block hover:text-white transition">Contact</Link>
              </div>
            </div>
          </div>

          {/* Col 3: Contact Us */}
          <div>
            <h4 className="text-[13.5px] font-bold uppercase tracking-wider text-slate-100 mb-3.5">
              Contact Us
            </h4>
            <div className="space-y-2.5 text-sm text-slate-200">
              <div className="flex items-center gap-2.5">
                <Call set="bulk" primaryColor="#34d399" size={18} />
                <a href="tel:+919650123456" className="hover:text-white transition font-medium">
                  +91 9650 123 456
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Message set="bulk" primaryColor="#34d399" size={18} />
                <a href="mailto:info@sohumfintech.in" className="hover:text-white transition font-medium">
                  info@sohumfintech.in
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Location set="bulk" primaryColor="#34d399" size={18} />
                <span className="font-medium">Noida, Uttar Pradesh</span>
              </div>
              <p className="text-xs text-slate-300 pt-1 font-normal">
                Serving Individuals | Families | Businesses
              </p>
            </div>
          </div>


          {/* Col 4: Stay Connected & Get In Touch CTA */}
          <div className="space-y-4">
            <h4 className="text-[13.5px] font-bold uppercase tracking-wider text-slate-100">
              Stay Connected
            </h4>
            <div className="flex items-center gap-2.5">
              {/* LinkedIn */}
              <a href="#" className="w-8 h-8 rounded-full bg-white/10 hover:bg-[#168653] flex items-center justify-center text-white transition text-xs" aria-label="LinkedIn">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/></svg>
              </a>
              {/* Facebook */}
              <a href="#" className="w-8 h-8 rounded-full bg-white/10 hover:bg-[#168653] flex items-center justify-center text-white transition text-xs" aria-label="Facebook">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 2.04C6.5 2.04 2 6.53 2 12.06C2 17.06 5.66 21.21 10.44 21.96V14.96H7.9V12.06H10.44V9.85C10.44 7.34 11.93 5.96 14.22 5.96C15.31 5.96 16.45 6.15 16.45 6.15V8.62H15.19C13.95 8.62 13.56 9.39 13.56 10.18V12.06H16.34L15.89 14.96H13.56V21.96A10 10 0 0 0 22 12.06C22 6.53 17.5 2.04 12 2.04Z"/></svg>
              </a>
              {/* Twitter / X */}
              <a href="#" className="w-8 h-8 rounded-full bg-white/10 hover:bg-[#168653] flex items-center justify-center text-white transition text-xs" aria-label="Twitter">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              </a>
              {/* Instagram */}
              <a href="#" className="w-8 h-8 rounded-full bg-white/10 hover:bg-[#168653] flex items-center justify-center text-white transition text-xs" aria-label="Instagram">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
              </a>
              {/* YouTube */}
              <a href="#" className="w-8 h-8 rounded-full bg-white/10 hover:bg-[#168653] flex items-center justify-center text-white transition text-xs" aria-label="YouTube">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
              </a>
            </div>

            <div>
              <Link
                href="/contact"
                className="inline-block border border-white/50 hover:border-white text-white text-sm font-bold px-7 py-2.5 rounded-full transition hover:bg-white hover:text-[#0B3666]"
              >
                Get In Touch
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom copyright line and slogan */}
        <div className="pt-5 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-300 gap-2">
          <p>© 2026 Sohum Fintech Solutions LLP. All Rights Reserved.</p>
          <p className="italic text-slate-300">Your Financial Goals. Our Commitment.</p>
        </div>
      </div>
    </footer>
  );
}
