export default function Home() {
  return (
    <div className="flex flex-col md:flex-row w-full mx-auto">
      <div className="hidden md:block w-full md:w-1/5 bg-[#e0e1dd] p-4"></div>
      <div className="w-full md:w-3/5 p-6 flex flex-col min-h-screen">
        <div className="flex-grow">
          <div>
            <p className="font-bold">
              Hi and welcome to my personal website. My name is Runquan Zhou. I
              also go by
              <span className="text-[#7209b7]"> Ray.</span> I am a Full Stack
              Software Engineer and my motto is:
            </p>
            <br />
            <p className="font-bold text-center">
              "Driven by Challenges, Fueled by Creativity".
            </p>
            <br />
            <p className="font-bold">
              And on this website you will find some of my web app projects and
              a blog. Below are my contacts.
            </p>
            <br />
          </div>
        </div>
        <div className="flex justify-center space-x-6 mb-16">
          <a
            href="https://drive.google.com/file/d/1PU9O1aSlj2VsTaWBED22dhGutsqY4YopTi5Uoedt4-s/view"
            className="text-3xl hover:text-purple-600 transition"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-solid fa-file"></i>
          </a>
          <a
            href="https://docs.google.com/document/d/1PU9O1aSlj2VsTaWBED22dhGutsqY4YopTi5Uoedt4-s/export?format=pdf"
            download
            className="text-3xl hover:text-purple-600 transition"
          >
            <i className="fa-solid fa-file-arrow-down"></i>
          </a>
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
      </div>
      <div className="hidden md:block w-full md:w-1/5 bg-[#e0e1dd] p-4"></div>
    </div>
  );
}
