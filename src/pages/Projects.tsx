import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { AnimatedBackground } from "@/components/AnimatedBackground";
import { ScrollReveal } from "@/components/ScrollReveal";
import serviceNetwork from "@/assets/service-network.jpg";
import serviceHvac from "@/assets/service-hvac.jpg";
import aboutBg from "@/assets/about-bg.jpg";
import serviceUps from "@/assets/service-ups.jpg";
import serviceLowcurrent from "@/assets/service-lowcurrent.jpg";
import heroBg from "@/assets/hero-bg.jpg";

const projects = [
  { title: "Commercial Data Center", category: "IT Infrastructure", image: serviceNetwork, description: "Complete data center design and implementation with redundant cooling and power systems." },
  { title: "Smart Building HVAC", category: "HVAC Systems", image: serviceHvac, description: "Intelligent climate control system for a 50,000 sqm commercial complex." },
  { title: "Corporate HQ MEP", category: "Full MEP", image: aboutBg, description: "End-to-end MEP engineering for a Fortune 500 regional headquarters." },
  { title: "Hospital Power Systems", category: "Electrical", image: serviceUps, description: "Critical power infrastructure for a 500-bed medical facility." },
  { title: "Mall Security Systems", category: "Low Current", image: serviceLowcurrent, description: "Comprehensive security and BMS integration for a major shopping center." },
  { title: "Industrial Complex", category: "Full MEP", image: heroBg, description: "Complete MEP systems for a large-scale industrial manufacturing facility." },
];

const Projects = () => {
  return (
    <div className="min-h-screen">
      <AnimatedBackground />
      <Navbar />
      <main>
        <section className="pt-32 pb-10 px-4 md:px-8">
          <div className="container mx-auto">
            <ScrollReveal>
              <span className="text-primary font-heading font-semibold text-sm tracking-wider uppercase mb-4 block">Portfolio</span>
              <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6">
                Our <span className="gradient-text">Projects</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl">
                Explore our portfolio of successfully delivered MEP engineering projects.
              </p>
            </ScrollReveal>
          </div>
        </section>

        <section className="section-padding pt-10">
          <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, i) => (
              <ScrollReveal key={project.title} delay={i * 80}>
                <div className="group relative rounded-2xl overflow-hidden hover-lift cursor-pointer h-[380px]">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <span className="inline-block px-3 py-1 text-xs font-medium bg-primary/20 text-primary rounded-full mb-3">
                      {project.category}
                    </span>
                    <h3 className="font-heading font-bold text-xl text-foreground mb-2">{project.title}</h3>
                    <p className="text-sm text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {project.description}
                    </p>
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

export default Projects;
