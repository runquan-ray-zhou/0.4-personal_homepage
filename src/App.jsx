import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Nav from "./components/Nav";
import Info from "./components/Info";
import Main from "./components/Main";
import Blog from "./components/Blog";

function App() {
  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-100">
      <Router>
        <header className="w-full">
          <Nav />
        </header>
        <main className="flex flex-col md:flex-row items-center w-full md:px-8 lg:px-8">
          <Routes>
            <Route path="/" element={<Info />} />
            <Route path="/home" element={<Main />} />
            <Route path="/blog" element={<Blog />} />
          </Routes>
        </main>
      </Router>
    </div>
  );
}

export default App;
