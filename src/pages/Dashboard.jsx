import { Link } from "react-router";
import { useEffect, useState } from "react";
import axios from "axios";

const Dashboard = () => {
  const [students, setStudents] = useState([]);
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
  return (
    <div className="p-6">
      {/* Page Heading */}
      <h1 className="text-3xl font-bold mb-8">Dashboard</h1>

      {/* Quick Actions */}
      <div className="flex flex-col md:flex-row gap-6 mb-10">
        {/* Total Students Card */}
        <div className="bg-white rounded-xl shadow-md p-6 w-full md:w-1/3">
          <h2 className="text-gray-500 text-lg">Total Students</h2>

          <p className="text-4xl font-bold text-blue-600 mt-2">
            {students.length}
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex-1 flex justify-end items-start gap-4">
          <Link
            to="/students/add"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700"
          >
            Add Student
          </Link>

          <Link
            to="/students"
            className="bg-gray-800 text-white px-6 py-3 rounded-lg hover:bg-gray-900"
          >
            View Students
          </Link>
        </div>
      </div>

      {/* Recent Students */}
      <div className="bg-white rounded-xl shadow-md p-6 mb-10">
        <h2 className="text-2xl font-semibold mb-4">Recent Students</h2>

        <div className="space-y-4">
          {students.slice(0, 5).map((student) => (
            <div
              key={student._id}
              className="flex items-center gap-4 border-b pb-3"
            >
              {student.photo ? (
                <img
                  src={student.photo}
                  alt={student.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
              ) : (
                <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center">
                  👤
                </div>
              )}

              <div>
                <p className="font-medium">{student.name}</p>

                <p className="text-sm text-gray-500">{student.rollNo}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
