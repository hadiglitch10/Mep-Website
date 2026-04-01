import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { MapPin, Calendar, Building2, ArrowRight, CheckCircle2, Lightbulb, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";

export interface ProjectDetail {
  title: string;
  category: string;
  image: string;
  description: string;
  client?: string;
  location?: string;
  year?: string;
  scope?: string[];
  systems?: string[];
  gallery?: string[];
  challenge?: string;
  solution?: string;
  result?: string;
  relatedProjects?: { title: string; image: string; category: string }[];
}

interface Props {
  project: ProjectDetail | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onSelectRelated?: (project: ProjectDetail) => void;
}

export const ProjectDetailDialog = ({ project, open, onOpenChange, onSelectRelated }: Props) => {
  const { t } = useLanguage();
  if (!project) return null;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-3xl max-h-[90vh] p-0 overflow-hidden border-border bg-card">
        <ScrollArea className="max-h-[90vh]">
          {/* Hero image */}
          <div className="relative h-[280px] w-full overflow-hidden">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" />
            <div className="absolute bottom-4 left-6 right-6">
              <Badge className="mb-2 bg-primary/20 text-primary border-none">{project.category}</Badge>
              <DialogHeader>
                <DialogTitle className="text-2xl md:text-3xl font-heading font-bold text-foreground">
                  {project.title}
                </DialogTitle>
                <DialogDescription className="text-muted-foreground text-sm mt-1">
                  {project.description}
                </DialogDescription>
              </DialogHeader>
            </div>
          </div>

          <div className="p-6 space-y-8">
            {/* Overview */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {project.client && (
                <div className="flex items-center gap-3 glass-panel p-4">
                  <Building2 className="w-5 h-5 text-primary shrink-0" />
                  <div>
                    <p className="text-xs text-muted-foreground">{t("dialog.client")}</p>
                    <p className="text-sm font-medium text-foreground">{project.client}</p>
                  </div>
                </div>
              )}
              {project.location && (
                <div className="flex items-center gap-3 glass-panel p-4">
                  <MapPin className="w-5 h-5 text-primary shrink-0" />
                  <div>
                    <p className="text-xs text-muted-foreground">{t("dialog.location")}</p>
                    <p className="text-sm font-medium text-foreground">{project.location}</p>
                  </div>
                </div>
              )}
              {project.year && (
                <div className="flex items-center gap-3 glass-panel p-4">
                  <Calendar className="w-5 h-5 text-primary shrink-0" />
                  <div>
                    <p className="text-xs text-muted-foreground">{t("dialog.year")}</p>
                    <p className="text-sm font-medium text-foreground">{project.year}</p>
                  </div>
                </div>
              )}
            </div>

            {/* Scope of Work */}
            {project.scope && project.scope.length > 0 && (
              <div>
                <h3 className="font-heading font-bold text-lg text-foreground mb-3">{t("dialog.scopeTitle")}</h3>
                <ul className="space-y-2">
                  {project.scope.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Systems Delivered */}
            {project.systems && project.systems.length > 0 && (
              <div>
                <h3 className="font-heading font-bold text-lg text-foreground mb-3">{t("dialog.systemsTitle")}</h3>
                <div className="flex flex-wrap gap-2">
                  {project.systems.map((sys) => (
                    <Badge key={sys} variant="secondary" className="bg-secondary text-secondary-foreground">
                      {sys}
                    </Badge>
                  ))}
                </div>
              </div>
            )}

            {/* Gallery */}
            {project.gallery && project.gallery.length > 0 && (
              <div>
                <h3 className="font-heading font-bold text-lg text-foreground mb-3">{t("dialog.galleryTitle")}</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {project.gallery.map((img, i) => (
                    <div key={i} className="rounded-lg overflow-hidden h-[140px]">
                      <img src={img} alt={`${project.title} gallery ${i + 1}`} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Case Study */}
            {(project.challenge || project.solution || project.result) && (
              <div>
                <h3 className="font-heading font-bold text-lg text-foreground mb-4">{t("dialog.caseStudyTitle")}</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {project.challenge && (
                    <div className="glass-panel p-4 space-y-2">
                      <div className="flex items-center gap-2 text-primary">
                        <Lightbulb className="w-4 h-4" />
                        <span className="text-sm font-semibold">{t("dialog.challenge")}</span>
                      </div>
                      <p className="text-sm text-muted-foreground">{project.challenge}</p>
                    </div>
                  )}
                  {project.solution && (
                    <div className="glass-panel p-4 space-y-2">
                      <div className="flex items-center gap-2 text-primary">
                        <CheckCircle2 className="w-4 h-4" />
                        <span className="text-sm font-semibold">{t("dialog.solution")}</span>
                      </div>
                      <p className="text-sm text-muted-foreground">{project.solution}</p>
                    </div>
                  )}
                  {project.result && (
                    <div className="glass-panel p-4 space-y-2">
                      <div className="flex items-center gap-2 text-primary">
                        <TrendingUp className="w-4 h-4" />
                        <span className="text-sm font-semibold">{t("dialog.result")}</span>
                      </div>
                      <p className="text-sm text-muted-foreground">{project.result}</p>
                    </div>
                  )}
                </div>
              </div>
            )}

            <Separator className="bg-border" />

            {/* Related Projects */}
            {project.relatedProjects && project.relatedProjects.length > 0 && (
              <div>
                <h3 className="font-heading font-bold text-lg text-foreground mb-3">{t("dialog.relatedTitle")}</h3>
                <div className="grid grid-cols-2 gap-3">
                  {project.relatedProjects.map((rp) => (
                    <div
                      key={rp.title}
                      className="group relative rounded-xl overflow-hidden cursor-pointer h-[140px] hover-lift"
                      onClick={() => onSelectRelated?.(rp as ProjectDetail)}
                    >
                      <img src={rp.image} alt={rp.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                      <div className="absolute inset-0 bg-gradient-to-t from-card via-card/40 to-transparent" />
                      <div className="absolute bottom-2 left-3 right-3">
                        <p className="text-xs text-primary font-medium">{rp.category}</p>
                        <p className="text-sm font-heading font-bold text-foreground">{rp.title}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-3 items-center justify-between glass-panel p-5">
              <p className="text-sm text-muted-foreground">{t("dialog.interestedText")}</p>
              <div className="flex gap-3">
                <Button variant="outline" size="sm" asChild>
                  <Link to="/contact">
                    {t("dialog.requestQuote")} <ArrowRight className="w-4 h-4 ml-1" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
};
