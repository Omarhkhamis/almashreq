import { assets } from "@/components/data";
import Image from "next/image";

export default function VideoModal({ open, onClose }) {
  return (
    <div className={`fixed inset-0 z-50 flex items-center justify-center bg-navy-950/90 backdrop-blur-md p-4 transition-all duration-500 ${open ? "opacity-100" : "opacity-0 pointer-events-none"}`} aria-hidden={!open}>
      <div className="bg-white rounded-[2rem] overflow-hidden max-w-4xl w-full border border-skyAureo-200 shadow-aureo-deep relative p-3">
        <button type="button" onClick={onClose} className="absolute top-6 left-6 w-10 h-10 bg-navy-950 text-white hover:bg-gold hover:text-navy-950 rounded-full flex items-center justify-center text-sm shadow-md transition duration-300 z-10 cursor-pointer" aria-label="إغلاق العرض">
          <i className="fa-solid fa-xmark" />
        </button>
        <div className="relative rounded-2xl overflow-hidden aspect-video bg-gray-900">
          <Image src={assets.docks} alt="فيديو تشغيلي معتمد" fill sizes="(min-width: 1024px) 896px, 100vw" className="object-cover" />
          <div className="absolute inset-0 bg-navy-950/40 flex flex-col items-center justify-center text-center p-8 font-madani">
            <div className="w-16 h-16 bg-gold text-white rounded-full flex items-center justify-center text-xl animate-ping mb-6">
              <i className="fa-solid fa-circle-play" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">عرض حي للمستودعات الجاهزة</h3>
            <p className="text-sm text-gray-300 max-w-md">شاهد البنية التحتية المتكاملة، وأنظمة الدفاع المدني، وجودة البناء عن قرب.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export function WhatsAppButton() {
  return (
    <a href="https://wa.me/966920015243" target="_blank" rel="noreferrer" className="fixed bottom-16 left-6 z-50 bg-[#25D366]/70 text-white w-14 h-14 rounded-full flex items-center justify-center text-2xl shadow-[0_10px_30px_rgba(37,211,102,0.28)] hover:scale-110 hover:bg-[#25D366]/90 transition-all duration-300 border-2 border-white/90 cursor-pointer backdrop-blur-sm" aria-label="تواصل عبر واتساب">
      <i className="fa-brands fa-whatsapp" />
    </a>
  );
}
