import { ScrollReveal } from "./ScrollReveal";

const clients = [
  "Vodafone Egypt",
  "Orange Egypt",
  "Etisalat",
  "National Bank of Egypt",
  "CIB",
  "Banque Misr",
  "Egyptian Armed Forces",
  "Cairo University",
  "Orascom",
  "SODIC",
  "Palm Hills",
  "Emaar Misr",
  "Hassan Allam",
  "Dar Al Handasah",
  "Hilton Hotels",
  "Marriott International",
];

export const ClientsSection = () => {
  return (
    <section className="py-20 px-4 md:px-8 border-t border-border overflow-hidden">
      <div className="container mx-auto mb-12 text-center">
        <ScrollReveal>
          <span className="text-primary font-heading text-sm tracking-widest uppercase">Trusted By</span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mt-2">
            Clients We've Worked With
          </h2>
          <p className="text-muted-foreground mt-3 max-w-xl mx-auto text-sm">
            Delivering excellence to leading organizations across the Middle East.
          </p>
        </ScrollReveal>
      </div>

      {/* Row 1 - scrolls left */}
      <div className="relative">
        <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-background to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-background to-transparent z-10" />
        <div className="flex animate-scroll-left gap-8 w-max">
          {[...clients, ...clients].map((name, i) => (
            <div
              key={`r1-${i}`}
              className="flex-shrink-0 px-8 py-4 rounded-xl border border-border bg-card/50 backdrop-blur-sm hover:border-primary/50 hover:bg-card transition-all duration-300 group"
            >
              <span className="text-sm font-heading font-semibold text-muted-foreground group-hover:text-foreground transition-colors whitespace-nowrap">
                {name}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Row 2 - scrolls right */}
      <div className="relative mt-6">
        <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-background to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-background to-transparent z-10" />
        <div className="flex animate-scroll-right gap-8 w-max">
          {[...clients.slice(8), ...clients.slice(0, 8), ...clients.slice(8), ...clients.slice(0, 8)].map((name, i) => (
            <div
              key={`r2-${i}`}
              className="flex-shrink-0 px-8 py-4 rounded-xl border border-border bg-card/50 backdrop-blur-sm hover:border-primary/50 hover:bg-card transition-all duration-300 group"
            >
              <span className="text-sm font-heading font-semibold text-muted-foreground group-hover:text-foreground transition-colors whitespace-nowrap">
                {name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
