import { Link } from "react-router-dom";
import DMLogo from "./DMLogo";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-neutral-900 border-b border-neutral-700 px-8 py-4 z-50 flex items-center justify-between">
      {/* Logo */}
      <Link to="/" className="flex items-center gap-2">
        <DMLogo className="w-10 h-10" />
        <span className="hidden sm:inline text-xl font-extrabold text-white">DevDre</span>
      </Link>

      {/* Nav links */}
      <ul className="flex space-x-8 text-white font-medium">
        <li>
          <Link to="/" className="hover:text-green-400 transition duration-300">
            Home
          </Link>
        </li>
        <li>
          <Link to="/about-me" className="hover:text-blue-400 transition duration-300">
            About Me
          </Link>
        </li>
        <li>
          <Link to="/contact-me" className="hover:text-pink-400 transition duration-300">
            Contact Me
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;