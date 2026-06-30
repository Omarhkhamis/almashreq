import { assets } from "@/components/data";
import Image from "next/image";

export default function Logo({ footer = false }) {
  return (
    <div className="flex items-center gap-3">
      <div className="w-12 h-12 bg-white flex items-center justify-center p-0.5 rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        <Image src={assets.logo} alt="شعار المشرق" width={48} height={48} className="w-full h-full object-cover" />
      </div>
      {footer ? (
        <div className="font-bold text-2xl tracking-normal">
          المشرق <span className="text-gold">للاستثمار</span>
        </div>
      ) : (
        <div className="flex flex-col font-madani">
          <span className="font-bold text-2xl text-navy-950 leading-none mb-1">المشرق</span>
          <span className="text-[9px] text-gold font-bold uppercase leading-none">
            للاستثمار • <span className="tracking-widest inline-block">AL-MASHRIQ</span>
          </span>
        </div>
      )}
    </div>
  );
}

export function SectionTag({ children, className = "" }) {
  return (
    <span className={`text-gold font-bold bg-gold/10 px-4 py-2 rounded-full text-xs uppercase mb-4 inline-block ${className}`}>
      {children}
    </span>
  );
}
