import { TaskCard } from "../TaskCard";

export default function TaskCardExample() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-6">
      <TaskCard
        id="1"
        title="Design Mobile App UI"
        description="Need a modern, clean UI design for a fitness tracking mobile app. Should include 5-6 screens with Material Design principles."
        category="Design"
        minBudget={50}
        maxBudget={100}
        deadline={new Date(Date.now() + 86400000 * 3)}
        status="open"
        bidCount={5}
        onViewDetails={() => console.log("View details")}
      />
      <TaskCard
        id="2"
        title="Math Tutoring - Calculus"
        description="Looking for help with calculus concepts, specifically integration and differentiation. 2 hours per week."
        category="Tutoring"
        minBudget={20}
        maxBudget={30}
        deadline={new Date(Date.now() + 86400000)}
        status="in-progress"
        bidCount={8}
        onViewDetails={() => console.log("View details")}
      />
      <TaskCard
        id="3"
        title="Digitize Handwritten Notes"
        description="Convert 50 pages of handwritten chemistry notes into typed PDF format with proper formatting."
        category="Data Entry"
        minBudget={15}
        maxBudget={25}
        deadline={new Date(Date.now() + 86400000 * 7)}
        status="open"
        bidCount={3}
        onViewDetails={() => console.log("View details")}
      />
    </div>
  );
}
