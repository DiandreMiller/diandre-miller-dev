import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="w-full fixed top-0 left-0 bg-black px-8 py-4">
      <ul className="flex justify-end space-x-8">
        <li>
          <Link to="/" className="text-white hover:text-gray-400">
            Home
          </Link>
        </li>
        <li>
          <Link to="/about" className="text-white hover:text-gray-400">
            About
          </Link>
        </li>
        <li>
          <Link to="/contact-me" className="text-white hover:text-gray-400">
            Contact Me
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;