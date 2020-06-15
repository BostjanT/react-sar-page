import React from "react";
import { Link } from "react-router-dom";
import Banner from "./Banner";

function Header() {
  

  return (
    <header id="top">
      {/* NAVBAR */}
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="header">
          <div>
            <Link to="/">
              <img src={"../kvrpk_logo.png"} className="logo" alt="whatever" />
            </Link>
          </div>
          <div>
            <Link to="/">Domov</Link>
            <Link to="/o-nas">Klub</Link>
            <Link to="/resevalni-psi">Reševalni pes</Link>
            <Link to="/aktivnosti">Aktivnosti</Link>
            <Link to="/novice">Novice</Link>
            <Link to="/galerija">Galerija</Link>
          </div>
        </div>

        <div className="navbar-icons d-none d-lg-flex"></div>
      </nav>
      {/* END OF NAVBAR */}
      {/* {bannerImg()} */}
      <Banner />
    </header>
  );
}

export default Header;
