import MatrixBg from "./components/MatrixBg";
import "./App.css";
import Cover from "./components/Cover";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import About from "./components/About";
import Contact from "./components/Contact";

function App() {
  return (
    <div className=" min-h-scree">
      <MatrixBg />
      <div className="flex flex-col  justify-center items-center w-full">
        <Cover />
        <Projects />
        <Skills />
        <About />
        <Contact />
      </div>
    </div>
  );
}

export default App;
