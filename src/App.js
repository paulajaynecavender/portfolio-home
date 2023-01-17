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
      <AboutMe />
      <Work />
      <Contact />
    </>
  );
}

export default App;
