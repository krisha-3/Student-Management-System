import { Link } from "react-router";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md px-6 py-4 flex items-center justify-between">
      {/* Logo / Portal Name */}
      <Link
        to="/"
        className="text-2xl font-bold text-blue-600 hover:text-blue-700 transition-colors"
      >
        Student Management Portal
      </Link>

      {/* Future User Info Section */}
      {/* <div>
        <span className="text-gray-600">Class Teacher</span>
      </div> */}
    </nav>
  );
};

export default Navbar;