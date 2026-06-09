import { useRef, useState } from "react";
import { MdOutlineModeEdit } from "react-icons/md";

const StudentForm = ({
  initialData = {
    name: "",
    rollNo: "",
    email: "",
    phone: "",
    photo: "",
  },
  onSubmit,
  buttonText = "Save Student",
}) => {
  const [formData, setFormData] = useState(initialData);
  const [preview, setPreview] = useState(initialData.photo || "");

  const fileInputRef = useRef(null);

  //   useEffect(() => {
  //     setFormData(initialData);
  //     setPreview(initialData.photo || "");
  //   }, [initialData]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handlePhotoChange = (e) => {
    const file = e.target.files[0];

    if (!file) return;

    setFormData({
      ...formData,
      photo: file,
    });

    setPreview(URL.createObjectURL(file));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (onSubmit) {
      onSubmit(formData);
    } else {
      console.log(formData);
    }
  };

  return (
    <div className="max-w-4xl mx-auto bg-white shadow-md rounded-xl p-8">
      <form onSubmit={handleSubmit}>
        {/* Photo Section */}
        <div className="flex justify-center mb-8">
          <div className="relative">
            {/* Photo Preview */}
            <div className="w-36 h-36 rounded-full overflow-hidden border-4 border-gray-200">
              {preview ? (
                <img
                  src={preview}
                  alt="Student"
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full bg-gray-100 flex items-center justify-center text-gray-400">
                  No Photo
                </div>
              )}
            </div>

            {/* Edit Photo Button */}
            <button
              type="button"
              onClick={() => fileInputRef.current.click()}
              className="absolute bottom-1 right-1 bg-blue-600 text-white rounded-full p-2 shadow-md hover:bg-blue-700 transition"
            >
              <MdOutlineModeEdit size={20}/>
            </button>

            {/* Hidden File Input */}
            <input
              type="file"
              accept="image/*"
              ref={fileInputRef}
              onChange={handlePhotoChange}
              className="hidden"
            />
          </div>
        </div>

        {/* Form Fields */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Student Name */}
          <div>
            <label className="block mb-2 font-medium">Student Name</label>

            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter student name"
              className="w-full border rounded-lg p-3 outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Roll Number */}
          <div>
            <label className="block mb-2 font-medium">Roll Number</label>

            <input
              type="text"
              name="rollNo"
              value={formData.rollNo}
              onChange={handleChange}
              placeholder="Enter roll number"
              className="w-full border rounded-lg p-3 outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block mb-2 font-medium">Email</label>

            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter email"
              className="w-full border rounded-lg p-3 outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Phone Number */}
          <div>
            <label className="block mb-2 font-medium">Phone Number</label>

            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Enter phone number"
              className="w-full border rounded-lg p-3 outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        {/* Submit Button */}
        <div className="mt-8 flex justify-center">
          <button
            type="submit"
            className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition"
          >
            {buttonText}
          </button>
        </div>
      </form>
    </div>
  );
};

export default StudentForm;
