import React from "react";

// ==========================================
// 1. HERO ICONS (Teal/Green line art with rounded details)
// ==========================================

export function IconHeroWealth({ className = "w-7 h-7" }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      {/* Coin stack with small plant sprouting on top */}
      <ellipse cx="24" cy="38" rx="14" ry="5" stroke="#168653" strokeWidth="2.5" />
      <path d="M10 38v-8c0 2.76 6.27 5 14 5s14-2.24 14-5v8" stroke="#168653" strokeWidth="2.5" />
      <path d="M10 30v-8c0 2.76 6.27 5 14 5s14-2.24 14-5v8" stroke="#168653" strokeWidth="2.5" />
      <ellipse cx="24" cy="22" rx="14" ry="5" stroke="#168653" strokeWidth="2.5" />
      {/* Sprout emerging */}
      <path d="M24 22V12" stroke="#168653" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M24 16c-3-4-8-3-9 2 4 1 8-1 9-2z" fill="#168653" stroke="#168653" strokeWidth="1" />
      <path d="M24 13c3-4 8-3 9 2-4 1-8-1-9-2z" fill="#168653" stroke="#168653" strokeWidth="1" />
    </svg>
  );
}

export function IconHeroFinancialSecurity({ className = "w-7 h-7" }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      {/* Shield with inner lock / keyhole */}
      <path
        d="M24 6l14 5v11c0 9.5-6.5 17.5-14 20-7.5-2.5-14-10.5-14-20V11l14-5z"
        stroke="#168653"
        strokeWidth="2.5"
        strokeLinejoin="round"
      />
      {/* Lock symbol inside */}
      <rect x="18" y="22" width="12" height="9" rx="2" stroke="#168653" strokeWidth="2.2" />
      <path d="M21 22v-3a3 3 0 0 1 6 0v3" stroke="#168653" strokeWidth="2.2" strokeLinecap="round" />
      <circle cx="24" cy="26.5" r="1" fill="#168653" />
    </svg>
  );
}

export function IconHeroTrustedPartnerships({ className = "w-7 h-7" }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      {/* Handshake line outline */}
      <path
        d="M10 22l6-6 7 5-4 4 5 5 8-8 6 6"
        stroke="#168653"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16 28l4 4m4-4l4 4m-12-8l3 3"
        stroke="#168653"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <path
        d="M6 18l7 7m19-7l10 10-6 6-6-6"
        stroke="#168653"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function IconHeroCustomerFirst({ className = "w-7 h-7" }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      {/* Friendly customer figure with heart / star star priority */}
      <circle cx="24" cy="15" r="7" stroke="#168653" strokeWidth="2.5" />
      <path
        d="M10 39c0-6.5 6.5-10 14-10s14 3.5 14 10"
        stroke="#168653"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      {/* Heart badge */}
      <path
        d="M34 18c-1.5-2-4 0-4 1.5 0 2 4 4.5 4 4.5s4-2.5 4-4.5c0-1.5-2.5-3.5-4-1.5z"
        fill="#168653"
      />
    </svg>
  );
}

// ==========================================
// 2. INVESTMENTS SECTION ICONS
// ==========================================

export function IconInvestMutualFunds({ className = "w-7 h-7" }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      {/* Three coin layers with double plant sprout */}
      <ellipse cx="18" cy="34" rx="10" ry="4" stroke="#168653" strokeWidth="2.5" />
      <ellipse cx="28" cy="38" rx="10" ry="4" stroke="#168653" strokeWidth="2.5" />
      <path d="M18 34V22" stroke="#168653" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M18 24c-4-4-9-2-9 4 4 1 8-1 9-4z" fill="#168653" />
      <path d="M18 20c4-4 9-2 9 4-4 1-8-1-9-4z" fill="#168653" />
      <circle cx="34" cy="18" r="4" stroke="#168653" strokeWidth="2" strokeDasharray="2 2" />
    </svg>
  );
}

