import { useState } from "react";

const MobileNavBar = () => {
  const [toggle, setToggle] = useState(true);
  const onClick = (e) => {
    setToggle(!toggle);
  };
  return (
    <>
      <div className="hamburger">
        <img src={"./assets/menu.svg"} alt="menu icon" onClick={onClick}></img>
        {toggle ? (
          <nav className="navbar-mobile">
            <ul className="nav-menu-mobile">
              <li className="nav-item-mobile">
                <a href="#about" className="nav-link-mobile">
                  ABOUT ME
                </a>
              </li>

              <li className="nav-item-mobile">
                <a href="#mywork" className="nav-link-mobile">
                  MY WORK
                </a>
              </li>

              <li className="nav-item-mobile">
                <a href="#contact" className="nav-link-mobile">
                  CONTACT
                </a>
              </li>
            </ul>
          </nav>
        ) : (
          <></>
        )}
      </div>
    </>
  );
};

export default MobileNavBar;
