import { StudyRoomCard } from "../StudyRoomCard";

export default function StudyRoomCardExample() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-6">
      <StudyRoomCard
        id="1"
        name="Data Structures Final Prep"
        subject="Computer Science"
        memberCount={5}
        maxMembers={10}
        status="active"
        onJoin={() => console.log("Join room clicked")}
      />
      <StudyRoomCard
        id="2"
        name="Calculus Study Group"
        subject="Mathematics"
        memberCount={8}
        maxMembers={10}
        status="scheduled"
        scheduledAt={new Date(Date.now() + 86400000)}
        onJoin={() => console.log("Join room clicked")}
      />
      <StudyRoomCard
        id="3"
        name="Physics Problem Solving"
        subject="Physics"
        memberCount={10}
        maxMembers={10}
        status="active"
        onJoin={() => console.log("Join room clicked")}
      />
    </div>
  );
}
