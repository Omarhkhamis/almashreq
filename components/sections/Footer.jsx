import { maps } from "@/components/data";
import Logo from "@/components/ui/Logo";

export default function Footer() {
  return (
    <footer className="bg-navy-950 text-white border-t border-white/5 pt-24 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 mb-16 items-start">
          <div className="lg:col-span-5 font-madani text-right">
            <div className="mb-6">
              <Logo footer />
            </div>
            <p className="text-gray-400 text-sm sm:text-base font-semibold leading-[2.05] mb-8 max-w-xl pretty-text">
              شركة المشرق للاستثمار هي رائدتكم لتوفير أرقى المساحات اللوجستية والتخزينية الجاهزة والمطابقة لأعلى مواصفات البناء والأمان في مواقع حيوية واستراتيجية بمدينة الرياض لخدمة مختلف القطاعات التجارية والصناعية.
            </p>
            <div className="space-y-4 text-sm sm:text-base text-gray-200 font-bold">
              <a href="tel:920015243" className="flex items-center justify-end gap-3 hover:text-gold transition-colors" dir="ltr">
                <span>920015243</span>
                <i className="fa-solid fa-phone text-gold" />
              </a>
              <a href="mailto:info@almashraq-sa.com" className="flex items-center justify-end gap-3 hover:text-gold transition-colors" dir="ltr">
                <span>info@almashraq-sa.com</span>
                <i className="fa-solid fa-envelope text-gold" />
              </a>
            </div>

            <div className="flex items-center gap-3 mt-8">
              <a href="#" className="w-11 h-11 rounded-full border border-white/10 bg-white/5 text-gray-300 hover:text-navy-950 hover:bg-gold hover:border-gold transition-all duration-300 flex items-center justify-center" aria-label="تويتر">
                <i className="fa-brands fa-x-twitter" />
              </a>
              <a href="#" className="w-11 h-11 rounded-full border border-white/10 bg-white/5 text-gray-300 hover:text-navy-950 hover:bg-gold hover:border-gold transition-all duration-300 flex items-center justify-center" aria-label="انستجرام">
                <i className="fa-brands fa-instagram" />
              </a>
              <a href="#" className="w-11 h-11 rounded-full border border-white/10 bg-white/5 text-gray-300 hover:text-navy-950 hover:bg-gold hover:border-gold transition-all duration-300 flex items-center justify-center" aria-label="لينكد إن">
                <i className="fa-brands fa-linkedin-in" />
              </a>
            </div>
          </div>

          <div className="lg:col-span-7 w-full font-madani">
            <h4 className="text-xl sm:text-2xl font-bold text-white mb-8 border-l-4 border-gold pl-4 text-left">خريطة الموقع والوصول والفرع الرئيسي</h4>
            <div className="w-full h-64 sm:h-72 bg-gray-900 rounded-[2rem] overflow-hidden border border-white/10 shadow-inner relative group">
              <iframe title="خريطة الموقع والوصول والفرع الرئيسي" src={maps.suli} width="100%" height="100%" style={{ border: 0, filter: "grayscale(1) invert(0.9) contrast(1.2)" }} allowFullScreen loading="lazy" />
            </div>
          </div>
        </div>

        <div className="flex justify-center items-center pt-8 border-t border-white/5 text-xs sm:text-sm text-gray-500 font-bold font-madani text-center" dir="rtl">
          <p>© 2026 شركة المشرق للاستثمار. جميع الحقوق محفوظة.</p>
        </div>
      </div>
    </footer>
  );
}
