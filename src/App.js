import "./styles.css";
import Header from "./Components/Header";
import AboutMe from "./Components/AboutMe";
import Work from "./Components/Work";
import Contact from "./Components/Contact";

function App() {
  return (
    <>
      <header>
        <Header />
      </header>
      <div className="main-body">
        <AboutMe />
        <div className="line-border"></div>
        <Work />
        <div className="line-border"></div>
        <Contact />
      </div>
    </>
  );
}

export default App;
