import Connect4 from "../assets/Connect4.png";
import QuizMe from "../assets/QuizMe.png";
import CowSay from "../assets/CowSay.png";
import Dictionary from "../assets/Dictionary.png";
import YoutubeClone from "../assets/YoutubeClone.png";
import LinkNYC from "../assets/LinkNYC.png";

const ProjectLink = ({ href, title, src, summary, github }) => {
  return (
    <div className="flex items-start gap-4 p-4 border rounded-lg hover:shadow-lg transition-shadow mt-1">
      <img
        src={src}
        alt={title}
        className="w-32 h-32 object-cover rounded-md border-2 border-black"
      />
      <div className="flex flex-col justify-between flex-1">
        <div>
          <h3 className="text-l font-semibold">{title}</h3>
          <p className="text-sm hidden md:block mt-2">{summary}</p>
        </div>
        <div className="mt-4 flex flex-col md:flex-row gap-2 items-center">
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="px-2 py-1 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors text-center w-28"
          >
            Open Project
          </a>
          {github && (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="px-2 py-1 bg-gray-800 text-white rounded-md hover:bg-gray-900 transition-colors text-center w-28"
            >
              Visit Code
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default function Project() {
  const projects = [
    {
      href: "https://linknyc-finder.netlify.app/",
      title: "LinkNYC",
      src: LinkNYC,
      summary:
        "LinkNYC Finder helps you find the nearest free Wi-Fi terminals in New York City. Just enter your location to see the closest spots where you can connect to the internet.",
      github: "https://github.com/runquan-ray-zhou/2.9-linknyc",
    },
    {
      href: "https://therealyoutube.netlify.app/",
      title: "YoutubeClone",
      src: YoutubeClone,
      summary:
        "A YouTube clone built with React that lets users browse videos, watch them, leave comments, and search by category.",
      github: "https://github.com/alexandra-perez/youtube-clone",
    },
    {
      href: "https://pocket-dictionary-app.netlify.app/",
      title: "PokéVocab",
      src: Dictionary,
      summary:
        "PokéVocab is a dictionary app that helps you find word definitions and save favorites to build your vocabulary. All words are clickable to explore related definitions.",
      github: "https://github.com/runquan-ray-zhou/dictionary",
    },
    {
      href: "https://quiz-me-trivia-app.netlify.app/",
      title: "QuizMe",
      src: QuizMe,
      summary:
        "QuizMe is a trivia app that tests your knowledge with multiple-choice and true/false questions across various topics and difficulty levels. ",
      github: "https://github.com/runquan-ray-zhou/quiz-me",
    },
    {
      href: "https://cowsaywhat.netlify.app/",
      title: "CowSay",
      src: CowSay,
      summary:
        "This is another small project where I learned to use npm packages. I used the cowsay command-line npm package and brought some of its content to be viewed on the web.",
      github: "https://github.com/runquan-ray-zhou/0.5-Cow_Say",
    },
    {
      href: "https://runquan-ray-zhou.github.io/0.2-connectfour/",
      title: "Connect4",
      src: Connect4,
      summary:
        "This project showcases an early boot camp exercise where I applied the logic of Tic-Tac-Toe to create a fun and interactive Connect 4 game. Enjoy!",
      github: "https://github.com/runquan-ray-zhou/0.2-connectfour",
    },
  ];

  return (
    <div className="flex flex-col md:flex-row w-full mx-auto">
      <div className="hidden md:block w-full md:w-1/5 bg-[#e0e1dd] p-4"></div>
      <div className="w-full md:w-3/5 p-6 flex flex-col min-h-screen">
        <h1 className="text-2xl font-bold text-center mb-8">
          Check out my projects.
        </h1>
        <div className="flex flex-col items-center">
          {projects.map((project) => (
            <ProjectLink key={project.title} {...project} />
          ))}
        </div>
      </div>
      <div className="hidden md:block w-full md:w-1/5 bg-[#e0e1dd] p-4"></div>
    </div>
  );
}
