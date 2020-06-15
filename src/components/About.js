import React from "react";

function About() {
  const containerStyle = {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  };

  const aboutStyle = {
    display: "flex",
    margin: "30px",
    flexDirection: "column",
    width: "30%",
    fontSize: "1rem",
  };

  const aboutImages = {
    display: "inline-block",
    flexDirection: "row",
    padding: "20px",
    width: "35%",
  };

  const singleImage = {
    height: "180px",
    width: "auto",
    margin: "20px",
  };

  const text = {
    marginLeft: "20px",
  };

  return (
    <div style={containerStyle}>
      <div style={aboutStyle}>
        <h3 style={text}>O NAS</h3>
        <p>
          Klub vodnikov reševalnih psov (KVRP) Kranj je bil ustanovljen
          05.04.1994 na pobudo vodnikov reševalnih psov, ki so sodelovali že
          pred ustanovitvijo v različnih reševalnih organizacijah. Danes šteje
          klub blizu 30 članov. Ukvarja se s šolanjem vodnikov reševalnih psov.
          <br />
          V klubu so začetniki, pripravniki kot tudi usposobljeni vodniki.
          Predsednik KVRP Kranj je David Pogačnik. V svoji sestavi imamo
          naslednje enote: 2 regijski enoti za območje Gorenjske in enoto 10.
          članov MOK (Mestne občine Kranj).
          <br />
          Smo člani mednarodne organizacije vodnikov reševalnih psov IRO, ter
          slovenske Zveze Društev in Klubov Vodnikov Reševalni Psov. Delujemo pa
          v okviru Uprave Republike Slovenije za Zaščito in Reševanje ter Občine
          Kranj.
        </p>
      </div>

      <div style={aboutImages}>
        <img
          style={singleImage}
          src={"../img/aboutImg/about-1.jpg"}
          alt="sar-us"
        />
        <img
          style={singleImage}
          src={"../img/aboutImg/about-2.jpg"}
          alt="sar-us"
        />
        <img
          style={singleImage}
          src={"../img/aboutImg/about-5.jpg"}
          alt="sar-us"
        />
        <img
          style={singleImage}
          src={"../img/aboutImg/about-6.jpg"}
          alt="sar-us"
        />
      </div>
    </div>
  );
}

export default About;
