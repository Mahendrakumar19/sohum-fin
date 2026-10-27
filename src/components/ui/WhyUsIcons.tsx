import React from "react";

// 1. Trusted Partnerships (Handshake with cuff)
export function IconWhyPartnerships({ className = "w-7 h-7" }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <path
        d="M7 19l6-6 7 5-4 4 5 5 8-8 6 6"
        stroke="#008272"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M12 24l3 3m4-4l4 4" stroke="#008272" strokeWidth="2.2" strokeLinecap="round" />
      <path d="M5 16l6 6m18-6l6 6" stroke="#008272" strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  );
}

// 2. Expert Guidance (Financial advisor avatar with badge)
export function IconWhyExpertGuidance({ className = "w-7 h-7" }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <circle cx="20" cy="13" r="6" stroke="#008272" strokeWidth="2.5" />
      <path
        d="M9 31c0-5 5-8 11-8s11 3 11 8"
        stroke="#008272"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <circle cx="27" cy="18" r="4" fill="#008272" stroke="#ffffff" strokeWidth="1.5" />
      <path d="M25.5 18l1 1 2-2" stroke="#ffffff" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

// 3. Quick & Hassle-Free Process (Lightning bolt)
export function IconWhyFastProcess({ className = "w-7 h-7" }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <path
        d="M22 6L11 21h8l-2 13 12-16h-8l3-12z"
        stroke="#008272"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

// 4. Transparent & Fair (Shield with checkmark)
export function IconWhyTransparent({ className = "w-7 h-7" }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <path
        d="M20 6l12 4.5v9c0 8-5.5 14.5-12 16.5-6.5-2-12-8.5-12-16.5v-9L20 6z"
        stroke="#008272"
        strokeWidth="2.5"
        strokeLinejoin="round"
      />
      <path
        d="M15 19.5l3.5 3.5 7-7"
        stroke="#008272"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

// 5. Local Presence (Map pin with inner circle)
export function IconWhyLocalPresence({ className = "w-7 h-7" }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <path
        d="M20 7c-6 0-11 5-11 11 0 8 11 17 11 17s11-9 11-17c0-6-5-11-11-11z"
        stroke="#008272"
        strokeWidth="2.5"
        strokeLinejoin="round"
      />
      <circle cx="20" cy="18" r="4" stroke="#008272" strokeWidth="2.2" />
    </svg>
  );
}
