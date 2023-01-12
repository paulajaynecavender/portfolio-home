import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import About from "./About";
import Work from "./Work";
import Contact from "./Contact";
const Home = () => {
  return (
    <>
      <BrowserRouter>
        <nav className="links">
          <Link to="/About" className="link">
            {" "}
            About Me
          </Link>
          <Link to="/Work" className="link">
            {" "}
            My Work
          </Link>
          <Link to="/Contact" className="link">
            {" "}
            Contact Me
          </Link>
        </nav>
        <Routes>
          <Route path="/About" element={<About />} />
          <Route path="/Work" element={<Work />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Home;
