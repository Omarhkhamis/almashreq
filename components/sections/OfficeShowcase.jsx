import { assets } from "@/components/data";
import { SectionTag } from "@/components/ui/Logo";
import Image from "next/image";

export default function OfficeShowcase() {
  return (
    <section className="py-32 bg-stoneGray/20 border-t border-gray-200/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-6 relative" data-aos="fade-right">
            <div className="bg-white rounded-[2.5rem] p-4 shadow-aureo-deep overflow-hidden relative group border border-gray-200">
              <div className="h-96 rounded-[2rem] overflow-hidden bg-gray-50 relative">
                <Image src={assets.office} alt="مكتب إداري فخم ملحق" fill sizes="(min-width: 1024px) 576px, 100vw" className="object-cover" />
              </div>
              <div className="absolute bottom-10 right-10 left-10 bg-navy-950/90 backdrop-blur-md border border-white/10 p-6 rounded-2xl text-white font-madani">
                <h3 className="text-lg font-bold mb-1">مكتب إداري مدمج مجهز بالكامل</h3>
                <p className="text-xs text-gray-300">تصميم عملي بوجود مكتب خاص ودورة مياه مستقلة لخدمة الموظفين وإدارة المنشأة بخصوصية تامة.</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 font-madani" data-aos="fade-up" data-aos-delay="100">
            <div className="mb-10">
              <SectionTag>بيئة لوجستية متكاملة</SectionTag>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-navy-950 leading-[1.45] mb-6 balanced-text">
                بيئة عمل إدارية وصناعية متطورة لضمان كفاءة سلاسل التوريد
              </h2>
              <p className="text-gray-500 font-semibold text-base leading-[2] pretty-text">
                نلتزم في شركة المشرق للاستثمار بتقديم مستويات تجهيز فني متكاملة، تلبي تطلعات واشتراطات الشركات الكبرى من خلال دمج المكاتب الإدارية الأنيقة مباشرة داخل المنشأة التخزينية لتسهيل الأعمال وتسيير المهام اليومية بكفاءة تامة.
              </p>
            </div>

            <div className="space-y-6">
              <OfficeFeature icon="fa-users" title="تسهيل الإدارة الميدانية والتشغيل">
                تكامل المكاتب ودورة المياه المستقلة يزيد من انتاجية فريق العمل ويضمن رقابة ميدانية مستمرة على المخزون اللوجستي.
              </OfficeFeature>
              <OfficeFeature icon="fa-building-circle-check" title="تصاميم مطابقة للاشتراطات بالكامل">
                تراخيص معتمدة وحاضرة للدفاع المدني، وكود بناء سعودي يطابق كافة المتطلبات التنظيمية بمدينة الرياض لسلامة الأصول والأرواح.
              </OfficeFeature>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function OfficeFeature({ icon, title, children }) {
  return (
    <div className="flex items-start gap-4">
      <div className="w-14 h-14 rounded-2xl bg-gold/10 text-gold-dark border border-gold/10 flex items-center justify-center text-xl font-bold flex-shrink-0">
        <i className={`fa-solid ${icon}`} />
      </div>
      <div>
        <h4 className="font-bold text-navy-950 text-lg mb-1">{title}</h4>
        <p className="text-sm text-gray-500 font-semibold leading-relaxed">{children}</p>
      </div>
    </div>
  );
}
