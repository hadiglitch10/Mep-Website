import { ScrollReveal } from "@/components/ScrollReveal";
import { Link } from "react-router-dom";
import { ArrowRight, Server, Radio, Wind, Battery, Flame, Zap } from "lucide-react";
import serviceNetwork from "@/assets/service-network.jpg";
import serviceLowcurrent from "@/assets/service-lowcurrent.jpg";
import serviceHvac from "@/assets/service-hvac.jpg";
import serviceUps from "@/assets/service-ups.jpg";
import { useLanguage } from "@/contexts/LanguageContext";

const serviceData = [
  {
    icon: Server,
    titleKey: "navbar.serviceItems.itNetwork",
    descKey: "en_desc",
    description: {
      en: "Design, Implementation & Maintenance, Modular Infrastructure & DCIM, Secure Network Design & Physical Security, Power & Cooling Integration.",
      ar: "التصميم والتنفيذ والصيانة، البنية التحتية المعيارية وإدارة مراكز البيانات، تصميم الشبكات الآمنة والأمن المادي، تكامل الطاقة والتبريد.",
    },
    image: serviceNetwork,
    href: "/services/it-network",
  },
  {
    icon: Radio,
    titleKey: "navbar.serviceItems.lowCurrent",
    description: {
      en: "CCTV, Fire Alarm, Public Address & Voice Evacuation, Access Control & Intrusion Detection, IPTV, Digital Signage & Video Walls, BMS.",
      ar: "كاميرات المراقبة، إنذار الحريق، الإذاعة العامة والإخلاء الصوتي، التحكم في الوصول والكشف عن التسلل، IPTV واللافتات الرقمية وجدران الفيديو، BMS.",
    },
    image: serviceLowcurrent,
    href: "/services/low-current",
  },
  {
    icon: Wind,
    titleKey: "navbar.serviceItems.hvac",
    description: {
      en: "Precision Cooling for Data Centers (CRAC/CRAH), Chillers (Air/Water Cooled), DX Package Units, Air Handling Units (AHUs).",
      ar: "التبريد الدقيق لمراكز البيانات (CRAC/CRAH)، المبردات (هواء/ماء)، وحدات DX، وحدات معالجة الهواء (AHU).",
    },
    image: serviceHvac,
    href: "/services/hvac",
  },
  {
    icon: Battery,
    titleKey: "navbar.serviceItems.ups",
    description: {
      en: "Supply & Installation of APC, Vertiv, Schneider Units, Preventive & Corrective Maintenance, Battery Replacement & Load Testing.",
      ar: "توريد وتركيب وحدات APC وVertiv وSchneider، الصيانة الوقائية والتصحيحية، استبدال البطاريات واختبار الأحمال.",
    },
    image: serviceUps,
    href: "/services/ups",
  },
  {
    icon: Flame,
    titleKey: "navbar.serviceItems.firefighting",
    description: {
      en: "Fire suppression systems, sprinkler design & installation, FM200 gas suppression, fire pump systems, and emergency planning.",
      ar: "أنظمة إخماد الحرائق، تصميم وتركيب الرشاشات، إخماد الغاز FM200، أنظمة مضخات الحريق والتخطيط للطوارئ.",
    },
    image: serviceNetwork,
    href: "/services/firefighting",
  },
  {
    icon: Zap,
    titleKey: "navbar.serviceItems.electrical",
    description: {
      en: "Power distribution, transformers, switchgear, lighting systems, earthing & lightning protection, and energy management.",
      ar: "توزيع الطاقة، المحولات ولوحات التوزيع، أنظمة الإضاءة، التأريض وحماية الصواعق، وإدارة الطاقة.",
    },
    image: serviceHvac,
    href: "/services/electrical",
  },
];

export const ServicesSection = () => {
  const { t, lang } = useLanguage();

  return (
    <section id="services" className="section-padding relative">
      <div className="container mx-auto">
        <ScrollReveal>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-primary font-heading font-semibold text-sm tracking-wider uppercase mb-4 block">
              {t("services.sectionLabel")}
            </span>
            <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6">
              {t("services.heading1")} <span className="gradient-text">{t("services.heading2")}</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              {t("services.description")}
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {serviceData.map((service, i) => (
            <ScrollReveal key={service.href} delay={i * 80}>
              <Link to={service.href} className="block group">
                <div className="glass-panel overflow-hidden hover-lift h-full">
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={service.image}
                      alt={t(service.titleKey)}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
                    <div className="absolute top-4 left-4 w-10 h-10 rounded-lg bg-primary/90 flex items-center justify-center">
                      <service.icon className="w-5 h-5 text-primary-foreground" />
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="font-heading font-semibold text-lg mb-3 text-foreground group-hover:text-primary transition-colors">
                      {t(service.titleKey)}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                      {service.description[lang]}
                    </p>
                    <span className="inline-flex items-center gap-2 text-primary text-sm font-medium group-hover:gap-3 transition-all">
                      {t("services.learnMore")} <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};
