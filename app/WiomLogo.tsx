export default function WiomLogo({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-1.5 ${className}`}>
      <svg viewBox="0 0 100 60" width="36" height="22" aria-hidden="true">
        <circle cx="12" cy="9" r="3" fill="#ec0a7a" />
        <path
          fillRule="evenodd"
          fill="#ec0a7a"
          d="M47,30 A17,17 0 1,0 13,30 A17,17 0 1,0 47,30 Z
             M50,22 A14,14 0 1,0 22,22 A14,14 0 1,0 50,22 Z"
        />
        <path d="M40 33c7-8 15-8 22 0" fill="none" stroke="#ec0a7a" strokeWidth="3.5" strokeLinecap="round" />
        <path
          fillRule="evenodd"
          fill="#ec0a7a"
          d="M87,30 A17,17 0 1,1 53,30 A17,17 0 1,1 87,30 Z
             M78,38 A14,14 0 1,1 50,38 A14,14 0 1,1 78,38 Z"
        />
        <circle cx="88" cy="51" r="3" fill="#ec0a7a" />
      </svg>
      <span className="font-logo font-extrabold tracking-tight text-[#ec0a7a]">Wiom</span>
    </span>
  );
}
