import React from "react";
import {
  FaFacebook,
  FaMap,
  FaPhone,
  FaRegEnvelope,
  FaDonate,
} from "react-icons/fa";
import "./css/Footer.css";
import { IconContext } from "react-icons";
function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="footer-icons">
            <IconContext.Provider value={{ className: "fb-icon" }}>
              {/* single icon*/}
              <a
                href="https://www.facebook.com/kvrp.kranj/"
                className="footer-icon-fb mx-2"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebook />
              </a>
              {/* end of single icon*/}
              {/* single icon*/}
              <a
                href="https://www.iro-dogs.org/en/home"
                target="_blank"
                className="footer-icon mx-2"
                rel="noopener noreferrer"
              >
                <img
                  src="img/iro_logo.png"
                  alt="iro"
                  className="footer-icon-img"
                />
              </a>
              {/* end of single icon*/}
              {/* single icon*/}
              <a
                href="https://www.zrps.org"
                target="_blank"
                className="footer-icon-img mx-2"
                rel="noopener noreferrer"
              >
                <img
                  src="img/logo_zrps.png"
                  alt="zrps"
                  className="footer-icon-img"
                />
              </a>
              {/* end of single icon*/}
            </IconContext.Provider>
          </div>
          {/* end of footer icons*/}

          <h4 className="text-capitalize w-75 mx-auto text-center">
            klub vodnikov reševalnih psov Kranj
          </h4>
          <div className="row">
            <IconContext.Provider value={{ className: "react-icons" }}>
              <div className="footer-contact">
                {/*single contact*/}
                <div className="text-capitalize mx-2 block">
                  <span className="footer-icon">
                    <FaMap />
                  </span>
                  Vidmarjeva 3, Kranj SLOVENIJA
                </div>
                {/* end of single contact*/}
                {/*single contact*/}
                <div className="text-capitalize mx-2 block">
                  <span className="footer-icon">
                    <FaPhone />
                  </span>
                  +386 41 855 924
                </div>
                {/* end of single contact*/}

                {/*single contact*/}
                <div className="text-capitalize mx-2">
                  <span className="footer-icon">
                    <FaRegEnvelope />
                  </span>
                  <a className="email" href="mailto:info.kvrp.kranj@gmail.com">
                    info.kvrp.kranj@gmail.com
                  </a>
                </div>
                {/* end of single contact*/}

                {/*single contact*/}
                <div className="text-capitalize mx-2">
                  <span className="footer-icon">
                  <FaDonate />
                  </span>
                  D.Š. 51123924
                </div>
                {/* end of single contact*/}

              </div>
                {/*single contact*/}
                <div className="text-capitalize footy py-2">
                  <span className="footer-icon">
                    <FaDonate />
                  </span>
                  SI56 0313 8100 0034 288
                </div>
                {/* end of single contact*/}
            </IconContext.Provider>
          </div>
        </div>
      </div>

      <a href="#top" id="back-to-top" className="p-1">
        <i className="fas fa-arrow-up primary-color fa-3x" />
      </a>
    </footer>
  );
}

export default Footer;
