import React from "react";
import WhatWeDo from "../components/WhatWeDo";

const naslov = {
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center",
  fontSize: "1.6rem",
  fontWeight: "500",
  margin: "20px 0",
};

const what = {
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center",
};

const text = {
  width: "80%",
  margin: "30px 0",
  textAlign: "center",
};
const text1 = {
  width: "95%",
  margin: "30px 0",
};
function Aktivnosti() {
  return (
    <>
      <div style={naslov}>AKTIVNOSTI</div>
      <div style={what}>
        <p style={text}>
          Naši reševalni psi delujejo na področjih iskanj v naravi, iskanj
          zasutih v ruševinah, iskanj zasutih v snegu ter iskanj z reševalnimi
          psi na vodi. Smo člani mednarodne organizacije vodnikov reševalnih
          psov IRO, ter slovenske Zveze Društev in Klubov Vodnikov Reševalni
          Psov.
          <br /> <br />
          Reševalne pse šolamo po principu pozitivne motivacije. S šolanjem
          pričnemo že z mladički. Program dela v tečaju obsega iskanje,
          premagovanje ovir in poslušnost. Vsem, ki jih zanima šolanje
          priporočamo, da si delo pridejo tudi v živo ogledat na naš poligon v
          Struževem
          <br /> <br />
          Naši člani se s svojimi reševalnimi psi udeležujejo mednarodnih ter
          svetovnih tekmovanj. Andrej Žunič s svojim reševalnim psom Haronom, je
          svetovni prvak IRO 2013 ter prejemnik bronastega znaka civilne zaščite
          za zasluge na področju zaščite in reševanja.
        </p>
      </div>
      <div style={what}>
        <div style={text1}>
          <WhatWeDo />
        </div>
      </div>
    </>
  );
}

export default Aktivnosti;
