import MobileNavBar from "./MobileNavBar";
import NavBar from "./NavBar";

const Header = () => {
  return (
    <>
      <div className="header-logo">
        <h1>paula cavender</h1>
        <h2> - FRONT END WEB DEVELOPER - </h2>
        {window.innerWidth < 767 ? <MobileNavBar /> : <NavBar />}
      </div>
    </>
  );
};

export default Header;
