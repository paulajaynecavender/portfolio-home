import Hamburger from "./Hamburger";
import NavBar from "./NavBar";
import { useState, useEffect } from "react";

const Header = () => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    window.addEventListener("resize", () => setWidth(window.innerWidth), []);
  });

  return (
    <>
      <div className="header-logo">
        <h1>paula cavender</h1>
        <h2> - FRONT END WEB DEVELOPER - </h2>
        {width < 767 ? <Hamburger width={width} /> : <NavBar width={width} />}
      </div>
    </>
  );
};

export default Header;
