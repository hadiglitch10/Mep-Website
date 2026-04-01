import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { AnimatedBackground } from "@/components/AnimatedBackground";
import { ScrollReveal } from "@/components/ScrollReveal";
import { Server, Radio, Wind, Battery, Flame, Zap } from "lucide-react";
import serviceNetwork from "@/assets/service-network.jpg";
import serviceLowcurrent from "@/assets/service-lowcurrent.jpg";
import serviceHvac from "@/assets/service-hvac.jpg";
import serviceUps from "@/assets/service-ups.jpg";
import { useLanguage } from "@/contexts/LanguageContext";

const serviceData = [
  {
    icon: Server,
    slug: "it-network",
    titleKey: "navbar.serviceItems.itNetwork",
    description: {
      en: "Design, Implementation & Maintenance, Modular Infrastructure & DCIM, Secure Network Design & Physical Security, Power & Cooling Integration.",
      ar: "التصميم والتنفيذ والصيانة، البنية التحتية المعيارية وإدارة مراكز البيانات، تصميم الشبكات الآمنة والأمن المادي، تكامل الطاقة والتبريد.",
    },
    details: {
      en: ["Data Center Design & Build", "Structured Cabling Systems", "Network Infrastructure", "DCIM Solutions", "Physical Security Integration", "Power & Cooling for IT"],
      ar: ["تصميم وبناء مراكز البيانات", "أنظمة الكابلات المهيكلة", "بنية تحتية للشبكات", "حلول DCIM", "تكامل الأمن المادي", "الطاقة والتبريد لتقنية المعلومات"],
    },
    image: serviceNetwork,
  },
  {
    icon: Radio,
    slug: "low-current",
    titleKey: "navbar.serviceItems.lowCurrent",
    description: {
      en: "CCTV, Fire Alarm, Public Address & Voice Evacuation, Access Control & Intrusion Detection, IPTV, Digital Signage & Video Walls, BMS.",
      ar: "كاميرات المراقبة، إنذار الحريق، الإذاعة العامة والإخلاء الصوتي، التحكم في الوصول والكشف عن التسلل، IPTV واللافتات الرقمية وجدران الفيديو، BMS.",
    },
    details: {
      en: ["CCTV Surveillance Systems", "Fire Alarm Systems", "Public Address & Voice Evacuation", "Access Control & Intrusion Detection", "IPTV & Digital Signage", "Building Management Systems (BMS)"],
      ar: ["أنظمة مراقبة CCTV", "أنظمة إنذار الحريق", "الإذاعة العامة والإخلاء الصوتي", "التحكم في الوصول والكشف عن التسلل", "IPTV واللافتات الرقمية", "أنظمة إدارة المباني (BMS)"],
    },
    image: serviceLowcurrent,
  },
  {
    icon: Wind,
    slug: "hvac",
    titleKey: "navbar.serviceItems.hvac",
    description: {
      en: "Precision Cooling for Data Centers (CRAC/CRAH), Chillers (Air/Water Cooled), DX Package Units, Air Handling Units (AHUs).",
      ar: "التبريد الدقيق لمراكز البيانات (CRAC/CRAH)، المبردات (هواء/ماء)، وحدات DX، وحدات معالجة الهواء (AHU).",
    },
    details: {
      en: ["Precision Cooling (CRAC/CRAH)", "Chillers (Air/Water Cooled)", "DX Package Units", "Air Handling Units (AHUs)", "Ventilation Systems", "Temperature Control"],
      ar: ["تبريد دقيق (CRAC/CRAH)", "مبردات (هواء/ماء)", "وحدات DX", "وحدات معالجة الهواء (AHU)", "أنظمة التهوية", "التحكم في درجة الحرارة"],
    },
    image: serviceHvac,
  },
  {
    icon: Battery,
    slug: "ups",
    titleKey: "navbar.serviceItems.ups",
    description: {
      en: "Supply & Installation of APC, Vertiv, Schneider Units, Preventive & Corrective Maintenance, Battery Replacement & Load Testing.",
      ar: "توريد وتركيب وحدات APC وVertiv وSchneider، الصيانة الوقائية والتصحيحية، استبدال البطاريات واختبار الأحمال.",
    },
    details: {
      en: ["APC UPS Systems", "Vertiv Power Solutions", "Schneider Electric Units", "Preventive Maintenance", "Battery Replacement", "Load Testing Services"],
      ar: ["أنظمة UPS من APC", "حلول طاقة Vertiv", "وحدات Schneider Electric", "الصيانة الوقائية", "استبدال البطاريات", "خدمات اختبار الأحمال"],
    },
    image: serviceUps,
  },
  {
    icon: Flame,
    slug: "firefighting",
    titleKey: "navbar.serviceItems.firefighting",
    description: {
      en: "Fire suppression systems, sprinkler design & installation, FM200 gas suppression, fire pump systems, and emergency planning.",
      ar: "أنظمة إخماد الحرائق، تصميم وتركيب الرشاشات، إخماد الغاز FM200، أنظمة مضخات الحريق والتخطيط للطوارئ.",
    },
    details: {
      en: ["Fire Suppression Systems", "Sprinkler Design & Installation", "FM200 Gas Suppression", "Fire Pump Systems", "Emergency Planning", "Fire Safety Audits"],
      ar: ["أنظمة إخماد الحرائق", "تصميم وتركيب الرشاشات", "إخماد الغاز FM200", "أنظمة مضخات الحريق", "التخطيط للطوارئ", "تدقيق السلامة من الحرائق"],
    },
    image: serviceNetwork,
  },
  {
    icon: Zap,
    slug: "electrical",
    titleKey: "navbar.serviceItems.electrical",
    description: {
      en: "Power distribution, transformers, switchgear, lighting systems, earthing & lightning protection, and energy management.",
      ar: "توزيع الطاقة، المحولات ولوحات التوزيع، أنظمة الإضاءة، التأريض وحماية الصواعق، وإدارة الطاقة.",
    },
    details: {
      en: ["Power Distribution", "Transformers & Switchgear", "Lighting Systems", "Earthing & Lightning Protection", "Energy Management", "Generators & Backup Power"],
      ar: ["توزيع الطاقة", "المحولات ولوحات التوزيع", "أنظمة الإضاءة", "التأريض وحماية الصواعق", "إدارة الطاقة", "المولدات وطاقة الاحتياط"],
    },
    image: serviceHvac,
  },
];

