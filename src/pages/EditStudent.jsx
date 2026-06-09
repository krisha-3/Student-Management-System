import StudentForm from "../components/student/StudentForm";

const EditStudent = () => {
  // Dummy data for now
  const student = {
    id: 1,
    name: "Krisha Pandya",
    rollNo: "23BECE30153",
    email: "krisha@gmail.com",
    phone: "9876543210",
    photo: "https://i.pravatar.cc/150?img=1",
  };

  const handleSubmit = (updatedData) => {
    console.log("Updated Student:", updatedData);
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">
        Edit Student
      </h1>

      <StudentForm
        initialData={student}
        onSubmit={handleSubmit}
      />
    </div>
  );
};

export default EditStudent;