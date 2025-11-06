import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { StatusBadge } from "./StatusBadge";
import { MapPin } from "lucide-react";

interface TeacherCardProps {
  id: string;
  name: string;
  avatar?: string;
  department: string;
  specialization: string;
  status: "free" | "in-class" | "on-leave";
  officeLocation?: string;
  onRequestAppointment?: () => void;
}

export function TeacherCard({ 
  id, 
  name, 
  avatar, 
  department, 
  specialization, 
  status, 
  officeLocation,
  onRequestAppointment 
}: TeacherCardProps) {
  const initials = name.split(" ").map(n => n[0]).join("");
  
  return (
    <Card className="p-4 hover-elevate" data-testid={`card-teacher-${id}`}>
      <div className="flex flex-col items-center text-center">
        <Avatar className="w-16 h-16 mb-3">
          <AvatarImage src={avatar} alt={name} />
          <AvatarFallback className="bg-primary/10 text-primary font-semibold">{initials}</AvatarFallback>
        </Avatar>
        
        <h3 className="font-semibold text-card-foreground mb-1">{name}</h3>
        <p className="text-sm text-muted-foreground mb-2">{specialization}</p>
        
        <StatusBadge status={status} />
        
        <div className="mt-3 w-full space-y-2 text-xs text-muted-foreground">
          <div className="flex items-center justify-center gap-1">
            <MapPin className="w-3 h-3" />
            <span>{officeLocation || "Not specified"}</span>
          </div>
          <p className="font-medium text-card-foreground">{department}</p>
        </div>

        <Button 
          className="w-full mt-4" 
          size="sm"
          disabled={status !== "free"}
          onClick={onRequestAppointment}
          data-testid={`button-request-appointment-${id}`}
        >
          {status === "free" ? "Request Appointment" : "Not Available"}
        </Button>
      </div>
    </Card>
  );
}
