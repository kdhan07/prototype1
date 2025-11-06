import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { StatusBadge } from "./StatusBadge";
import { Clock, DollarSign, MessageSquare } from "lucide-react";
import { format, formatDistanceToNow } from "date-fns";

interface TaskCardProps {
  id: string;
  title: string;
  description: string;
  category: string;
  minBudget: number;
  maxBudget: number;
  deadline: Date;
  status: "open" | "in-progress" | "completed" | "closed";
  bidCount?: number;
  onViewDetails?: () => void;
}

export function TaskCard({ 
  id, 
  title, 
  description, 
  category, 
  minBudget, 
  maxBudget, 
  deadline, 
  status,
  bidCount = 0,
  onViewDetails 
}: TaskCardProps) {
  const isExpiringSoon = deadline.getTime() - Date.now() < 86400000 * 2;
  
  return (
    <Card className="p-4 hover-elevate" data-testid={`card-task-${id}`}>
      <div className="flex items-start justify-between mb-3">
        <Badge variant="secondary" className="text-xs">{category}</Badge>
        <StatusBadge status={status} />
      </div>
      
      <h3 className="font-semibold text-card-foreground mb-2 line-clamp-2">{title}</h3>
      <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{description}</p>
      
      <div className="space-y-2 mb-4 text-sm">
        <div className="flex items-center gap-2 text-card-foreground">
          <DollarSign className="w-4 h-4 text-green-600" />
          <span className="font-medium">₹{minBudget} - ₹{maxBudget}</span>
        </div>
        <div className={`flex items-center gap-2 ${isExpiringSoon ? "text-destructive" : "text-muted-foreground"}`}>
          <Clock className="w-4 h-4" />
          <span className="text-xs">
            {formatDistanceToNow(deadline, { addSuffix: true })}
          </span>
        </div>
        {bidCount > 0 && (
          <div className="flex items-center gap-2 text-muted-foreground">
            <MessageSquare className="w-4 h-4" />
            <span className="text-xs">{bidCount} {bidCount === 1 ? "bid" : "bids"}</span>
          </div>
        )}
      </div>

      <Button 
        className="w-full" 
        size="sm"
        variant={status === "open" ? "default" : "secondary"}
        onClick={onViewDetails}
        data-testid={`button-view-task-${id}`}
      >
        {status === "open" ? "Place Bid" : "View Details"}
      </Button>
    </Card>
  );
}
