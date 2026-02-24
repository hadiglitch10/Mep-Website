import { ScrollReveal } from "@/components/ScrollReveal";
import { Building2, Factory, Hospital, GraduationCap, Hotel, Warehouse } from "lucide-react";

const sectors = [
  { icon: Building2, label: "Commercial" },
  { icon: Factory, label: "Industrial" },
  { icon: Hospital, label: "Healthcare" },
  { icon: GraduationCap, label: "Education" },
  { icon: Hotel, label: "Hospitality" },
  { icon: Warehouse, label: "Data Centers" },
];

export const SectorsSection = () => {
  return (
    <section id="sectors" className="section-padding relative">
      <div className="container mx-auto">
        <ScrollReveal>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-primary font-heading font-semibold text-sm tracking-wider uppercase mb-4 block">Sectors</span>
            <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6">
              Industries We <span className="gradient-text">Serve</span>
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {sectors.map((sector, i) => (
            <ScrollReveal key={sector.label} delay={i * 60}>
              <div className="glass-panel p-6 text-center hover-lift group cursor-default">
                <div className="w-14 h-14 mx-auto rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                  <sector.icon className="w-7 h-7 text-primary" />
                </div>
                <span className="font-heading font-medium text-sm text-foreground">{sector.label}</span>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};