export function IconInvestStocks({ className = "w-7 h-7" }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      {/* Rising zigzag growth chart with arrow */}
      <path
        d="M8 38h32M10 32l9-12 8 8 13-16"
        stroke="#168653"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M33 12h7v7" stroke="#168653" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function IconInvestInsurance({ className = "w-7 h-7" }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      {/* Shield with Rupee symbol inside */}
      <path
        d="M24 6l14 5v11c0 9.5-6.5 17.5-14 20-7.5-2.5-14-10.5-14-20V11l14-5z"
        stroke="#168653"
        strokeWidth="2.5"
        strokeLinejoin="round"
      />
      <text
        x="24"
        y="28"
        textAnchor="middle"
        fontSize="17"
        fontWeight="bold"
        fill="#168653"
        fontFamily="sans-serif"
      >
        ₹
      </text>
    </svg>
  );
}

// ==========================================
// 3. LOAN SECTION ICONS (Teal outlines with inner symbols)
// ==========================================

export function IconLoanHome({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      {/* House outline with chimney and Rupee sign inside */}
      <path d="M20 7L6 18h4v15h20V18h4L20 7z" stroke="#008080" strokeWidth="2.2" strokeLinejoin="round" />
      <path d="M26 10v-3h-3v.5" stroke="#008080" strokeWidth="2" strokeLinecap="round" />
      <text x="20" y="27" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#008080">₹</text>
    </svg>
  );
}

export function IconLoanLAP({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      {/* House + Office building outline */}
      <path d="M16 9L5 18h3v15h16V18h3L16 9z" stroke="#008080" strokeWidth="2.2" strokeLinejoin="round" />
      <path d="M24 15h9v18h-9" stroke="#008080" strokeWidth="2.2" strokeLinejoin="round" />
      <rect x="27" y="19" width="3" height="3" fill="#008080" />
      <rect x="27" y="25" width="3" height="3" fill="#008080" />
      <text x="13" y="27" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#008080">₹</text>
    </svg>
  );
}

export function IconLoanVehicle({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      {/* Front facing car */}
      <path
        d="M9 19l3-8h16l3 8v10h-3v-2H12v2H9V19z"
        stroke="#008080"
        strokeWidth="2.2"
        strokeLinejoin="round"
      />
      <circle cx="14" cy="22" r="2" fill="#008080" />
      <circle cx="26" cy="22" r="2" fill="#008080" />
      <path d="M12 18h16" stroke="#008080" strokeWidth="1.8" />
    </svg>
  );
}

export function IconLoanBusiness({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      {/* Briefcase with handle */}
      <rect x="7" y="14" width="26" height="18" rx="3" stroke="#008080" strokeWidth="2.2" />
      <path d="M15 14V10a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v4" stroke="#008080" strokeWidth="2.2" />
      <path d="M7 21h26" stroke="#008080" strokeWidth="1.8" />
      <rect x="18" y="19" width="4" height="4" rx="1" fill="#008080" />
    </svg>
  );
}

export function IconLoanProjectFinancing({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      {/* High-rise building blueprint */}
      <rect x="13" y="7" width="14" height="26" rx="1.5" stroke="#008080" strokeWidth="2.2" />
      <path d="M7 33h26" stroke="#008080" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="17" y1="12" x2="19" y2="12" stroke="#008080" strokeWidth="2" strokeLinecap="round" />
      <line x1="21" y1="12" x2="23" y2="12" stroke="#008080" strokeWidth="2" strokeLinecap="round" />
      <line x1="17" y1="17" x2="19" y2="17" stroke="#008080" strokeWidth="2" strokeLinecap="round" />
      <line x1="21" y1="17" x2="23" y2="17" stroke="#008080" strokeWidth="2" strokeLinecap="round" />
      <line x1="17" y1="22" x2="19" y2="22" stroke="#008080" strokeWidth="2" strokeLinecap="round" />
      <line x1="21" y1="22" x2="23" y2="22" stroke="#008080" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

export function IconLoanPersonal({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      {/* Person bust outline */}
      <circle cx="20" cy="13" r="6" stroke="#008080" strokeWidth="2.2" />
      <path
        d="M9 32c0-5.5 5-9 11-9s11 3.5 11 9"
        stroke="#008080"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function IconLoanEducation({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      {/* Graduation mortarboard cap with tassel */}
      <path d="M20 9L6 17l14 8 14-8-14-8z" stroke="#008080" strokeWidth="2.2" strokeLinejoin="round" />
      <path d="M11 20.5v8c0 3 4 5.5 9 5.5s9-2.5 9-5.5v-8" stroke="#008080" strokeWidth="2.2" />
      <path d="M30 19v10" stroke="#008080" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}
