import { useState } from "react";
import { TaskCard } from "@/components/TaskCard";
import { BidCard } from "@/components/BidCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Search, Plus, X } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

export default function SkillSwapPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedTask, setSelectedTask] = useState<string | null>(null);
  const [isDetailOpen, setIsDetailOpen] = useState(false);

  const categories = ["All", "Design", "Tutoring", "Data Entry", "Development", "Writing"];

  const tasks = [
    {
      id: "1",
      title: "Design Mobile App UI",
      description: "Need a modern, clean UI design for a fitness tracking mobile app. Should include 5-6 screens with Material Design principles.",
      category: "Design",
      minBudget: 500,
      maxBudget: 1000,
      deadline: new Date(Date.now() + 86400000 * 3),
      status: "open" as const,
      bidCount: 5,
    },
    {
      id: "2",
      title: "Math Tutoring - Calculus",
      description: "Looking for help with calculus concepts, specifically integration and differentiation. 2 hours per week.",
      category: "Tutoring",
      minBudget: 200,
      maxBudget: 300,
      deadline: new Date(Date.now() + 86400000),
      status: "in-progress" as const,
      bidCount: 8,
    },
    {
      id: "3",
      title: "Digitize Handwritten Notes",
      description: "Convert 50 pages of handwritten chemistry notes into typed PDF format with proper formatting.",
      category: "Data Entry",
      minBudget: 150,
      maxBudget: 250,
      deadline: new Date(Date.now() + 86400000 * 7),
      status: "open" as const,
      bidCount: 3,
    },
  ];

  const bids = [
    { id: "1", bidderName: "Neha Sharma", bidderRating: 4.8, amount: 750, message: "I have 3 years of UI/UX design experience. I can deliver high-quality mockups within 2 days.", status: "pending" as const },
    { id: "2", bidderName: "Rahul Verma", bidderRating: 4.5, amount: 600, message: "I'm a graphic design student and would love to help with this project.", status: "pending" as const },
    { id: "3", bidderName: "Kavya Iyer", bidderRating: 4.9, amount: 850, message: "Professional designer with portfolio. Can start immediately.", status: "pending" as const },
  ];

  const openTaskDetail = (taskId: string) => {
    setSelectedTask(taskId);
    setIsDetailOpen(true);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground mb-2">SkillSwap Marketplace</h1>
          <p className="text-muted-foreground">Post tasks, bid on projects, and collaborate</p>
        </div>
        <Button data-testid="button-post-task">
          <Plus className="w-4 h-4 mr-2" />
          Post Task
        </Button>
      </div>

      <div className="flex gap-4">
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <Input
            placeholder="Search tasks..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-9"
            data-testid="input-search-tasks"
          />
        </div>
      </div>

      <div className="flex flex-wrap gap-2">
        {categories.map((category) => (
          <Badge
            key={category}
            variant={selectedCategory === category.toLowerCase() ? "default" : "secondary"}
            className="cursor-pointer hover-elevate"
            onClick={() => setSelectedCategory(category.toLowerCase())}
            data-testid={`filter-category-${category.toLowerCase()}`}
          >
            {category}
          </Badge>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {tasks.map((task) => (
          <TaskCard
            key={task.id}
            {...task}
            onViewDetails={() => openTaskDetail(task.id)}
          />
        ))}
      </div>

      <Dialog open={isDetailOpen} onOpenChange={setIsDetailOpen}>
        <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>Design Mobile App UI</DialogTitle>
            <DialogDescription>
              Need a modern, clean UI design for a fitness tracking mobile app. Should include 5-6 screens with Material Design principles.
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-sm text-muted-foreground">Budget Range</div>
                <div className="text-xl font-bold text-green-600">₹500 - ₹1000</div>
              </div>
              <div>
                <div className="text-sm text-muted-foreground">Deadline</div>
                <div className="text-sm font-medium">3 days from now</div>
              </div>
              <Badge>Design</Badge>
            </div>

            <div>
              <h3 className="font-semibold mb-3">Bids ({bids.length})</h3>
              <div className="space-y-3">
                {bids.map((bid) => (
                  <BidCard
                    key={bid.id}
                    {...bid}
                    canAccept={true}
                    onAccept={() => console.log("Accept bid", bid.id)}
                  />
                ))}
              </div>
            </div>

            <Button className="w-full" data-testid="button-place-bid">
              Place Your Bid
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
