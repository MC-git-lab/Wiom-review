import Image from "next/image";

export default function WiomLogo({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-1.5 ${className}`}>
      <Image src="/wiom-logo.png" alt="Wiom" width={24} height={24} />
      <span className="font-logo font-extrabold tracking-tight text-[#ec0a7a]">Wiom</span>
    </span>
  );
}
