import { useState, useEffect } from "react";
import { Link } from "react-router";
import SearchBar from "../components/student/SearchBar";
import StudentTable from "../components/student/StudentTable";
import axios from "axios";

const Students = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [students, setStudents] = useState([]);

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this student?",
    );

    if (!confirmDelete) return;

    try {
      await axios.delete(`http://localhost:5000/students/${id}`);

      setStudents((prevStudents) =>
        prevStudents.filter((student) => student._id !== id),
      );
    } catch (error) {
      console.error(error);
      alert("Failed to delete student");
    }
  };

  useEffect(() => {
    axios
      .get("http://localhost:5000/students")
      .then((response) => {
        setStudents(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const filteredStudents = students.filter(
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
      <StudentTable students={filteredStudents} onDelete={handleDelete} />
    </div>
  );
};

export default Students;
