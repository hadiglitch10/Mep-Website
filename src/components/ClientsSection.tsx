import { ScrollReveal } from "./ScrollReveal";
import { useLanguage } from "@/contexts/LanguageContext";

const clients = [
  { name: "Vodafone Egypt", logo: "https://logo.clearbit.com/vodafone.com" },
  { name: "Orange Egypt", logo: "https://logo.clearbit.com/orange.com" },
  { name: "Etisalat", logo: "https://logo.clearbit.com/etisalat.ae" },
  { name: "National Bank of Egypt", logo: "https://logo.clearbit.com/nbe.com.eg" },
  { name: "CIB Egypt", logo: "https://logo.clearbit.com/cibeg.com" },
  { name: "Banque Misr", logo: "https://logo.clearbit.com/banquemisr.com" },
  { name: "Egyptian Armed Forces", logo: null },
  { name: "Cairo University", logo: "https://logo.clearbit.com/cu.edu.eg" },
  { name: "Orascom", logo: "https://logo.clearbit.com/orascom.com" },
  { name: "SODIC", logo: "https://logo.clearbit.com/sodic.com" },
  { name: "Palm Hills", logo: "https://logo.clearbit.com/palmhillsdevelopments.com" },
  { name: "Emaar Misr", logo: "https://logo.clearbit.com/emaar.com" },
  { name: "Hassan Allam", logo: "https://logo.clearbit.com/hassanallam.com" },
  { name: "Dar Al Handasah", logo: "https://logo.clearbit.com/dargroup.com" },
  { name: "Hilton Hotels", logo: "https://logo.clearbit.com/hilton.com" },
  { name: "Marriott International", logo: "https://logo.clearbit.com/marriott.com" },
];

const ClientCard = ({ name, logo }: { name: string; logo: string | null }) => (
  <div className="flex-shrink-0 px-6 py-4 rounded-xl border border-border bg-card/50 backdrop-blur-sm hover:border-primary/50 hover:bg-card transition-all duration-300 group flex items-center gap-3 min-w-[200px]">
    {logo ? (
      <img
        src={logo}
        alt={`${name} logo`}
        className="w-8 h-8 object-contain rounded-sm bg-white p-0.5 flex-shrink-0"
        onError={(e) => {
          (e.target as HTMLImageElement).style.display = "none";
        }}
      />
    ) : (
      <div className="w-8 h-8 rounded-sm bg-primary/10 flex items-center justify-center flex-shrink-0">
        <span className="text-xs font-bold text-primary">{name.charAt(0)}</span>
      </div>
    )}
    <span className="text-sm font-heading font-semibold text-muted-foreground group-hover:text-foreground transition-colors whitespace-nowrap">
      {name}
    </span>
  </div>
);

export const ClientsSection = () => {
  const { t } = useLanguage();
  const row1 = clients;
  const row2 = [...clients.slice(8), ...clients.slice(0, 8)];

  return (
    <section className="py-20 px-4 md:px-8 border-t border-border overflow-hidden">
      <div className="container mx-auto mb-12 text-center">
        <ScrollReveal>
          <span className="text-primary font-heading text-sm tracking-widest uppercase">{t("clients.sectionLabel")}</span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mt-2">
            {t("clients.heading")}
          </h2>
          <p className="text-muted-foreground mt-3 max-w-xl mx-auto text-sm">
            {t("clients.description")}
          </p>
        </ScrollReveal>
      </div>

      {/* Row 1 - scrolls left */}
      <div className="relative">
        <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-background to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-background to-transparent z-10" />
        <div className="flex animate-scroll-left gap-6 w-max">
          {[...row1, ...row1].map((client, i) => (
            <ClientCard key={`r1-${i}`} {...client} />
          ))}
        </div>
      </div>

      {/* Row 2 - scrolls right */}
      <div className="relative mt-6">
        <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-background to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-background to-transparent z-10" />
        <div className="flex animate-scroll-right gap-6 w-max">
          {[...row2, ...row2].map((client, i) => (
            <ClientCard key={`r2-${i}`} {...client} />
          ))}
        </div>
      </div>
    </section>
  );
};
