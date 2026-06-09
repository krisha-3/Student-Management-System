import StudentForm from "../components/student/StudentForm";

const AddStudent = () => {
  const handleSubmit = (data) => {
    console.log("Student Data:", data);
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Add Student</h1>

      <StudentForm onSubmit={handleSubmit} />
    </div>
  );
};

export default AddStudent;
