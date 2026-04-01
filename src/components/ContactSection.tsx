import { ScrollReveal } from "@/components/ScrollReveal";
import { Phone, Mail, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

export const ContactSection = () => {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", message: "" });
  const { t } = useLanguage();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(t("contact.successMessage"));
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <section id="contact" className="section-padding relative">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Info */}
          <ScrollReveal direction="left">
            <span className="text-primary font-heading font-semibold text-sm tracking-wider uppercase mb-4 block">
              {t("contact.sectionLabel")}
            </span>
            <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6">
              {t("contact.heading1")} <span className="gradient-text">{t("contact.heading2")}</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-10">
              {t("contact.description")}
            </p>

            <div className="space-y-6">
              <a href="tel:+20222670303" className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">{t("contact.callUs")}</p>
                  <p className="font-heading font-semibold text-foreground">+202 226 703 03</p>
                </div>
              </a>
              <a href="mailto:info@mep-egypt.com" className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">{t("contact.emailUs")}</p>
                  <p className="font-heading font-semibold text-foreground">info@mep-egypt.com</p>
                </div>
              </a>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">{t("contact.visitUs")}</p>
                  <p className="font-heading font-semibold text-foreground">Cairo, Egypt</p>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Form */}
          <ScrollReveal direction="right">
            <form onSubmit={handleSubmit} className="glass-panel p-8">
              <h3 className="font-heading font-semibold text-xl mb-6 text-foreground">{t("contact.formTitle")}</h3>
              <div className="space-y-4">
                <input
                  type="text"
                  placeholder={t("contact.namePlaceholder")}
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg bg-muted border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                />
                <input
                  type="email"
                  placeholder={t("contact.emailPlaceholder")}
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg bg-muted border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                />
                <input
                  type="tel"
                  placeholder={t("contact.phonePlaceholder")}
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg bg-muted border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                />
                <textarea
                  placeholder={t("contact.messagePlaceholder")}
                  rows={4}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg bg-muted border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all resize-none"
                />
                <Button type="submit" size="lg" className="w-full gap-2 font-heading text-base py-6 shadow-elevated hover:-translate-y-1 transition-all">
                  <Send className="w-5 h-5" />
                  {t("contact.sendButton")}
                </Button>
              </div>
            </form>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};
