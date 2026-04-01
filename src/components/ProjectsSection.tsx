import { useState } from "react";
import { ScrollReveal } from "@/components/ScrollReveal";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { ProjectDetailDialog, type ProjectDetail } from "@/components/ProjectDetailDialog";
import serviceNetwork from "@/assets/service-network.jpg";
import serviceHvac from "@/assets/service-hvac.jpg";
import aboutBg from "@/assets/about-bg.jpg";
import { useLanguage } from "@/contexts/LanguageContext";

const projects: ProjectDetail[] = [
  {
    title: "Commercial Data Center",
    category: "IT Infrastructure",
    image: serviceNetwork,
    description: "Complete data center design and implementation with redundant cooling and power systems.",
    client: "Telecom Egypt",
    location: "Cairo, Egypt",
    year: "2023",
    scope: [
      "Full MEP design for Tier III data center",
      "Redundant precision cooling systems",
      "UPS and generator backup power infrastructure",
      "Fire suppression (FM-200) system",
      "Structured cabling and cable management",
    ],
    systems: ["HVAC", "MV/LV Electrical", "UPS", "Fire Suppression", "ELV", "BMS"],
    gallery: [serviceNetwork, serviceHvac, aboutBg],
    challenge: "Ensuring 99.99% uptime in a high-density compute environment with strict thermal requirements.",
    solution: "Implemented N+1 redundancy across all critical systems with hot-standby failover and real-time BMS monitoring.",
    result: "Achieved Tier III certification with zero downtime during commissioning and first year of operation.",
  },
  {
    title: "Smart Building HVAC",
    category: "HVAC Systems",
    image: serviceHvac,
    description: "Intelligent climate control system for a 50,000 sqm commercial complex.",
    client: "Palm Hills Development",
    location: "6th of October City, Egypt",
    year: "2022",
    scope: [
      "Central chiller plant design and installation",
      "VAV system for office floors",
      "Dedicated AHUs for common areas",
      "BMS integration for energy optimization",
      "Ductwork and insulation for all zones",
    ],
    systems: ["HVAC", "BMS", "Plumbing", "Fire Protection"],
    gallery: [serviceHvac, aboutBg, serviceNetwork],
    challenge: "Balancing energy efficiency with occupant comfort across diverse space types in a mixed-use complex.",
    solution: "Deployed variable air volume (VAV) with CO2-based demand control ventilation and smart scheduling via BMS.",
    result: "30% reduction in HVAC energy consumption compared to conventional systems while maintaining optimal comfort.",
  },
  {
    title: "Corporate HQ MEP",
    category: "Full MEP",
    image: aboutBg,
    description: "End-to-end MEP engineering for a Fortune 500 regional headquarters.",
    client: "Confidential (Fortune 500)",
    location: "New Cairo, Egypt",
    year: "2024",
    scope: [
      "Complete MEP design and supervision",
      "MV/LV power distribution",
      "Central HVAC with VRF for executive floors",
      "Full fire alarm and suppression systems",
      "ELV: CCTV, access control, PA system",
      "Plumbing and drainage systems",
    ],
    systems: ["HVAC", "MV/LV Electrical", "Fire Alarm", "Fire Fighting", "Plumbing", "ELV", "BMS"],
    gallery: [aboutBg, serviceNetwork, serviceHvac],
    challenge: "Tight schedule with complex coordination across 15+ subcontractors and premium finishing requirements.",
    solution: "Used BIM-based clash detection and weekly MEP coordination meetings to resolve 200+ conflicts pre-construction.",
    result: "Delivered on-time with zero rework, earning client commendation and a follow-on project award.",
  },
];

export const ProjectsSection = () => {
  const [selectedProject, setSelectedProject] = useState<ProjectDetail | null>(null);
  const { t } = useLanguage();

  const handleSelectRelated = (rp: ProjectDetail) => {
    const full = projects.find((p) => p.title === rp.title);
    if (full) setSelectedProject(full);
  };

  const enriched = projects.map((p) => ({
    ...p,
    relatedProjects: projects.filter((r) => r.title !== p.title).slice(0, 2),
  }));

  return (
    <section id="projects" className="section-padding relative">
      <div className="container mx-auto">
        <ScrollReveal>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <span className="text-primary font-heading font-semibold text-sm tracking-wider uppercase mb-4 block">
                {t("projects.sectionLabel")}
              </span>
              <h2 className="text-3xl md:text-5xl font-heading font-bold">
                {t("projects.heading1")} <span className="gradient-text">{t("projects.heading2")}</span>
              </h2>
            </div>
            <Link to="/projects" className="inline-flex items-center gap-2 text-primary font-heading font-semibold hover:gap-4 transition-all">
              {t("projects.viewAll")} <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {enriched.map((project, i) => (
            <ScrollReveal key={project.title} delay={i * 120}>
              <div
                className="group relative rounded-2xl overflow-hidden hover-lift cursor-pointer h-[400px]"
                onClick={() => setSelectedProject(project)}
              >
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

      <ProjectDetailDialog
        project={selectedProject}
        open={!!selectedProject}
        onOpenChange={(open) => !open && setSelectedProject(null)}
        onSelectRelated={handleSelectRelated}
      />
    </section>
  );
};
