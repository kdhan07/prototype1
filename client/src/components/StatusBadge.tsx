import { Badge } from "@/components/ui/badge";

interface StatusBadgeProps {
  status: "free" | "in-class" | "on-leave" | "active" | "scheduled" | "open" | "in-progress" | "completed" | "closed";
  size?: "sm" | "default";
}

const statusConfig = {
  free: { label: "Free", variant: "default" as const, color: "bg-green-500/10 text-green-700 dark:bg-green-500/20 dark:text-green-400" },
  "in-class": { label: "In Class", variant: "secondary" as const, color: "bg-orange-500/10 text-orange-700 dark:bg-orange-500/20 dark:text-orange-400" },
  "on-leave": { label: "On Leave", variant: "secondary" as const, color: "bg-gray-500/10 text-gray-700 dark:bg-gray-500/20 dark:text-gray-400" },
  active: { label: "Active", variant: "default" as const, color: "bg-blue-500/10 text-blue-700 dark:bg-blue-500/20 dark:text-blue-400" },
  scheduled: { label: "Scheduled", variant: "secondary" as const, color: "bg-purple-500/10 text-purple-700 dark:bg-purple-500/20 dark:text-purple-400" },
  open: { label: "Open", variant: "default" as const, color: "bg-green-500/10 text-green-700 dark:bg-green-500/20 dark:text-green-400" },
  "in-progress": { label: "In Progress", variant: "default" as const, color: "bg-blue-500/10 text-blue-700 dark:bg-blue-500/20 dark:text-blue-400" },
  completed: { label: "Completed", variant: "secondary" as const, color: "bg-gray-500/10 text-gray-700 dark:bg-gray-500/20 dark:text-gray-400" },
  closed: { label: "Closed", variant: "secondary" as const, color: "bg-gray-500/10 text-gray-700 dark:bg-gray-500/20 dark:text-gray-400" },
};

export function StatusBadge({ status, size = "sm" }: StatusBadgeProps) {
  const config = statusConfig[status];
  
  return (
    <Badge 
      variant={config.variant}
      className={`${config.color} uppercase text-xs font-medium ${size === "sm" ? "px-2 py-0.5" : "px-3 py-1"}`}
      data-testid={`badge-status-${status}`}
    >
      {status === "free" && <span className="w-2 h-2 rounded-full bg-green-500 mr-1.5 animate-pulse" />}
      {config.label}
    </Badge>
  );
}
