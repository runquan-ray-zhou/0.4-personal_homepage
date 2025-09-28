import { useNavigate } from "react-router-dom";

export default function Nav() {
  let navigate = useNavigate();

  return (
    <nav className="flex items-center justify-between px-4 py-4 bg-gray-800 text-white">
      <ul className="relative z-50 flex space-x-6">
        <li className="relative ml-6 md:ml-0">
          <span
            onClick={() => navigate(`/`)}
            className="cursor-pointer hover:text-gray-300"
          >
            Home
          </span>
        </li>
        <li className="relative ml-6 md:ml-0">
          <span
            onClick={() => navigate(`/projects`)}
            className="cursor-pointer hover:text-gray-300"
          >
            Projects
          </span>
        </li>
        <li className="relative ml-6 md:ml-0">
          <span
            onClick={() => navigate(`/blog`)}
            className="cursor-pointer hover:text-gray-300 mr-8"
          >
            Blog
          </span>
        </li>
      </ul>
    </nav>
  );
}
