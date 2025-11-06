import { ModuleCard } from "@/components/ModuleCard";
import { Users, GraduationCap, Briefcase, TrendingUp } from "lucide-react";
import { Card } from "@/components/ui/card";

export default function HomePage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-foreground mb-2">Welcome back, Student!</h1>
        <p className="text-muted-foreground">Here's what's happening on campus today</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="p-4">
          <div className="flex items-center gap-3">
            <div className="rounded-lg bg-blue-500/10 p-2">
              <Users className="w-5 h-5 text-blue-600" />
            </div>
            <div>
              <div className="text-2xl font-bold text-card-foreground">12</div>
              <div className="text-xs text-muted-foreground">Active Study Rooms</div>
            </div>
          </div>
        </Card>

        <Card className="p-4">
          <div className="flex items-center gap-3">
            <div className="rounded-lg bg-green-500/10 p-2">
              <GraduationCap className="w-5 h-5 text-green-600" />
            </div>
            <div>
              <div className="text-2xl font-bold text-card-foreground">8</div>
              <div className="text-xs text-muted-foreground">Teachers Available</div>
            </div>
          </div>
        </Card>

        <Card className="p-4">
          <div className="flex items-center gap-3">
            <div className="rounded-lg bg-purple-500/10 p-2">
              <Briefcase className="w-5 h-5 text-purple-600" />
            </div>
            <div>
              <div className="text-2xl font-bold text-card-foreground">24</div>
              <div className="text-xs text-muted-foreground">Open Tasks</div>
            </div>
          </div>
        </Card>

        <Card className="p-4">
          <div className="flex items-center gap-3">
            <div className="rounded-lg bg-orange-500/10 p-2">
              <TrendingUp className="w-5 h-5 text-orange-600" />
            </div>
            <div>
              <div className="text-2xl font-bold text-card-foreground">4.8</div>
              <div className="text-xs text-muted-foreground">Your Rating</div>
            </div>
          </div>
        </Card>
      </div>

      <div>
        <h2 className="text-xl font-semibold text-foreground mb-4">Explore Modules</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <ModuleCard
            title="Group Study Hub"
            description="Create or join study rooms, chat with peers, and schedule sessions"
            icon={Users}
            href="/study-hub"
            stats={[
              { label: "Active Rooms", value: 12 },
              { label: "Members", value: 48 }
            ]}
          />
          <ModuleCard
            title="Teacher's Cabin"
            description="Check teacher availability and request appointments"
            icon={GraduationCap}
            href="/teachers"
            stats={[
              { label: "Available", value: 8 },
              { label: "Departments", value: 5 }
            ]}
          />
          <ModuleCard
            title="SkillSwap"
            description="Post tasks, receive bids, and collaborate on projects"
            icon={Briefcase}
            href="/skillswap"
            stats={[
              { label: "Open Tasks", value: 24 },
              { label: "Active Bids", value: 67 }
            ]}
          />
        </div>
      </div>
    </div>
  );
}
