import { Card } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";
import { Link } from "wouter";

interface ModuleCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  href: string;
  stats?: { label: string; value: string | number }[];
  gradient?: string;
}

export function ModuleCard({ title, description, icon: Icon, href, stats, gradient }: ModuleCardProps) {
  return (
    <Link href={href}>
      <Card className={`p-6 hover-elevate active-elevate-2 cursor-pointer h-full transition-all ${gradient || ""}`} data-testid={`card-module-${title.toLowerCase().replace(/\s+/g, "-")}`}>
        <div className="flex items-start gap-4">
          <div className="rounded-lg bg-primary/10 p-3 text-primary">
            <Icon className="w-6 h-6" />
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="text-lg font-semibold mb-1 text-card-foreground">{title}</h3>
            <p className="text-sm text-muted-foreground mb-3">{description}</p>
            {stats && stats.length > 0 && (
              <div className="flex flex-wrap gap-4 mt-4">
                {stats.map((stat, idx) => (
                  <div key={idx}>
                    <div className="text-2xl font-bold text-card-foreground">{stat.value}</div>
                    <div className="text-xs text-muted-foreground">{stat.label}</div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </Card>
    </Link>
  );
}
