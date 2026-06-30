import { SectionTag } from "@/components/ui/Logo";

const packages = [
  {
    label: "الشركات والناشئة",
    size: "من 489 م²",
    title: "باقة المساحات المرنة",
    desc: "مثالية للمتاجر الإلكترونية والشركات الناشئة التي تحتاج تشغيل فوري مع مرونة للتوسع لاحقاً.",
    features: ["مكتب إداري مدمج مجهز بالكامل", "دورة مياه خاصة في المستودع", "عزل حراري ومائي ممتاز", "أبواب كهربائية أوتوماتيكية"],
    cta: "طلب عرض أسعار"
  },
  {
    label: "الشركات الكبرى",
    size: "حتى 5,000 م²",
    title: "باقة الامتياز اللوجستي",
    desc: "مخصصة للشركات والموردين الكبار مع قدرة عالية للتخزين والتوزيع وانسيابية كاملة للحركة.",
    features: ["طاقة كهربائية تصل لـ 200 أمبير", "صبة خرسانية تتحمل الشاحنات الثقيلة", "تراخيص كاملة من الدفاع المدني", "مكاتب إدارية ملحقة واسعة"],
    cta: "اطلب هذه الباقة الآن",
    featured: true
  },
  {
    label: "المستودعات العملاقة",
    size: "حتى 20,000 م²",
    title: "الباقة الصناعية الكبرى",
    desc: "مساحات تخزين عملاقة للتوزيع الإقليمي وسلاسل التوريد الكبرى بأنظمة تحكم وسلامة متطورة.",
    features: ["مساحات مفتوحة تصل إلى 20 ألف م²", "أبواب تشغيلية وتفريغ متعددة", "مطابقة متكاملة للكود السعودي", "غرف تحكم ومكتب إداري رئيسي"],
    cta: "طلب عرض أسعار مخصص"
  }
];

const services = [
  ["fa-map-location-dot", "شراء وبيع الأراضي", "خبرة واسعة في عمليات الاستثمار العقاري والتبادل المالي الذكي للأراضي والعقارات بالرياض."],
  ["fa-handshake", "الوساطة العقارية", "ربط متطور واحترافي بين رغبات المستثمرين والمطورين لتحقيق أعلى عوائد ربحية وعملية."],
  ["fa-warehouse", "إدارة وتأجير المستودعات", "تشغيل وإدارة المستودعات والمخازن التجارية والعقارية ومطابقتها للمعايير والأنظمة الأمنية واللوجستية."],
  ["fa-city", "التطوير العقاري", "تخطيط وتأسيس وبناء للمشاريع السكنية والتجارية والصناعية بمعايير هندسية معاصرة ومستدامة."],
  ["fa-folder-tree", "إدارة الأملاك", "رعاية وافية ومتكاملة لشؤون العقار والمتابعة التنظيمية والمالية مع كافة الجهات ذات العلاقة."]
];

export default function Services() {
  return (
    <section id="services" className="py-32 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 font-madani">
        <div className="text-center max-w-4xl mx-auto mb-20" data-aos="fade-up">
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#FAFDFE] border border-gray-150 text-gold font-bold text-xs uppercase mb-4">خيارات مرنة ومدروسة</div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-navy-950 leading-[1.55] mb-6 balanced-text">
            تفاصيل المساحات والخدمات (تبدأ من ٤٨٩ م² إلى ٢٠,٠٠٠ م²)
          </h2>
          <p className="text-gray-500 font-semibold text-base sm:text-lg max-w-3xl mx-auto leading-[2] pretty-text">
            نوفر مستودعات حديثة مجهزة بأعلى معايير الأمان والسلامة مع أنظمة تحكم متقدمة تضمن سهولة إدارة المخزون ورفع كفاءة التشغيل وتقليل التكاليف. خياراتنا مرنة لتناسب احتياجات الشركات الناشئة والكبيرة.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-24">
          {packages.map((item, index) => (
            <div key={item.title} className={`${item.featured ? "bg-white border-2 border-gold relative shadow-aureo-deep" : "bg-stoneGray/20 border border-gray-100 hover:shadow-aureo-deep"} rounded-[2.5rem] p-8 sm:p-10 flex flex-col justify-between transition duration-300`} data-aos="fade-up" data-aos-delay={(index + 1) * 100}>
              {item.featured && <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gold text-white font-bold px-6 py-2 rounded-full text-[10px] uppercase shadow-md">الخيار الأكثر طلباً</div>}
              <div>
                <div className="flex justify-between items-center mb-6 gap-3">
                  <span className={`px-4 py-1.5 font-bold text-xs rounded-full ${item.featured ? "bg-gold/10 text-gold" : "bg-navy-950 text-white"}`}>{item.label}</span>
                  <span className="text-gold font-bold text-lg brand-title">{item.size}</span>
                </div>
                <h3 className="text-2xl font-bold text-navy-950 mb-4">{item.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-6">{item.desc}</p>
                <div className={`${item.featured ? "border-t border-gray-100" : "border-t border-gray-200/50"} pt-6`}>
                  <ul className="space-y-4 text-sm text-gray-700 font-bold mb-8">
                    {item.features.map((feature) => (
                      <li key={feature}><i className="fa-solid fa-check text-gold ml-2" /> {feature}</li>
                    ))}
                  </ul>
                </div>
              </div>
              <a href="#register" className={`w-full py-4 text-center rounded-2xl font-bold transition duration-300 ${item.featured ? "bg-gold text-navy-950 hover:bg-navy-950 hover:text-white shadow-gold-glow" : "bg-navy-950 text-white hover:bg-gold hover:text-navy-950"}`}>{item.cta}</a>
            </div>
          ))}
        </div>

        <div className="pt-24 border-t border-gray-100" data-aos="fade-up">
          <div className="text-center mb-16">
            <SectionTag>خدماتنا الشاملة في قطاع الاستثمار العقاري</SectionTag>
            <h3 className="text-3xl font-bold text-navy-950">نظام لوجستي واستثماري متكامل</h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {services.map(([icon, title, text]) => (
              <div key={title} className="bg-warmOffWhite p-8 rounded-3xl border border-gray-100 text-center hover:border-gold/30 hover:shadow-aureo-soft transition-all duration-300">
                <div className="w-14 h-14 bg-gold/10 text-gold-dark rounded-2xl flex items-center justify-center mx-auto mb-6 text-2xl">
                  <i className={`fa-solid ${icon}`} />
                </div>
                <h4 className="font-bold text-navy-950 text-base mb-3">{title}</h4>
                <p className="text-xs text-gray-500 leading-relaxed">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
