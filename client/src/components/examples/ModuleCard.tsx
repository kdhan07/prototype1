import { ModuleCard } from "../ModuleCard";
import { Users, GraduationCap, Briefcase } from "lucide-react";

export default function ModuleCardExample() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6">
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
  );
}
