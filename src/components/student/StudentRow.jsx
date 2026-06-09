import { Link } from "react-router";

const StudentRow = ({ student, onDelete }) => {
  return (
    <tr className="border-b hover:bg-gray-50">
      <td className="p-3">
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
      </td>

      <td className="p-3">{student.rollNo}</td>
      <td className="p-3">{student.name}</td>
      <td className="p-3">{student.email}</td>
      <td className="p-3">{student.phone}</td>

      <td className="p-3">
        <Link
          to={`/students/edit/${student._id}`}
          className="bg-yellow-500 text-white px-3 py-1 rounded mr-2"
        >
          Edit
        </Link>

        <button
          onClick={() => onDelete(student._id)}
          className="bg-red-500 text-white px-3 py-1 rounded"
        >
          Delete
        </button>
      </td>
    </tr>
  );
};

export default StudentRow;
