import { useState } from "react";

const MobileNavBar = () => {
  const [toggle, setToggle] = useState(false);
  const onClick = (e) => {
    setToggle(!toggle);
  };

  return (
    <>
      <div className="hamburger">
        <img
          src={toggle ? "./assets/cross.svg" : "./assets/menu.svg"}
          alt="menu icon"
          onClick={onClick}
        ></img>
        {toggle ? (
          <nav className="navbar-mobile">
            <ul className="nav-menu-mobile" onClick={onClick}>
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
