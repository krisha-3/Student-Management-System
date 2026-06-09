import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import axios from "axios";

import StudentForm from "../components/student/StudentForm";

const EditStudent = () => {
  const { id } = useParams();

  const navigate = useNavigate();

  const [student, setStudent] = useState(null);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/students/${id}`)
      .then((response) => {
        setStudent(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [id]);

  const handleSubmit = async (updatedData) => {
    try {
      const studentData = {
        name: updatedData.name,
        rollNo: updatedData.rollNo,
        email: updatedData.email,
        phone: updatedData.phone,
      };

      await axios.put(`http://localhost:5000/students/${id}`, studentData);

      alert("Student Updated Successfully");

      navigate("/students");
    } catch (error) {
      console.error(error);

      alert("Failed to update student");
    }
  };

  if (!student) {
    return <p className="p-6">Loading...</p>;
  }

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Edit Student</h1>

      <StudentForm
        initialData={student}
        onSubmit={handleSubmit}
        buttonText="Update Student"
      />
    </div>
  );
};

export default EditStudent;
