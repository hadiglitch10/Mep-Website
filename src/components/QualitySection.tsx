import { ScrollReveal } from "@/components/ScrollReveal";
import { ShieldCheck, Award, Leaf } from "lucide-react";

const items = [
  {
    icon: ShieldCheck,
    title: "Quality Assurance",
    description: "ISO-certified processes ensuring the highest standards in every project we deliver.",
  },
  {
    icon: Award,
    title: "HSE Compliance",
    description: "Full compliance with Health, Safety & Environment regulations across all operations.",
  },
  {
    icon: Leaf,
    title: "Sustainability",
    description: "Committed to eco-friendly practices and energy-efficient engineering solutions.",
  },
];

export const QualitySection = () => {
  return (
    <section id="quality" className="section-padding relative">
      <div className="container mx-auto">
        <ScrollReveal>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-primary font-heading font-semibold text-sm tracking-wider uppercase mb-4 block">Quality & HSE</span>
            <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6">
              Committed to <span className="gradient-text">Excellence</span>
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {items.map((item, i) => (
            <ScrollReveal key={item.title} delay={i * 100}>
              <div className="glass-panel p-8 text-center hover-lift group">
                <div className="w-16 h-16 mx-auto rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                  <item.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-heading font-semibold text-xl mb-3 text-foreground">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{item.description}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};
