import { useState } from "react";
import { TeacherCard } from "@/components/TeacherCard";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search } from "lucide-react";

export default function TeachersPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [departmentFilter, setDepartmentFilter] = useState("all");

  const teachers = [
    {
      id: "1",
      name: "Dr. Priya Sharma",
      department: "Computer Science",
      specialization: "AI & Machine Learning",
      status: "free" as const,
      officeLocation: "Room 301, CS Block",
    },
    {
      id: "2",
      name: "Prof. Rajesh Kumar",
      department: "Mathematics",
      specialization: "Calculus & Analysis",
      status: "in-class" as const,
      officeLocation: "Room 205, Math Block",
    },
    {
      id: "3",
      name: "Dr. Anjali Patel",
      department: "Physics",
      specialization: "Quantum Mechanics",
      status: "on-leave" as const,
      officeLocation: "Room 102, Physics Lab",
    },
    {
      id: "4",
      name: "Prof. Arjun Mehta",
      department: "Computer Science",
      specialization: "Data Structures",
      status: "free" as const,
      officeLocation: "Room 305, CS Block",
    },
    {
      id: "5",
      name: "Dr. Kavita Iyer",
      department: "Chemistry",
      specialization: "Organic Chemistry",
      status: "free" as const,
      officeLocation: "Room 201, Chem Lab",
    },
    {
      id: "6",
      name: "Prof. Vikram Singh",
      department: "Mathematics",
      specialization: "Linear Algebra",
      status: "in-class" as const,
      officeLocation: "Room 210, Math Block",
    },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-foreground mb-2">Teacher's Cabin Tracker</h1>
        <p className="text-muted-foreground">Check availability and request appointments with faculty</p>
      </div>

      <div className="flex gap-4">
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <Input
            placeholder="Search teachers..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-9"
            data-testid="input-search-teachers"
          />
        </div>
        <Select value={departmentFilter} onValueChange={setDepartmentFilter}>
          <SelectTrigger className="w-48" data-testid="select-department">
            <SelectValue placeholder="All Departments" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Departments</SelectItem>
            <SelectItem value="cs">Computer Science</SelectItem>
            <SelectItem value="math">Mathematics</SelectItem>
            <SelectItem value="physics">Physics</SelectItem>
            <SelectItem value="chemistry">Chemistry</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {teachers.map((teacher) => (
          <TeacherCard
            key={teacher.id}
            {...teacher}
            onRequestAppointment={() => console.log("Request appointment with", teacher.name)}
          />
        ))}
      </div>
    </div>
  );
}
