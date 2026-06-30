import { SectionTag } from "@/components/ui/Logo";

export default function Register({ submitted, submitting, onSubmit }) {
  return (
    <section id="register" className="py-32 bg-stoneGray/20 border-t border-gray-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-[3rem] p-8 sm:p-12 md:p-16 flex flex-col lg:flex-row items-center gap-12 shadow-aureo-deep border border-gray-200/50 relative overflow-hidden" data-aos="zoom-in">
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-gold/5 rounded-full blur-[100px]" />

          <div className="lg:w-1/2 text-navy-950 font-madani">
            <SectionTag>الشركاء والمستثمرون</SectionTag>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 leading-[1.45] text-navy-950 font-madani balanced-text">ابدأ أعمالك اللوجستية بأمان واحترافية متناهية</h2>
            <p className="text-gray-500 font-semibold text-sm sm:text-base leading-[2] mb-10 pretty-text">
              سجل اهتمامك الآن عبر النموذج وسيقوم مستشارنا العقاري بالتواصل معك فوراً لترتيب جولة ميدانية واختيار المساحة والموقع المثالي لمشروعك اللوجستي أو الاستثماري.
            </p>

            <div className="flex items-center gap-4 text-navy-950 font-bold">
              <div className="w-14 h-14 bg-navy-950 text-gold flex items-center justify-center text-2xl rounded-2xl shadow-md">
                <i className="fa-brands fa-whatsapp" />
              </div>
              <div>
                <p className="text-xs text-gray-400">تواصل مباشر وسريع</p>
                <p className="text-xl brand-title" dir="ltr">920015243</p>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2 w-full bg-warmOffWhite p-6 sm:p-10 rounded-[2rem] shadow-aureo-soft border border-gray-100 font-madani">
            <h3 className="text-xl sm:text-2xl font-bold text-navy-950 mb-6 border-r-4 border-gold pr-3">استمارة التسجيل والاهتمام</h3>

            {submitted && (
              <div className="bg-emerald-50 border border-emerald-200 text-emerald-800 p-5 rounded-2xl mb-6 text-sm font-semibold animate-bounce">
                <div className="flex items-center gap-3">
                  <i className="fa-solid fa-circle-check text-xl text-emerald-600" />
                  <div>
                    <p className="font-bold">تم إرسال الطلب بنجاح</p>
                    <p className="text-xs text-emerald-700/80 mt-0.5">سيتصل بك مستشارك اللوجستي المخصص في أقل من 30 دقيقة.</p>
                  </div>
                </div>
              </div>
            )}

            <form className="space-y-5" onSubmit={onSubmit}>
              <div>
                <label className="block text-xs font-bold text-gray-500 uppercase mb-2" htmlFor="form-name">الاسم الكريم أو اسم الشركة</label>
                <input type="text" id="form-name" required className="w-full bg-white border border-gray-200 rounded-xl py-4 px-4 text-navy-950 focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-all duration-300 font-bold shadow-sm" placeholder="أدخل اسمك الكريم هنا..." />
              </div>
              <div>
                <label className="block text-xs font-bold text-gray-500 uppercase mb-2" htmlFor="form-phone">رقم الجوال (الواتساب)</label>
                <input type="tel" id="form-phone" required dir="ltr" className="w-full text-right bg-white border border-gray-200 rounded-xl py-4 px-4 text-navy-950 focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold transition-all duration-300 font-bold shadow-sm" placeholder="05XXXXXXXX" />
              </div>

              <button type="submit" disabled={submitting} className="w-full bg-navy-950 hover:bg-gold text-white hover:text-navy-950 font-bold py-4 rounded-xl shadow-md transition-all duration-300 flex justify-center items-center gap-3 cursor-pointer disabled:cursor-wait">
                <span>{submitting ? "جاري معالجة طلبك الفاخر العقاري..." : "إرسال الطلب الآن"}</span>
                {submitting ? <span><i className="fa-solid fa-circle-notch animate-spin text-xl" /></span> : <i className="fa-solid fa-arrow-left" />}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
