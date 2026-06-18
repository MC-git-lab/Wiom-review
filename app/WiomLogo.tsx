export default function WiomLogo({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-1.5 ${className}`}>
      <svg viewBox="0 0 64 40" width="34" height="22" aria-hidden="true">
        <circle cx="9" cy="6" r="2.4" fill="#ec0a7a" />
        <path
          d="M22 13c-7 0-13 5.5-13 13s6 13 13 13c5 0 8.5-2.7 11-6"
          fill="none"
          stroke="#ec0a7a"
          strokeWidth="5.5"
          strokeLinecap="round"
        />
        <path
          d="M42 27c7 0 13-5.5 13-13S49 1 42 1c-5 0-8.5 2.7-11 6"
          fill="none"
          stroke="#ec0a7a"
          strokeWidth="5.5"
          strokeLinecap="round"
        />
        <circle cx="55" cy="34" r="2.4" fill="#ec0a7a" />
      </svg>
      <span className="font-logo font-extrabold tracking-tight text-[#ec0a7a]">Wiom</span>
    </span>
  );
}
