import { Link } from "react-router";

const StudentRow = ({ student }) => {
  return (
    <tr className="border-b hover:bg-gray-50">
      <td className="p-3">
        <img
          src={student.photo}
          alt={student.name}
          className="w-12 h-12 rounded-full object-cover"
        />
      </td>

      <td className="p-3">{student.rollNo}</td>
      <td className="p-3">{student.name}</td>
      <td className="p-3">{student.email}</td>
      <td className="p-3">{student.phone}</td>

      <td className="p-3">
        <Link
          to={`/students/edit/${student.id}`}
          className="bg-yellow-500 text-white px-3 py-1 rounded mr-2"
        >
          Edit
        </Link>

        <button className="bg-red-500 text-white px-3 py-1 rounded">
          Delete
        </button>
      </td>
    </tr>
  );
};

export default StudentRow;
