export const assets = {
  logo: "/assets/logo.png",
  hero: "/assets/warehouse-hero.png",
  suli: "/assets/warehouse-suli.png",
  docks: "/assets/logistics-docks.png",
  office: "/assets/office.png",
  aerial: "/assets/warehouse-aerial.png"
};

export const maps = {
  suli: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3624.502844883446!2d46.7937409!3d24.6983796!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjTCsDQxJzU0LjIiTiA0NsKwNDcnMzMuNSJF!5e0!3m2!1sar!2ssa!4v1690000000000!5m2!1sar!2ssa",
  south: "https://www.google.com/maps/embed?origin=mfe&pb=!1m3!2m1!1s24.5475745,46.7925079!6i15",
  sadus: "https://www.google.com/maps/embed?origin=mfe&pb=!1m3!2m1!1s24.9843863,46.1603132!6i15"
};

export const locations = {
  suli: {
    title: "📍 سدوس – شمال الرياض",
    shortTitle: "📍 سدوس الاستراتيجي",
    region: "شمال الرياض",
    regionClass: "text-emerald-600 bg-emerald-50",
    desc: "وجهتكم المستقبلية للتوسع والاتصال المباشر بطريق الملك فهد الشمالي، مجهزة بأنظمة حماية ذكية ومساحات تخزين مرنة وقوية البناء.",
    cardDesc: "اتصال مباشر بالطرق السريعة وتراخيص دفاع مدني فئة (أ) لكافة الأنشطة.",
    tag1: "تراخيص دفاع مدني فئة أ",
    tag2: "عزل حراري 100%",
    map: maps.sadus,
    gallery: [
      "/sudos/DSC00002.webp",
      "/sudos/DSC00011.webp",
      "/sudos/DSC00016.webp",
      "/sudos/DSC00021.webp",
      "/sudos/DSC00034.webp",
      "/sudos/DSC00042.webp"
    ]
  },
  south: {
    title: "📍 المنصورية – جنوب الرياض",
    shortTitle: "📍 المنصورية",
    region: "المنصورية",
    regionClass: "text-blue-600 bg-blue-50",
    desc: "تتمركز في منطقة التوزيع الكبرى المغذية لقطاعات الصناعة والتجزئة بجنوب العاصمة، مجهزة بطاقة كهربائية قصوى وقدرة تحمل شاحنات ممتازة.",
    cardDesc: "بنية تحتية كهربائية تصل إلى 200 أمبير لتغذية خطوط التشغيل والتخزين المبرد.",
    tag1: "كهرباء 200 أمبير",
    tag2: "أبواب تفريغ هيدروليكية",
    map: maps.south,
    gallery: [
      "/Mansoria/DSC00051.webp",
      "/Mansoria/DSC00056.webp",
      "/Mansoria/DSC00069.webp",
      "/Mansoria/DSC00093-1.webp",
      "/Mansoria/DSC00098-1.webp",
      "/Mansoria/DSC00109.webp",
      "/Mansoria/DSC00112-1.webp",
      "/Mansoria/DSC00116.webp",
      "/Mansoria/DSC00118-1.webp"
    ]
  },
  sadus: {
    title: "📍 السلي – شرق الرياض",
    shortTitle: "📍 حي السلي اللوجستي",
    region: "شرق الرياض",
    regionClass: "text-gold bg-gold/10",
    desc: "يقع في أحد أهم الشرايين اللوجستية بالشرق، مع ميزة البدء الفوري للتراخيص وبناء ممتاز مقاوم للحرارة والرطوبة.",
    cardDesc: "المستودعات الأكثر طلباً، جاهزية للتشغيل تبدأ من مساحة 489 م² حتى 20,200 م².",
    tag1: "مساحات حتى 20,200 م²",
    tag2: "قرب الدائري الثاني",
    map: maps.suli,
    gallery: [
      "/alsly/WhatsApp-Image-2026-06-30-at-2-35-12-PM.webp",
      "/alsly/WhatsApp-Image-2026-06-30-at-2-35-12-PM-1.webp",
      "/alsly/WhatsApp-Image-2026-06-30-at-2-35-12-PM-2.webp",
      "/alsly/WhatsApp-Image-2026-06-30-at-2-35-13-PM.webp",
      "/alsly/WhatsApp-Image-2026-06-30-at-2-35-13-PM-1.webp"
    ]
  }
};

export const featureCards = [
  ["fa-up-right-and-down-left-from-center", "1: مساحات مرنة", "من 489 م لـ 20,000 م وجاهزية فورية للتشغيل."],
  ["fa-bolt", "2: بنية تحتية", "أبواب كهربائية حديثة وكهرباء 200 أمبير."],
  ["fa-shield-halved", "3: أمان كامل", "تراخيص الدفاع المدني ومطابقة للكود السعودي."],
  ["fa-trowel-bricks", "4: جودة بناء", "صبة تتحمل الأوزان وعزل حراري ممتاز."],
  ["fa-door-open", "5: تصميم عملي", "بوجود مكتب إداري ودورة مياه خاصة لكل مستودع."]
];
