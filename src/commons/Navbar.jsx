import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-neutral-900 border-b border-neutral-700 px-8 py-4 z-50">
      <ul className="flex justify-end space-x-8 text-white">
        <li>
          <Link
            to="/"
            className="hover:text-green-400 hover:drop-shadow-[0_0_8px_#22c55e] transition duration-300"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/about"
            className="hover:text-blue-400 hover:drop-shadow-[0_0_8px_#3b82f6] transition duration-300"
          >
            About
          </Link>
        </li>
        <li>
          <Link
            to="/contact-me"
            className="hover:text-pink-400 hover:drop-shadow-[0_0_8px_#ec4899] transition duration-300"
          >
            Contact Me
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;