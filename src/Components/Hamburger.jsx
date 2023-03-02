import { useState } from "react";
import NavBar from "./NavBar";

const Hamburger = ({ width }) => {
  const [toggleMenu, setToggleMenu] = useState(false);

  const onClick = (e) => {
    setToggleMenu(!toggleMenu);
  };

  return (
    <>
      <div className="hamburger">
        <img
          src={toggleMenu ? "./assets/cross.svg" : "./assets/menu.svg"}
          alt="menu icon"
          onClick={onClick}
        ></img>
        <div className="menu-container">
          {toggleMenu && <NavBar setToggleMenu={setToggleMenu} width={width} />}
        </div>
      </div>
    </>
  );
};

export default Hamburger;
