import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Star, Award, Users, Briefcase, BookOpen, Edit } from "lucide-react";

export default function ProfilePage() {
  const userStats = [
    { icon: Briefcase, label: "Tasks Completed", value: 23, color: "text-blue-600" },
    { icon: Users, label: "Study Sessions", value: 47, color: "text-green-600" },
    { icon: Award, label: "Rating", value: "4.8", color: "text-yellow-600" },
    { icon: BookOpen, label: "Active Projects", value: 3, color: "text-purple-600" },
  ];

  const recentActivity = [
    { id: "1", type: "task", title: "Completed: Design Mobile App UI", date: "2 days ago" },
    { id: "2", type: "study", title: "Joined: Data Structures Final Prep", date: "3 days ago" },
    { id: "3", type: "task", title: "Bid accepted: Math Tutoring", date: "5 days ago" },
    { id: "4", type: "study", title: "Created: Physics Problem Solving", date: "1 week ago" },
  ];

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <Card className="p-6">
        <div className="flex items-start gap-6">
          <Avatar className="w-24 h-24">
            <AvatarImage src="" alt="User" />
            <AvatarFallback className="bg-primary/10 text-primary text-2xl font-semibold">RP</AvatarFallback>
          </Avatar>

          <div className="flex-1">
            <div className="flex items-start justify-between mb-2">
              <div>
                <h1 className="text-2xl font-bold text-card-foreground">Rohan Patel</h1>
                <p className="text-muted-foreground">Computer Science • 3rd Year</p>
              </div>
              <Button variant="outline" size="sm" data-testid="button-edit-profile">
                <Edit className="w-4 h-4 mr-2" />
                Edit Profile
              </Button>
            </div>

            <div className="flex items-center gap-2 mb-4">
              <div className="flex items-center gap-1">
                <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                <span className="font-semibold text-lg">4.8</span>
              </div>
              <span className="text-sm text-muted-foreground">(45 reviews)</span>
            </div>

            <p className="text-sm text-card-foreground mb-4">
              Passionate about design and development. Always eager to learn and collaborate on interesting projects.
            </p>

            <div className="flex flex-wrap gap-2">
              <Badge variant="secondary">UI/UX Design</Badge>
              <Badge variant="secondary">Web Development</Badge>
              <Badge variant="secondary">Data Structures</Badge>
              <Badge variant="secondary">Mathematics</Badge>
            </div>
          </div>
        </div>
      </Card>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {userStats.map((stat, idx) => (
          <Card key={idx} className="p-4">
            <div className="flex flex-col items-center text-center">
              <div className={`rounded-lg bg-muted p-3 mb-2 ${stat.color}`}>
                <stat.icon className="w-6 h-6" />
              </div>
              <div className="text-2xl font-bold text-card-foreground">{stat.value}</div>
              <div className="text-xs text-muted-foreground">{stat.label}</div>
            </div>
          </Card>
        ))}
      </div>

      <Card className="p-6">
        <h2 className="text-xl font-semibold text-card-foreground mb-4">Recent Activity</h2>
        <div className="space-y-4">
          {recentActivity.map((activity) => (
            <div key={activity.id} className="flex items-start gap-3 pb-4 border-b last:border-0 last:pb-0">
              <div className={`w-2 h-2 rounded-full mt-2 ${
                activity.type === "task" ? "bg-blue-500" : "bg-green-500"
              }`} />
              <div className="flex-1">
                <p className="text-sm font-medium text-card-foreground">{activity.title}</p>
                <p className="text-xs text-muted-foreground mt-1">{activity.date}</p>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}
