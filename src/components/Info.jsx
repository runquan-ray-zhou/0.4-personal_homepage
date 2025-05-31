import color from "../assets/color-portrait.jpg";
import { useNavigate } from "react-router-dom";

export default function Info() {
  let navigate = useNavigate();
  return (
    <div className="flex flex-col md:flex-col justify-center items-center mt-6 w-full">
      <div className="text-center">
        <p className="text-6xl">👋</p>
        <br />
        <h1 className="text-4xl md:text-5xl font-bold">
          I'm Runquan <br />
          <span className="text-[#7209b7]">(Ray)</span> Zhou
        </h1>
        <p className="text-xl mt-2">Full Stack Software Engineer</p>
        <br />
        <p className="text-lg text-gray-700">
          "Driven by Challenges, Fueled by Creativity"
        </p>
        <div className="flex justify-center space-x-6 mt-6">
          <a
            href="https://drive.google.com/file/d/1PU9O1aSlj2VsTaWBED22dhGutsqY4YopTi5Uoedt4-s/view"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#7209b7] text-white py-2 px-4 rounded-md hover:bg-blue-600 transition"
          >
            View CV
          </a>
          <a
            href="https://docs.google.com/document/d/1PU9O1aSlj2VsTaWBED22dhGutsqY4YopTi5Uoedt4-s/export?format=pdf"
            download
            className="bg-gray-500 text-white py-2 px-4 rounded-md hover:bg-gray-600 transition"
          >
            Download CV
          </a>
        </div>
      </div>
      <div className="flex justify-center space-x-6 mt-8">
        <a
          href="https://www.linkedin.com/in/runquanrayzhou/"
          className="text-3xl hover:text-blue-600 transition"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-linkedin"></i>
        </a>
        <a
          href="https://github.com/runquan-ray-zhou"
          className="text-3xl hover:text-gray-800 transition"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-github"></i>
        </a>
        <a
          href="https://therealyoutube.netlify.app/"
          className="text-3xl hover:text-red-600 transition"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-youtube"></i>
        </a>
      </div>
      <div className="flex justify-center space-x-6 mt-8 ml:hidden md:hidden ms:block">
        <img
          src={color}
          alt="color portrait"
          className="w-48 h-48 rounded-full"
        />
      </div>
      <div>
        <h1 className="text-4xl md:text-5xl font-bold mt-2 text-center">
          Check out some of my{" "}
          <span
            className="font-bold cursor-pointer hover:text-purple-600 transition"
            onClick={() => navigate(`/home`)}
          >
            projects!!!
          </span>
        </h1>
      </div>
    </div>
  );
}
