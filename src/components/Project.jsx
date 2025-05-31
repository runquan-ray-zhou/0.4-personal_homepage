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
          <h3 className="text-2xl font-semibold">{title}</h3>
          <p>{summary}</p>
        </div>
        <div className="mt-4 flex gap-2">
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
          >
            Visit Project
          </a>
          {github && (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-gray-800 text-white rounded-md hover:bg-gray-900 transition-colors"
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
      href: "https://runquan-ray-zhou.github.io/0.2-connectfour/",
      title: "Connect4",
      src: Connect4,
      summary:
        "This project showcases an early boot camp exercise where I applied the logic of Tic-Tac-Toe to create a fun and interactive Connect 4 game. Enjoy!",
      github: "https://github.com/runquan-ray-zhou/0.2-connectfour",
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
      href: "https://quiz-me-trivia-app.netlify.app/",
      title: "QuizMe",
      src: QuizMe,
      summary:
        "QuizMe is a web application that provides users with an engaging and interactive platform to test their knowledge across various topics and difficulty levels. Using the Open Trivia Database (OpenTDB) API, the app generates trivia questions in different formats, including multiple-choice and true/false, ensuring a fun and challenging experience for users of all ages.",
      github: "https://github.com/runquan-ray-zhou/quiz-me",
    },
    {
      href: "https://pocket-dictionary-app.netlify.app/",
      title: "PokéVocab",
      src: Dictionary,
      summary:
        "PokéVocab is a user-friendly dictionary application designed to help users quickly find word definitions and build a personalized vocabulary bank. Using the Dictionary API, the app provides comprehensive definitions, and users can save their favorite words for future reference. Additionally, all displayed words are clickable, allowing users to seamlessly explore related definitions.",
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
      href: "https://linknyc-finder.netlify.app/",
      title: "LinkNYC",
      src: LinkNYC,
      summary:
        "LinkNYC Finder is a web application designed to help users locate the nearest LinkNYC terminals in New York City. These terminals offer free Wi-Fi access across the city. Users can simply input their location, and the app will display a list of the closest terminals where they can connect to the internet.",
      github: "https://github.com/runquan-ray-zhou/2.9-linknyc",
    },
  ];

  return (
    <div className="flex flex-col md:flex-row w-full mx-auto">
      <div className="hidden md:block w-full md:w-1/5 bg-[#e0e1dd] p-4"></div>
      <div className="w-full md:w-3/5 p-6 flex flex-col min-h-screen">
        <h1 className="text-4xl font-bold text-center mb-8">My Projects</h1>
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
