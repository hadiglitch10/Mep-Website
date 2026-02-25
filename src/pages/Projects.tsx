import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { AnimatedBackground } from "@/components/AnimatedBackground";
import { ScrollReveal } from "@/components/ScrollReveal";
import { ProjectDetailDialog, type ProjectDetail } from "@/components/ProjectDetailDialog";
import serviceNetwork from "@/assets/service-network.jpg";
import serviceHvac from "@/assets/service-hvac.jpg";
import aboutBg from "@/assets/about-bg.jpg";
import serviceUps from "@/assets/service-ups.jpg";
import serviceLowcurrent from "@/assets/service-lowcurrent.jpg";
import heroBg from "@/assets/hero-bg.jpg";

const projects: ProjectDetail[] = [
  {
    title: "Commercial Data Center",
    category: "IT Infrastructure",
    image: serviceNetwork,
    description: "Complete data center design and implementation with redundant cooling and power systems.",
    client: "Telecom Egypt",
    location: "Cairo, Egypt",
    year: "2023",
    scope: ["Full MEP design for Tier III data center", "Redundant precision cooling systems", "UPS and generator backup power", "Fire suppression (FM-200)", "Structured cabling"],
    systems: ["HVAC", "MV/LV Electrical", "UPS", "Fire Suppression", "ELV", "BMS"],
    gallery: [serviceNetwork, serviceHvac, aboutBg],
    challenge: "Ensuring 99.99% uptime in a high-density compute environment.",
    solution: "Implemented N+1 redundancy with hot-standby failover and real-time BMS monitoring.",
    result: "Achieved Tier III certification with zero downtime in the first year.",
  },
  {
    title: "Smart Building HVAC",
    category: "HVAC Systems",
    image: serviceHvac,
    description: "Intelligent climate control system for a 50,000 sqm commercial complex.",
    client: "Palm Hills Development",
    location: "6th of October City, Egypt",
    year: "2022",
    scope: ["Central chiller plant design", "VAV system for office floors", "BMS integration", "Ductwork and insulation"],
    systems: ["HVAC", "BMS", "Plumbing", "Fire Protection"],
    gallery: [serviceHvac, aboutBg, serviceNetwork],
    challenge: "Balancing energy efficiency with comfort across diverse space types.",
    solution: "VAV with CO2-based demand control ventilation and smart BMS scheduling.",
    result: "30% reduction in HVAC energy consumption.",
  },
  {
    title: "Corporate HQ MEP",
    category: "Full MEP",
    image: aboutBg,
    description: "End-to-end MEP engineering for a Fortune 500 regional headquarters.",
    client: "Confidential (Fortune 500)",
    location: "New Cairo, Egypt",
    year: "2024",
    scope: ["Complete MEP design and supervision", "MV/LV power distribution", "Central HVAC with VRF", "Full fire systems", "ELV systems", "Plumbing and drainage"],
    systems: ["HVAC", "MV/LV Electrical", "Fire Alarm", "Fire Fighting", "Plumbing", "ELV", "BMS"],
    gallery: [aboutBg, serviceNetwork, serviceHvac],
    challenge: "Tight schedule with 15+ subcontractors and premium finishing.",
    solution: "BIM-based clash detection resolving 200+ conflicts pre-construction.",
    result: "Delivered on-time with zero rework and follow-on project award.",
  },
  {
    title: "Hospital Power Systems",
    category: "Electrical",
    image: serviceUps,
    description: "Critical power infrastructure for a 500-bed medical facility.",
    client: "Ministry of Health",
    location: "Alexandria, Egypt",
    year: "2023",
    scope: ["MV/LV switchgear design", "Emergency generator systems", "UPS for critical care areas", "Isolated power for operating rooms", "Lightning protection"],
    systems: ["MV/LV Electrical", "UPS", "Generator", "Lightning Protection", "Earthing"],
    gallery: [serviceUps, serviceNetwork, heroBg],
    challenge: "Zero-tolerance power interruption in critical care and surgical areas.",
    solution: "Dual-feed MV supply with automatic transfer and isolated power panels for ORs.",
    result: "100% power continuity during all testing scenarios including simulated grid failure.",
  },
  {
    title: "Mall Security Systems",
    category: "Low Current",
    image: serviceLowcurrent,
    description: "Comprehensive security and BMS integration for a major shopping center.",
    client: "Majid Al Futtaim",
    location: "Cairo, Egypt",
    year: "2022",
    scope: ["IP CCTV (500+ cameras)", "Access control system", "Public address and voice alarm", "BMS integration", "Parking guidance system"],
    systems: ["CCTV", "Access Control", "PA/VA", "BMS", "Parking System", "Fire Alarm"],
    gallery: [serviceLowcurrent, serviceHvac, aboutBg],
    challenge: "Integrating multiple vendor systems into a unified command center.",
    solution: "Open-protocol BMS platform with custom middleware for cross-system integration.",
    result: "Single-pane monitoring of all building systems with 40% faster incident response.",
  },
  {
    title: "Industrial Complex",
    category: "Full MEP",
    image: heroBg,
    description: "Complete MEP systems for a large-scale industrial manufacturing facility.",
    client: "Arabian Cement Co.",
    location: "Ain Sokhna, Egypt",
    year: "2021",
    scope: ["Industrial HVAC and ventilation", "MV power distribution (33kV)", "Process piping and plumbing", "Fire fighting systems", "Compressed air systems"],
    systems: ["HVAC", "MV Electrical", "Process Piping", "Fire Fighting", "Compressed Air"],
    gallery: [heroBg, serviceUps, serviceLowcurrent],
    challenge: "Harsh environmental conditions and heavy-duty operational requirements.",
    solution: "Industrial-grade materials with corrosion-resistant coatings and explosion-proof equipment.",
    result: "Facility operational within 18 months, meeting all safety and performance standards.",
  },
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<ProjectDetail | null>(null);

  const handleSelectRelated = (rp: ProjectDetail) => {
    const full = projects.find((p) => p.title === rp.title);
    if (full) setSelectedProject({ ...full, relatedProjects: projects.filter((r) => r.title !== full.title).slice(0, 2) });
  };

  const enriched = projects.map((p) => ({
    ...p,
    relatedProjects: projects.filter((r) => r.title !== p.title).slice(0, 2),
  }));

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
            {enriched.map((project, i) => (
              <ScrollReveal key={project.title} delay={i * 80}>
                <div
                  className="group relative rounded-2xl overflow-hidden hover-lift cursor-pointer h-[380px]"
                  onClick={() => setSelectedProject(project)}
                >
                  <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" loading="lazy" />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <span className="inline-block px-3 py-1 text-xs font-medium bg-primary/20 text-primary rounded-full mb-3">{project.category}</span>
                    <h3 className="font-heading font-bold text-xl text-foreground mb-2">{project.title}</h3>
                    <p className="text-sm text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-300">{project.description}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </section>
      </main>
      <Footer />

      <ProjectDetailDialog
        project={selectedProject}
        open={!!selectedProject}
        onOpenChange={(open) => !open && setSelectedProject(null)}
        onSelectRelated={handleSelectRelated}
      />
    </div>
  );
};

export default Projects;
