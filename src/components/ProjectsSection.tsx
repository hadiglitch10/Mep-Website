import { ScrollReveal } from "@/components/ScrollReveal";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import serviceNetwork from "@/assets/service-network.jpg";
import serviceHvac from "@/assets/service-hvac.jpg";
import aboutBg from "@/assets/about-bg.jpg";

const projects = [
  {
    title: "Commercial Data Center",
    category: "IT Infrastructure",
    image: serviceNetwork,
    description: "Complete data center design and implementation with redundant cooling and power systems.",
  },
  {
    title: "Smart Building HVAC",
    category: "HVAC Systems",
    image: serviceHvac,
    description: "Intelligent climate control system for a 50,000 sqm commercial complex.",
  },
  {
    title: "Corporate HQ MEP",
    category: "Full MEP",
    image: aboutBg,
    description: "End-to-end MEP engineering for a Fortune 500 regional headquarters.",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="section-padding relative">
      <div className="container mx-auto">
        <ScrollReveal>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <span className="text-primary font-heading font-semibold text-sm tracking-wider uppercase mb-4 block">Portfolio</span>
              <h2 className="text-3xl md:text-5xl font-heading font-bold">
                Featured <span className="gradient-text">Projects</span>
              </h2>
            </div>
            <Link to="/projects" className="inline-flex items-center gap-2 text-primary font-heading font-semibold hover:gap-4 transition-all">
              View All Projects <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <ScrollReveal key={project.title} delay={i * 120}>
              <div className="group relative rounded-2xl overflow-hidden hover-lift cursor-pointer h-[400px]">
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
      </div>
    </section>
  );
};
