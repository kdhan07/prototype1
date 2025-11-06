import { TeacherCard } from "../TeacherCard";

export default function TeacherCardExample() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-6">
      <TeacherCard
        id="1"
        name="Dr. Priya Sharma"
        department="Computer Science"
        specialization="AI & Machine Learning"
        status="free"
        officeLocation="Room 301, CS Block"
        onRequestAppointment={() => console.log("Request appointment")}
      />
      <TeacherCard
        id="2"
        name="Prof. Rajesh Kumar"
        department="Mathematics"
        specialization="Calculus & Analysis"
        status="in-class"
        officeLocation="Room 205, Math Block"
        onRequestAppointment={() => console.log("Request appointment")}
      />
      <TeacherCard
        id="3"
        name="Dr. Anjali Patel"
        department="Physics"
        specialization="Quantum Mechanics"
        status="on-leave"
        officeLocation="Room 102, Physics Lab"
        onRequestAppointment={() => console.log("Request appointment")}
      />
      <TeacherCard
        id="4"
        name="Prof. Arjun Mehta"
        department="Computer Science"
        specialization="Data Structures"
        status="free"
        officeLocation="Room 305, CS Block"
        onRequestAppointment={() => console.log("Request appointment")}
      />
    </div>
  );
}
