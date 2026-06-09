import axios from "axios";
import { useNavigate } from "react-router";
import StudentForm from "../components/student/StudentForm";

const AddStudent = () => {
  const navigate = useNavigate();

  const handleSubmit = async (data) => {
    try {
      let photoUrl = "";

      if (data.photo) {
        const formData = new FormData();

        formData.append("photo", data.photo);

        const uploadResponse = await axios.post(
          "http://localhost:5000/upload",
          formData,
        );

        photoUrl = uploadResponse.data.imageUrl;
      }

      const studentData = {
        name: data.name,
        rollNo: data.rollNo,
        email: data.email,
        phone: data.phone,
        photo: photoUrl,
      };

      await axios.post("http://localhost:5000/students", studentData);

      alert("Student Added Successfully");

      navigate("/students");
    } catch (error) {
      console.error(error);
      alert("Failed to add student");
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Add Student</h1>

      <StudentForm onSubmit={handleSubmit} />
    </div>
  );
};

export default AddStudent;
