import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import heroBg from "@/assets/hero-bg.jpg";

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img src={heroBg} alt="MEP Engineering data center infrastructure" className="w-full h-full object-cover" loading="eager" />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-background/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/50" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 md:px-8 relative z-10 pt-32">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 glass-panel px-4 py-2 mb-8 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
            <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-sm text-muted-foreground font-medium">MEP Engineering Solutions</span>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-heading font-bold leading-[0.95] mb-6 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>Precision in
Every System 
Your Business<br />
            <span className="gradient-text">Every System</span> For <br />
            Your Business
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-xl mb-10 leading-relaxed animate-fade-in-up" style={{ animationDelay: "0.35s" }}>
            We deliver high-quality, integrated MEP solutions across HVAC, data centers, UPS systems, low current, firefighting, and more.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up" style={{ animationDelay: "0.5s" }}>
            <Link to="/#contact">
              <Button size="lg" className="gap-2 font-heading text-base px-8 py-6 shadow-glow hover:shadow-[0_0_60px_-10px_hsl(var(--primary)/0.5)] transition-shadow">
                Request a Quote
                <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
            <Link to="/services">
              <Button variant="outline" size="lg" className="font-heading text-base px-8 py-6 border-glass-border hover:bg-muted">
                Our Services
              </Button>
            </Link>
          </div>
        </div>

        {/* Stats bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 mt-20 md:mt-32 animate-fade-in-up" style={{ animationDelay: "0.7s" }}>
          {[{ value: "15+", label: "Years Experience" },
          { value: "200+", label: "Projects Completed" },
          { value: "50+", label: "Expert Engineers" },
          { value: "24/7", label: "Support Available" }].
          map((stat) =>
          <div key={stat.label} className="glass-panel p-4 md:p-6 text-center hover-lift">
              <div className="text-2xl md:text-4xl font-heading font-bold text-primary mb-1">{stat.value}</div>
              <div className="text-xs md:text-sm text-muted-foreground">{stat.label}</div>
            </div>
          )}
        </div>
      </div>
    </section>);

};