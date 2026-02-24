import { ScrollReveal } from "@/components/ScrollReveal";
import { Link } from "react-router-dom";
import { ArrowRight, Server, Radio, Wind, Battery, Flame, Zap } from "lucide-react";
import serviceNetwork from "@/assets/service-network.jpg";
import serviceLowcurrent from "@/assets/service-lowcurrent.jpg";
import serviceHvac from "@/assets/service-hvac.jpg";
import serviceUps from "@/assets/service-ups.jpg";

const services = [
  {
    icon: Server,
    title: "IT & Network",
    description: "Design, Implementation & Maintenance, Modular Infrastructure & DCIM, Secure Network Design & Physical Security, Power & Cooling Integration.",
    image: serviceNetwork,
    href: "/services/it-network",
  },
  {
    icon: Radio,
    title: "Low Current",
    description: "CCTV, Fire Alarm, Public Address & Voice Evacuation, Access Control & Intrusion Detection, IPTV, Digital Signage & Video Walls, BMS.",
    image: serviceLowcurrent,
    href: "/services/low-current",
  },
  {
    icon: Wind,
    title: "HVAC Systems",
    description: "Precision Cooling for Data Centers (CRAC/CRAH), Chillers (Air/Water Cooled), DX Package Units, Air Handling Units (AHUs).",
    image: serviceHvac,
    href: "/services/hvac",
  },
  {
    icon: Battery,
    title: "UPS Systems",
    description: "Supply & Installation of APC, Vertiv, Schneider Units, Preventive & Corrective Maintenance, Battery Replacement & Load Testing.",
    image: serviceUps,
    href: "/services/ups",
  },
  {
    icon: Flame,
    title: "Firefighting",
    description: "Fire suppression systems, sprinkler design & installation, FM200 gas suppression, fire pump systems, and emergency planning.",
    image: serviceNetwork,
    href: "/services/firefighting",
  },
  {
    icon: Zap,
    title: "Electrical Systems",
    description: "Power distribution, transformers, switchgear, lighting systems, earthing & lightning protection, and energy management.",
    image: serviceHvac,
    href: "/services/electrical",
  },
];

export const ServicesSection = () => {
  return (
    <section id="services" className="section-padding relative">
      <div className="container mx-auto">
        <ScrollReveal>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-primary font-heading font-semibold text-sm tracking-wider uppercase mb-4 block">Our Services</span>
            <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6">
              Integrated <span className="gradient-text">MEP Solutions</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              We specialize in delivering high-quality, integrated solutions across HVAC, data centers, UPS systems, low current, firefighting, and more.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <ScrollReveal key={service.title} delay={i * 80}>
              <Link to={service.href} className="block group">
                <div className="glass-panel overflow-hidden hover-lift h-full">
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
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
                      {service.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4">{service.description}</p>
                    <span className="inline-flex items-center gap-2 text-primary text-sm font-medium group-hover:gap-3 transition-all">
                      Learn More <ArrowRight className="w-4 h-4" />
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
