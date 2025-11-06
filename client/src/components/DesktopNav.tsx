import { Home, Users, GraduationCap, Briefcase, User } from "lucide-react";
import { Link, useLocation } from "wouter";
import { Card } from "@/components/ui/card";

export function DesktopNav() {
  const [location] = useLocation();

  const navItems = [
    { icon: Home, label: "Home", href: "/" },
    { icon: Users, label: "Study Hub", href: "/study-hub" },
    { icon: GraduationCap, label: "Teachers", href: "/teachers" },
    { icon: Briefcase, label: "SkillSwap", href: "/skillswap" },
    { icon: User, label: "Profile", href: "/profile" },
  ];

  return (
    <aside className="hidden md:block w-64 border-r bg-background">
      <nav className="sticky top-16 p-4 space-y-2">
        {navItems.map((item) => {
          const isActive = location === item.href;
          return (
            <Link key={item.href} href={item.href}>
              <Card
                className={`p-3 cursor-pointer hover-elevate active-elevate-2 ${
                  isActive ? "bg-primary/10 border-primary/20" : ""
                }`}
                data-testid={`nav-${item.label.toLowerCase().replace(/\s+/g, "-")}`}
              >
                <div className="flex items-center gap-3">
                  <item.icon className={`w-5 h-5 ${isActive ? "text-primary" : "text-muted-foreground"}`} />
                  <span className={`font-medium ${isActive ? "text-primary" : "text-card-foreground"}`}>
                    {item.label}
                  </span>
                </div>
              </Card>
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
