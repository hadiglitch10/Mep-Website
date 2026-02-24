import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="border-t border-border py-16 px-4 md:px-8">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <Link to="/" className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center font-heading font-bold text-primary-foreground text-lg">
                M
              </div>
              <div>
                <span className="font-heading font-bold text-foreground text-lg leading-none block">MEP</span>
                <span className="text-muted-foreground text-xs tracking-wider">ENGINEERING SOLUTIONS</span>
              </div>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Your trusted partner for comprehensive MEP engineering solutions in the Middle East.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading font-semibold text-foreground mb-4">Services</h4>
            <div className="space-y-2">
              {["IT & Network", "Low Current", "HVAC Systems", "UPS Systems", "Firefighting", "Electrical"].map((s) => (
                <Link key={s} to="/services" className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                  {s}
                </Link>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-semibold text-foreground mb-4">Quick Links</h4>
            <div className="space-y-2">
              {[
                { label: "About Us", href: "/about" },
                { label: "Projects", href: "/projects" },
                { label: "Careers", href: "/#contact" },
                { label: "Contact", href: "/#contact" },
              ].map((link) => (
                <Link key={link.label} to={link.href} className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-semibold text-foreground mb-4">Contact</h4>
            <div className="space-y-3">
              <a href="tel:+20222670303" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
                <Phone className="w-4 h-4" /> +202 226 703 03
              </a>
              <a href="mailto:info@mep-egypt.com" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
                <Mail className="w-4 h-4" /> info@mep-egypt.com
              </a>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin className="w-4 h-4" /> Cairo, Egypt
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} MEP Engineering Solutions. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
