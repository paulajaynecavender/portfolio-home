import { useState } from "react";

const NavBar = ({ width, setToggleMenu }) => {
  const [hide, setHidden] = useState("false");

  const toggleClass = () => {
    setHidden(!hide);
    setToggleMenu(false);
  };

  return (
    <nav className={hide ? "navbar" : "hidden"}>
      <ul className="nav-menu">
        <li className="nav-item">
          <a
            href="#about"
            className="nav-link"
            onClick={width < 768 ? toggleClass : undefined}
          >
            ABOUT ME
          </a>
        </li>

        <li className="nav-item">
          <a
            href="#skills"
            className="nav-link"
            onClick={width < 768 ? toggleClass : undefined}
          >
            SKILLS
          </a>
        </li>

        <li className="nav-item">
          <a
            href="#mywork"
            className="nav-link"
            onClick={width < 768 ? toggleClass : undefined}
          >
            MY WORK
          </a>
        </li>

        <li className="nav-item">
          <a
            href="#contact"
            className="nav-link"
            onClick={width < 768 ? toggleClass : undefined}
          >
            CONTACT
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
