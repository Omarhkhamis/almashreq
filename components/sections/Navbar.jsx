import Logo from "@/components/ui/Logo";

const navLinks = [
  ["#hero", "الرئيسية"],
  ["#locations", "المواقع اللوجستية"],
  ["#services", "الخدمات والمساحات"],
  ["#faq", "الأسئلة الشائعة"]
];

export default function Navbar({ scrolled }) {
  return (
    <nav className={`fixed w-full z-50 top-0 transition-all duration-500 ${scrolled ? "glass-header shadow-sm py-3" : "py-5"}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`flex justify-between items-center w-full pb-4 border-b transition-all duration-500 ${scrolled ? "border-transparent" : "border-navy-950/5"}`}>
          <button type="button" className="cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} aria-label="العودة إلى بداية الصفحة">
            <Logo />
          </button>

          <div className="hidden lg:flex space-x-10 space-x-reverse items-center font-bold text-navy-950/90 text-sm font-madani">
            {navLinks.map(([href, label]) => (
              <a key={href} href={href} className="hover:text-gold transition-colors duration-300 relative group py-2">
                {label}
                <span className="absolute bottom-0 right-0 w-0 h-0.5 bg-gold transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </div>

          <div className="flex items-center gap-4 font-madani">
            <a href="tel:920015243" className="hidden md:flex text-navy-950 font-bold text-sm gap-2 items-center hover:text-gold transition-colors">
              <div className="w-8 h-8 rounded-full bg-navy-950/5 flex items-center justify-center text-gold">
                <i className="fa-solid fa-headset" />
              </div>
              <span className="tracking-normal">920015243</span>
            </a>
            <a href="#register" className="bg-navy-950 hover:bg-gold text-white hover:text-navy-950 font-bold px-7 py-3 rounded-full transition duration-300 text-xs sm:text-sm shadow-md hover:shadow-lg">
              <span>احجز جولة ميدانية</span>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
