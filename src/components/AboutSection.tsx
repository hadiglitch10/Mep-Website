import { ScrollReveal } from "@/components/ScrollReveal";
import { Link } from "react-router-dom";
import { Target, Eye, Shield, Clock, ArrowRight } from "lucide-react";
import aboutBg from "@/assets/about-bg.jpg";

const values = [
  {
    icon: Target,
    title: "Values",
    description: "MEP provides a complete range of electrical, HVAC, mechanical, CCTV and fire systems.",
    number: "01",
  },
  {
    icon: Eye,
    title: "Vision",
    description: "To be the premier contracting and supplies company in the Middle East.",
    number: "02",
  },
  {
    icon: Shield,
    title: "Mission",
    description: "A partnership committed to quality, innovation and delivering value to our clients.",
    number: "03",
  },
  {
    icon: Clock,
    title: "Support 24/7",
    description: "We operate 24/7 to ensure your complete satisfaction round the clock.",
    number: "04",
  },
];

export const AboutSection = () => {
  return (
    <section id="about" className="section-padding relative overflow-hidden">
      <div className="container mx-auto">
        <ScrollReveal>
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
            {/* Image */}
            <div className="lg:w-1/2 relative">
              <div className="relative rounded-2xl overflow-hidden shadow-elevated">
                <img src={aboutBg} alt="MEP Engineering facility" className="w-full h-[400px] object-cover" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="glass-panel p-4 flex items-center gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary flex items-center justify-center">
                      <Shield className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div>
                      <p className="font-heading font-semibold text-foreground">ISO Certified</p>
                      <p className="text-sm text-muted-foreground">Quality Management System</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Text */}
            <div className="lg:w-1/2">
              <span className="text-primary font-heading font-semibold text-sm tracking-wider uppercase mb-4 block">About Us</span>
              <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6 leading-tight">
                Engineering <span className="gradient-text">Excellence</span> Since Day One
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-8">
                MEP Engineering Solutions is a leading provider of comprehensive mechanical, electrical, and plumbing solutions. We specialize in delivering high-quality, integrated solutions across HVAC, data centers, UPS systems, low current, firefighting, and more.
              </p>
              <Link to="/about" className="inline-flex items-center gap-2 text-primary font-heading font-semibold hover:gap-4 transition-all">
                Learn More About Us <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </ScrollReveal>

        {/* Value cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-20">
          {values.map((item, i) => (
            <ScrollReveal key={item.title} delay={i * 100}>
              <div className="glass-panel p-6 hover-lift group cursor-default relative overflow-hidden">
                <span className="absolute top-4 right-4 text-5xl font-heading font-bold text-muted/30 group-hover:text-primary/10 transition-colors">{item.number}</span>
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-heading font-semibold text-lg mb-2 text-foreground">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};
