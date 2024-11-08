import "./App.css";
import Nav from "./components/Nav";
import Info from "./components/Info";
import Main from "./components/Main";

function App() {
  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-100">
      <header className="w-full">
        <Nav />
      </header>
      <main className="flex flex-col md:flex-row items-center w-full md:px-8 lg:px-8">
        <Info />
        <Main />
      </main>
    </div>
  );
}

export default App;
