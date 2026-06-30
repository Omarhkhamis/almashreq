import { assets } from "@/components/data";
import { SectionTag } from "@/components/ui/Logo";
import Image from "next/image";

const testimonials = [
  {
    num: "01",
    text: '"تجربتنا مع مستودعات المشرق في السلي كانت ممتازة. الجاهزية الفورية والتراخيص الكاملة للدفاع المدني وفرت علينا الكثير من الوقت والجهد لبدء عملياتنا اللوجستية وتوسعنا المتسارع."',
    initial: "م",
    name: "محمد العبدالله",
    role: "مدير عمليات - شركة تجزئة"
  },
  {
    num: "02",
    text: '"البنية التحتية للمواقع مهيأة ومطابقة بدقة، الكهرباء العالية وقدرة الأبواب الكهربائية ساهمت في تنظيم وتفريغ الشحنات بسلاسة مطلقة وبدون أي عقبات."',
    initial: "ش",
    name: "شركة التوزيع المتكاملة",
    role: "شريك لوجستي - فرع جنوب الرياض"
  }
];

const questions = [
  ["هل المستودعات مرخصة بالكامل من الدفاع المدني؟", "نعم، جميع مستودعاتنا في كافة المواقع مرخصة بالكامل ومطابقة لاشتراطات الدفاع المدني ومتوافقة بشكل تام مع الكود السعودي للبناء لمنحك أقصى درجات الأمان الممكنة."],
  ["ما هي أقل مساحة متوفرة للاستئجار؟", "نوفر مساحات تخزينية مرنة جداً تبدأ من مساحات متوسطة بحجم 489 متر مربع وتصل إلى مساحات عملاقة تزيد عن 20,000 متر مربع لتلبي متطلبات نمو منشأتك."],
  ["هل يوجد مكاتب إدارية ودورة مياه مستقلة؟", "نعم، نحرص في كافة مواقعنا على تقديم تصميم عملي مميز يتضمن مكتباً إدارياً مجهزاً ومستقلاً بالإضافة إلى دورة مياه خاصة لخدمة فريق العمل والإدارة بكفاءة."]
];

export default function FaqTestimonials() {
  return (
    <section id="faq" className="py-32 bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-5 font-madani" data-aos="fade-up">
            <SectionTag>شركاء النجاح</SectionTag>
            <h2 className="text-3xl font-bold text-navy-950 mb-12">آراء عملاء حاليين</h2>

            <div className="space-y-6">
              {testimonials.map((item, index) => (
                <div key={item.num} className="bg-warmOffWhite p-8 rounded-3xl border border-gray-100 relative shadow-aureo-soft" data-aos="fade-up" data-aos-delay={(index + 1) * 100}>
                  <div className="absolute top-4 left-8 font-black text-6xl text-gold/10 select-none brand-title">{item.num}</div>
                  <div className="text-gold text-sm mb-4">
                    <i className="fa-solid fa-star" /><i className="fa-solid fa-star" /><i className="fa-solid fa-star" /><i className="fa-solid fa-star" /><i className="fa-solid fa-star" />
                  </div>
                  <p className="text-gray-600 font-semibold text-base leading-relaxed mb-6">{item.text}</p>
                  <div className="flex items-center gap-4 pt-4 border-t border-gray-100">
                    <div className="w-10 h-10 bg-navy-950 text-gold font-bold flex items-center justify-center rounded-xl">{item.initial}</div>
                    <div>
                      <h4 className="font-bold text-navy-950 text-sm">{item.name}</h4>
                      <p className="text-xs text-gray-400 font-semibold">{item.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-7 font-madani" data-aos="fade-up" data-aos-delay="100">
            <SectionTag>الاستفسارات والتعليمات</SectionTag>
            <h2 className="text-3xl font-bold text-navy-950 mb-12 border-r-4 border-gold pr-4">الأسئلة الشائعة</h2>

            <div className="space-y-4">
              {questions.map(([question, answer], index) => (
                <details key={question} className="bg-white border border-gray-200 rounded-2xl overflow-hidden group shadow-sm transition-all duration-300" open={index === 0}>
                  <summary className="font-bold text-navy-950 text-base sm:text-lg px-6 py-5 cursor-pointer flex justify-between items-center bg-warmOffWhite group-open:bg-navy-950 group-open:text-white transition-all duration-300 select-none">
                    <span>{question}</span>
                    <i className="fa-solid fa-chevron-down transform group-open:rotate-180 transition-transform duration-300 text-gold" />
                  </summary>
                  <div className="px-6 py-5 text-gray-500 font-semibold leading-relaxed border-t border-gray-200 bg-warmOffWhite/40">{answer}</div>
                </details>
              ))}
            </div>

            <div className="h-64 rounded-[2.5rem] overflow-hidden shadow-aureo-deep mt-10 relative border border-gray-200">
              <Image src={assets.aerial} fill sizes="(min-width: 1024px) 672px, 100vw" className="object-cover" alt="تنظيم المستودعات الفني" />
              <div className="absolute inset-0 bg-[#0c101b]/10" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
