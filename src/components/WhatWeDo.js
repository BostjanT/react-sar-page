import React from "react";
import "./css/WhatWeDo.css";

function WhatWeDo() {
  return (
    <section className="what" id="wedo">
      <div className="show-cards">
        {/* single introduction what we do*/}
        <div className="do-img">
          <div className="what-container">
            <img
              src="img/aboutImg/wedo-1.jpg"
              className="img-fluid what-img"
              alt="whatever"
            />
            <h3 className="text-uppercase text-center obedience">reševanje</h3>
            <div className="text-test">
              <div className="what-text">
                Naši reševalni psi delujejo na področjih iskanj v naravi, iskanj
                zasutih v ruševinah, iskanj zasutih v snegu ter iskanj z
                reševalnimi psi na vodi. Smo člani mednarodne organizacije
                vodnikov reševalnih psov IRO, ter slovenske Zveze Društev in
                Klubov Vodnikov Reševalni Psov.
              </div>
            </div>
          </div>
        </div>
        {/* end of single introduction what we do*/}
        {/* single introduction what we do*/}
        <div className="do-img ">
          <div className="what-container">
            <img
              src="img/aboutImg/wedo-1.jpg"
              className="img-fluid what-img"
              alt="whatever"
            />
            <h3 className="text-uppercase text-center obedience">šolanje</h3>
            <div className="text-test">
              <div className="what-text text-center text-wrap">
                Reševalne pse šolamo po principu pozitivne motivacije. S
                šolanjem pričnemo že z mladički. Program dela v tečaju obsega
                iskanje, premagovanje ovir in poslušnost. Vsem, ki jih zanima
                šolanje priporočamo, da si delo pridejo tudi v živo ogledat na
                naš poligon v Struževem.
              </div>
            </div>
          </div>
        </div>
        {/* end of single introduction what we do*/}
        {/* single introduction what we do*/}
        <div className="do-img">
          <div className="what-container">
            <img
              src="img/aboutImg/wedo-1.jpg"
              className="img-fluid what-img"
              alt="whatever"
            />
            <h3 className="text-uppercase text-center obedience">tekmovanje</h3>
            <div className="text-test">
              <div className="what-text">
                Naši člani se s svojimi reševalnimi psi udeležujejo mednarodnih
                ter svetovnih tekmovanj. Andrej Žunič s svojim reševalnim psom
                Haronom, je svetovni prvak IRO 2013 ter prejemnik bronastega
                znaka civilne zaščite za zasluge na področju zaščite in
                reševanja.
              </div>
            </div>
          </div>
        </div>
        {/* end of single introduction what we do*/}
      </div>
    </section>
  );
}

export default WhatWeDo;
