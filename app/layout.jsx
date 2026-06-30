import { Almarai, Space_Grotesk } from "next/font/google";
import "./globals.css";

const arabic = Almarai({
  subsets: ["arabic"],
  weight: ["300", "400", "700", "800"],
  variable: "--font-arabic",
  display: "swap"
});

const latin = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-latin",
  display: "swap"
});

export const metadata = {
  title: "المشرق للاستثمار | مستودعات جاهزة راقية",
  description: "مساحات تخزين مطابقة للاشتراطات الفنية وجاهزة للتشغيل اللوجستي."
};

export default function RootLayout({ children }) {
  return (
    <html lang="ar" dir="rtl" className={`${arabic.variable} ${latin.variable}`}>
      <body className="antialiased selection:bg-gold selection:text-navy-950 text-charcoal font-madani">
        {children}
      </body>
    </html>
  );
}
