import { useState } from "react";
import bw from "../assets/bw-portrait.jpg";
import Connect4 from "../assets/Connect4.png";
import QuizMe from "../assets/QuizMe.png";
import CowSay from "../assets/CowSay.png";
import Dictionary from "../assets/Dictionary.png";
import ASTC from "../assets/ASTC.png";
import BankBankster from "../assets/BankBankster.png";
import YoutubeClone from "../assets/YoutubeClone.png";
import LinkNYC from "../assets/LinkNYC.png";
import Pati0 from "../assets/Pati0.png";
import "./Main.css";

const ProjectLink = ({ href, title, src, onClick }) => (
  <div
    className="flex items-center justify-center hover:scale-110 transform transition-transform hover:animate-shake cursor-pointer"
    onClick={onClick} // Trigger onClick when the project is clicked
    tabIndex={0} // Make clickable with keyboard
    onKeyDown={(e) => {
      if (e.key === "Enter" || e.key === " ") onClick();
    }}
  >
    <img
      className="w-40 h-40 md:w-24 md:h-24 rounded-lg hover:scale-125"
      src={src}
      alt={title}
    />
  </div>
);

const Modal = ({ project, onClose }) => (
  <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
    <div className="bg-white p-8 rounded-lg shadow-lg max-w-3xl w-full">
      <h2 className="text-3xl font-bold mb-6 text-center">{project.title}</h2>
      <p className="text-lg mb-6 text-gray-700">
        This is some detailed information about the {project.title} project. You
        can explore more about it by clicking the link below. {project.summary}
      </p>
      <div className="flex justify-center">
        <a
          href={project.href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-white bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg font-semibold transition"
        >
          Visit Project
        </a>
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="text-white bg-blue-600 hover:bg-blue-700 ml-2 px-6 py-3 rounded-lg font-semibold transition"
        >
          Visit Code
        </a>
        <button
          onClick={onClose}
          className="ml-2 px-6 py-3 bg-red-500 hover:bg-red-600 text-white font-semibold rounded-lg transition"
        >
          Close
        </button>
      </div>
    </div>
  </div>
);

const SocialLink = ({ href, icon, color }) => (
  <div className="hidden md:flex items-center justify-center hover:scale-110 transform transition-transform hover:animate-shake cursor-pointer">
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`text-8xl ${color}`}
      aria-label={`Visit ${icon} profile`}
    >
      <i className={`fab fa-${icon}`}></i>
    </a>
  </div>
);

