export type Lang = "en" | "ar";

const translations = {
  en: {
    navbar: {
      home: "Home",
      about: "About",
      services: "Services",
      projects: "Projects",
      contact: "Contact",
      requestQuote: "Request a Quote",
      serviceItems: {
        itNetwork: "IT & Network",
        lowCurrent: "Low Current",
        hvac: "HVAC Systems",
        ups: "UPS Systems",
        firefighting: "Firefighting",
        electrical: "Electrical Systems",
      },
    },
    hero: {
      badge: "MEP Engineering Solutions",
      headline1: "Precision in",
      headline2: "Every System",
      headline3: "We Build",
      subtitle:
        "We deliver high-quality, integrated MEP solutions across HVAC, data centers, UPS systems, low current, firefighting, and more.",
      ctaPrimary: "Request a Quote",
      ctaSecondary: "Our Services",
      stats: {
        years: "Years Experience",
        projects: "Projects Completed",
        engineers: "Expert Engineers",
        support: "Support Available",
      },
    },
    about: {
      sectionLabel: "About Us",
      heading1: "Engineering",
      heading2: "Excellence",
      heading3: "Since Day One",
      description:
        "MEP Engineering Solutions is a leading provider of comprehensive mechanical, electrical, and plumbing solutions. We specialize in delivering high-quality, integrated solutions across HVAC, data centers, UPS systems, low current, firefighting, and more.",
      learnMore: "Learn More About Us",
      certified: "ISO Certified",
      certifiedSub: "Quality Management System",
      values: {
        values: { title: "Values", desc: "MEP provides a complete range of electrical, HVAC, mechanical, CCTV and fire systems." },
        vision: { title: "Vision", desc: "To be the premier contracting and supplies company in the Middle East." },
        mission: { title: "Mission", desc: "A partnership committed to quality, innovation and delivering value to our clients." },
        support: { title: "Support 24/7", desc: "We operate 24/7 to ensure your complete satisfaction round the clock." },
      },
    },
    services: {
      sectionLabel: "Our Services",
      heading1: "Integrated",
      heading2: "MEP Solutions",
      description:
        "We specialize in delivering high-quality, integrated solutions across HVAC, data centers, UPS systems, low current, firefighting, and more.",
      learnMore: "Learn More",
    },
    projects: {
      sectionLabel: "Portfolio",
      heading1: "Featured",
      heading2: "Projects",
      viewAll: "View All Projects",
    },
    clients: {
      sectionLabel: "Trusted By",
      heading: "Clients We've Worked With",
      description: "Delivering excellence to leading organizations across the Middle East.",
    },
    contact: {
      sectionLabel: "Get in Touch",
      heading1: "Let's Build",
      heading2: "Together",
      description:
        "Ready to start your next project? Contact us for a consultation or quote. Our team of expert engineers is ready to deliver the best MEP solutions for your business.",
      callUs: "Call Us",
      emailUs: "Email Us",
      visitUs: "Visit Us",
      formTitle: "Request a Quote",
      namePlaceholder: "Your Name",
      emailPlaceholder: "Email Address",
      phonePlaceholder: "Phone Number",
      messagePlaceholder: "Tell us about your project...",
      sendButton: "Send Message",
      successMessage: "Thank you! We'll get back to you shortly.",
    },
    footer: {
      brandDesc: "Your trusted partner for comprehensive MEP engineering solutions in the Middle East.",
      servicesTitle: "Services",
      linksTitle: "Quick Links",
      contactTitle: "Contact",
      aboutUs: "About Us",
      projects: "Projects",
      careers: "Careers",
      contact: "Contact",
      copyright: "MEP Engineering Solutions. All rights reserved.",
    },
    // About page
    aboutPage: {
      sectionLabel: "About Us",
      heading1: "Engineering",
      heading2: "Excellence",
      subtitle:
        "MEP Engineering Solutions is a leading provider of comprehensive mechanical, electrical, and plumbing solutions in the Middle East.",
      storyHeading: "Our Story",
      storyP1:
        "Founded with a vision to transform the MEP engineering landscape in the Middle East, MEP Engineering Solutions has grown into a trusted partner for businesses across multiple sectors.",
      storyP2:
        "We provide a complete range of electrical, HVAC, mechanical, CCTV and fire systems. Our team of experienced professionals is committed to delivering innovative solutions that exceed expectations.",
      storyP3:
        "Our vision is to be the premier contracting and supplies company in the Middle East, known for quality, innovation, and delivering value to our clients.",
      whyHeading1: "Why Choose",
      whyHeading2: "MEP",
      reasons: [
        "Complete MEP integration under one roof",
        "ISO-certified quality management",
        "15+ years of industry experience",
        "200+ successful projects delivered",
        "24/7 maintenance and support",
        "Sustainable engineering practices",
      ],
      valueLabels: {
        values: "Values",
        vision: "Vision",
        mission: "Mission",
        support: "24/7 Support",
        team: "Expert Team",
        iso: "ISO Certified",
      },
      valueDescs: {
        values: "Complete MEP solutions with integrity",
        vision: "Premier MEP company in the Middle East",
        mission: "Quality, innovation, and value delivery",
        support: "Round the clock availability",
        team: "50+ skilled engineers",
        iso: "Quality management system",
      },
    },
    // Services page
    servicesPage: {
      sectionLabel: "Our Services",
      heading1: "Integrated",
      heading2: "MEP Solutions",
      subtitle: "We deliver comprehensive engineering services across all MEP disciplines.",
    },
    // Projects page
    projectsPage: {
      sectionLabel: "Portfolio",
      heading1: "Our",
      heading2: "Projects",
      subtitle: "Explore our portfolio of successfully delivered MEP engineering projects.",
    },
    // Project dialog
    dialog: {
      client: "Client",
      location: "Location",
      year: "Year",
      scopeTitle: "Scope of Work",
      systemsTitle: "Systems Delivered",
      galleryTitle: "Gallery",
      caseStudyTitle: "Case Study",
      challenge: "Challenge",
      solution: "Solution",
      result: "Result",
      relatedTitle: "Related Projects",
      interestedText: "Interested in a similar project?",
      requestQuote: "Request a Quote",
    },
    // 404
    notFound: {
      title: "Oops! Page not found",
      backHome: "Return to Home",
    },
  },

  ar: {
    navbar: {
      home: "الرئيسية",
      about: "عن الشركة",
      services: "الخدمات",
      projects: "المشاريع",
      contact: "تواصل معنا",
      requestQuote: "طلب عرض سعر",
      serviceItems: {
        itNetwork: "تقنية المعلومات والشبكات",
        lowCurrent: "التيار الخفيف",
        hvac: "أنظمة التكييف",
        ups: "أنظمة الطاقة الاحتياطية",
        firefighting: "مكافحة الحرائق",
        electrical: "الأنظمة الكهربائية",
      },
    },
    hero: {
      badge: "حلول هندسة MEP",
      headline1: "الدقة في",
      headline2: "كل نظام",
      headline3: "نبنيه",
      subtitle:
        "نقدم حلول MEP عالية الجودة والمتكاملة تشمل التكييف ومراكز البيانات وأنظمة الطاقة الاحتياطية والتيار الخفيف ومكافحة الحرائق والمزيد.",
      ctaPrimary: "طلب عرض سعر",
      ctaSecondary: "خدماتنا",
      stats: {
        years: "سنوات خبرة",
        projects: "مشروع منجز",
        engineers: "مهندس متخصص",
        support: "دعم متاح",
      },
    },
    about: {
      sectionLabel: "عن الشركة",
      heading1: "التميز",
      heading2: "الهندسي",
      heading3: "منذ اليوم الأول",
      description:
        "MEP Engineering Solutions هي شركة رائدة في تقديم حلول ميكانيكية وكهربائية وصحية متكاملة. نتخصص في تقديم حلول عالية الجودة تشمل التكييف ومراكز البيانات وأنظمة الطاقة الاحتياطية والتيار الخفيف ومكافحة الحرائق.",
      learnMore: "اعرف المزيد عنا",
      certified: "معتمدة ISO",
      certifiedSub: "نظام إدارة الجودة",
      values: {
        values: { title: "قيمنا", desc: "نقدم مجموعة متكاملة من الأنظمة الكهربائية والتكييف والميكانيكية والمراقبة والحريق." },
        vision: { title: "رؤيتنا", desc: "أن نكون شركة المقاولات والإمدادات الرائدة في الشرق الأوسط." },
        mission: { title: "مهمتنا", desc: "شراكة ملتزمة بالجودة والابتكار وتقديم القيمة لعملائنا." },
        support: { title: "دعم 24/7", desc: "نعمل على مدار الساعة لضمان رضاكم الكامل." },
      },
    },
    services: {
      sectionLabel: "خدماتنا",
      heading1: "حلول MEP",
      heading2: "المتكاملة",
      description:
        "نتخصص في تقديم حلول عالية الجودة تشمل التكييف ومراكز البيانات وأنظمة الطاقة الاحتياطية والتيار الخفيف ومكافحة الحرائق والمزيد.",
      learnMore: "اعرف المزيد",
    },
    projects: {
      sectionLabel: "أعمالنا",
      heading1: "مشاريع",
      heading2: "مميزة",
      viewAll: "عرض جميع المشاريع",
    },
    clients: {
      sectionLabel: "يثقون بنا",
      heading: "عملاؤنا",
      description: "نقدم التميز للمؤسسات الكبرى في الشرق الأوسط.",
    },
    contact: {
      sectionLabel: "تواصل معنا",
      heading1: "لنبني",
      heading2: "معًا",
      description:
        "هل أنت مستعد لبدء مشروعك؟ تواصل معنا للحصول على استشارة أو عرض سعر. فريق مهندسينا المتخصصين مستعد لتقديم أفضل حلول MEP لعملك.",
      callUs: "اتصل بنا",
      emailUs: "راسلنا",
      visitUs: "زرنا",
      formTitle: "طلب عرض سعر",
      namePlaceholder: "اسمك",
      emailPlaceholder: "البريد الإلكتروني",
      phonePlaceholder: "رقم الهاتف",
      messagePlaceholder: "أخبرنا عن مشروعك...",
      sendButton: "إرسال الرسالة",
      successMessage: "شكرًا لك! سنتواصل معك قريبًا.",
    },
    footer: {
      brandDesc: "شريكك الموثوق لحلول هندسة MEP الشاملة في الشرق الأوسط.",
      servicesTitle: "الخدمات",
      linksTitle: "روابط سريعة",
      contactTitle: "تواصل معنا",
      aboutUs: "عن الشركة",
      projects: "المشاريع",
      careers: "الوظائف",
      contact: "اتصل بنا",
      copyright: "MEP Engineering Solutions. جميع الحقوق محفوظة.",
    },
    // About page
    aboutPage: {
      sectionLabel: "عن الشركة",
      heading1: "التميز",
      heading2: "الهندسي",
      subtitle:
        "MEP Engineering Solutions هي شركة رائدة في تقديم حلول ميكانيكية وكهربائية وصحية متكاملة في الشرق الأوسط.",
      storyHeading: "قصتنا",
      storyP1:
        "تأسست الشركة برؤية لتحويل مشهد هندسة MEP في الشرق الأوسط، ونمت لتصبح شريكًا موثوقًا للشركات في قطاعات متعددة.",
      storyP2:
        "نقدم مجموعة متكاملة من الأنظمة الكهربائية والتكييف والميكانيكية والمراقبة والحريق. فريقنا من المتخصصين ذوي الخبرة ملتزم بتقديم حلول مبتكرة تتجاوز التوقعات.",
      storyP3:
        "رؤيتنا أن نكون شركة المقاولات والإمدادات الرائدة في الشرق الأوسط، المعروفة بالجودة والابتكار وتقديم القيمة لعملائنا.",
      whyHeading1: "لماذا تختار",
      whyHeading2: "MEP",
      reasons: [
        "تكامل حلول MEP تحت سقف واحد",
        "إدارة جودة معتمدة ISO",
        "أكثر من 15 عامًا من الخبرة",
        "أكثر من 200 مشروع منجز بنجاح",
        "صيانة ودعم على مدار الساعة",
        "ممارسات هندسية مستدامة",
      ],
      valueLabels: {
        values: "قيمنا",
        vision: "رؤيتنا",
        mission: "مهمتنا",
        support: "دعم 24/7",
        team: "فريق متخصص",
        iso: "معتمدة ISO",
      },
      valueDescs: {
        values: "حلول MEP متكاملة بنزاهة",
        vision: "شركة MEP الرائدة في الشرق الأوسط",
        mission: "الجودة والابتكار وتقديم القيمة",
        support: "متاحون على مدار الساعة",
        team: "أكثر من 50 مهندسًا متخصصًا",
        iso: "نظام إدارة الجودة",
      },
    },
    // Services page
    servicesPage: {
      sectionLabel: "خدماتنا",
      heading1: "حلول MEP",
      heading2: "المتكاملة",
      subtitle: "نقدم خدمات هندسية شاملة في جميع تخصصات MEP.",
    },
    // Projects page
    projectsPage: {
      sectionLabel: "أعمالنا",
      heading1: "مشاريعنا",
      heading2: "",
      subtitle: "استعرض ملف أعمالنا من مشاريع هندسة MEP المنجزة بنجاح.",
    },
    // Project dialog
    dialog: {
      client: "العميل",
      location: "الموقع",
      year: "السنة",
      scopeTitle: "نطاق العمل",
      systemsTitle: "الأنظمة المنجزة",
      galleryTitle: "معرض الصور",
      caseStudyTitle: "دراسة الحالة",
      challenge: "التحدي",
      solution: "الحل",
      result: "النتيجة",
      relatedTitle: "مشاريع ذات صلة",
      interestedText: "هل تبحث عن مشروع مماثل؟",
      requestQuote: "طلب عرض سعر",
    },
    // 404
    notFound: {
      title: "عذرًا! الصفحة غير موجودة",
      backHome: "العودة للرئيسية",
    },
  },
} as const;

export default translations;

// Helper to get nested value by dot-notation key
export function getTranslation(lang: Lang, key: string): string {
  const keys = key.split(".");
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let value: any = translations[lang];
  for (const k of keys) {
    if (value == null) return key;
    value = value[k];
  }
  return typeof value === "string" ? value : key;
}
