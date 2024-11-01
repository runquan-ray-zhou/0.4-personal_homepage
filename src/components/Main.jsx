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

export default function Main() {
  return (
    <div className="hidden md:block mt-4">
      <div className="grid grid-cols-5 grid-rows-4 gap-4">
        <div className="col-start-2 col-end-5 row-start-1 row-end-4">
          <img
            src={bw}
            alt="Black and White Portrait"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
        <div className="flex items-center justify-center col-start-1 col-end-2 row-start-1 row-end-2 hover:scale-110 transform transition-transform hover:animate-shake cursor-pointer">
          <a
            href="https://runquan-ray-zhou.github.io/0.2-connectfour/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="w-24 h-24 rounded-lg hover:scale-125"
              src={Connect4}
              alt="connect4"
            />
          </a>
        </div>
        <div className="flex items-center justify-center col-start-1 col-end-2 row-start-2 row-end-3 hover:scale-110 transform transition-transform hover:animate-shake cursor-pointer">
          <a
            href="https://cowsaywhat.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="w-24 h-24 rounded-lg hover:scale-125"
              src={CowSay}
              alt=""
            />
          </a>
        </div>
        <div className="flex items-center justify-center col-start-1 col-end-2 row-start-3 row-end-4 hover:scale-110 transform transition-transform hover:animate-shake cursor-pointer">
          <a
            href="https://quiz-me-trivia-app.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="w-24 h-24 rounded-lg hover:scale-125"
              src={QuizMe}
              alt=""
            />
          </a>
        </div>
        <div className="flex items-center justify-center col-start-1 col-end-2 row-start-4 row-end-5 hover:scale-110 transform transition-transform hover:animate-shake cursor-pointer">
          <a
            href="https://pocket-dictionary-app.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="w-24 h-24 rounded-lg hover:scale-125"
              src={Dictionary}
              alt=""
            />
          </a>
        </div>
        <div className="flex items-center justify-center col-start-5 col-end-6 row-start-1 row-end-2 hover:scale-110 transform transition-transform hover:animate-shake cursor-pointer">
          <a
            href="https://therealyoutube.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="w-24 h-24 rounded-lg hover:scale-125"
              src={YoutubeClone}
              alt="YoutubeClone"
            />
          </a>
        </div>
        <div className="flex items-center justify-center col-start-5 col-end-6 row-start-2 row-end-3 hover:scale-110 transform transition-transform hover:animate-shake cursor-pointer">
          <a
            href="https://astc-web-companion-test.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="w-24 h-24 rounded-lg hover:scale-125"
              src={ASTC}
              alt="ASTC"
            />
          </a>
        </div>
        <div className="flex items-center justify-center col-start-5 col-end-6 row-start-3 row-end-4 hover:scale-110 transform transition-transform hover:animate-shake cursor-pointer">
          <a
            href="https://bankbankster.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="w-24 h-24 rounded-lg hover:scale-125"
              src={BankBankster}
              alt="BankBankster"
            />
          </a>
        </div>
        <div className="flex items-center justify-center col-start-5 col-end-6 row-start-4 row-end-5 hover:scale-110 transform transition-transform hover:animate-shake cursor-pointer">
          <a
            href="https://linknyc-finder.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="w-24 h-24 rounded-lg hover:scale-125"
              src={LinkNYC}
              alt="LinkNYC"
            />
          </a>
        </div>
        <div className="flex items-center justify-center col-start-3 col-end-4 row-start-4 row-end-5 hover:scale-110 transform transition-transform hover:animate-shake cursor-pointer">
          <a
            href="https://pat-io.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="w-24 h-24 rounded-lg hover:scale-125"
              src={Pati0}
              alt="Pat.io"
            />
          </a>
        </div>
        <div className="flex items-center justify-center col-start-4 col-end-5 row-start-4 row-end-5 hover:scale-110 transform transition-transform hover:animate-shake cursor-pointer">
          <a
            href="https://github.com/runquan-ray-zhou"
            target="_blank"
            rel="noopener noreferrer"
            className="text-8xl"
          >
            <i className="fab fa-github"></i>
          </a>
        </div>
        <div className="flex items-center justify-center col-start-2 col-end-3 row-start-4 row-end-5 hover:scale-110 transform transition-transform hover:animate-shake cursor-pointer">
          <a
            href="https://www.linkedin.com/in/runquanrayzhou/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-8xl text-blue-500"
          >
            <i className="fab fa-linkedin"></i>
          </a>
        </div>
      </div>
    </div>
  );
}
