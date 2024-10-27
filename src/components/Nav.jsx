import { useState, useEffect } from "react";
import logo from "../assets/Screenshot 2024-08-23 at 12.46.54 AM.png";

export default function Nav() {
  const [groupDisplay, setGroupDisplay] = useState("hidden");
  const [portfolioDisplay, setPortfolioDisplay] = useState("hidden");

  function handleGroupDisplayChange() {
    setGroupDisplay(groupDisplay === "hidden" ? "flex" : "hidden");
    setPortfolioDisplay("hidden");
  }

  function handlePortfolioDisplayChange() {
    setPortfolioDisplay(portfolioDisplay === "hidden" ? "flex" : "hidden");
    setGroupDisplay("hidden");
  }

  useEffect(() => {
    function handleClickOutside(event) {
      if (
        !event.target.closest(".group-container") &&
        !event.target.closest("a")
      ) {
        setGroupDisplay("hidden");
        setPortfolioDisplay("hidden");
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav className="flex items-center justify-between px-4 py-4 bg-gray-800 text-white">
      <a href="https://runquanrayzhou.netlify.app/">
        <img
          src={logo}
          className="w-24 h-12 object-cover rounded-lg"
          alt="Logo"
        />
      </a>
      <ul className="flex space-x-6">
        <li className="relative">
          <span
            onClick={handleGroupDisplayChange}
            className="cursor-pointer hover:text-gray-300"
          >
            GROUP PROJECTS
          </span>
          <div
            className={`absolute top-full mt-2 left-0 bg-gray-700 text-white rounded-md shadow-lg p-4 flex-col space-y-2 ${groupDisplay}`}
          >
            <span>
              <a
                href="https://mynotes-app-project.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                NOTES APP
              </a>
            </span>
            <span>
              <a
                href="https://therealyoutube.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                YOUTUBE CLONE
              </a>
            </span>
            {/* <span>
              <a
                href="https://streetbites.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                STREETBITES APP
              </a>
            </span> */}
            <span>
              <a
                href="https://astc-web-companion-test.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                ASTC
              </a>
            </span>
            <span>
              <a
                href="https://practice-sitez.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                PAT.I0
              </a>
            </span>
          </div>
        </li>
        <li className="relative">
          <span
            onClick={handlePortfolioDisplayChange}
            className="cursor-pointer hover:text-gray-300 mr-8"
          >
            PORTFOLIO
          </span>
          <div
            className={`absolute top-full mt-2 left-0 bg-gray-700 text-white rounded-md shadow-lg p-4 flex-col space-y-2 ${portfolioDisplay}`}
          >
            <span>
              <a
                href="https://squadtrack.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                SQUAD TRACK
              </a>
            </span>
            <span>
              <a
                href="https://runquan-ray-zhou.github.io/0.2-connectfour/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                CONNECT 4
              </a>
            </span>
            <span>
              <a
                href="https://anaira.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                SQUAD HOME PAGE
              </a>
            </span>
            <span>
              <a
                href="https://therealpokedex.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                POKEDEX
              </a>
            </span>
            <span>
              <a
                href="https://cowsaywhat.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                COW SAY
              </a>
            </span>
            <span>
              <a
                href="https://quiz-me-trivia-app.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                QUIZ ME
              </a>
            </span>
            <span>
              <a
                href="https://pocket-dictionary-app.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                DICTIONARY
              </a>
            </span>
            <span>
              <a
                href="https://bankbankster.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                BANK BANKSTER
              </a>
            </span>
            <span>
              <a
                href="https://linknyc-finder.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                LinkNYC FINDER
              </a>
            </span>
          </div>
        </li>
      </ul>
    </nav>
  );
}