const Services = () => {
  const { t, lang } = useLanguage();

  return (
    <div className="min-h-screen">
      <AnimatedBackground />
      <Navbar />
      <main>
        <section className="pt-32 pb-10 px-4 md:px-8">
          <div className="container mx-auto">
            <ScrollReveal>
              <span className="text-primary font-heading font-semibold text-sm tracking-wider uppercase mb-4 block">
                {t("servicesPage.sectionLabel")}
              </span>
              <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6">
                {t("servicesPage.heading1")} <span className="gradient-text">{t("servicesPage.heading2")}</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl">
                {t("servicesPage.subtitle")}
              </p>
            </ScrollReveal>
          </div>
        </section>

        <section className="section-padding pt-10">
          <div className="container mx-auto space-y-12">
            {serviceData.map((service, i) => (
              <ScrollReveal key={service.slug} delay={i * 60}>
                <div className="glass-panel overflow-hidden hover-lift" id={service.slug}>
                  <div className="flex flex-col lg:flex-row">
                    <div className="lg:w-2/5 h-64 lg:h-auto relative overflow-hidden">
                      <img src={service.image} alt={t(service.titleKey)} className="w-full h-full object-cover" loading="lazy" />
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent to-card/50 hidden lg:block" />
                    </div>
                    <div className="lg:w-3/5 p-8">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                          <service.icon className="w-5 h-5 text-primary" />
                        </div>
                        <h2 className="font-heading font-bold text-2xl text-foreground">{t(service.titleKey)}</h2>
                      </div>
                      <p className="text-muted-foreground mb-6 leading-relaxed">{service.description[lang]}</p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {service.details[lang].map((detail) => (
                          <div key={detail} className="flex items-center gap-2 text-sm text-muted-foreground">
                            <div className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                            {detail}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Services;
