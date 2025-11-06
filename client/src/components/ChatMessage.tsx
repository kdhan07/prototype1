import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { format } from "date-fns";

interface ChatMessageProps {
  id: string;
  sender: string;
  senderAvatar?: string;
  message: string;
  timestamp: Date;
  isOwnMessage?: boolean;
}

export function ChatMessage({ 
  id, 
  sender, 
  senderAvatar, 
  message, 
  timestamp, 
  isOwnMessage = false 
}: ChatMessageProps) {
  const initials = sender.split(" ").map(n => n[0]).join("");
  
  return (
    <div 
      className={`flex gap-3 mb-4 ${isOwnMessage ? "flex-row-reverse" : ""}`}
      data-testid={`message-${id}`}
    >
      {!isOwnMessage && (
        <Avatar className="w-8 h-8">
          <AvatarImage src={senderAvatar} alt={sender} />
          <AvatarFallback className="text-xs bg-primary/10 text-primary">{initials}</AvatarFallback>
        </Avatar>
      )}
      
      <div className={`flex flex-col ${isOwnMessage ? "items-end" : "items-start"} max-w-[70%]`}>
        {!isOwnMessage && (
          <span className="text-xs text-muted-foreground mb-1 font-medium">{sender}</span>
        )}
        <div 
          className={`rounded-2xl px-4 py-2 ${
            isOwnMessage 
              ? "bg-primary text-primary-foreground" 
              : "bg-muted text-card-foreground"
          }`}
        >
          <p className="text-sm break-words">{message}</p>
        </div>
        <span className="text-xs text-muted-foreground mt-1">
          {format(timestamp, "h:mm a")}
        </span>
      </div>
    </div>
  );
}
