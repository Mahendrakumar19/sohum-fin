import React from "react";

/**
 * 1. STATE BANK OF INDIA (SBI)
 * Official Keyhole in blue circle with bold SBI typography
 */
export function LogoSBI({ className = "h-7" }: { className?: string }) {
  return (
    <svg viewBox="0 0 110 36" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      {/* Blue Circle Keyhole Logo */}
      <circle cx="18" cy="18" r="15" fill="#280071" />
      <circle cx="18" cy="18" r="14" fill="#0082c6" />
      {/* Keyhole notch */}
      <circle cx="18" cy="14.5" r="4.5" fill="#ffffff" />
      <rect x="16" y="14.5" width="4" height="17.5" fill="#ffffff" />
      {/* SBI Wordmark */}
      <text x="42" y="25" fill="#002f6c" fontSize="21" fontWeight="900" fontFamily="sans-serif" letterSpacing="1">
        SBI
      </text>
    </svg>
  );
}

/**
 * 2. HDFC BANK
 * Official Blue Square with Red Accent Bar and Distinct HDFC BANK typography
 */
export function LogoHDFC({ className = "h-7" }: { className?: string }) {
  return (
    <svg viewBox="0 0 160 36" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      {/* HDFC Iconic Square Grid Box */}
      <rect x="2" y="3" width="30" height="30" fill="#004c8f" rx="2" />
      <rect x="6" y="7" width="22" height="22" fill="#ffffff" />
      <rect x="12" y="13" width="10" height="10" fill="#004c8f" />
      <rect x="10" y="3" width="14" height="4" fill="#ed1c24" />
      <rect x="10" y="29" width="14" height="4" fill="#ed1c24" />
      <rect x="2" y="11" width="4" height="14" fill="#ed1c24" />
      <rect x="26" y="11" width="4" height="14" fill="#ed1c24" />
      {/* HDFC BANK Text */}
      <text x="38" y="24.5" fill="#004c8f" fontSize="17" fontWeight="900" fontFamily="sans-serif" letterSpacing="0.5">
        HDFC BANK
      </text>
    </svg>
  );
}

/**
 * 3. ICICI BANK
 * Official 'i' icon with maroon and orange brand text
 */
export function LogoICICI({ className = "h-7" }: { className?: string }) {
  return (
    <svg viewBox="0 0 155 36" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      {/* Iconic stylized 'i' in circle */}
      <circle cx="16" cy="18" r="14" fill="#f37e20" />
      <circle cx="16" cy="10" r="2.5" fill="#ffffff" />
      <path d="M14 15h4v11h-4z" fill="#ffffff" />
      {/* ICICI Bank Text */}
      <text x="36" y="24" fill="#a81c20" fontSize="18" fontWeight="800" fontFamily="sans-serif" letterSpacing="-0.3">
        ICICI <tspan fill="#f37e20">Bank</tspan>
      </text>
    </svg>
  );
}

/**
 * 4. AXIS BANK
 * Official Maroon Burgundy Triangle Peak with AXIS BANK typography
 */
export function LogoAxis({ className = "h-7" }: { className?: string }) {
  return (
    <svg viewBox="0 0 150 36" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      {/* Burgundy Triangular Monogram */}
      <path d="M4 29L19 5L26 16L17 29H4Z" fill="#97144d" />
      <path d="M22 29L31 16L34 21L29 29H22Z" fill="#97144d" />
      {/* AXIS BANK Text */}
      <text x="40" y="24" fill="#97144d" fontSize="17.5" fontWeight="900" fontFamily="sans-serif" letterSpacing="0.8">
        AXIS BANK
      </text>
    </svg>
  );
}

/**
 * 5. KOTAK MAHINDRA BANK
 * Official Red Circle with White Infinity Ribbon and 'kotak' typography
 */
export function LogoKotak({ className = "h-7" }: { className?: string }) {
  return (
    <svg viewBox="0 0 120 36" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      {/* Red circle with infinity ribbon symbol */}
      <circle cx="16" cy="18" r="14" fill="#ed1c24" />
      <path
        d="M10 20c-1.5-1.5-1.5-3.5 0-5s3.5-1.5 5 0l2 2 2-2c1.5-1.5 3.5-1.5 5 0s1.5 3.5 0 5-3.5 1.5-5 0l-2-2-2 2c-1.5 1.5-3.5 1.5-5 0z"
        stroke="#ffffff"
        strokeWidth="2.2"
        strokeLinecap="round"
        fill="none"
      />
      {/* kotak Text */}
      <text x="36" y="24" fill="#003366" fontSize="19" fontWeight="800" fontFamily="sans-serif" letterSpacing="-0.2">
        kotak
      </text>
    </svg>
  );
}

/**
 * 6. BAJAJ FINSERV
 * Official Deep Blue Bajaj 'B' Emblem with BAJAJ FINSERV typography
 */
export function LogoBajajFinserv({ className = "h-7" }: { className?: string }) {
  return (
    <svg viewBox="0 0 160 36" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      {/* Bajaj 'B' Wing Monogram */}
      <circle cx="16" cy="18" r="14" fill="#0072bc" />
      <path
        d="M12 10h6c3 0 5 1.5 5 4s-1.5 3.5-3.5 3.8c2.5.3 4.5 1.7 4.5 4.7 0 3-2.5 4.5-6 4.5h-6V10z"
        fill="#ffffff"
      />
      <circle cx="16" cy="14" r="1.5" fill="#0072bc" />
      <circle cx="16.5" cy="22" r="1.8" fill="#0072bc" />
      {/* BAJAJ FINSERV Text */}
      <text x="36" y="19" fill="#0072bc" fontSize="12" fontWeight="900" fontFamily="sans-serif" letterSpacing="0.8">
        BAJAJ
      </text>
      <text x="36" y="28" fill="#0072bc" fontSize="10.5" fontWeight="800" fontFamily="sans-serif" letterSpacing="1.2">
        FINSERV
      </text>
    </svg>
  );
}

/**
 * 7. LIC HOUSING FINANCE LTD
 * Official Golden Diya / Flame with Blue Two Hands and LIC HFL text
 */
export function LogoLICHFL({ className = "h-7" }: { className?: string }) {
  return (
    <svg viewBox="0 0 170 36" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      {/* LIC Diya Emblem */}
      <rect x="2" y="4" width="28" height="28" rx="6" fill="#fdb913" />
      {/* Blue flame / hands inside */}
      <path d="M16 8c-3 4-5 8-2 13 4-1 6-4 5-8-1-2-2-4-3-5z" fill="#005a9c" />
      <path d="M16 8c3 4 5 8 2 13-4-1-6-4-5-8 1-2 2-4 3-5z" fill="#002f6c" />
      <circle cx="16" cy="23" r="2" fill="#ffffff" />
      {/* LIC HFL Wordmark */}
      <text x="36" y="18" fill="#005a9c" fontSize="14" fontWeight="900" fontFamily="sans-serif" letterSpacing="0.5">
        LIC HFL
      </text>
      <text x="36" y="28" fill="#576F84" fontSize="7.5" fontWeight="700" fontFamily="sans-serif" letterSpacing="0.6">
        HOUSING FINANCE LTD
      </text>
    </svg>
  );
}
