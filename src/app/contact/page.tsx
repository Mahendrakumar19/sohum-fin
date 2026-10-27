import type { Metadata } from "next";
import { Suspense } from "react";
import ContactForm from "@/components/forms/ContactForm";
import { Phone, Mail, MapPin, Clock, MessageSquare } from "lucide-react";
import { COMPANY_CONTACT } from "@/content/siteData";

export const metadata: Metadata = {
  title: "Contact Us | Sohum Fintech Solutions LLP",
  description:
    "Get in touch with Sohum Fintech Solutions LLP for loan eligibility checks, investment discussions, or general inquiries in Noida & Delhi NCR.",
};

export default function ContactPage({
  searchParams,
}: {
  searchParams: Promise<{ service?: string; amount?: string }>;
}) {
  return (
    <div className="py-12 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-[#168653]">
            Dedicated Support
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-[#0B3766] tracking-tight">
            Let&apos;s Discuss Your Financial Goals
          </h1>
          <p className="text-base text-slate-600">
            Reach out via phone, email, or fill out our brief enquiry form. A dedicated loan or investment advisor will assist you promptly.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Contact Details Card */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-gradient-to-br from-[#06284B] to-[#0B3766] rounded-3xl p-8 text-white shadow-xl">
              <h2 className="text-2xl font-bold mb-6">Contact Channels</h2>

              <div className="space-y-6 text-sm">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-emerald-400" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-400 block font-semibold uppercase tracking-wider">
                      Operating Location
                    </span>
                    <span className="font-semibold text-white mt-1 block">
                      {COMPANY_CONTACT.location}
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 text-emerald-400" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-400 block font-semibold uppercase tracking-wider">
                      Customer Care Phone
                    </span>
                    <a
                      href={`tel:${COMPANY_CONTACT.phone.replace(/\s+/g, "")}`}
                      className="font-bold text-lg text-emerald-300 hover:underline mt-0.5 block"
                    >
                      {COMPANY_CONTACT.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5 text-emerald-400" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-400 block font-semibold uppercase tracking-wider">
                      Official Inquiries
                    </span>
                    <a
                      href={`mailto:${COMPANY_CONTACT.email}`}
                      className="font-semibold text-white hover:underline mt-0.5 block"
                    >
                      {COMPANY_CONTACT.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5 text-emerald-400" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-400 block font-semibold uppercase tracking-wider">
                      Working Hours
                    </span>
                    <span className="text-slate-200 mt-0.5 block">
                      {COMPANY_CONTACT.hours}
                    </span>
                  </div>
                </div>
              </div>

              {/* WhatsApp direct CTA */}
              <div className="mt-8 pt-6 border-t border-white/10">
                <a
                  href={`https://wa.me/${COMPANY_CONTACT.whatsapp.replace(/\+/g, "")}?text=Hello%20Sohum%20Fintech%20Solutions%2C%20I%20would%20like%20to%20inquire%20about%20your%20services.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold py-3 rounded-xl transition text-sm shadow"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Chat with Us on WhatsApp</span>
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form with Suspense Boundary for searchParams */}
          <div className="lg:col-span-7">
            <Suspense fallback={<div className="p-8 text-center bg-white rounded-2xl">Loading form...</div>}>
              <ContactFormWithParams searchParams={searchParams} />
            </Suspense>
          </div>
        </div>
      </div>
    </div>
  );
}

async function ContactFormWithParams({
  searchParams,
}: {
  searchParams: Promise<{ service?: string; amount?: string }>;
}) {
  const resolved = await searchParams;
  return (
    <ContactForm
      preselectedService={resolved.service}
      preselectedAmount={resolved.amount}
    />
  );
}
