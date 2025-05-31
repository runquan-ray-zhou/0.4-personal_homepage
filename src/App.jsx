import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Nav from "./components/Nav";
import Home from "./components/Home";
import Project from "./components/Project";
import Blog from "./components/Blog";

function App() {
  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-100">
      <Router>
        <header className="w-full">
          <Nav />
        </header>
        <main className="flex flex-col md:flex-row items-center w-full">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Project />} />
            <Route path="/blog" element={<Blog />} />
          </Routes>
        </main>
      </Router>
    </div>
  );
}

export default App;
