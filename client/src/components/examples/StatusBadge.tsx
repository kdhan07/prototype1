import { StatusBadge } from "../StatusBadge";

export default function StatusBadgeExample() {
  return (
    <div className="flex flex-wrap gap-2 p-4">
      <StatusBadge status="free" />
      <StatusBadge status="in-class" />
      <StatusBadge status="on-leave" />
      <StatusBadge status="active" />
      <StatusBadge status="scheduled" />
      <StatusBadge status="open" />
      <StatusBadge status="in-progress" />
      <StatusBadge status="completed" />
    </div>
  );
}
