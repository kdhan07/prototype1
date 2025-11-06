import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Star, DollarSign } from "lucide-react";

interface BidCardProps {
  id: string;
  bidderName: string;
  bidderAvatar?: string;
  bidderRating: number;
  amount: number;
  message: string;
  status: "pending" | "accepted" | "rejected";
  onAccept?: () => void;
  canAccept?: boolean;
}

export function BidCard({ 
  id, 
  bidderName, 
  bidderAvatar, 
  bidderRating, 
  amount, 
  message, 
  status,
  onAccept,
  canAccept = false
}: BidCardProps) {
  const initials = bidderName.split(" ").map(n => n[0]).join("");
  
  return (
    <Card className="p-4" data-testid={`card-bid-${id}`}>
      <div className="flex items-start gap-3">
        <Avatar className="w-10 h-10">
          <AvatarImage src={bidderAvatar} alt={bidderName} />
          <AvatarFallback className="bg-primary/10 text-primary">{initials}</AvatarFallback>
        </Avatar>
        
        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between mb-1">
            <h4 className="font-semibold text-card-foreground">{bidderName}</h4>
            <div className="flex items-center gap-1 text-sm">
              <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              <span className="font-medium">{bidderRating.toFixed(1)}</span>
            </div>
          </div>
          
          <div className="flex items-center gap-2 mb-2">
            <div className="flex items-center gap-1 text-lg font-bold text-green-600">
              <DollarSign className="w-5 h-5" />
              <span>{amount}</span>
            </div>
          </div>
          
          <p className="text-sm text-muted-foreground mb-3">{message}</p>
          
          {canAccept && status === "pending" && (
            <Button 
              size="sm" 
              className="w-full"
              onClick={onAccept}
              data-testid={`button-accept-bid-${id}`}
            >
              Accept Bid
            </Button>
          )}
          
          {status === "accepted" && (
            <div className="text-sm font-medium text-green-600">Accepted</div>
          )}
        </div>
      </div>
    </Card>
  );
}
