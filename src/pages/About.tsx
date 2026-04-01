import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { AnimatedBackground } from "@/components/AnimatedBackground";
import { ScrollReveal } from "@/components/ScrollReveal";
import { Target, Eye, Shield, Clock, Users, Award, CheckCircle } from "lucide-react";
import aboutBg from "@/assets/about-bg.jpg";
import { useLanguage } from "@/contexts/LanguageContext";

const About = () => {
  const { t } = useLanguage();

  const valueCards = [
    { icon: Target, labelKey: "aboutPage.valueLabels.values", descKey: "aboutPage.valueDescs.values" },
    { icon: Eye, labelKey: "aboutPage.valueLabels.vision", descKey: "aboutPage.valueDescs.vision" },
    { icon: Shield, labelKey: "aboutPage.valueLabels.mission", descKey: "aboutPage.valueDescs.mission" },
    { icon: Clock, labelKey: "aboutPage.valueLabels.support", descKey: "aboutPage.valueDescs.support" },
    { icon: Users, labelKey: "aboutPage.valueLabels.team", descKey: "aboutPage.valueDescs.team" },
    { icon: Award, labelKey: "aboutPage.valueLabels.iso", descKey: "aboutPage.valueDescs.iso" },
  ];

  return (
    <div className="min-h-screen">
      <AnimatedBackground />
      <Navbar />
      <main>
        {/* Hero */}
        <section className="relative pt-32 pb-20 overflow-hidden">
          <div className="absolute inset-0">
            <img src={aboutBg} alt="About MEP Engineering" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-background/85" />
          </div>
          <div className="container mx-auto px-4 md:px-8 relative z-10">
            <ScrollReveal>
              <span className="text-primary font-heading font-semibold text-sm tracking-wider uppercase mb-4 block">
                {t("aboutPage.sectionLabel")}
              </span>
              <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6">
                {t("aboutPage.heading1")} <span className="gradient-text">{t("aboutPage.heading2")}</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl">
                {t("aboutPage.subtitle")}
              </p>
            </ScrollReveal>
          </div>
        </section>

        {/* Story */}
        <section className="section-padding">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              <ScrollReveal>
                <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">{t("aboutPage.storyHeading")}</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">{t("aboutPage.storyP1")}</p>
                <p className="text-muted-foreground leading-relaxed mb-4">{t("aboutPage.storyP2")}</p>
                <p className="text-muted-foreground leading-relaxed">{t("aboutPage.storyP3")}</p>
              </ScrollReveal>

              <ScrollReveal direction="right">
                <div className="grid grid-cols-2 gap-4">
                  {valueCards.map((item) => (
                    <div key={item.labelKey} className="glass-panel p-5 hover-lift group">
                      <item.icon className="w-6 h-6 text-primary mb-3 group-hover:scale-110 transition-transform" />
                      <h3 className="font-heading font-semibold text-sm text-foreground mb-1">{t(item.labelKey)}</h3>
                      <p className="text-xs text-muted-foreground">{t(item.descKey)}</p>
                    </div>
                  ))}
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="section-padding">
          <div className="container mx-auto">
            <ScrollReveal>
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-12 text-center">
                {t("aboutPage.whyHeading1")} <span className="gradient-text">{t("aboutPage.whyHeading2")}</span>
              </h2>
            </ScrollReveal>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[0, 1, 2, 3, 4, 5].map((i) => (
                <ScrollReveal key={i} delay={i * 80}>
                  <div className="flex items-start gap-3 glass-panel p-5 hover-lift">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-foreground font-medium">{t(`aboutPage.reasons.${i}`)}</span>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