const Main = () => {
  const [selectedProject, setSelectedProject] = useState(null); // Track the selected project

  const projects = [
    {
      href: "https://runquan-ray-zhou.github.io/0.2-connectfour/",
      title: "Connect4",
      src: Connect4,
      summary: "",
      github: "https://github.com/runquan-ray-zhou/0.2-connectfour",
    },
    {
      href: "https://cowsaywhat.netlify.app/",
      title: "CowSay",
      src: CowSay,
      summary: "",
      github: "https://github.com/runquan-ray-zhou/0.5-Cow_Say",
    },
    {
      href: "https://quiz-me-trivia-app.netlify.app/",
      title: "QuizMe",
      src: QuizMe,
      summary: "",
      github: "https://github.com/runquan-ray-zhou/quiz-me",
    },
    {
      href: "https://pocket-dictionary-app.netlify.app/",
      title: "Dictionary",
      src: Dictionary,
      summary: "",
      github: "https://github.com/runquan-ray-zhou/dictionary",
    },
    {
      href: "https://therealyoutube.netlify.app/",
      title: "YoutubeClone",
      src: YoutubeClone,
      summary:
        "This group project is a YouTube clone built using React, React Router DOM, and SCSS. It provides users with features similar to the popular video-sharing platform, allowing them to view multiple videos on a homepage, watch individual videos on their own page, leave comments on videos, see suggested videos in a sidebar, search easily from the navbar, and filter videos by category.",
      github: "https://github.com/alexandra-perez/youtube-clone",
    },
    {
      href: "https://astc-web-companion-test.netlify.app/",
      title: "ASTC",
      src: ASTC,
      summary:
        "The ASTC Convention Companion App is a mobile web application developed as part of a team project for the 2024 ASTC (Association of Science and Technology Centers) convention in Chicago. This app allows users to search for speakers and sessions at the convention. It features an innovative augmented reality (AR) component, enabling users to view 3D models by hovering over specific markers.",
      github:
        "https://github.com/runquan-ray-zhou/test-react-web-app-companion-two",
    },
    {
      href: "https://bankbankster.netlify.app/",
      title: "BankBankster",
      src: BankBankster,
      summary: "",
      github:
        "https://github.com/runquan-ray-zhou/1.1-bank-transaction-app-frontend",
    },
    {
      href: "https://linknyc-finder.netlify.app/",
      title: "LinkNYC",
      src: LinkNYC,
      summary:
        "LinkNYC Finder is a web application designed to help users locate the nearest LinkNYC terminals in New York City. These terminals offer free Wi-Fi access across the city. Users can simply input their location, and the app will display a list of the closest terminals where they can connect to the internet.",
      github: "https://github.com/runquan-ray-zhou/2.9-linknyc",
    },
    {
      href: "https://pat-io.netlify.app/",
      title: "Pat.io",
      src: Pati0,
      summary:
        "Pat.io is an AI chatbot fine-tuned to provide migrants with easy access to essential information about Social Security Numbers (SSN), Individual Taxpayer Identification Numbers (ITIN), and New York City’s Local Law 30. Pat.io offers a user-friendly experience to assist migrants in navigating the often complex processes involved in obtaining these identification numbers. Equipped with multi-language functionality, Pat.io can communicate in multiple languages, both in text and voice, making information accessible to a broader audience. By leveraging reliable resources, government data, and a customized AI language model, Pat.io ensures that users receive accurate, up-to-date answers to common questions about eligibility, documentation, and application procedures.",
      github: "https://github.com/runquan-ray-zhou/3.1-Pat.io",
    },
  ];

  return (
    <div className="mt-4">
      <div className="flex flex-col md:grid grid-cols-5 grid-rows-4 gap-4">
        {/* Center Portrait */}
        <div className="hidden md:block col-start-2 col-end-5 row-start-1 row-end-4">
          <img
            src={bw}
            alt="Black and White Portrait"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>

        {/* Left Column Projects */}
        <div className="col-start-1 col-end-2 row-start-1 row-span-4">
          {projects.slice(0, 4).map((project, idx) => (
            <div
              key={project.title}
              className={`row-start-${idx + 1} row-end-${idx + 2} p-8`}
            >
              <ProjectLink
                {...project}
                onClick={() => setSelectedProject(project)} // Set the selected project on click
              />
            </div>
          ))}
        </div>

        {/* Right Column Projects */}
        <div className="col-start-5 col-end-6 row-start-1 row-span-4">
          {projects.slice(4, 8).map((project, idx) => (
            <div
              key={project.title}
              className={`row-start-${idx + 1} row-end-${idx + 2} p-8`}
            >
              <ProjectLink
                {...project}
                onClick={() => setSelectedProject(project)} // Set the selected project on click
              />
            </div>
          ))}
        </div>

        {/* Bottom Row */}
        <div className="col-start-3 col-end-4 row-start-4 row-end-5 pt-6">
          <ProjectLink
            {...projects[8]}
            onClick={() => setSelectedProject(projects[8])} // Set the selected project on click
          />
        </div>

        {/* Social Links */}
        <SocialLink
          href="https://www.linkedin.com/in/runquanrayzhou/"
          icon="linkedin"
          color="text-blue-500"
        />

        <SocialLink
          href="https://github.com/runquan-ray-zhou"
          icon="github"
          color="text-gray-800"
        />
      </div>

      {/* Modal */}
      {selectedProject && (
        <Modal
          project={selectedProject}
          onClose={() => setSelectedProject(null)} // Reset the selected project on close
        />
      )}
    </div>
  );
};

export default Main;
