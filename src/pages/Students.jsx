import { useState } from "react";
import { Link } from "react-router";
import SearchBar from "../components/student/SearchBar";
import StudentTable from "../components/student/StudentTable";
import dummyStudents from "../data/dummyStudents";

const Students = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredStudents = dummyStudents.filter(
    (student) =>
      student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      student.rollNo.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  return (
    <div className="p-6">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Students</h1>

        <Link
          to="/students/add"
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
        >
          Add Student
        </Link>
      </div>

      {/* Search */}
      <div className="mb-6">
        <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      </div>

      {/* Table */}
      <StudentTable students={filteredStudents} />
    </div>
  );
};

export default Students;
