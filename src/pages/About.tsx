import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { AnimatedBackground } from "@/components/AnimatedBackground";
import { ScrollReveal } from "@/components/ScrollReveal";
import { Target, Eye, Shield, Clock, Users, Award, CheckCircle } from "lucide-react";
import aboutBg from "@/assets/about-bg.jpg";

const About = () => {
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
              <span className="text-primary font-heading font-semibold text-sm tracking-wider uppercase mb-4 block">About Us</span>
              <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6">
                Engineering <span className="gradient-text">Excellence</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl">
                MEP Engineering Solutions is a leading provider of comprehensive mechanical, electrical, and plumbing solutions in the Middle East.
              </p>
            </ScrollReveal>
          </div>
        </section>

        {/* Story */}
        <section className="section-padding">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              <ScrollReveal>
                <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">Our Story</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Founded with a vision to transform the MEP engineering landscape in the Middle East, MEP Engineering Solutions has grown into a trusted partner for businesses across multiple sectors.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  We provide a complete range of electrical, HVAC, mechanical, CCTV and fire systems. Our team of experienced professionals is committed to delivering innovative solutions that exceed expectations.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Our vision is to be the premier contracting and supplies company in the Middle East, known for quality, innovation, and delivering value to our clients.
                </p>
              </ScrollReveal>

              <ScrollReveal direction="right">
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { icon: Target, title: "Values", desc: "Complete MEP solutions with integrity" },
                    { icon: Eye, title: "Vision", desc: "Premier MEP company in the Middle East" },
                    { icon: Shield, title: "Mission", desc: "Quality, innovation, and value delivery" },
                    { icon: Clock, title: "24/7 Support", desc: "Round the clock availability" },
                    { icon: Users, title: "Expert Team", desc: "50+ skilled engineers" },
                    { icon: Award, title: "ISO Certified", desc: "Quality management system" },
                  ].map((item) => (
                    <div key={item.title} className="glass-panel p-5 hover-lift group">
                      <item.icon className="w-6 h-6 text-primary mb-3 group-hover:scale-110 transition-transform" />
                      <h3 className="font-heading font-semibold text-sm text-foreground mb-1">{item.title}</h3>
                      <p className="text-xs text-muted-foreground">{item.desc}</p>
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
                Why Choose <span className="gradient-text">MEP</span>
              </h2>
            </ScrollReveal>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                "Complete MEP integration under one roof",
                "ISO-certified quality management",
                "15+ years of industry experience",
                "200+ successful projects delivered",
                "24/7 maintenance and support",
                "Sustainable engineering practices",
              ].map((item, i) => (
                <ScrollReveal key={item} delay={i * 80}>
                  <div className="flex items-start gap-3 glass-panel p-5 hover-lift">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-foreground font-medium">{item}</span>
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
