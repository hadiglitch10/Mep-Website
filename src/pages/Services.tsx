import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { AnimatedBackground } from "@/components/AnimatedBackground";
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
    slug: "it-network",
    description: "Design, Implementation & Maintenance, Modular Infrastructure & DCIM, Secure Network Design & Physical Security, Power & Cooling Integration.",
    details: [
      "Data Center Design & Build",
      "Structured Cabling Systems",
      "Network Infrastructure",
      "DCIM Solutions",
      "Physical Security Integration",
      "Power & Cooling for IT",
    ],
    image: serviceNetwork,
  },
  {
    icon: Radio,
    title: "Low Current",
    slug: "low-current",
    description: "CCTV, Fire Alarm, Public Address & Voice Evacuation, Access Control & Intrusion Detection, IPTV, Digital Signage & Video Walls, BMS.",
    details: [
      "CCTV Surveillance Systems",
      "Fire Alarm Systems",
      "Public Address & Voice Evacuation",
      "Access Control & Intrusion Detection",
      "IPTV & Digital Signage",
      "Building Management Systems (BMS)",
    ],
    image: serviceLowcurrent,
  },
  {
    icon: Wind,
    title: "HVAC Systems",
    slug: "hvac",
    description: "Precision Cooling for Data Centers (CRAC/CRAH), Chillers (Air/Water Cooled), DX Package Units, Air Handling Units (AHUs).",
    details: [
      "Precision Cooling (CRAC/CRAH)",
      "Chillers (Air/Water Cooled)",
      "DX Package Units",
      "Air Handling Units (AHUs)",
      "Ventilation Systems",
      "Temperature Control",
    ],
    image: serviceHvac,
  },
  {
    icon: Battery,
    title: "UPS Systems",
    slug: "ups",
    description: "Supply & Installation of APC, Vertiv, Schneider Units, Preventive & Corrective Maintenance, Battery Replacement & Load Testing.",
    details: [
      "APC UPS Systems",
      "Vertiv Power Solutions",
      "Schneider Electric Units",
      "Preventive Maintenance",
      "Battery Replacement",
      "Load Testing Services",
    ],
    image: serviceUps,
  },
  {
    icon: Flame,
    title: "Firefighting",
    slug: "firefighting",
    description: "Fire suppression systems, sprinkler design & installation, FM200 gas suppression, fire pump systems, and emergency planning.",
    details: [
      "Fire Suppression Systems",
      "Sprinkler Design & Installation",
      "FM200 Gas Suppression",
      "Fire Pump Systems",
      "Emergency Planning",
      "Fire Safety Audits",
    ],
    image: serviceNetwork,
  },
  {
    icon: Zap,
    title: "Electrical Systems",
    slug: "electrical",
    description: "Power distribution, transformers, switchgear, lighting systems, earthing & lightning protection, and energy management.",
    details: [
      "Power Distribution",
      "Transformers & Switchgear",
      "Lighting Systems",
      "Earthing & Lightning Protection",
      "Energy Management",
      "Generators & Backup Power",
    ],
    image: serviceHvac,
  },
];

const Services = () => {
  return (
    <div className="min-h-screen">
      <AnimatedBackground />
      <Navbar />
      <main>
        <section className="pt-32 pb-10 px-4 md:px-8">
          <div className="container mx-auto">
            <ScrollReveal>
              <span className="text-primary font-heading font-semibold text-sm tracking-wider uppercase mb-4 block">Our Services</span>
              <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6">
                Integrated <span className="gradient-text">MEP Solutions</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl">
                We deliver comprehensive engineering services across all MEP disciplines.
              </p>
            </ScrollReveal>
          </div>
        </section>

        <section className="section-padding pt-10">
          <div className="container mx-auto space-y-12">
            {services.map((service, i) => (
              <ScrollReveal key={service.slug} delay={i * 60}>
                <div className="glass-panel overflow-hidden hover-lift" id={service.slug}>
                  <div className="flex flex-col lg:flex-row">
                    <div className="lg:w-2/5 h-64 lg:h-auto relative overflow-hidden">
                      <img src={service.image} alt={service.title} className="w-full h-full object-cover" loading="lazy" />
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent to-card/50 hidden lg:block" />
                    </div>
                    <div className="lg:w-3/5 p-8">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                          <service.icon className="w-5 h-5 text-primary" />
                        </div>
                        <h2 className="font-heading font-bold text-2xl text-foreground">{service.title}</h2>
                      </div>
                      <p className="text-muted-foreground mb-6 leading-relaxed">{service.description}</p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {service.details.map((detail) => (
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
