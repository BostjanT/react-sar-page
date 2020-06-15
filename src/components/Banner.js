import React from "react";
import "../style.css";

function Banner() {
 /* const bannerImg = () => {
     if (window.location.pathname == "/resevalni-psi") {
      return (
        <div className="banner-solanje d-flex text-center pl-3 pl-lg-5">
          <div>
            <h1 className="text-capitalize mb-5 text-slanted display-4 welcome3">
              reševalni psi
            </h1>
          </div>
        </div>
      );
    } else {
      return (
        <div className="banner" id="banner">
          <div>
            <h1 className="welcome-text">dobrodošli na spletni strani</h1>
            <h1 className="welcome-text-u">
              klub vodnikov reševalnih psov Kranj
            </h1>
          </div>
        </div>
      );
    }
  }; */
  return (
    <div className="banner" id="banner">
          <div>
            <h1 className="welcome-text">dobrodošli na spletni strani</h1>
            <h1 className="welcome-text-u">
              klub vodnikov reševalnih psov Kranj
            </h1>
          </div>
        </div>
  ) ;
  }

export default Banner;
