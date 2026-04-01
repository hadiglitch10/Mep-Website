import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, Sun, Moon, Languages } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";
import { useLanguage } from "@/contexts/LanguageContext";

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);
  const location = useLocation();
  const { theme, setTheme } = useTheme();
  const { t, lang, toggleLang } = useLanguage();

  const navItems = [
    { label: t("navbar.home"), href: "/" },
    { label: t("navbar.about"), href: "/about" },
    {
      label: t("navbar.services"),
      href: "/services",
      children: [
        { label: t("navbar.serviceItems.itNetwork"), href: "/services/it-network" },
        { label: t("navbar.serviceItems.lowCurrent"), href: "/services/low-current" },
        { label: t("navbar.serviceItems.hvac"), href: "/services/hvac" },
        { label: t("navbar.serviceItems.ups"), href: "/services/ups" },
        { label: t("navbar.serviceItems.firefighting"), href: "/services/firefighting" },
        { label: t("navbar.serviceItems.electrical"), href: "/services/electrical" },
      ],
    },
    { label: t("navbar.projects"), href: "/projects" },
    { label: t("navbar.contact"), href: "/contact" },
  ];

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setMegaOpen(false);
  }, [location]);

  const isDark = theme === "dark";

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "glass-panel shadow-elevated py-3" : "py-5 bg-transparent"
      }`}
    >
      <nav className="container mx-auto flex items-center justify-between px-4 md:px-8">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center font-heading font-bold text-primary-foreground text-lg transition-transform duration-300 group-hover:scale-110">
            M
          </div>
          <div>
            <span className="font-heading font-bold text-foreground text-lg leading-none block">MEP</span>
            <span className="text-muted-foreground text-xs tracking-wider">ENGINEERING</span>
          </div>
        </Link>

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center gap-1">
          {navItems.map((item) => (
            <div
              key={item.label}
              className="relative"
              onMouseEnter={() => item.children && setMegaOpen(true)}
              onMouseLeave={() => item.children && setMegaOpen(false)}
            >
              <Link
                to={item.href}
                className={`px-4 py-2 text-sm font-medium transition-colors rounded-lg hover:text-primary hover:bg-muted ${
                  location.pathname === item.href ? "text-primary" : "text-muted-foreground"
                }`}
              >
                {item.label}
              </Link>
              {item.children && megaOpen && (
                <div
                  className="absolute top-full mt-2 glass-panel p-4 min-w-[240px] animate-fade-in-up"
                  style={{
                    animationDuration: "0.2s",
                    left: lang === "ar" ? "auto" : "0",
                    right: lang === "ar" ? "0" : "auto",
                  }}
                >
                  {item.children.map((child) => (
                    <Link
                      key={child.label}
                      to={child.href}
                      className="block px-4 py-2.5 text-sm text-muted-foreground hover:text-primary hover:bg-muted rounded-md transition-colors"
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Controls: Language + Theme + CTA + Mobile toggle */}
        <div className="flex items-center gap-2">
          {/* Language toggle */}
          <button
            onClick={toggleLang}
            title={lang === "en" ? "Switch to Arabic" : "التبديل إلى الإنجليزية"}
            className="hidden md:flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-muted-foreground hover:text-primary hover:bg-muted rounded-lg transition-colors border border-border"
          >
            <Languages className="w-3.5 h-3.5" />
            {lang === "en" ? "AR" : "EN"}
          </button>

          {/* Theme toggle */}
          <button
            onClick={() => setTheme(isDark ? "light" : "dark")}
            title={isDark ? "Switch to light mode" : "Switch to dark mode"}
            className="hidden md:flex items-center justify-center w-9 h-9 text-muted-foreground hover:text-primary hover:bg-muted rounded-lg transition-colors border border-border"
          >
            {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>

          {/* CTA */}
          <Link to="/contact">
            <Button variant="default" size="sm" className="hidden md:inline-flex gap-2 font-heading">
              <Phone className="w-4 h-4" />
              {t("navbar.requestQuote")}
            </Button>
          </Link>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden p-2 text-foreground hover:text-primary transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden glass-panel mx-4 mt-2 p-4 animate-fade-in-up" style={{ animationDuration: "0.2s" }}>
          {navItems.map((item) => (
            <div key={item.label}>
              <Link
                to={item.href}
                className="block px-4 py-3 text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
              >
                {item.label}
              </Link>
              {item.children && (
                <div className="ps-6">
                  {item.children.map((child) => (
                    <Link
                      key={child.label}
                      to={child.href}
                      className="block px-4 py-2 text-xs text-muted-foreground hover:text-primary transition-colors"
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}

          {/* Mobile controls row */}
          <div className="flex items-center gap-2 mt-4 px-4">
            <button
              onClick={toggleLang}
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-muted-foreground hover:text-primary rounded-lg transition-colors border border-border"
            >
              <Languages className="w-3.5 h-3.5" />
              {lang === "en" ? "AR" : "EN"}
            </button>
            <button
              onClick={() => setTheme(isDark ? "light" : "dark")}
              className="flex items-center justify-center w-9 h-9 text-muted-foreground hover:text-primary rounded-lg transition-colors border border-border"
            >
              {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>
          </div>

          <Link to="/contact" className="block mt-3">
            <Button variant="default" size="sm" className="w-full gap-2 font-heading">
              <Phone className="w-4 h-4" />
              {t("navbar.requestQuote")}
            </Button>
          </Link>
        </div>
      )}
    </header>
  );
};
