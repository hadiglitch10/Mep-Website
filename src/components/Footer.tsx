import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export const Footer = () => {
  const { t } = useLanguage();

  const serviceLinks = [
    { label: t("navbar.serviceItems.itNetwork"), href: "/services/it-network" },
    { label: t("navbar.serviceItems.lowCurrent"), href: "/services/low-current" },
    { label: t("navbar.serviceItems.hvac"), href: "/services/hvac" },
    { label: t("navbar.serviceItems.ups"), href: "/services/ups" },
    { label: t("navbar.serviceItems.firefighting"), href: "/services/firefighting" },
    { label: t("navbar.serviceItems.electrical"), href: "/services/electrical" },
  ];

  const quickLinks = [
    { label: t("footer.aboutUs"), href: "/about" },
    { label: t("footer.projects"), href: "/projects" },
    { label: t("footer.careers"), href: "/contact" },
    { label: t("footer.contact"), href: "/contact" },
  ];

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
              {t("footer.brandDesc")}
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading font-semibold text-foreground mb-4">{t("footer.servicesTitle")}</h4>
            <div className="space-y-2">
              {serviceLinks.map((s) => (
                <Link key={s.href} to={s.href} className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                  {s.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-semibold text-foreground mb-4">{t("footer.linksTitle")}</h4>
            <div className="space-y-2">
              {quickLinks.map((link) => (
                <Link key={link.label} to={link.href} className="block text-sm text-muted-foreground hover:text-primary transition-colors">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-semibold text-foreground mb-4">{t("footer.contactTitle")}</h4>
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
            © {new Date().getFullYear()} {t("footer.copyright")}
          </p>
        </div>
      </div>
    </footer>
  );
};
