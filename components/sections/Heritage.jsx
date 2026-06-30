import { assets } from "@/components/data";
import Image from "next/image";

const audience = ["أصحاب الشركات القائمة", "المستثمرون ورواد الأعمال", "مديرو العمليات واللوجستيات", "الموردون والموزعون"];

export default function Heritage() {
  return (
    <section id="heritage" className="py-32 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-5 font-madani order-first lg:order-last" data-aos="fade-up" data-aos-delay="100">
            <span className="text-gold font-bold uppercase text-xs mb-4 block">إرث وتطوير مستمر</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-navy-950 leading-[1.45] mb-6 balanced-text">
              مستودعك اللوجستي، <br />إرث أعمالك، صُمم ليبقى
            </h2>
            <p className="text-gray-500 font-semibold text-base leading-[2] mb-8 pretty-text">
              نؤمن في شركة المشرق للاستثمار بأن تأسيس منشأتك التخزينية في موقع استراتيجي هو حجر الأساس لنمو أعمالك التجارية. لذلك، دمجنا البنية الهندسية القوية مع تراخيص الدفاع المدني الفورية لتنعم بالموثوقية الكاملة والتشغيل المتواصل.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {audience.map((item) => (
                <div key={item} className="flex items-center gap-3 p-4 bg-[#F9FAF6] rounded-2xl border border-gray-100 hover:border-gold/30 hover:shadow-sm transition-all duration-300">
                  <span className="w-2.5 h-2.5 rounded-full bg-gold flex-shrink-0" />
                  <span className="font-bold text-xs sm:text-sm text-navy-950">{item}</span>
                </div>
              ))}
            </div>

            <div className="flex gap-4 mt-8">
              {[assets.suli, assets.aerial].map((src, index) => (
                <div key={src} className="w-1/2 rounded-2xl overflow-hidden shadow-aureo-soft bg-white p-2 border border-gray-100 group">
                  <div className="h-28 rounded-xl overflow-hidden bg-gray-50 relative">
                    <Image src={src} alt={index === 0 ? "مستودع السلي" : "منظومة سدوس المتكاملة"} fill sizes="(min-width: 640px) 260px, 50vw" className="object-cover img-zoom" />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-7 relative order-last lg:order-first" data-aos="fade-left" data-aos-delay="200">
            <div className="rounded-[2.5rem] overflow-hidden shadow-aureo-deep bg-white p-4 border border-gray-100 group">
              <div className="h-80 md:h-[500px] rounded-[2rem] overflow-hidden bg-gray-50 relative">
                <Image src={assets.docks} alt="منظومة لوجستية متكاملة" fill sizes="(min-width: 1024px) 672px, 100vw" className="object-cover img-zoom" />
              </div>
            </div>
            <div className="absolute -bottom-8 -right-8 bg-white border border-gray-100 shadow-aureo-deep p-6 rounded-3xl hidden md:flex items-center gap-4 max-w-xs font-madani z-10">
              <div className="w-12 h-12 rounded-2xl bg-gold/10 text-gold-dark flex items-center justify-center text-xl flex-shrink-0">
                <i className="fa-solid fa-award" />
              </div>
              <div>
                <h4 className="font-bold text-navy-950 text-sm">أعلى جودة تشييد وبناء</h4>
                <p className="text-[11px] text-gray-400 mt-1">كود البناء السعودي ومعايير هندسية معاصرة ومستدامة.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
