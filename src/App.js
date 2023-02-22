import "./styles.css";
import "./navStyle.css";
import Header from "./Components/Header";
import AboutMe from "./Components/AboutMe";
import Work from "./Components/Work";
import Contact from "./Components/Contact";
import Skills from "./Components/Skills";

function App() {
  return (
    <>
      <header>
        <Header />
      </header>
      <div className="main-body">
        <AboutMe />

        <Skills />

        <Work />

        <Contact />
      </div>
    </>
  );
}

export default App;
