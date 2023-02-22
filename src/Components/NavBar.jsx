const NavBar = () => {
  return (
    <nav className="navbar">
      <ul className="nav-menu">
        <li className="nav-item">
          <a href="#about" className="nav-link">
            ABOUT ME
          </a>
        </li>

        <li className="nav-item">
          <a href="#skills" className="nav-link">
            SKILLS
          </a>
        </li>

        <li className="nav-item">
          <a href="#mywork" className="nav-link">
            MY WORK
          </a>
        </li>

        <li className="nav-item">
          <a href="#contact" className="nav-link">
            CONTACT
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
