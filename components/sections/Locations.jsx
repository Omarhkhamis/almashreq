import { locations } from "@/components/data";
import { SectionTag } from "@/components/ui/Logo";

const locationKeys = ["suli", "south", "sadus"];

export default function Locations({ activeLocation, onSelectLocation }) {
  const active = locations[activeLocation];

  return (
    <section id="locations" className="py-32 bg-stoneGray/30 border-y border-gray-200/40 relative overflow-hidden">
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-white to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-white to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 font-madani" data-aos="fade-up">
          <div className="max-w-2xl">
            <SectionTag>المميزات التنافسية ومواقعنا</SectionTag>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-navy-950 leading-[1.45] balanced-text">تجربة تخزين مثالية في كل تفصيل فني</h2>
          </div>
          <p className="text-gray-500 font-semibold text-sm sm:text-base max-w-sm mt-4 md:mt-0 leading-[2] border-r-2 border-gold pr-4 pretty-text">
            نختار مواقعنا بعناية فائقة لنضمن انسيابية الحركة وسهولة الوصول إلى الطرق اللوجستية الرئيسية بمدينة الرياض.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16 font-madani">
          <div className="lg:col-span-4 flex flex-col gap-4">
            {locationKeys.map((key) => {
              const location = locations[key];
              const isActive = key === activeLocation;
              return (
                <button
                  key={key}
                  type="button"
                  onClick={() => onSelectLocation(key)}
                  className={`text-right cursor-pointer p-6 rounded-2xl bg-white transition-all duration-300 ${isActive ? "border-2 border-gold shadow-aureo-soft" : "border border-gray-150 hover:border-gold/30 hover:shadow-aureo-soft"}`}
                >
                  <div className="flex justify-between items-center mb-3 gap-3">
                    <h3 className="text-lg font-bold text-navy-950">{location.shortTitle}</h3>
                    <span className={`text-[10px] font-bold px-2.5 py-1 rounded-full ${location.regionClass}`}>{location.region}</span>
                  </div>
                <p className="text-xs text-gray-500 leading-[1.9]">{location.cardDesc}</p>
                </button>
              );
            })}
          </div>

          <div className="lg:col-span-8 flex flex-col justify-between bg-white border border-gray-100 rounded-[2rem] p-6 shadow-aureo-deep relative overflow-hidden">
            <div className="absolute -top-10 -left-10 w-36 h-36 bg-skyAureo-100 rounded-full blur-2xl" />
            <div className="relative z-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6 pb-6 border-b border-gray-100">
              <div>
                <h4 className="text-xl font-bold text-navy-950">{active.title}</h4>
                <p className="text-xs text-gray-400 mt-2 leading-[1.9] pretty-text">{active.desc}</p>
              </div>
              <div className="flex flex-wrap gap-3">
                <span className="text-xs font-bold text-navy-950 bg-stoneGray px-3 py-1.5 rounded-lg">{active.tag1}</span>
                <span className="text-xs font-bold text-gold-dark bg-gold/10 px-3 py-1.5 rounded-lg">{active.tag2}</span>
              </div>
            </div>

            <div className="h-80 w-full rounded-2xl overflow-hidden shadow-inner border border-gray-100 relative">
              <iframe title={active.title} src={active.map} width="100%" height="100%" style={{ border: 0, filter: "grayscale(1) invert(0.9) contrast(1.2)" }} allowFullScreen loading="lazy" />
            </div>
          </div>
        </div>

        <div className="bg-white border border-gray-100 rounded-[2.5rem] p-8 sm:p-12 relative overflow-hidden shadow-aureo-soft" data-aos="zoom-in-up">
          <div className="absolute -top-12 -left-12 w-48 h-48 bg-gold/5 rounded-full blur-3xl" />
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            <div className="lg:col-span-4 border-l border-gray-100 pl-6">
              <h4 className="text-xl sm:text-2xl font-bold text-navy-950 mb-2">مزايا مشتركة في جميع المواقع</h4>
              <p className="text-sm sm:text-base text-gold font-bold">تأتيكم متكاملة ومجهزة للتشغيل الفوري</p>
            </div>
            <div className="lg:col-span-8 text-sm sm:text-base text-gray-500 leading-[2] font-semibold pretty-text">
              في كل مواقعنا، نحرص على تقديم جودة بناء عالية، وعزل حراري ومائي متكامل، وتصميم عملي يشمل مكتباً إدارياً فخماً ملحقاً ودورة مياه خاصة بكل مستودع، لتوفير بيئة عمل مريحة تدعم نمو أعمالك وتحقق أعلى معايير الأمان والسلامة.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
