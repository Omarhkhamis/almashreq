import { featureCards } from "@/components/data";

const heroStats = [
  ["489 م²", "بداية المساحات"],
  ["20,000 م²", "قابلية التوسع"],
  ["200A", "طاقة كهربائية"],
  ["فئة أ", "جاهزية السلامة"]
];

const operationSteps = [
  ["01", "اختيار الموقع", "السلي، المنصورية، سدوس"],
  ["02", "تجهيز المساحة", "مكتب إداري، دورة مياه، عزل متكامل"],
  ["03", "بدء التشغيل", "تراخيص وجاهزية فورية للأعمال"]
];

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex flex-col justify-between pt-44 pb-20 overflow-hidden hero-sky-gradient">
      <div className="absolute inset-0 z-0 opacity-[0.55]">
        <div className="absolute inset-0 bg-[linear-gradient(to_left,rgba(12,16,27,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(12,16,27,0.04)_1px,transparent_1px)] bg-[size:72px_72px]" />
        <div className="absolute inset-x-0 top-0 h-52 bg-gradient-to-b from-white/80 to-transparent" />
        <div className="absolute bottom-0 right-0 left-0 h-56 bg-gradient-to-t from-warmOffWhite to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full mt-6 mb-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          <div className="lg:col-span-7 text-right" data-aos="fade-up" data-aos-delay="100">
            <div className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-white/75 border border-skyAureo-200 text-gray-700 text-xs sm:text-sm font-bold mb-8 font-madani shadow-aureo-soft">
              <span>جاهزية فورية وأمان متكامل للتشغيل اللوجستي والمالي</span>
              <span className="w-2 h-2 rounded-full bg-gold" />
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-navy-950 leading-[1.35] mb-8 font-madani balanced-text">
              المساحات اللوجستية <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold via-gold-dark to-gold font-bold">الاستثنائية تبدأ هنا</span>
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl font-semibold leading-[2] font-madani mb-10 pretty-text">
              مساحات تخزين مطابقة للاشتراطات الفنية، مخصصة للتجار، أصحاب المتاجر الإلكترونية، والشركات الكبرى الساعية لتأمين سلاسل إمدادها بموثوقية كاملة.
            </p>

            <div className="flex flex-wrap gap-4 mb-12 font-madani">
              <a href="#register" className="bg-navy-950 hover:bg-gold text-white hover:text-navy-950 font-bold px-9 py-4 rounded-full transition duration-300 shadow-md text-sm sm:text-base">
                <span>احجز جولتك الميدانية الآن</span>
              </a>
              <a href="#locations" className="bg-white hover:bg-gray-50 border border-gray-200 text-navy-950 font-bold px-9 py-4 rounded-full transition duration-300 text-sm sm:text-base shadow-sm">
                <span>اكتشف مستودعاتنا اللوجستية</span>
              </a>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 font-madani">
              {heroStats.map(([value, label]) => (
                <div key={label} className="bg-white/80 border border-white shadow-aureo-soft rounded-2xl px-4 py-5">
                  <div className="text-2xl sm:text-3xl font-bold text-navy-950 brand-title leading-none">{value}</div>
                  <div className="text-[11px] sm:text-xs font-bold text-gray-500 mt-2">{label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5" data-aos="fade-right" data-aos-delay="220">
            <div className="relative bg-navy-950 text-white rounded-[2rem] p-6 sm:p-8 shadow-aureo-deep overflow-hidden border border-white/10">
              <div className="absolute inset-0 opacity-20 bg-[linear-gradient(to_left,rgba(255,255,255,0.14)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.10)_1px,transparent_1px)] bg-[size:38px_38px]" />
              <div className="relative z-10">
                <div className="flex items-start justify-between gap-6 mb-10">
                  <div>
                    <p className="text-xs font-bold text-gold mb-2">ملخص التشغيل</p>
                    <h2 className="text-2xl sm:text-3xl font-bold leading-[1.45]">من اختيار المساحة إلى بدء العمل</h2>
                  </div>
                  <div className="w-16 h-16 rounded-2xl bg-white/10 border border-white/10 flex items-center justify-center text-gold text-2xl flex-shrink-0">
                    <i className="fa-solid fa-warehouse" />
                  </div>
                </div>

                <div className="space-y-4">
                  {operationSteps.map(([num, title, desc]) => (
                    <div key={num} className="grid grid-cols-[44px_1fr] gap-4 items-start border-t border-white/10 pt-4">
                      <div className="w-11 h-11 rounded-xl bg-gold text-navy-950 flex items-center justify-center font-bold brand-title">{num}</div>
                      <div>
                        <h3 className="font-bold text-white text-base">{title}</h3>
                        <p className="text-xs sm:text-sm text-gray-300 leading-[1.9] mt-1">{desc}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-8 rounded-2xl bg-white/8 border border-white/10 p-5 flex items-center justify-between gap-4">
                  <div>
                    <p className="text-[11px] text-gray-400 font-bold">جاهزية تشغيلية</p>
                    <p className="text-lg font-bold text-white">فورية ومطابقة للاشتراطات</p>
                  </div>
                  <div className="w-14 h-14 rounded-full border-4 border-gold flex items-center justify-center text-gold font-bold brand-title">100</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 mt-20 relative z-20 font-madani" data-aos="fade-up" data-aos-delay="400">
          {featureCards.map(([icon, title, text]) => (
            <div key={title} className="bg-white/90 border border-gray-100 p-6 rounded-2xl flex items-start gap-4 hover:border-gold/30 hover:shadow-aureo-soft transition duration-300">
              <div className="text-gold text-2xl mt-1"><i className={`fa-solid ${icon}`} /></div>
              <div>
                <h4 className="text-navy-950 font-bold text-sm mb-1">{title}</h4>
                <p className="text-[11px] text-gray-500 leading-relaxed mt-0.5">{text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
