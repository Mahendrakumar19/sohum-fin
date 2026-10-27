import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Sohum Fintech Solutions LLP",
  description: "Privacy policy and data protection disclosures for Sohum Fintech Solutions LLP.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="py-16 bg-white min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 text-slate-700">
        <div>
          <span className="text-xs font-bold uppercase tracking-widest text-[#168653]">
            Data Protection
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-[#0B3766] tracking-tight mt-1 mb-4">
            Privacy Policy
          </h1>
          <p className="text-sm text-slate-500">Last updated: October 2026</p>
        </div>

        <section className="space-y-4 text-sm leading-relaxed">
          <h2 className="text-xl font-bold text-[#0B3766]">1. Information We Collect</h2>
          <p>
            When you submit an enquiry on our website, we collect only the minimal personal contact information required to follow up on your requested financial product, including:
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Your full name</li>
            <li>Mobile phone number</li>
            <li>Email address</li>
            <li>City or location of residence</li>
            <li>Requested financial service or loan category</li>
          </ul>
          <p>
            We <strong>do not collect</strong> PAN card numbers, Aadhaar credentials, bank account passwords, or confidential tax documents through our public website contact form.
          </p>
        </section>

        <section className="space-y-4 text-sm leading-relaxed">
          <h2 className="text-xl font-bold text-[#0B3766]">2. How We Use Your Information</h2>
          <p>
            The information you provide is utilized solely to:
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Respond to your product enquiries and discuss loan eligibility parameters.</li>
            <li>Coordinate with accredited partner banks or NBFCs with your express consent.</li>
            <li>Ensure high-quality customer assistance and prevent spam submissions.</li>
          </ul>
        </section>

        <section className="space-y-4 text-sm leading-relaxed">
          <h2 className="text-xl font-bold text-[#0B3766]">3. Data Security and Sharing</h2>
          <p>
            We implement strict technical and organizational safeguards to protect your personal details against unauthorized access. We do not sell, rent, or trade your contact data to third-party telemarketers.
          </p>
        </section>

        <section className="space-y-4 text-sm leading-relaxed">
          <h2 className="text-xl font-bold text-[#0B3766]">4. Contact Our Privacy Officer</h2>
          <p>
            If you have questions regarding this privacy policy or wish to request data correction or deletion, please write to us at:
          </p>
          <p className="font-semibold text-slate-900">
            Sohum Fintech Solutions LLP<br />
            Email: <a href="mailto:info@sohumfintech.in" className="text-[#0B3766] underline">info@sohumfintech.in</a><br />
            Location: Noida, Uttar Pradesh, India
          </p>
        </section>
      </div>
    </div>
  );
}
