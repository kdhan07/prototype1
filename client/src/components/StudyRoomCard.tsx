import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { StatusBadge } from "./StatusBadge";
import { Badge } from "@/components/ui/badge";
import { Users, Calendar, Clock } from "lucide-react";
import { format } from "date-fns";

interface StudyRoomCardProps {
  id: string;
  name: string;
  subject: string;
  memberCount: number;
  maxMembers: number;
  status: "active" | "scheduled";
  scheduledAt?: Date;
  onJoin?: () => void;
}

export function StudyRoomCard({ 
  id, 
  name, 
  subject, 
  memberCount, 
  maxMembers, 
  status, 
  scheduledAt,
  onJoin 
}: StudyRoomCardProps) {
  return (
    <Card className="p-4 hover-elevate" data-testid={`card-study-room-${id}`}>
      <div className="flex items-start justify-between mb-3">
        <div className="flex-1 min-w-0">
          <h3 className="font-semibold text-card-foreground mb-1 truncate">{name}</h3>
          <Badge variant="secondary" className="text-xs">{subject}</Badge>
        </div>
        <StatusBadge status={status} />
      </div>
      
      <div className="space-y-2 mb-4 text-sm text-muted-foreground">
        <div className="flex items-center gap-2">
          <Users className="w-4 h-4" />
          <span>{memberCount}/{maxMembers} members</span>
        </div>
        {scheduledAt && (
          <>
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span>{format(scheduledAt, "MMM dd, yyyy")}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>{format(scheduledAt, "h:mm a")}</span>
            </div>
          </>
        )}
      </div>

      <Button 
        className="w-full" 
        size="sm" 
        onClick={onJoin}
        disabled={memberCount >= maxMembers}
        data-testid={`button-join-room-${id}`}
      >
        {memberCount >= maxMembers ? "Room Full" : status === "active" ? "Join Now" : "Join Session"}
      </Button>
    </Card>
  );
}
