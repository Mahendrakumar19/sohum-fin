import type { Metadata } from "next";
import { Manrope, Inter } from "next/font/google";
import "./globals.css";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
  weight: ["500", "600", "700", "800"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});


export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Sohum Fintech Solutions LLP | Loans & Financial Services",
  description:
    "Explore loan options, financial services, and an interactive EMI calculator from Sohum Fintech Solutions LLP. We partner with leading banks & NBFCs to deliver transparent loan guidance.",
  keywords: [
    "Sohum Fintech",
    "Home Loan Noida",
    "Business Loan",
    "Loan Against Property",
    "Vehicle Loan",
    "Personal Loan",
    "EMI Calculator",
    "Mutual Funds guidance",
  ],
  authors: [{ name: "Sohum Fintech Solutions LLP" }],
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${manrope.variable} ${inter.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans bg-white text-[#192b45]">
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}


